import { Router } from "express";
import { createApp, getApps } from "./app.controller.js";

const router = Router();

router.post("/", createApp);
router.get("/", getApps);

export default router;
