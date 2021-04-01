require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose');

const connexionUrl= 'mongodb+srv://user007:vHI7BVD6ck1rrON0@cluster0.m5sux.mongodb.net/users-db?retryWrites=true&w=majority';

mongoose.connect(connexionUrl, { useNewUrlParser: true,useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Connected to DB'))



app.use(express.json())

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)


app.listen(3000, () => console.log('Server Started'))

