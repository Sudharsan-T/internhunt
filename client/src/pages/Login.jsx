import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(form);

      // redirect on success
      navigate("/explore");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }

    setLoading(false);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 bg-dark">

      {/* PERFECT centered green glow */}
      <div
        className="
          absolute top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          w-[620px] h-[620px]
          rounded-full
          bg-[radial-gradient(circle,rgba(0,200,83,0.22),rgba(0,200,83,0.10),transparent)]
          blur-3xl opacity-60 
          pointer-events-none
        "
      />

      {/* LOGIN BOX */}
      <div className="relative z-10 w-full max-w-md bg-[#0f0f0f]/85 border border-[#1f1f1f] rounded-2xl px-8 py-10 shadow-xl backdrop-blur-md">
        
        <h1 className="text-3xl font-extrabold text-center mb-4">
          Login <span className="text-primary">to your account</span>
        </h1>

        {error && (
          <div className="mb-4 p-3 text-sm text-red-400 bg-red-900/20 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md bg-[#1a1a1a] border border-[#333]
                       focus:border-primary outline-none"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md bg-[#1a1a1a] border border-[#333]
                       focus:border-primary outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="btn-glow btn-strong w-full py-3 bg-primary text-dark 
                       font-semibold rounded-md text-lg disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>
      </div>
    </div>
  );
}
