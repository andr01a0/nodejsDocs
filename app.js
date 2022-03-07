const express = require('express')
const path = require('path')
const mainRouter = require('./routes/main.router')
const renderEngine = require('./render.engine')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.engine('render', renderEngine)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'render')

app.use('/', mainRouter)

const PORT = 3000;

app.listen(PORT, () => console.log('Server is running on', PORT))
