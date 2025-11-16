import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`flex justify-between items-center px-6 md:px-8 py-4 bg-dark border-b border-[#1f1f1f] sticky top-0 z-30 transition-all duration-300 ${
        scrolled ? "backdrop-blur-sm bg-opacity-80" : "bg-opacity-100"
      }`}
    >
      {/* Brand */}
      <Link to="/" className="text-2xl font-bold text-primary">
        InternHunt
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-8 text-gray-300 text-sm">
        <Link to="/" className="nav-underline">Home</Link>
        <Link to="/explore" className="nav-underline">Explore</Link>
        <Link to="/" className="nav-underline">Features</Link>
        <Link to="/" className="nav-underline">About</Link>
        <Link to="/" className="nav-underline">Contact</Link>
      </div>

      {/* Right Action Buttons */}
      <div className="flex items-center gap-4">
        <Link
          to="/login"
          className="nav-underline text-gray-300 hover:text-primary"
        >
          Login
        </Link>

        <Link
          to="/signup"
          className="btn-glow btn-strong px-4 md:px-5 py-2 bg-primary text-dark font-semibold rounded-md transition"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
