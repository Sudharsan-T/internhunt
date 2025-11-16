export default function LogoStrip() {
  const companies = [
    "Google", "Microsoft", "Amazon", "Meta", "Adobe"
  ];

  return (
    <section className="py-10">
      <div className="max-w-5xl mx-auto px-6 flex flex-wrap justify-center items-center gap-6">
        {companies.map((c, i) => (
          <div
            key={i}
            className="px-5 py-3 bg-[#0f0f0f] border border-[#1f1f1f] rounded-md text-gray-300 text-sm"
          >
            {c}
          </div>
        ))}
      </div>
    </section>
  );
}
