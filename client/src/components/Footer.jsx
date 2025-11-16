export default function Footer() {
  return (
    <footer className="px-6 md:px-8 py-10 bg-dark border-t border-[#1f1f1f]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-primary">InternHunt</h3>
          <p className="text-gray-500 text-sm mt-2">Connecting students with premium internships.</p>
        </div>

        <div className="flex gap-6 text-sm text-gray-400">
          <a href="#" className="hover:text-primary transition">Privacy</a>
          <a href="#" className="hover:text-primary transition">Terms</a>
          <a href="#" className="hover:text-primary transition">Contact</a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto text-center text-gray-500 text-sm mt-8">
        © {new Date().getFullYear()} InternHunt. All rights reserved.
      </div>
    </footer>
  );
}
