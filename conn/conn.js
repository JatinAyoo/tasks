const mongoose = require("mongoose");
// require("dotenv").config();
const dotenv = require('dotenv');
dotenv.config();
async function conn(req, res) {
  try {
    await mongoose
      .connect(
        process.env.MONGODB_URL
      )
      .then(() => {
        console.log("Connected");
      });
  } catch (error) {
    console.log(error);
  }
}
conn();
