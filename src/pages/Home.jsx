import React from "react";
import "../styles.css"; // make sure styles.css is in src/
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const features = [
    { icon: "⭐", title: "Best Talent", desc: "Find experienced freelancers verified for quality and skills" },
    { icon: "⚡", title: "Fast Hiring", desc: "Post a job and receive proposals within minutes" },
    { icon: "🛡️", title: "Secure Payments", desc: "Your money stays protected until the work is approved" },
  ];

  const steps = [
    { step: "Post your job", desc: "Describe your requirement" },
    { step: "Get proposals", desc: "Compare freelancers" },
    { step: "Hire & collaborate", desc: "Chat and manage work" },
    { step: "Pay securely", desc: "Release payment when satisfied" },
  ];

  const categories = [
    { icon: "💻", name: "Web Development" },
    { icon: "📱", name: "Mobile Apps" },
    { icon: "🖌️", name: "Design" },
    { icon: "✏️", name: "Writing" },
    { icon: "🎨", name: "Art & Illustration" },
    { icon: "📄", name: "Documents" },
  ];

  return (
    <div className="relative">

      {/* HERO SECTION */}
      <section className="relative py-32 text-center overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl float-cosmic-slow" />
        <div className="absolute top-40 -right-40 w-96 h-96 bg-violet-500/30 rounded-full blur-3xl float-cosmic-fast" />

        <div className="relative max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-cosmic animate-fadeUp">
            Hire skilled professionals <br /> for any job, anytime.
          </h1>

          <p className="mt-6 text-lg text-gray-300 animate-fadeUp delay-1">
            Connect with verified freelancers across design, development, marketing, writing, and more.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-gray-400 text-sm animate-fadeUp delay-2">
            <span>✔ Thousands of skilled freelancers</span>
            <span>✔ Secure payments, pay only when satisfied</span>
            <span>✔ Post a job and get instant bids</span>
          </div>

          <div className="mt-12 flex justify-center gap-6">
            <button
  onClick={() => navigate("/post")}
  className="
    group relative px-8 py-4 rounded-xl
    font-semibold tracking-wide text-white
    bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
    shadow-xl shadow-pink-500/30
    animate-fadeUp delay-3
    overflow-hidden
    transition-all duration-500
    hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50
    active:scale-95
    animate-floatSlow
  "
>
  {/* Shimmer sweep */}
  <span
    className="
      absolute inset-0
      bg-gradient-to-r from-transparent via-white/40 to-transparent
      translate-x-[-120%]
      group-hover:translate-x-[120%]
      transition-transform duration-1000
    "
  />

  {/* Pulse ring */}
  <span
    className="
      absolute inset-0 rounded-xl
      border border-white/30
      opacity-0
      group-hover:opacity-100
      group-hover:animate-pingSlow
    "
  />

  <span className="relative z-10">Post a Job</span>
</button>
<button
  onClick={() => navigate("/browse")}
  className="
    group relative px-8 py-4 rounded-xl
    font-semibold tracking-wide
    text-black
    bg-white
    shadow-xl shadow-indigo-500/20
    animate-fadeUp delay-4
    overflow-hidden
    transition-all duration-500
    hover:scale-110
    hover:text-white
    hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500
    hover:shadow-2xl hover:shadow-indigo-500/40
    active:scale-95
    animate-floatFast
  "
>
  {/* Glow blur */}
  <span
    className="
      absolute -inset-2
      bg-gradient-to-r from-pink-500 to-indigo-500
      opacity-0 blur-xl
      group-hover:opacity-50
      transition duration-500
    "
  />

  {/* Shimmer */}
  <span
    className="
      absolute inset-0
      bg-gradient-to-r from-transparent via-white/30 to-transparent
      translate-x-[-120%]
      group-hover:translate-x-[120%]
      transition-transform duration-1000
    "
  />

  <span className="relative z-10">Find Work</span>
</button>

          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
   <section className="py-24 max-w-6xl mx-auto px-6">
  <h2 className="text-3xl font-bold text-center animate-fadeUp">
    Make it happen with Freelancer
  </h2>

  <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
    {features.map((item, i) => (
      <div
        key={i}
        className={`card-cosmic text-center animate-fadeUp delay-${i + 1} relative overflow-hidden`}
      >
        {/* Floating / rotating icon */}
        <div className="text-4xl mb-4 float-cosmic-slow inline-block animate-pulseScale">
          {item.icon}
        </div>

        <h3 className="text-xl font-semibold">{item.title}</h3>
        <p className="mt-3 text-gray-400">{item.desc}</p>

        {/* Optional: tiny sparkles */}
        <span className="sparkle top-2 left-1/3"></span>
        <span className="sparkle top-1/2 right-1/4"></span>
      </div>
    ))}
  </div>
</section>


      {/* HOW IT WORKS SECTION */}
<section className="py-24 max-w-5xl mx-auto px-6">
  <h2 className="text-3xl font-bold text-center animate-fadeUp">
    How it works
  </h2>

  <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
    {steps.map((item, i) => (
      <div
        key={i}
        className={`flex items-start gap-4 bg-white/5 backdrop-blur p-6 rounded-xl card-cosmic animate-fadeUp delay-${i + 1}`}
      >
        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-purple-500 text-white font-bold rounded-full text-lg neon-glow">
          {i + 1}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">{item.step}</h3>
          <p className="mt-1 text-gray-400">{item.desc}</p>
        </div>
      </div>
    ))}
  </div>
</section>


     {/* CATEGORIES SECTION */}
<section className="py-24 max-w-6xl mx-auto px-6 relative">
  <h2 className="text-3xl font-bold text-center text-cosmic animate-fadeUp">
    Browse Categories
  </h2>

  <div className="mt-12 grid grid-cols-2 md:grid-cols-6 gap-8 justify-center">
    {categories.map((cat, i) => (
      <div
        key={i}
        className={`relative flex flex-col items-center animate-fadeUp delay-${i + 1} cursor-pointer`}
      >
        {/* Floating Icon with cosmic glow */}
        <div className="text-5xl mb-2 float-cosmic-slow shadow-cosmic p-4 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-500 text-white animate-fadeUp">
          {cat.icon}
        </div>

        {/* Category name with gradient text */}
        <p className="mt-2 text-sm text-cosmic font-semibold">{cat.name}</p>

        {/* Sparkles around icon */}
        <div className="sparkle absolute top-0 left-1/2 transform -translate-x-1/2"></div>
        <div className="sparkle absolute bottom-0 right-1/3"></div>
      </div>
    ))}
  </div>
</section>


    </div>
  );
}
