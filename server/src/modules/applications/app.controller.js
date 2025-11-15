import Application from "./app.model.js";

export const createApp = async (req, res) => {
  try {
    const data = await Application.create(req.body);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getApps = async (req, res) => {
  try {
    const data = await Application.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
