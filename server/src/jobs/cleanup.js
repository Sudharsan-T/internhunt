import cron from "node-cron";
import mongoose from "mongoose";

const startCleanupJob = () => {
  const expression = process.env.CLEANUP_CRON || "0 */6 * * *";

  cron.schedule(expression, async () => {
    console.log("🧹 Cleanup started...");

    const db = mongoose.connection.db;

    // delete >7 days old data
    const collections = await db.collections();

    for (const col of collections) {
      const name = col.collectionName;
      const result = await col.deleteMany({
        createdAt: { $lt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) }
      }).catch(() => {});
      if (result?.deletedCount)
        console.log(`🗑️ ${name}: Deleted ${result.deletedCount} old docs`);
    }

    const stats = await db.stats();
    console.log("📦 DB Size:", stats.storageSize / 1024 / 1024, "MB");
    console.log("🧹 Cleanup finished.");
  });
};

export default startCleanupJob;
