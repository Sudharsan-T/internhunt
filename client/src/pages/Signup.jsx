import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";

export default function Signup() {
  const { signup, loading } = useAuth();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setNotice("");

    if (!form.name || !form.email || !form.password) {
        return setError("Please fill all fields");
    }

    try {
        const res = await signup(form);
        setNotice("Signup successful — you can now login.");
    } catch (err) {
        setError(err.response?.data?.message || "Signup failed");
    }
    };


  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 bg-dark">
      

      {/* LEFT ambient glow */}
        <div
        className="
            absolute left-[-300px] top-1/2
            -translate-y-1/2
            w-[500px] h-[500px]
            rounded-full
            bg-[radial-gradient(circle,rgba(0,200,83,0.10),transparent)]
            blur-[150px] opacity-40
            pointer-events-none
        "
        />

        {/* RIGHT ambient glow */}
        <div
        className="
            absolute right-[-300px] top-1/2
            -translate-y-1/2
            w-[500px] h-[500px]
            rounded-full
            bg-[radial-gradient(circle,rgba(0,200,83,0.10),transparent)]
            blur-[150px] opacity-40
            pointer-events-none
        "
        />

      {/* PERFECT centered green glow (YOUR EXACT SETTINGS) */}
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

      {/* SIGNUP BOX */}
      <div className="relative z-10 w-full max-w-md bg-[#0f0f0f]/85 border border-[#1f1f1f] rounded-2xl px-8 py-10 shadow-xl backdrop-blur-md">
        
        <h1 className="text-3xl font-extrabold text-center mb-2">
          Create <span className="text-primary">your account</span>
        </h1>

        {/* ERROR */}
        {error && (
          <div className="mb-4 p-3 text-sm text-red-400 bg-red-900/20 rounded">
            {error}
          </div>
        )}

        {/* SUCCESS NOTICE */}
        {notice && (
          <div className="mb-4 p-3 text-sm text-green-400 bg-green-900/20 rounded">
            {notice}
          </div>
        )}

        {/* FORM */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            value={form.name}
            className="w-full px-4 py-3 rounded-md bg-[#1a1a1a] border border-[#333]
                       focus:border-primary outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={form.email}
            className="w-full px-4 py-3 rounded-md bg-[#1a1a1a] border border-[#333]
                       focus:border-primary outline-none"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={form.password}
            className="w-full px-4 py-3 rounded-md bg-[#1a1a1a] border border-[#333]
                       focus:border-primary outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="btn-glow btn-strong w-full py-3 bg-primary text-dark 
                       font-semibold rounded-md text-lg disabled:opacity-60"
          >
            {loading ? "Creating..." : "Create Account"}
          </button>
        </form>
      </div>

    </div>
  );
}
