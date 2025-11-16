export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Applications */}
        <div className="bg-slate-800 p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold">Total Applications</h2>
          <p className="text-4xl font-bold mt-2">12</p>
        </div>

        {/* Pending */}
        <div className="bg-slate-800 p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold">Pending</h2>
          <p className="text-4xl font-bold mt-2">3</p>
        </div>

        {/* Rejected */}
        <div className="bg-slate-800 p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold">Rejected</h2>
          <p className="text-4xl font-bold mt-2">5</p>
        </div>
      </div>

      {/* Recent Applications */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">Recent Applications</h2>
        <div className="bg-slate-800 p-4 rounded-xl shadow">
          <p className="text-slate-300">Coming soon…</p>
        </div>
      </div>
    </div>
  );
}
