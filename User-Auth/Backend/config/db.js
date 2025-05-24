// db.js
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASEURI)
    console.log("Connected to MongoDB 👍");

  }
   catch (err) {
    console.error("MongoDB connection failed ❌", err);
    process.exit(1); 
  }
};

export default connectDB;
