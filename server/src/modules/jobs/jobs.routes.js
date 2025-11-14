import express from "express";
import Job from "./job.model.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const jobs = await Job.find().sort({ createdAt: -1 });
  res.json(jobs);
});

router.get("/:id", async (req, res) => {
  const job = await Job.findById(req.params.id);
  res.json(job);
});

router.post("/", async (req, res) => {
  const job = await Job.create(req.body);
  res.json(job);
});

export default router;
