const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    required: true,
    type: String,
  },
  lastName: {
    required: true,
    type: String,
  },
  suscriptionType: {
    required: true,
    type: String,
  },
  start_date: {
    required: true,
    type: String,
  },
  end_date: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("UserSchema", userSchema);
