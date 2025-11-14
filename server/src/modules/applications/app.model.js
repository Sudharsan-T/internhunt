import mongoose from "mongoose";

const appSchema = new mongoose.Schema({
  userId: mongoose.Types.ObjectId,
  jobId: mongoose.Types.ObjectId,
  appliedAt: { type: Date, default: Date.now }
});

export default mongoose.model("Application", appSchema);
