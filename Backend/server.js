const express = require('express')
const cors = require('cors')

require('dotenv').config()

const mongoConfig = require('./config')

const authRoutes = require('./routes/auth-route')
const userRoutes = require('./routes/user-route')
const booksRoutes = require('./routes/books-route')

const { authorize } = require('./middleware/authMiddleware')

const app = express()

const PORT = 8080

app.use(cors())
app.use(express.json())

app.use('/auth', authRoutes)
app.use('/users', authorize, userRoutes)
app.use('/books', authorize, booksRoutes)


app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
    mongoConfig()
})
