const PizzaModel = require('../Models/pizza')

// @desc   Get all pizzas
// @route  GET /api/v1/pizzas
// @access Public
exports.getAllPizzas = async (req, res, next) => {
  try {
    // Filtering
    const queryObj = { ...req.query }
    const excludedFields = ['page', 'sort', 'limit', 'fields']
    excludedFields.forEach((el) => delete queryObj[el])

    //   Advanced filtering
    let queryStr = JSON.stringify(queryObj)
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`)

    // Returning the data
    const pizzas = await PizzaModel.find(JSON.parse(queryStr))
    return res.status(200).json({
      success: true,
      count: pizzas.length,
      data: pizzas,
    })
  } catch (err) {
    res.status(500).json({
      error: err,
    })
  }
}
