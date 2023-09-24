//Setting Up Server
const express = require('express')
const pokemon = require('./models/pokemon')
const app = express()
const port = 3000

//Setting Default Engine and Extension
app.set('view engine', 'ejs');

//Middleware
app.use((req, res, next) => {
    console.log('running for all routes')
    next()
})

app.use(express.urlencoded({extended: false}))

//Routes
app.get('/', (req, res) => {
    res.render('Home')
})

app.get('/pokemon', (req, res) => {
    res.render('Index', {pokemons: pokemon})
})

app.get('/pokemon/new', (req, res) => {
    res.render('New')
})

app.post('/pokemon', (req, res) => {
    console.log(req.body)
    pokemon.push(req.body)
    res.redirect('/pokemon')
})

app.get('/pokemon/:index', (req, res) => {
    res.render('Show', {pokemon: pokemon[req.params.index]})
})


//Server Status Check
app.listen(port, () => {
    console.log('server is running')
})
