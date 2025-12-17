import React from "react";

export default function About() {
  return (
    <section className="relative w-full min-h-screen px-6 py-28 overflow-hidden">

      {/* 🌌 BACKGROUND BLOBS (FULL PAGE) */}
      <div className="absolute -top-40 -left-40 w-[32rem] h-[32rem] rounded-full bg-purple-500/30 blur-3xl float-cosmic-slow blob-spin" />
      <div className="absolute top-1/4 -right-40 w-[36rem] h-[36rem] rounded-full bg-pink-500/25 blur-3xl float-cosmic-fast" />
      <div className="absolute bottom-0 left-1/3 w-[28rem] h-[28rem] rounded-full bg-emerald-400/20 blur-3xl float-cosmic-slow" />

      {/* 🔮 CONTENT WRAPPER (CENTERED) */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center animate-fadeUp">
          <h1 className="text-5xl md:text-6xl font-extrabold text-cosmic">
            About Our Platform
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-4xl mx-auto animate-fadeUp delay-1">
            A futuristic job marketplace connecting talent and opportunity
            through innovation, creativity, and experience.
          </p>
        </div>

        {/* INFO CARDS */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12">

          <div className="card-cosmic animate-fadeUp delay-2">
            <h3 className="text-xl font-bold text-cosmic mb-4">
              🚀 Our Mission
            </h3>
            <p className="text-gray-300 leading-relaxed">
              To empower freelancers and recruiters with a seamless, animated,
              and transparent hiring experience.
            </p>
          </div>

          <div className="card-cosmic animate-fadeUp delay-3">
            <h3 className="text-xl font-bold text-cosmic mb-4">
              🌌 Our Vision
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Creating a cosmic ecosystem where careers grow beyond borders
              and skills shine brighter than ever.
            </p>
          </div>

          <div className="card-cosmic animate-fadeUp delay-4">
            <h3 className="text-xl font-bold text-cosmic mb-4">
              ⚡ Why Choose Us
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Modern UI, advanced animations, smart discovery, and a platform
              built for the future of work.
            </p>
          </div>

        </div>

        {/* CTA SECTION */}
        <div className="mt-28 text-center animate-fadeUp delay-4">
          <h2 className="text-3xl md:text-4xl font-bold text-cosmic mb-6">
            Step Into the Future of Work
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto mb-10">
            Whether you’re hiring talent or showcasing your skills,
            this platform elevates your journey with technology and design.
          </p>

          
        </div>

      </div>
    </section>
  );
}
