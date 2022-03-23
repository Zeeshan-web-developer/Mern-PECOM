const express = require('express');
const router = express.Router();
const { getAllPizzas } = require('../controllers/pizza');

router.route("/getAllPizzas").get(getAllPizzas);
module.exports = router;