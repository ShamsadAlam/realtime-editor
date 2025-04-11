import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const MONGO_URI = process.env.MONGO_URI;
console.log("MONGO_URI:", MONGO_URI);

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${MONGO_URI}`);
    console.log(
      `\n MongoDB Connected!!. DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB Connection error ", error);
    process.exit(1);
  }
};

export default connectDB;
