function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 bg-dark border-b border-[#1f1f1f] sticky top-0 z-20">
      <h1 className="text-2xl font-bold text-primary">InternHunt</h1>

      <div className="hidden md:flex gap-8 text-gray-300 text-sm">
        <a href="#" className="hover:text-primary transition">Home</a>
        <a href="#" className="hover:text-primary transition">Features</a>
        <a href="#" className="hover:text-primary transition">About</a>
        <a href="#" className="hover:text-primary transition">Contact</a>
      </div>

      <button className="btn-glow px-5 py-2 bg-primary text-dark font-semibold rounded-md hover:bg-primaryLight transition shadow-neon-sm">
        Get Started
      </button>
    </nav>
  );
}

export default Navbar;
