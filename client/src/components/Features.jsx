function Features() {
  return (
    <section className="px-8 py-20 bg-dark2">
      <h2 className="text-3xl font-bold text-center">
        Why <span className="heading-accent">InternHunt?</span>
      </h2>

      <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        <div className="p-6 bg-dark rounded-xl border border-[#1f1f1f] hover:shadow-neon-md transition">
          <h3 className="text-xl font-semibold text-primary">Verified Roles</h3>
          <p className="mt-3 text-gray-400">
            Every internship is manually verified to prevent scams and outdated listings.
          </p>
        </div>

        <div className="p-6 bg-dark rounded-xl border border-[#1f1f1f] hover:shadow-neon-md transition">
          <h3 className="text-xl font-semibold text-primary">AI-Powered Search</h3>
          <p className="mt-3 text-gray-400">
            Quickly find internships tailored to your profile and skills.
          </p>
        </div>

        <div className="p-6 bg-dark rounded-xl border border-[#1f1f1f] hover:shadow-neon-md transition">
          <h3 className="text-xl font-semibold text-primary">Premium UI</h3>
          <p className="mt-3 text-gray-400">
            Built with modern design patterns for speed, clarity, and trust.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Features;
