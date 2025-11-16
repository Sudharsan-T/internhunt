import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";
import LogoStrip from "./components/LogoStrip";
import Features from "./components/Features";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Explore from "./pages/Explore";

function App() {
  return (
    <Router>
      <div className="bg-dark min-h-screen text-lightText">

        {/* Top Scroll Progress Bar */}
        <ScrollProgress />

        {/* Navbar */}
        <Navbar />

        <main>
          <Routes>

            {/* Landing Page */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <LogoStrip />
                  <Features />
                </>
              }
            />

            {/* Explore Page */}
            <Route path="/explore" element={<Explore />} />

            {/* Auth Pages */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
