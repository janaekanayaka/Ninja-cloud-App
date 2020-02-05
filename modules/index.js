const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
//set up express app
const app = express();

mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use('/api',require('../routes/api'));
/*
app.get('/api',function(req,res){
    console.log('GET request');
    res.send({ name:'Janaka'});
});*/

app.use(function(err,req,res,next)
{
    //console.log(err);

    res.status(422)
    res.send({error: err.message});
});

//listen for rquest
app.listen(process.env.port||4000,function(){

    console.log("now listening for request");
});