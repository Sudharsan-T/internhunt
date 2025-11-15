import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import connectDB from "./config/db.js";
import startCleanupJob from "./jobs/cleanup.js";

const PORT = process.env.PORT || 5000;

// DB Connection + Server Start
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("➡️ Server running on port ", PORT);
    startCleanupJob();
  });
});
