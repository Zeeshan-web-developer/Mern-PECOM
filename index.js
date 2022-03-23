const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./config/db')
const { getAllPizzas } = require('./controllers/pizza')
const pizzasRouter = require('./routes/pizzas')
const usersRouter = require('./routes/users')

db()
// Middlewares
app.use(express.json())
app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello World')
})
app.use('/api/v1', pizzasRouter)
app.use('/api/v1/auth', usersRouter)
app.listen(9000, () => {
  console.log('Server started on port 9000')
})
