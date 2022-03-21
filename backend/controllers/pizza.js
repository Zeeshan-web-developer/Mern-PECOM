const PizzaModel = require('../Models/pizza');

// @desc   Get all pizzas
// @route  GET /api/v1/pizzas
// @access Public
exports.getAllPizzas = async(req, res, next) => {
    const Pizzas = await PizzaModel.find();
    res.status(200).json({
        message: 'Pizzas fetched successfully',
        Pizzas: Pizzas
    });
};

