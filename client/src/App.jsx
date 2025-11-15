function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          InternHunt
          <h1 className="text-3xl font-bold text-blue-600">Tailwind Works!</h1>
        </h1>

        <p className="text-gray-600 text-lg">
          Your platform to track internships, applications and progress.
        </p>

        <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
