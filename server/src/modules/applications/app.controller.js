import Application from "./app.model.js";

// GET /api/applications
export const getApplications = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 10;

    const applications = await Application.find().limit(limit).sort({ createdAt: -1 });

    return res.json({
      success: true,
      count: applications.length,
      data: applications
    });
  } catch (err) {
    console.error("❌ Error fetching applications:", err);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};

// POST /api/applications
export const createApplication = async (req, res) => {
  try {
    const { company, role, userId } = req.body;

    if (!company || !role || !userId) {
      return res.status(400).json({ success: false, message: "Missing fields" });
    }

    const newApp = await Application.create({ company, role, userId });

    return res.json({
      success: true,
      data: newApp
    });
  } catch (err) {
    console.error("❌ Error creating application:", err);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};
