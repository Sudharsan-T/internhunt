import express from "express";
import cors from "cors";

import authRoutes from "./modules/auth/auth.routes.js";
import applicationRoutes from "./modules/applications/app.routes.js";
import jobRoutes from "./modules/jobs/jobs.routes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/applications", applicationRoutes);
app.use("/api/jobs", jobRoutes);

app.get("/", (req, res) => {
  res.json({ status: "InternHunt API Running" });
});

export default app;
