import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import appRoutes from "./modules/applications/app.routes.js";
import authRoutes from "./modules/auth/auth.routes.js";
import jobRoutes from "./modules/jobs/jobs.routes.js";
import "./jobs/cleanup.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("InternHunt API is running 🚀");
});

// API routes
app.use("/api/applications", appRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);

// Connect DB
connectDB();

app.listen(process.env.PORT, () =>
  console.log(`➡️ Server running on port ${process.env.PORT}`)
);
