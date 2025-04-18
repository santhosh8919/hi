// // // const mongoose = require("mongoose");

// // // const paymentSchema = new mongoose.Schema({
// // //   userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
// // //   number: { type: String, required: true },
// // //   category: { type: String, required: true },
// // //   amount: { type: Number, required: true },
// // //   date: { type: Date, default: Date.now },
// // // });

// // // module.exports = mongoose.model("Payment", paymentSchema);
// // const mongoose = require("mongoose");

// // const paymentSchema = new mongoose.Schema({
// //   userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
// //   number: { type: String, required: true },
// //   category: { type: String, required: true },
// //   amount: { type: Number, required: true },
// //   date: { type: Date, default: Date.now },
// // });

// // module.exports = mongoose.model("Payment", paymentSchema);
// import mongoose from "mongoose";

// const paymentSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//   number: { type: String, required: true },
//   category: { type: String, required: true },
//   amount: { type: Number, required: true },
//   date: { type: Date, default: Date.now },
// });

// const Payment = mongoose.model("Payment", paymentSchema);
// export default Payment;
import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  number: { type: String, required: true },
  category: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

const Payment = mongoose.model("Payment", paymentSchema);
export default Payment;
