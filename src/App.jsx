import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./styles.css";

// Pages
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import PostJob from "./pages/PostJob";
import About from "./pages/About";

export default function App() {
  const [theme, setTheme] = useState("dark");

  /* ---------- LOAD THEME ON REFRESH ---------- */
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.body.className = savedTheme;
  }, []);

  /* ---------- APPLY THEME ---------- */
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen flex flex-col transition-all duration-700">
      {/* Header */}
      <Header theme={theme} setTheme={setTheme} />

      {/* Main */}
      <main className="flex-grow pt-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/post" element={<PostJob />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

/* ================= HEADER ================= */
function Header({ theme, setTheme }) {
  return (
    <header className="relative sticky top-0 z-50 backdrop-blur-xl bg-white/10 shadow-lg overflow-hidden">
      {/* Floating particles */}
      <div className="absolute top-2 left-10 w-3 h-3 rounded-full bg-pink-400 animate-floatFast opacity-70" />
      <div className="absolute top-6 right-16 w-4 h-4 rounded-full bg-indigo-400 animate-floatSlow opacity-60" />
      <div className="absolute bottom-2 left-1/2 w-5 h-5 rounded-full bg-yellow-300 animate-floatSlow opacity-50" />

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative z-10">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500
                          flex items-center justify-center text-white font-extrabold text-xl
                          animate-floatSlow shadow-cosmic group-hover:scale-110 transition">
            PT
          </div>
          <div>
            <div className="font-bold text-2xl text-cosmic animate-fadeUp">
              PART TIME
            </div>
            <div className="text-xs text-gray-300 animate-fadeUp delay-1">
              Hire part-time talent
            </div>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          <Link to="/browse" className="nav-link">Browse</Link>
          <Link to="/post" className="nav-link">Post Job</Link>
          <Link to="/about" className="nav-link">About</Link>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="ml-3 px-4 py-2 rounded-lg bg-white/20 backdrop-blur 
                       hover:scale-110 transition-all duration-300 animate-pulseSoft"
          >
            {theme === "dark" ? "🌞 Light" : "🌙 Dark"}
          </button>
        </nav>
      </div>
    </header>
  );
}

/* ================= FOOTER ================= */
function Footer() {
  return (
    <footer className="relative bg-black/60 text-white mt-16 overflow-hidden">
      {/* Floating glow */}
      <div className="absolute top-6 left-16 w-3 h-3 bg-pink-400 rounded-full animate-floatFast opacity-70" />
      <div className="absolute bottom-6 right-20 w-4 h-4 bg-indigo-400 rounded-full animate-floatSlow opacity-60" />

      <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm animate-pulseSoft">
        © {new Date().getFullYear()} PART TIME. All rights reserved.
      </div>
    </footer>
  );
}

