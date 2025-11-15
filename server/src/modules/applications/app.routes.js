import { Router } from "express";
import { getApplications, createApplication } from "./app.controller.js";

const router = Router();

router.get("/", getApplications);
router.post("/", createApplication);

export default router;
