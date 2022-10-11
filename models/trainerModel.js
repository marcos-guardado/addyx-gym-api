const mongoose = require("mongoose");

const trainerModel = new mongoose.Schema({
  firstName: {
    required: true,
    type: String,
  },
  lastName: {
    required: true,
    type: String,
  },
  photo: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("TrainerModel", trainerModel);
