const express = require('express');
const app = express();
const dotenv = require('dotenv');
const CONNECTDB = require('./Database/connect');
const RegRoute = require('./routes/Register');
const PORT = process.env.PORT || 5000;

dotenv.config();
//Database connection
CONNECTDB(process.env.MONGO_URL);



//middlewares
app.use(express.json());
app.use('/api/course',RegRoute);

//listener
app.listen(PORT,()=>{
    console.log('server is listening');
});


