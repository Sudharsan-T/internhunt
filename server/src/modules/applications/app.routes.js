import express from "express";
import { getApplications, createApplication } from "./app.controller.js";

const router = express.Router();

router.get("/", getApplications);
router.post("/", createApplication);

export default router;
