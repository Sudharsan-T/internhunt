import express from "express";
import cors from "cors";
import authRoutes from "./modules/auth/auth.routes.js";
import appRoutes from "./modules/applications/app.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

// Health-check route
app.get('/', (req, res) => {
  res.send('✅ InternHunt API — server running');
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/applications", appRoutes);

export default app;
