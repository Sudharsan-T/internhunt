import app from "./app.js";
import connectDB from "./config/db.js";
import { startCleanupJob } from "./jobs/cleanup.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 5000;

connectDB();
startCleanupJob(); 

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
