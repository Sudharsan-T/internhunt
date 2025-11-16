export default function Signup() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[350px] p-6 bg-white shadow rounded">
        <h2 className="text-2xl mb-4 font-bold text-center">Sign Up</h2>

        <input
          type="text"
          placeholder="Name"
          className="border p-2 w-full mb-3 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-3 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-3 rounded"
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Sign Up
        </button>
      </div>
    </div>
  );
}
