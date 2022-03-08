const express = require('express')
const path = require('path')
const mainRouter = require('./routes/main.router')
const renderEngine = require('./render.engine')

const app = express()

app.use('/public', express.static(path.join(__dirname, 'public')))

// use custom template engine
app.engine('render', renderEngine)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'render')

app.use('/', mainRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log('Server is running on', PORT))
