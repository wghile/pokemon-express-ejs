//Setting Up Server
const express = require('express')
const pokemon = require('./models/pokemon')
const app = express()
const port = 3000

//Setting Default Engine and Extension
const jsxEngine = require('jsx-view-engine')
app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine());

//Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon', (req, res) => {
    res.render('Index')
})

app.listen(port, () => {
    console.log('server is running')
})
