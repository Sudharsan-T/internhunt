import express from "express";
import Application from "./app.model.js";

const router = express.Router();

router.post("/:jobId", async (req, res) => {
  const { userId } = req.body;
  const jobId = req.params.jobId;

  const app = await Application.create({ userId, jobId });

  res.json({ msg: "Applied", app });
});

export default router;
