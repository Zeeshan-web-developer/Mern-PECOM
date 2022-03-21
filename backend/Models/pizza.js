const mongoose = require('mongoose');
const PizzaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    varients: {
        type: Array,
        required: true
    },
    prices: {
        type: Array,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    
    image: {
        type: String,
        required: true
    },
    
    description: {
        type: String,
        required: true
    },
});
const PizzaModel = mongoose.model('Pizzas', PizzaSchema); // collection name is 'Pizzas'
module.exports = PizzaModel;