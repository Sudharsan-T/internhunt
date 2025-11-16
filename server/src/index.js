import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

import appRoutes from "./modules/applications/app.routes.js";
import authRoutes from "./modules/auth/auth.routes.js";
import jobRoutes from "./modules/jobs/jobs.routes.js";

import "./jobs/cleanup.js";
import { authMiddleware } from "./utils/authMiddleware.js";

dotenv.config();

const app = express();

// Benefit: tells you server + api are up and shows available routes
app.get("/api", (req, res) => {
  res.json({
    message: "InternHunt API root. Use endpoints under /api/auth, /api/jobs, /api/applications",
    docs: [
      { method: "POST", path: "/api/auth/register" },
      { method: "POST", path: "/api/auth/login" },
      { method: "GET",  path: "/api/protected (requires Authorization header)" },
      { method: "GET",  path: "/api/jobs" }
    ]
  });
});


// Middlewares
app.use(cors());
app.use(express.json());

// Test root route
app.get("/", (req, res) => {
  res.send("InternHunt API is running 🚀");
});

// 🔒 PROTECTED TEST ROUTE — correct placement
app.get("/api/protected", authMiddleware, (req, res) => {
  res.json({
    message: "You accessed protected route!",
    user: req.user,
  });
});

// API routes
app.use("/api/applications", appRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);

// Connect DB
connectDB();

// Start Server
app.listen(process.env.PORT, () =>
  console.log(`➡️ Server running on port ${process.env.PORT}`)
);
