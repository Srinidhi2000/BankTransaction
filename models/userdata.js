const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userName: {
    type: String,
    required: true
  },
  accNo: {
    type: String,
    required:true
  },
  adharNo:{
    type:String,
    required:true
  },
  emailID:{
    type:String,
    required:false
  },
  phoneNo:{
    type:String,
    required:true,
    max:10
  },
  createdOn:{
    type:Date,
   
  },
  balance:{
    type:Number,
    required:true
  },
  address:{
    type:String,
    required:false
  },
  transactions:[{ 
    toUser:String,
    toAccNo:String,
    amount:Number,
    transferType:String,
    date:Date
  }]

});

module.exports = mongoose.model("UserTransaction", UserSchema);