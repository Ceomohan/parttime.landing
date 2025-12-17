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
    <div
      className={`min-h-screen flex flex-col transition-all duration-700 ${
        theme === "dark"
          ? "bg-gradient-to-b from-pt-dark to-pt-light text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Header */}
      <Header theme={theme} setTheme={setTheme} />

      {/* Main */}
      <main className="flex-grow pt-6">
        <Routes>
          <Route path="/" element={<Home theme={theme} />} />
          <Route path="/home" element={<Home theme={theme} />} />
          <Route path="/browse" element={<Browse theme={theme} />} />
          <Route path="/post" element={<PostJob theme={theme} />} />
          <Route path="/about" element={<About theme={theme} />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer theme={theme} />
    </div>
  );
}

/* ================= HEADER ================= */
function Header({ theme, setTheme }) {
  const textColor = theme === "dark" ? "text-white" : "text-gray-900";
  const subTextColor = theme === "dark" ? "text-gray-300" : "text-gray-700";

  return (
    <header className="relative sticky top-0 z-50 backdrop-blur-xl bg-white/10 dark:bg-black/10 shadow-lg overflow-hidden">
      {/* Floating particles */}
      <div className="absolute top-2 left-10 w-3 h-3 rounded-full bg-pink-400 animate-floatFast opacity-70" />
      <div className="absolute top-6 right-16 w-4 h-4 rounded-full bg-indigo-400 animate-floatSlow opacity-60" />
      <div className="absolute bottom-2 left-1/2 w-5 h-5 rounded-full bg-yellow-300 animate-floatSlow opacity-50" />

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative z-10">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div
            className={`w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500
                        flex items-center justify-center font-extrabold text-xl
                        animate-floatSlow shadow-cosmic group-hover:scale-110 transition ${
                          theme === "dark" ? "text-white" : "text-black"
                        }`}
          >
            PT
          </div>
          <div>
            <div
              className={`font-bold text-2xl animate-fadeUp ${
                theme === "dark" ? "text-cosmic" : "text-gradient-light"
              }`}
            >
              PART TIME
            </div>
            <div className={`text-xs animate-fadeUp delay-1 ${subTextColor}`}>
              Hire part-time talent
            </div>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          <Link
            to="/browse"
            className={`nav-link hover:text-pt-dark-pink transition-colors duration-300 animate-fadeUp delay-2 ${
              textColor
            }`}
          >
            Browse
          </Link>
          <Link
            to="/post"
            className={`nav-link hover:text-pt-dark-pink transition-colors duration-300 animate-fadeUp delay-3 ${
              textColor
            }`}
          >
            Post Job
          </Link>
          <Link
            to="/about"
            className={`nav-link hover:text-pt-dark-pink transition-colors duration-300 animate-fadeUp delay-4 ${
              textColor
            }`}
          >
            About
          </Link>

          {/* Theme Toggle */}
          <button
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
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
function Footer({ theme }) {
  const bgColor = theme === "dark" ? "bg-black/60 text-white" : "bg-gray-200 text-gray-900";

  return (
    <footer className={`relative mt-16 overflow-hidden ${bgColor}`}>
      {/* Floating glow */}
      <div className="absolute top-6 left-16 w-3 h-3 bg-pink-400 rounded-full animate-floatFast opacity-70" />
      <div className="absolute bottom-6 right-20 w-4 h-4 bg-indigo-400 rounded-full animate-floatSlow opacity-60" />

      <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm animate-pulseSoft">
        © {new Date().getFullYear()} PART TIME. All rights reserved.
      </div>
    </footer>
  );
}

