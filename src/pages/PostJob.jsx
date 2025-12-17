import React, { useState } from 'react';
import "../styles.css";

export default function PostJob() {
  const [title, setTitle] = useState('');
  const [budget, setBudget] = useState('');
  const [desc, setDesc] = useState('');

  const submit = (e) => {
    e.preventDefault();
    alert(`Job posted (mock). Title: ${title}`);
    setTitle('');
    setBudget('');
    setDesc('');
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 relative">
      {/* Floating Cosmic Orbs */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl float-cosmic-slow"></div>
      <div className="absolute top-32 -right-32 w-64 h-64 bg-pink-500/30 rounded-full blur-3xl float-cosmic-fast"></div>

      <h1 className="text-3xl md:text-4xl font-extrabold text-center text-cosmic animate-fadeUp">
        Post a Job
      </h1>

      <form
        onSubmit={submit}
        className="mt-8 space-y-6 card-cosmic animate-fadeUp delay-1"
      >
        {/* Job Title */}
        <div className="animate-fadeUp delay-2">
          <label className="block text-sm font-semibold text-gray-300 mb-2">Job Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter job title"
            className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-900 text-white focus:ring-2 focus:ring-pt-pink transition"
          />
        </div>

        {/* Budget */}
        <div className="animate-fadeUp delay-3">
          <label className="block text-sm font-semibold text-gray-300 mb-2">Budget</label>
          <input
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            placeholder="Enter budget"
            className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-900 text-white focus:ring-2 focus:ring-pt-mint transition"
          />
        </div>

        {/* Description */}
        <div className="animate-fadeUp delay-4">
          <label className="block text-sm font-semibold text-gray-300 mb-2">Description</label>
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            rows={5}
            placeholder="Describe the job in detail"
            className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-900 text-white focus:ring-2 focus:ring-pt-pink transition"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center animate-fadeUp delay-5">
          <button
            type="submit"
            className="px-6 py-3 rounded-xl button-cosmic text-lg font-semibold hover:scale-105 transition transform"
          >
            Post Job
          </button>
        </div>
      </form>
    </div>
  );
}
