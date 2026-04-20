require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const mongoose = require("mongoose");

const connectDB = require("./database");

const app = express();

/* =======================
   MIDDLEWARE
======================= */
app.use(express.json());
app.use(cors());
app.use(helmet());

/* =======================
   ROUTES (TEST ROUTE)
======================= */
app.get("/", (req, res) => {
  res.send("MoneyDharma API is running 🚀");
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    message: "API working fine",
  });
});

/* =======================
   DATABASE + SERVER START
======================= */
async function startServer() {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI missing in environment variables");
    }

    await connectDB();

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log("Server running on port", PORT);
    });
  } catch (err) {
    console.error("Server failed to start:", err.message);
  }
}

startServer();
