const mongoose = require('mongoose');


const CONNECTDB = (url) => {
  mongoose.connect(url).then(console.log('Database is running')).catch((err)=>{
      console.log(err);
  })

}

module.exports = CONNECTDB;