const mongoose = require("mongoose");

const dbURI = 'mongodb+srv://SrinidhiSP:Srinidhi2000@cluster0.uecnp.mongodb.net/BankTransaction?retryWrites=true&w=majority';
const options = {
  reconnectTries: Number.MAX_VALUE,
  poolSize: 10
};

mongoose.connect(dbURI, options).then(
  () => {
    console.log("Database connection established!");
  },
  err => {
    console.log("Error connecting Database instance due to: ", err);
  }
);

require('./models/userdata');