import React, { useState } from "react";

export default function Browse() {
  const [filter, setFilter] = useState("All");
  const [keyword, setKeyword] = useState("");

  const jobs = new Array(8).fill(0).map((_, i) => ({
    id: i,
    title: `Sample Job ${i + 1}`,
    cat: i % 2 ? "Design" : "Development",
    price: `₹${(i + 1) * 2000}`,
    icon: i % 2 ? "🎨" : "💻",
  }));

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-900 via-pink-900 to-indigo-900 animate-bgGradientSlow rounded-xl"></div>

      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text
                     bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400
                     text-center animate-fadeInUp">
        Browse Jobs
      </h1>

      {/* Filter Section */}
      <div className="mt-6 flex flex-col md:flex-row items-center gap-4 justify-center animate-fadeInUp delay-200">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-4 py-2 rounded-md bg-[#1a1a2e] text-white border border-gray-700
                     focus:ring-2 focus:ring-pt-mint transition-all duration-300 animate-floatSlow hover:scale-[1.03]"
        >
          <option>All</option>
          <option>Design</option>
          <option>Development</option>
        </select>

        <input
          placeholder="Filter by keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="px-4 py-2 rounded-md flex-1 bg-[#1a1a2e] text-white border border-gray-700
                     focus:ring-2 focus:ring-pt-pink transition-all duration-300 animate-floatSlow hover:scale-[1.03]"
        />
      </div>

      {/* Job Cards */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {jobs
          .filter(
            (j) =>
              (filter === "All" || j.cat === filter) &&
              j.title.toLowerCase().includes(keyword.toLowerCase())
          )
          .map((j, i) => (
            <div
              key={j.id}
              className={`p-6 rounded-2xl bg-gradient-to-br from-[#1a1a2e] to-[#0b0c1c]
                         shadow-2xl flex justify-between items-center animate-fadeInUp delay-${i + 1}
                         hover:-translate-y-4 hover:scale-[1.05] hover:shadow-purple-500/50
                         transition-all duration-700 animate-floatSlow`}
            >
              <div className="flex items-center gap-3">
                {/* Animated Icon */}
                <span className="text-3xl animate-spinSlow">{j.icon}</span>
                <div>
                  <div className="font-extrabold text-2xl bg-clip-text text-transparent
                                  bg-gradient-to-r from-pink-400 via-yellow-300 to-purple-400
                                  animate-gradientText hover:animate-pulseGradient transition-all">
                    {j.title}
                  </div>
                  <div className="text-sm text-gray-400 mt-1 animate-floatSlow">
                    <span className="bg-clip-text text-transparent
                                     bg-gradient-to-r from-green-300 via-blue-400 to-pink-400
                                     animate-gradientText hover:animate-pulseGradient transition-all">
                      {j.cat} • {j.price}
                    </span>
                  </div>
                </div>
              </div>
              <button
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-pt-pink to-pt-mint
                           text-white font-semibold hover:scale-110 hover:shadow-lg hover:shadow-pink-400/50
                           transition-all duration-500 animate-pulseScale animate-glow"
              >
                Apply
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

