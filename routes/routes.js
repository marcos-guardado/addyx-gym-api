const express = require("express");
const router = express.Router();
const UserSchema = require("../models/userModel");
const PlanModel = require("../models/planModel");
const TrainerModel = require("../models/trainerModel");
const planModel = require("../models/planModel");
const generateRandomPhoto = require("../utils/imagesAvatar");

//Users

router.post("/saveUser", async (req, res) => {
  const user = req.body;
  const data = new UserSchema(user);
  try {
    const dataToSave = await data.save();
    res.status(200).send("US");
  } catch (error) {
    res.status(400).send("UNS");
  }
});

router.get("/getAllUsers", async (req, res) => {
  try {
    const users = await UserSchema.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.patch("/updateUser/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedUser = req.body;
    const options = { new: true };

    const result = await UserSchema.findByIdAndUpdate(id, updatedUser, options);
    res.status(200).send("UP");
  } catch (error) {
    res.status(400).send("UNU");
  }
});

router.delete("/deleteUser/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await UserSchema.findByIdAndDelete(id);
    res.status(200).send("UD");
  } catch (error) {
    res.status(400).status("UND");
  }
});

//Membership Types

router.post("/savePlan", async (req, res) => {
  const plan = req.body;
  const data = new PlanModel(plan);
  try {
    const dataToSave = await data.save();
    res.status(200).send("PS");
  } catch (error) {
    res.status(400).send("PNS");
  }
});

router.get("/getAllPlans", async (req, res) => {
  try {
    const data = await PlanModel.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.patch("/updatePlan/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedPlan = req.body;
    const options = { new: true };

    const result = await PlanModel.findByIdAndUpdate(id, updatedPlan, options);
    res.status(200).send("PU");
  } catch (error) {
    res.status(400).send("PNU");
  }
});

router.delete("/deletePlan/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const users = await UserSchema.find();
    const found = users.some(({ suscriptionType }) => suscriptionType === id);

    if (found) throw new Error("PIU");
    await planModel.findByIdAndDelete(id);
    res.status(200).send("PD");
  } catch (error) {
    res.status(400).send("PIU");
  }
});

//Trainers

router.post("/saveTrainer", async (req, res) => {
  const trainer = req.body;
  const data = new TrainerModel(trainer);
  data.photo = generateRandomPhoto();
  try {
    const dataToSave = await data.save();
    res.status(200).send("TS");
  } catch (error) {
    res.status(400).send("TNS");
  }
});

router.get("/getAllTrainers", async (req, res) => {
  try {
    const data = await TrainerModel.find();
    res.json(data);
  } catch (error) {
    res.status(500).send("Error");
  }
});

router.patch("/updateTrainer/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedTrainer = req.body;
    const options = { new: true };

    const result = await TrainerModel.findByIdAndUpdate(
      id,
      updatedTrainer,
      options
    );
    res.status(200).send("TU");
  } catch (error) {
    res.status(400).send("TNU");
  }
});

router.delete("/deleteTrainer/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await TrainerModel.findByIdAndDelete(id);
    res.status(200).send("TD");
  } catch (error) {
    res.status(400).send("TND");
  }
});

module.exports = router;
