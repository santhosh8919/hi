// // // // // const express = require("express");
// // // // // const mongoose = require("mongoose");
// // // // // const cors = require("cors");
// // // // // const dotenv = require("dotenv");

// // // // // dotenv.config();

// // // // // const app = express();

// // // // // // Middleware
// // // // // app.use(cors());
// // // // // app.use(express.json());

// // // // // // Routes
// // // // // app.use("/api/users", require("./routes/userRoutes"));
// // // // // app.use("/api/expenses", require("./routes/expenseRoutes"));
// // // // // app.use("/api/payments", require("./routes/paymentRoutes")); // <-- if you have this

// // // // // // MongoDB connection
// // // // // mongoose
// // // // //   .connect(process.env.MONGO_URI, {
// // // // //     useNewUrlParser: true,
// // // // //     useUnifiedTopology: true,
// // // // //   })
// // // // //   .then(() => {
// // // // //     console.log("MongoDB connected");
// // // // //     app.listen(process.env.PORT || 5000, () =>
// // // // //       console.log(`Server running on port ${process.env.PORT}`)
// // // // //     );
// // // // //   })
// // // // //   .catch((err) => {
// // // // //     console.error("MongoDB connection error:", err);
// // // // //   });
// // // // import express from "express";
// // // // import cors from "cors";
// // // // import mongoose from "mongoose";
// // // // import dotenv from "dotenv";

// // // // import userRoutes from "./routes/userRoutes.js";
// // // // import expenseRoutes from "./routes/expenseRoutes.js";
// // // // import paymentRoutes from "./routes/paymentRoutes.js"; // ✅ here

// // // // dotenv.config();

// // // // const app = express();
// // // // app.use(cors());
// // // // app.use(express.json());

// // // // app.use("/api/users", userRoutes);
// // // // app.use("/api/expenses", expenseRoutes);
// // // // app.use("/api/payments", paymentRoutes); // ✅ connect here

// // // // mongoose
// // // //   .connect(process.env.MONGO_URI)
// // // //   .then(() => console.log("MongoDB connected"))
// // // //   .catch((err) => console.error(err));

// // // // const PORT = process.env.PORT || 5000;
// // // // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// // // import express from "express";
// // // import dotenv from "dotenv";
// // // import mongoose from "mongoose";
// // // import cors from "cors";
// // // import bodyParser from "body-parser";

// // // // Routes
// // // import userRoutes from "./routes/userRoutes.js";
// // // import expenseRoutes from "./routes/expenseRoutes.js";
// // // import paymentRoutes from "./routes/paymentRoutes.js";

// // // dotenv.config();

// // // const app = express();

// // // // Middleware
// // // app.use(cors());
// // // app.use(bodyParser.json());

// // // // Routes
// // // app.use("/api/users", userRoutes);
// // // app.use("/api/expenses", expenseRoutes);
// // // app.use("/api/payments", paymentRoutes);

// // // // DB + Server
// // // const PORT = process.env.PORT || 5000;
// // // mongoose
// // //   .connect(process.env.MONGO_URI)
// // //   .then(() => {
// // //     app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
// // //   })
// // //   .catch((err) => console.error("❌ MongoDB connection failed:", err));
// // // import express from "express";
// // // import dotenv from "dotenv";
// // // import mongoose from "mongoose";
// // // import cors from "cors";
// // // import userRoutes from "./routes/userRoutes.js";
// // // import expenseRoutes from "./routes/expenseRoutes.js";
// // // import paymentRoutes from "./routes/paymentRoutes.js";

// // // dotenv.config();

// // // const app = express();

// // // app.use(cors());
// // // app.use(express.json());

// // // app.use("/api/users", userRoutes);
// // // app.use("/api/expenses", expenseRoutes);
// // // app.use("/api/payments", paymentRoutes);

// // // mongoose
// // //   .connect(process.env.MONGO_URI)
// // //   .then(() => {
// // //     app.listen(process.env.PORT, () => {
// // //       console.log(`Server running on port ${process.env.PORT}`);
// // //     });
// // //   })
// // //   .catch((err) => console.error("MongoDB connection error:", err));
// // import express from "express";
// // import mongoose from "mongoose";
// // import cors from "cors";
// // import dotenv from "dotenv";

// // // Load environment variables
// // dotenv.config();

// // const app = express();
// // const PORT = process.env.PORT || 5000;

// // // Middleware
// // app.use(cors());
// // app.use(express.json());

// // // MongoDB Connection
// // mongoose
// //   .connect("mongodb://localhost:27017/finance_tracker", {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true,
// //   })
// //   .then(() => console.log("✅ MongoDB connected"))
// //   .catch((err) => console.error("❌ MongoDB connection error:", err));

// // // Test route
// // app.get("/", (req, res) => {
// //   res.send("Finance Tracker API running...");
// // });

// // // Start server
// // app.listen(PORT, () => {
// //   console.log(`🚀 Server running on http://localhost:${PORT}`);
// // });
// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import dotenv from "dotenv";
// import authRoutes from "./routes/auth.routes.js"; // 👈 Your auth route file (make sure it exists)

// // Load .env variables
// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB connection
// mongoose
//   .connect("mongodb://localhost:27017/finance_tracker", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("✅ MongoDB connected"))
//   .catch((err) => console.error("❌ MongoDB connection error:", err));

// // Routes
// app.use("/auth", authRoutes);

// // Default route
// app.get("/", (req, res) => {
//   res.send("🌐 Finance Tracker API is running...");
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`🚀 Server running at http://localhost:${PORT}`);
// });
// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import dotenv from "dotenv";
// import authRoutes from "./routes/auth.routes.js"; // ✅ this file

// app.use("/api/auth", authRoutes); // 👈 This is critical

// dotenv.config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use("/auth", authRoutes);

// // MongoDB connection
// mongoose
//   .connect(process.env.MONGO_URI, {
//     // useNewUrlParser: true,
//     // useUnifiedTopology: true,
//   })
//   .then(() => console.log("✅ MongoDB connected"))
//   .catch((err) => console.error("❌ MongoDB connection error:", err));

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Use only this one route setup
app.use("/api/auth", authRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
