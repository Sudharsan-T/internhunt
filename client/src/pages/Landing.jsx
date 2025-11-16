import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      {/* NAVBAR */}
      <header className="flex justify-between items-center px-10 py-6">
        <h1 className="text-3xl font-bold tracking-tight text-indigo-400">
          InternHunt
        </h1>

        <nav className="space-x-6 text-lg">
          <Link to="/" className="hover:text-indigo-300">
            Home
          </Link>
          <Link to="/login" className="hover:text-indigo-300">
            Login
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-500"
          >
            Sign Up
          </Link>
        </nav>
      </header>

      {/* HERO SECTION */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-5xl font-extrabold leading-tight mb-6 max-w-4xl">
          Apply. Track. Get Selected.
          <br />
          <span className="text-indigo-400">Your internship pipeline — automated.</span>
        </h2>

        <p className="text-slate-300 max-w-2xl text-lg mb-10 leading-relaxed">
          InternHunt helps you manage all your internship applications in one place —
          auto-reminders, follow-ups, deadlines, and everything you need to secure offers.
        </p>

        <Link
          to="/signup"
          className="px-8 py-4 bg-indigo-600 text-xl rounded-xl shadow-lg hover:bg-indigo-500 transition"
        >
          Start Tracking Free →
        </Link>
      </main>

      {/* FEATURES */}
      <section className="bg-slate-900 py-16 px-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="text-xl font-semibold text-indigo-400 mb-2">
              🔄 Auto Follow-ups
            </h3>
            <p className="text-slate-400">
              Get reminders and automated follow-up triggers without doing anything manually.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-indigo-400 mb-2">
              📊 Dashboard Tracking
            </h3>
            <p className="text-slate-400">
              View all your internship applications, statuses, and deadlines in one dashboard.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-indigo-400 mb-2">
              ⚡ Super Fast & Free
            </h3>
            <p className="text-slate-400">
              Lightweight, blazing fast, and 100% free for students.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} InternHunt — Built for Students
      </footer>
    </div>
  );
}
