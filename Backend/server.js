const express = require('express')
const cors = require('cors')

require('dotenv').config()

const mongoConfig = require('./config')

const authRoutes = require('./routes/auth-routes')
const userRoutes = require('./routes/user-routes')
// const todosRoutes = require('./routes/todosRoutes')

const { authorize } = require('./middleware/userMiddleware')

const app = express()

const PORT = 8080

app.use(cors())
app.use(express.json())

app.use('/auth', authRoutes)
app.use('/users', authorize, userRoutes)
// app.use('/todos', authorize, todosRoutes)


app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
    mongoConfig()
})
