const express = require('express')
const app = express()
const mongoose = require('mongoose')

//mongoose.connect('mongodb://mongo:27017')

app.set('view engine', 'ejs')
app.set('views', './src/views/')

app.use(express.static('./build'))

app.get('/', (req, res) => {
	res.render('index')
})

app.get('/case', (req, res) => {
	res.redirect('http://www.pollandmatch.com/chooser?pollownerid=5790946717335552&pollid=5707702298738688')
})

app.get('*', (req, res) => {
	res.render('404')
})

app.listen(3000, () => {
	console.log('Go to localhost:3000')
})
