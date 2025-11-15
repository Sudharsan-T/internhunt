// client/src/App.jsx
import { useEffect, useState } from "react";
import ReactLogo from "./assets/react.svg";
import ViteLogo from "/vite.svg";
import "./index.css"; // tailwind entry

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [resumeUrl, setResumeUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    // fetch last 10 applications from backend (read endpoint)
    fetch("/api/applications?limit=10")
      .then((r) => r.json())
      .then((data) => setRecent(Array.isArray(data) ? data : []))
      .catch(() => setRecent([]));
  }, []);

  async function submit(e) {
    e.preventDefault();
    setMsg("");
    if (!name || !email) return setMsg("Name and email required.");
    setLoading(true);

    try {
      const res = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, resumeUrl }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.message || "Server error");
      setMsg("Application submitted — check your email for reminders.");
      // add to recent
      setRecent((s) => [json, ...s].slice(0, 10));
      setName("");
      setEmail("");
      setResumeUrl("");
    } catch (err) {
      setMsg(err.message || "Failed to submit");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-6">
      <header className="max-w-4xl mx-auto flex items-center gap-4 mb-8">
        <img src={ViteLogo} alt="vite" className="h-10" />
        <img src={ReactLogo} alt="react" className="h-10" />
        <h1 className="text-2xl font-semibold">InternHunt — Apply & Track</h1>
      </header>

      <main className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="bg-slate-800 rounded-2xl p-6 shadow">
          <h2 className="text-xl font-medium mb-4">Apply to Internship</h2>
          <form onSubmit={submit} className="space-y-3">
            <div>
              <label className="block text-sm text-slate-300">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mt-1 p-2 rounded bg-slate-700 border border-slate-600"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="block text-sm text-slate-300">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-1 p-2 rounded bg-slate-700 border border-slate-600"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm text-slate-300">Resume URL (optional)</label>
              <input
                value={resumeUrl}
                onChange={(e) => setResumeUrl(e.target.value)}
                className="w-full mt-1 p-2 rounded bg-slate-700 border border-slate-600"
                placeholder="https://drive.google.com/..."
              />
            </div>

            <div className="flex items-center gap-2">
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-500 disabled:opacity-60"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Apply"}
              </button>
              <span className="text-sm text-slate-400">{msg}</span>
            </div>
          </form>
        </section>

        <aside className="bg-slate-800 rounded-2xl p-6 shadow">
          <h3 className="text-lg font-medium mb-3">Recent Applications</h3>
          <ul className="space-y-3">
            {recent.length === 0 && (
              <li className="text-slate-400">No recent applications yet.</li>
            )}
            {recent.map((r) => (
              <li
                key={r._id || r.id || Math.random()}
                className="bg-slate-700 p-3 rounded border border-slate-600"
              >
                <div className="flex justify-between">
                  <div>
                    <div className="font-medium">{r.name}</div>
                    <div className="text-sm text-slate-300">{r.email}</div>
                  </div>
                  <div className="text-xs text-slate-400">
                    {new Date(r.createdAt || r.created || Date.now()).toLocaleString()}
                  </div>
                </div>
                {r.resumeUrl && (
                  <div className="mt-2">
                    <a
                      href={r.resumeUrl}
                      target="_blank"
                      className="text-sm text-indigo-300 underline"
                      rel="noreferrer"
                    >
                      Resume
                    </a>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </aside>
      </main>
    </div>
  );
}
