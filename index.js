const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./config/db')
const dotenv = require('dotenv')
const { getAllPizzas } = require('./controllers/pizza')
const pizzasRouter = require('./routes/pizzas')
const usersRouter = require('./routes/users')

db()
dotenv.config()
const Port = process.env.PORT || 3000
// Middlewares
app.use(express.json())
app.use(cors())
app.use('/api/v1', pizzasRouter)
app.use('/api/v1/auth', usersRouter)
app.listen(Port, () => {
  console.log('Server started on port ' + Port)
})
