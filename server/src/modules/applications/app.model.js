import mongoose from "mongoose";

const appSchema = new mongoose.Schema(
  {
    company: String,
    role: String,
    status: {
      type: String,
      default: "applied",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Application", appSchema);
