const moneyModel = require("../models/moneyModel");

//GET all money
const getTransaction = async (req, res) => {
  //find all the transactions in the data base and sort them from the most recent
  const transaction = await moneyModel.find({}).sort({ createdAt: -1 });
  //Send the transaction document
  res.status(200).json(transaction);
};

//POST make new money
const createTransaction = async (req, res) => {
  //get the date from request body
  const { money, description, sign, date } = req.body;
  //try to create a new workout data in mongoDB
  try {
    const transaction = await moneyModel.create({
      money,
      description,
      sign,
      date,
    });
    res.status(200).json(transaction);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createTransaction, getTransaction };
