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
    res.render('Home')
})

app.get('/pokemon', (req, res) => {
    res.render('Index', {pokemons: pokemon})
})

app.get('/pokemon/:id', (req, res) => {
    res.render('Show', {pokemon: pokemon[req.params.id]})
})


//Server Status Check
app.listen(port, () => {
    console.log('server is running')
})
