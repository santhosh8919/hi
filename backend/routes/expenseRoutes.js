// // // routes/expenseRoutes.js
// // import express from "express";
// // const router = express.Router();

// // router.get("/", (req, res) => {
// //   res.send("Expense route is working!");
// // });

// // export default router;
// const express = require("express");
// const router = express.Router();
// const Expense = require("../models/Expense");
// const authMiddleware = require("../middleware/authMiddleware");

// // @desc    Add a new expense
// // @route   POST /api/expenses
// // @access  Private
// router.post("/", authMiddleware, async (req, res) => {
//   try {
//     const { category, amount } = req.body;
//     const expense = new Expense({
//       userId: req.user.id,
//       category,
//       amount,
//     });
//     await expense.save();
//     res.status(201).json(expense);
//   } catch (err) {
//     res.status(500).json({ message: "Failed to create expense" });
//   }
// });

// // @desc    Get all expenses for a user
// // @route   GET /api/expenses
// // @access  Private
// router.get("/", authMiddleware, async (req, res) => {
//   try {
//     const expenses = await Expense.find({ userId: req.user.id });
//     res.json(expenses);
//   } catch (err) {
//     res.status(500).json({ message: "Failed to fetch expenses" });
//   }
// });

// // @desc    Update an expense
// router.put("/:id", authMiddleware, async (req, res) => {
//   try {
//     const { category, amount } = req.body;
//     const updatedExpense = await Expense.findOneAndUpdate(
//       { _id: req.params.id, userId: req.user.id },
//       { category, amount },
//       { new: true }
//     );
//     if (!updatedExpense)
//       return res.status(404).json({ message: "Expense not found" });

//     res.json(updatedExpense);
//   } catch (err) {
//     res.status(500).json({ message: "Failed to update expense" });
//   }
// });

// // @desc    Delete an expense
// router.delete("/:id", authMiddleware, async (req, res) => {
//   try {
//     const result = await Expense.findOneAndDelete({
//       _id: req.params.id,
//       userId: req.user.id,
//     });
//     if (!result) return res.status(404).json({ message: "Expense not found" });
//     res.json({ message: "Expense deleted successfully" });
//   } catch (err) {
//     res.status(500).json({ message: "Failed to delete expense" });
//   }
// });

// export default router;
import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Expense route is working!");
});

export default router;
