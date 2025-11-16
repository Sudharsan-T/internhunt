// client/src/App.jsx
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";
import LogoStrip from "./components/LogoStrip";
import Features from "./components/Features";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Explore from "./pages/Explore";

import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <div className="bg-dark min-h-screen text-lightText">
      <ScrollProgress />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<><Hero /><LogoStrip /><Features /></>} />
          <Route path="/explore" element={<ProtectedRoute><Explore /></ProtectedRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
