const express = require('express');
const app = express();
const dotenv =  require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectToDb = require('./DB/db');
const userRoutes = require('./routes/user.routes');


//config dotenv with .env file
dotenv.config();

//connect to database
connectToDb();

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.get('/',(req,res) =>{
    res.send("Hello Harsh Agrawal Welcome to the world of Backend Developer");
});

//routes
app.use('/api/users',userRoutes);

module.exports = app; 