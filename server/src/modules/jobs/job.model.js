import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    company: String,
    role: String,
    link: String
  },
  { timestamps: true }
);

export default mongoose.model("Job", jobSchema);
