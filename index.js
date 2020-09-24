const bodyParser = require('body-parser');
const express = require('express');
const Mongoose = require('mongoose');
const product = require('./My-Api-/route/product')

const app = express();
//create the port
const port = app.get("port")|| 4000;

//listen to port
app.listen(port,()=>
console.log(`servser running on port${4000}`)); 


//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//connect to the database;
Mongoose.connect('mongodb://localhost/scovia',{useUnifiedTopology: true,useNewUrlParser: true});

//router
app.use('/product',product)
//catching error

//create the error function

//