const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI;

    if (!mongoURI) {
      console.error("❌ MONGODB_URI missing in environment variables");
      return null; // ❌ no crash
    }

    const conn = await mongoose.connect(mongoURI);

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    return conn;

  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error.message);
    return null; // ❌ do not crash server
  }
};

module.exports = connectDB;
