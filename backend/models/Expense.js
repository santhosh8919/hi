// const mongoose = require("mongoose");

// const expenseSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//   category: { type: String, required: true },
//   amount: { type: Number, required: true },
//   date: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model("Expense", expenseSchema);
import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  category: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

const Expense = mongoose.model("Expense", expenseSchema);
export default Expense;
