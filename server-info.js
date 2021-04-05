// require('dotenv').config()

const express = require('express')
const app = express()
// const mongoose = require('mongoose');

const connexionUrl= 'mongodb://admin:VXQcdh07634@node61049-env-8030950.jcloud-ver-jpe.ik-server.com:27017/admin';

var MongoClient = require('mongodb').MongoClient;

// Connect to the db 
MongoClient.connect(connexionUrl, { useUnifiedTopology: true, useNewUrlParser: true }, function(err, db) { 
if(!err) { 
   console.log("You are connected!"); 
   }; 
      db.close(); 
});

app.use(express.json())

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)


app.listen(3000, () => console.log('Server Started'))

