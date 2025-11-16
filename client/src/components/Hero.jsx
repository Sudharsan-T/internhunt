function Hero() {
  return (
    <section className="relative w-full px-6 py-32 overflow-hidden bg-dark">
      {/* Radial glows spread across FULL WIDTH */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-32 hero-radial hero-radial--green" aria-hidden="true" />
      <div className="absolute left-1/3 top-40 hero-radial hero-radial--green-sm" aria-hidden="true" />

      {/* Centered content but NOT limited width */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full">
        
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight max-w-4xl text-lightText">
          Find The Best <span className="text-primary">Internships</span>
          <br /> From Trusted Companies.
        </h1>

        <p className="mt-6 text-lg text-gray-300 max-w-2xl">
          A modern platform built for students who want high-quality, verified internships without scrolling endlessly.
        </p>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button className="btn-glow px-7 py-3 bg-primary text-dark font-semibold rounded-lg text-lg hover:bg-primaryLight transition">
            Explore Internships
          </button>

          <button className="px-6 py-3 border border-gray-700 rounded-lg text-gray-300 hover:border-primary transition">
            How it works
          </button>
        </div>

      </div>
    </section>
  );
}

export default Hero;
