require('dotenv').config()
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');
// MIDDLEWARE - Servir contenido estatico
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home',{
        nombre: 'Fernando Herrera',
        titulo: 'Curso de Node'
    });
})

app.get('/generic', (req, res) => {
    res.render('generic',{
        nombre: 'Fernando Herrera',
        titulo: 'Curso de Node'
    });
})

app.get('/elements', (req, res) => {
    res.render('elements',{
        nombre: 'Fernando Herrera',
        titulo: 'Curso de Node'
    });
})

app.get('/adios', (req, res) => {
    res.send('Bye World')
});

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port)
console.log("escuchando puerto " + port);