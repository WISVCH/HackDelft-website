const express = require('express')
const app = express()
const mongoose = require('mongoose')

//mongoose.connect('mongodb://mongo:27017')

app.set('view engine', 'ejs')
app.set('views', './src/views/')

app.use(express.static('./build'))

app.get('/', (req, res) => {
	res.render('index', { title: "HackDelft" });
})

app.listen(3000, () => {
	console.log('Go to localhost:3000')
})
