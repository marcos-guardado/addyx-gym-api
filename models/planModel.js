const mongoose = require("mongoose");

const planModel = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  price: {
    required: true,
    type: Number,
  },
});

module.exports = mongoose.model("PlanModel", planModel);
