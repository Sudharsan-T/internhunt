function Features() {
  return (
    <section className="relative px-6 md:px-8 py-20 section-gradient">
      <div className="section-radial"></div>
      <div className="section-noise"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-lightText mb-8" data-aos="flip-up">
          Why <span className="heading-accent">InternHunt?</span>
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="p-6 bg-dark rounded-xl border border-[#1f1f1f] card-strong" data-aos="zoom-in-up" data-aos-delay="40">
            <h3 className="text-xl font-semibold text-primary">Verified Roles</h3>
            <p className="mt-3 text-gray-400">Every internship is verified to prevent scams and outdated listings.</p>
          </div>

          <div className="p-6 bg-dark rounded-xl border border-[#1f1f1f] card-strong" data-aos="zoom-in-up" data-aos-delay="80">
            <h3 className="text-xl font-semibold text-primary">AI-Powered Search</h3>
            <p className="mt-3 text-gray-400">Find internships tailored to your skills, fast.</p>
          </div>

          <div className="p-6 bg-dark rounded-xl border border-[#1f1f1f] card-strong" data-aos="zoom-in-up" data-aos-delay="120">
            <h3 className="text-xl font-semibold text-primary">Premium UI</h3>
            <p className="mt-3 text-gray-400">Designed for speed, clarity, and trust — built for students.</p>
          </div>
        </div>

        {/* CTA Single-screen prominent */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6" data-aos="fade-up" data-aos-delay="160">
          <div>
            <h4 className="text-2xl font-bold">Ready to level up?</h4>
            <p className="text-gray-400 mt-1">Start applying to quality internships — no spam, just verified roles.</p>
          </div>

          <div className="flex gap-4">
            <button className="btn-glow btn-strong px-6 py-3 bg-primary text-dark font-semibold rounded-lg">Get Early Access</button>
            <button className="px-5 py-3 border border-gray-700 rounded-lg text-gray-300 hover:border-primary">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
