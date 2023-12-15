const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  FirstName: {
    type: String,
    min: 5,
    require: true,
  },
  LastName: {
    type: String,
    min: 5,
    require: true,
  },
  Email: {
    type: String,
    min: 5,
    // require: true,
  },
  Mobile: {
    type: Number,
    // require: true,
  },
  Adress1: {
    type: String,
    // require:true

  },
  Adress2: {
    type: String,
    // require:true

  },
  country:{
    type : String
  },
  State:{
    type : String
  }
});

module.exports = mongoose.model("User" , UserSchema)
