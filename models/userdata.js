const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  taskName: {
    type: String,
    required: true
  },
  createdOn: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("UserTransaction", UserSchema);