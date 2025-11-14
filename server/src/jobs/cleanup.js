import cron from "node-cron";
import mongoose from "mongoose";

// 7 days in milliseconds
const RETENTION_DAYS = 7;
const RETENTION_MS = RETENTION_DAYS * 24 * 60 * 60 * 1000;

const COLLECTIONS_TO_CLEAN = [
  "jobs",
  "applications",
  "users_log",
  "cache",
  "temp",
  "logs"
];

export async function getDatabaseSize() {
  const admin = mongoose.connection.db.admin();
  const stats = await admin.serverStatus();
  // WiredTiger data is usually under metrics
  const bytes = stats.metrics.document.returned || stats.metrics.cursor.open.total || 0;
  return bytes;
}

async function cleanOldDocuments() {
  const now = Date.now();
  const cutoff = new Date(now - RETENTION_MS);

  let totalDeleted = 0;

  for (const name of COLLECTIONS_TO_CLEAN) {
    if (!mongoose.connection.collections[name]) continue;

    const collection = mongoose.connection.collections[name];
    try {
      const result = await collection.deleteMany({ createdAt: { $lt: cutoff } });
      if (result.deletedCount > 0) {
        console.log(`🗑️ Deleted ${result.deletedCount} old docs from ${name}`);
        totalDeleted += result.deletedCount;
      }
    } catch (err) {
      console.log(`❌ Cleanup error in ${name}:`, err.message);
    }
  }

  return totalDeleted;
}


async function deleteTempAndTestDocs() {
  let deleted = 0;

  const patterns = [
    { field: "email", value: /test/i },
    { field: "company", value: /test/i },
    { field: "title", value: /dummy/i },
    { field: "type", value: /cache|temp|log/i }
  ];

  for (const colName of COLLECTIONS_TO_CLEAN) {
    const collection = mongoose.connection.collections[colName];
    if (!collection) continue;

    for (const p of patterns) {
      try {
        const result = await collection.deleteMany({ [p.field]: p.value });
        if (result.deletedCount > 0) {
          console.log(`🧹 Deleted ${result.deletedCount} temp/test docs in ${colName}`);
          deleted += result.deletedCount;
        }
      } catch (_) {}
    }
  }

  return deleted;
}


async function compactCollections() {
  const db = mongoose.connection.db;

  for (const name of COLLECTIONS_TO_CLEAN) {
    try {
      await db.command({ compact: name });
      console.log(`📦 Compacted: ${name}`);
    } catch {
      console.log(`⚠️ Compact not supported for collection: ${name}`);
    }
  }
}

async function runCleanup() {
  console.log("------------------------------------------------------");
  console.log("🧼 Cleanup Job Started:", new Date().toLocaleString());

  const beforeSize = await getDatabaseSize();
  console.log(`📊 Database size BEFORE cleanup: ${beforeSize} bytes`);

  const oldDeleted = await cleanOldDocuments();
  const tempDeleted = await deleteTempAndTestDocs();

  await compactCollections();

  const afterSize = await getDatabaseSize();
  console.log(`📉 Database size AFTER cleanup: ${afterSize} bytes`);

  console.log(
    `✅ Cleanup Finished | Removed ${oldDeleted + tempDeleted} documents in total.\n`
  );
}

export function startCleanupJob() {
  const interval = process.env.CLEANUP_INTERVAL || "0 */6 * * *"; 
  // every 6 hours

  console.log("🕒 Cleanup Job scheduled with cron:", interval);

  cron.schedule(interval, async () => {
    try {
      await runCleanup();
    } catch (err) {
      console.log("❌ Cleanup Failed:", err.message);
    }
  });
}
