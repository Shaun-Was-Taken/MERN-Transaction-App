const express = require("express");
const router = express.Router();

const {
  createTransaction,
  getTransaction,
} = require("../controllers/moneyController");

//GET all money
router.get("/", getTransaction);

//POST add money
router.post("/", createTransaction);

module.exports = router;
