import mongoose, { Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";

const documentSchema = Schema({
  _id: {
    type: String,
    default: uuidv4,
  },
  content: {
    type: String,
    default: "",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Document = mongoose.model("Document", documentSchema);
export default Document;
