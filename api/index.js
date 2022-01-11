const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const CONNECTDB = require('./Database/connect');
const RegRoute = require('./routes/Register');
const PORT = process.env.PORT || 5000;

dotenv.config();
//Database connection
CONNECTDB(process.env.MONGO_URL);

//client
app.use(express.static(path.join(__dirname, "/client/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});


//middlewares
app.use(cors());
app.use(express.json());
app.use('/api/course',RegRoute);

//listener
app.listen(PORT,()=>{
    console.log('server is listening');
});


