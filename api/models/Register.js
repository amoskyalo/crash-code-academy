const mongoose = require('mongoose');


const RegisterSchema = new mongoose.Schema({
    fullname: { type: String, required: true},
    email: { type: String, required: true},
    course: { type: String, required: true },
    number: { type: Number, required: true},
   
  },
  { timestamps: true }
);

module.exports = mongoose.model("Register", RegisterSchema);