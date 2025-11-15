import express from "express";
import cors from "cors";
import appRoutes from "./modules/applications/app.routes.js";
import authRoutes from "./modules/auth/auth.routes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/applications", appRoutes);
app.use("/api/auth", authRoutes);

export default app;
