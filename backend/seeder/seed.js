const fs = require('fs')
const path = require('path')

// read file
const pizzas = JSON.parse(
  fs.readFileSync(path.join(__dirname, '/pizzas.json'), 'utf-8')
)
