import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: String,
  company: String,
  description: String,
  applyUrl: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Job", jobSchema);
