import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="flex justify-between items-center px-6 md:px-8 py-4 bg-dark border-b border-[#1f1f1f] sticky top-0 z-30">
      <Link to="/" className="text-2xl font-bold text-primary">InternHunt</Link>

      <div className="hidden md:flex gap-8 text-gray-300 text-sm">
        <Link to="/" className="nav-underline">Home</Link>
        <Link to="/explore" className="nav-underline">Explore</Link>
        <Link to="/" className="nav-underline">Features</Link>
      </div>

      <div className="flex items-center gap-4">
        {!user ? (
          <>
            <Link to="/login" className="nav-underline text-gray-300 hover:text-primary">Login</Link>
            <Link to="/signup" className="btn-glow btn-strong px-4 md:px-5 py-2 bg-primary text-dark font-semibold rounded-md transition">Sign Up</Link>
          </>
        ) : (
          <>
            <span className="text-gray-300 text-sm hidden sm:inline">Hi, {user.name}</span>
            <button onClick={logout} className="px-3 py-1 bg-[#111] border border-[#2a2a2a] rounded-md text-gray-300">Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}
