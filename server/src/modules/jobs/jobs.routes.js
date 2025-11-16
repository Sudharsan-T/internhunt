import { Router } from "express";
import Job from "./job.model.js";

const router = Router();

// GET all jobs
router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find();
    return res.json({ jobs });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

//(temp)
router.post("/seed", async (req, res) => {
  try {
    const sample = await Job.create({
      title: "Frontend Intern",
      company: "Google",
      description: "Work with React, APIs, and UI components.",
    });

    return res.json({ message: "Sample job added", sample });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

export default router;
