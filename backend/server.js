const express = require("express");
const moneyRoutes = require("./routes/money");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();

//middleware
app.use(express.json());

//connect to database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen to request after connect to dabasa succesfully
    app.use("/api/money", moneyRoutes);
  })
  .catch((error) => {
    //log the error
    console.log(error);
  });

//listen for request
app.listen(process.env.PORT, () => {
  console.log("listening in port", process.env.PORT);
});

//TODO:
//GET /money : Get all the transactions
//POST /money :  Create a new transactioin and add it to the list
