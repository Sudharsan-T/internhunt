export default function Signup() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 bg-dark">
      
      {/* Background glow */}
      <div className="absolute left-1/2 -translate-x-1/2 top-20
                      w-[650px] h-[650px] rounded-full 
                      bg-[radial-gradient(circle,rgba(0,200,83,0.22),rgba(0,200,83,0.08),transparent)]
                      blur-3xl opacity-70 pointer-events-none" />

      <div className="relative z-10 w-full max-w-md bg-[#0f0f0f]/80 border border-[#1f1f1f] rounded-2xl px-8 py-10 shadow-xl backdrop-blur-md">

        <h1 className="text-3xl font-bold text-center mb-2">Create Account</h1>
        <p className="text-gray-400 text-center mb-8">Start your InternHunt journey</p>

        {/* Name */}
        <div className="mb-5">
          <label className="block text-gray-300 mb-2">Full Name</label>
          <input
            type="text"
            className="w-full px-4 py-3 bg-[#111] border border-[#2a2a2a] rounded-lg text-lightText
                       focus:outline-none focus:border-primary transition"
            placeholder="Your name"
          />
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="block text-gray-300 mb-2">Email</label>
          <input
            type="email"
            className="w-full px-4 py-3 bg-[#111] border border-[#2a2a2a] rounded-lg text-lightText
                       focus:outline-none focus:border-primary transition"
            placeholder="you@example.com"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-gray-300 mb-2">Password</label>
          <input
            type="password"
            className="w-full px-4 py-3 bg-[#111] border border-[#2a2a2a] rounded-lg text-lightText
                       focus:outline-none focus:border-primary transition"
            placeholder="••••••••"
          />
        </div>

        {/* Signup Button */}
        <button
          className="w-full py-3 bg-primary text-dark font-semibold rounded-lg text-lg btn-glow btn-strong"
        >
          Create Account
        </button>

        {/* Footer */}
        <p className="text-center text-gray-400 text-sm mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-primary hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
}
