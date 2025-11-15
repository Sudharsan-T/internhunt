import mongoose from "mongoose";

const appSchema = new mongoose.Schema(
  {
    userId: mongoose.Schema.Types.ObjectId,
    company: String,
    role: String,
    status: String
  },
  { timestamps: true }
);

export default mongoose.model("Application", appSchema);