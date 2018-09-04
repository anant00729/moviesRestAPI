const express = require('express')
const mongoose = require('mongoose')
const app = express()

const moviesRoute = require('./api/routes/movies')

const bodyParser = require('body-parser')

mongoose.connect('mongodb://anant007:anant007@ds243812.mlab.com:43812/movies')
.then(res=> console.log('connected to mongoDB'))
.catch(err => console.log('err.message :', err.message))


app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())


app.use('/movies', moviesRoute)

// USE
// GET  
// POST 
// PATCH
// DELETE


app.listen(3000, ()=>{
    console.log('the app is running on prost number 3000');
})


