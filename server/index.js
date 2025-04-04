/////////////////////////////////////////////////////Basic Server setup////////////////////////////////////////////////////////////


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('api/auth',require('./routes/auth'));
app.use('api/payment',require('./routes/payment'));


//MongoDB connection and server port setup
mongoose.connect(process.env.MONGO_URI).then(()=> { // connects this app to mohith's DB and the .env.Mongo_URI grabs url of mongodb from .env file  (.then is used here to tell first mongodb connection should suceed then only it runs next code inside then)
    console.log('MongoDB connected !! Happy Coding </> ');
    app.listen(5000, () => console.log('Server started on port 5000')); // starts my 
})
.catch(err => {
    console.error('MongoDB connection error:',err);
});