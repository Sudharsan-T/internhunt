import React, { useRef } from "react";
import { Link } from "react-router-dom"; // ✔ NEEDED FOR ROUTING

export default function Hero() {
  const btnRef = useRef(null);

  // magnetic effect handler (light)
  const onMove = (e) => {
    const el = btnRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    const max = 18; // strength
    const px = (relX / rect.width) * max;
    const py = (relY / rect.height) * max;
    el.style.transform = `translate(${px}px, ${py}px) scale(1.03)`;
  };

  const onLeave = () => {
    const el = btnRef.current;
    if (!el) return;
    el.style.transform = "translate(0,0) scale(1)";
  };

  return (
    <section className="relative w-full px-6 py-28 overflow-hidden bg-dark">
      
      {/* BACKGROUND EFFECTS */}
      <div className="beam" />
      <div className="beam-diagonal" />
      <div className="noise" />

      <div className="absolute left-1/2 -translate-x-1/2 -top-24 hero-radial hero-radial--green" />
      <div className="absolute left-1/3 top-36 hero-radial hero-radial--green-sm" />

      {/* HERO CONTENT */}
      <div className="relative z-10 flex flex-col items-center text-center w-full">

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-4xl">
          <span className="inline-block shimmer">Find The Best</span>{" "}
          <span className="text-primary">Internships</span>
          <br />
          <span className="inline-block shimmer">From Trusted Companies.</span>
        </h1>

        <p className="mt-6 text-lg text-gray-300 max-w-2xl">
          A modern platform built for students who want high-quality, verified internships without scrolling endlessly.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

          {/* Magnetic CTA Button WITH ROUTING */}
        <Link
            to="/explore"
            className="btn-glow btn-strong px-7 py-3 bg-primary text-dark font-semibold rounded-lg text-lg transition hover:scale-[1.02]"
        >
            Explore Internships
        </Link>


          <button className="px-6 py-3 border border-gray-700 rounded-lg text-gray-300 hover:border-primary transition transform hover:scale-105">
            How it works
          </button>

        </div>

        {/* Mini CTA Banner */}
        <div className="mt-8 bg-[#0f0f0f] border border-[#1f1f1f] rounded-xl px-5 py-3 flex items-center gap-4 text-sm shadow-neon-sm">
          <span className="inline-block px-2 py-1 bg-primary rounded-full text-dark text-xs font-semibold">
            New
          </span>
          <span className="text-gray-300">
            Get verified roles added daily.{" "}
            <span className="text-primary">Join the waitlist</span>
          </span>
        </div>

      </div>
    </section>
  );
}
