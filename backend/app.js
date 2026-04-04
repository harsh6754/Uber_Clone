const express = require('express');
const app = express();
const dotenv =  require('dotenv');
const cors = require('cors');


//config dotenv with .env file
dotenv.config();

//middlewares
app.use(cors());

app.get('/',(req,res) =>{
    res.send("Hello Harsh Agrawal Welcome to the world of Backend Developer");
});

module.exports = app;