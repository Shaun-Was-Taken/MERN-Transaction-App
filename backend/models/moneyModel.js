const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//transaction model/Schema
const moneySchema = new Schema(
  {
    money: {
      type: Number,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    sign: {
      type: Boolean,
      required: true,
    },

    date: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Money", moneySchema);
