require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes");
const app = express();
const cors = require("cors");
const port = 2000;
const mongoString = process.env.DATABASE_URL;
const database = mongoose.connection;

mongoose.connect(mongoString);

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use("/api", routes);
app.listen(port, () => {
  console.log(`Server running on port  ${port}`);
});
