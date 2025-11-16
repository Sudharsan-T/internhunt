export default function Explore() {

  const internships = [
    {
      title: "Software Developer Intern",
      company: "Google",
      location: "Bangalore • On-site",
      stipend: "₹45,000/month",
      skills: ["React", "Node", "REST"],
    },
    {
      title: "Machine Learning Intern",
      company: "Microsoft",
      location: "Hyderabad • Hybrid",
      stipend: "₹50,000/month",
      skills: ["Python", "TensorFlow", "Data Processing"],
    },
    {
      title: "UI/UX Intern",
      company: "Adobe",
      location: "Remote",
      stipend: "₹30,000/month",
      skills: ["Figma", "Wireframing", "Prototyping"],
    },
  ];

  return (
    <div className="min-h-screen bg-dark px-6 md:px-10 py-16">

      {/* Heading */}
      <h1 className="text-4xl font-bold mb-6 text-lightText">
        Explore <span className="text-primary">Internships</span>
      </h1>

      {/* Search bar */}
      <div className="max-w-3xl mb-10">
        <input
          type="text"
          placeholder="Search by role, skills or company..."
          className="w-full px-5 py-3 bg-[#111] border border-[#1f1f1f] rounded-xl text-lightText
                     focus:border-primary outline-none"
        />
      </div>

      {/* Filter chips */}
      <div className="flex flex-wrap gap-3 mb-10">
        {["Remote", "On-site", "Hybrid", "Software", "ML", "UI/UX"].map((tag, i) => (
          <button
            key={i}
            className="px-4 py-2 text-sm bg-[#0f0f0f] border border-[#1f1f1f] rounded-full
                       text-gray-300 hover:border-primary transition"
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Internships Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {internships.map((job, i) => (
          <div
            key={i}
            className="p-6 bg-[#0f0f0f] border border-[#1f1f1f] rounded-xl shadow-sm card-strong"
          >
            <h3 className="text-xl font-semibold text-primary">{job.title}</h3>
            <p className="text-gray-400 mt-1">{job.company}</p>
            <p className="text-gray-500 text-sm mt-1">{job.location}</p>

            <p className="text-gray-300 font-medium mt-4">{job.stipend}</p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mt-4">
              {job.skills.map((s, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-[#111] text-gray-300 text-xs border border-[#1f1f1f] rounded-full"
                >
                  {s}
                </span>
              ))}
            </div>

            {/* Action */}
            <button
              className="mt-6 w-full py-2 bg-primary text-dark font-semibold rounded-md btn-glow btn-strong"
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
