// // const express = require("express");
// // const router = express.Router();
// // const Payment = require("../models/Payment");
// // const authMiddleware = require("../middleware/authMiddleware");

// // // @desc    Add a new payment
// // // @route   POST /api/payments
// // // @access  Private
// // router.post("/", authMiddleware, async (req, res) => {
// //   try {
// //     const { number, category, amount } = req.body;
// //     const payment = new Payment({
// //       userId: req.user.id,
// //       number,
// //       category,
// //       amount,
// //     });
// //     await payment.save();
// //     res.status(201).json(payment);
// //   } catch (err) {
// //     res.status(500).json({ message: "Failed to create payment" });
// //   }
// // });

// // // @desc    Get all payments for a user
// // // @route   GET /api/payments
// // // @access  Private
// // router.get("/", authMiddleware, async (req, res) => {
// //   try {
// //     const payments = await Payment.find({ userId: req.user.id });
// //     res.json(payments);
// //   } catch (err) {
// //     res.status(500).json({ message: "Failed to fetch payments" });
// //   }
// // });

// // // (Optional) @desc Update a payment
// // router.put("/:id", authMiddleware, async (req, res) => {
// //   try {
// //     const { number, category, amount } = req.body;
// //     const payment = await Payment.findOneAndUpdate(
// //       { _id: req.params.id, userId: req.user.id },
// //       { number, category, amount },
// //       { new: true }
// //     );
// //     if (!payment) return res.status(404).json({ message: "Payment not found" });
// //     res.json(payment);
// //   } catch (err) {
// //     res.status(500).json({ message: "Failed to update payment" });
// //   }
// // });

// // // (Optional) @desc Delete a payment
// // router.delete("/:id", authMiddleware, async (req, res) => {
// //   try {
// //     const result = await Payment.findOneAndDelete({
// //       _id: req.params.id,
// //       userId: req.user.id,
// //     });
// //     if (!result) return res.status(404).json({ message: "Payment not found" });
// //     res.json({ message: "Payment deleted successfully" });
// //   } catch (err) {
// //     res.status(500).json({ message: "Failed to delete payment" });
// //   }
// // });

// // module.exports = router;
// import express from "express";
// import Payment from "../models/Payment.js";
// import authMiddleware from "../middleware/authMiddleware.js";

// const router = express.Router();

// // @desc    Add a new payment
// // @route   POST /api/payments
// // @access  Private
// router.post("/", authMiddleware, async (req, res) => {
//   try {
//     const { number, category, amount } = req.body;
//     const payment = new Payment({
//       userId: req.user.id,
//       number,
//       category,
//       amount,
//     });
//     await payment.save();
//     res.status(201).json(payment);
//   } catch (err) {
//     res.status(500).json({ message: "Failed to create payment" });
//   }
// });

// // @desc    Get all payments for a user
// // @route   GET /api/payments
// // @access  Private
// router.get("/", authMiddleware, async (req, res) => {
//   try {
//     const payments = await Payment.find({ userId: req.user.id });
//     res.json(payments);
//   } catch (err) {
//     res.status(500).json({ message: "Failed to fetch payments" });
//   }
// });

// // @desc    Update a payment
// // @route   PUT /api/payments/:id
// router.put("/:id", authMiddleware, async (req, res) => {
//   try {
//     const { number, category, amount } = req.body;
//     const payment = await Payment.findOneAndUpdate(
//       { _id: req.params.id, userId: req.user.id },
//       { number, category, amount },
//       { new: true }
//     );
//     if (!payment) return res.status(404).json({ message: "Payment not found" });
//     res.json(payment);
//   } catch (err) {
//     res.status(500).json({ message: "Failed to update payment" });
//   }
// });

// // @desc    Delete a payment
// // @route   DELETE /api/payments/:id
// router.delete("/:id", authMiddleware, async (req, res) => {
//   try {
//     const result = await Payment.findOneAndDelete({
//       _id: req.params.id,
//       userId: req.user.id,
//     });
//     if (!result) return res.status(404).json({ message: "Payment not found" });
//     res.json({ message: "Payment deleted successfully" });
//   } catch (err) {
//     res.status(500).json({ message: "Failed to delete payment" });
//   }
// });

// export default router;
import express from "express";
import Payment from "../models/Payment.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, async (req, res) => {
  try {
    const { number, category, amount } = req.body;
    const payment = new Payment({
      userId: req.user.id,
      number,
      category,
      amount,
    });
    await payment.save();
    res.status(201).json(payment);
  } catch (err) {
    res.status(500).json({ message: "Failed to create payment" });
  }
});

router.get("/", authMiddleware, async (req, res) => {
  try {
    const payments = await Payment.find({ userId: req.user.id });
    res.json(payments);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch payments" });
  }
});

router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const { number, category, amount } = req.body;
    const payment = await Payment.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id },
      { number, category, amount },
      { new: true }
    );
    if (!payment) return res.status(404).json({ message: "Payment not found" });
    res.json(payment);
  } catch (err) {
    res.status(500).json({ message: "Failed to update payment" });
  }
});

router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const result = await Payment.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.id,
    });
    if (!result) return res.status(404).json({ message: "Payment not found" });
    res.json({ message: "Payment deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete payment" });
  }
});

export default router;
