function Footer() {
  return (
    <footer className="px-8 py-10 bg-dark text-center border-t border-[#1f1f1f]">
      <p className="text-gray-500">
        © {new Date().getFullYear()} InternHunt. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
