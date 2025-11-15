import Application from "./app.model.js";

export const getApplications = async (req, res) => {
  try {
    const apps = await Application.find().sort({ createdAt: -1 });
    res.json(apps);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const createApplication = async (req, res) => {
  try {
    const app = await Application.create(req.body);
    res.json(app);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
