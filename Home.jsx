import React, { useState } from 'react'
import JobsPreview from '../components/JobCard'

export default function Home() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden animate-fadeInUp">
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight animate-fadeInUp">
              Find skilled freelancers & part-time talent
            </h1>
            <p className="mt-4 text-gray-600 animate-fadeInUp delay-200">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, doloremque.
            </p>

            <div className="mt-6 flex gap-3 animate-fadeInUp delay-400">
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search jobs or skills"
                className="flex-1 px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-pt-mint transition"
              />
              <select
                value={category}
                onChange={e => setCategory(e.target.value)}
                className="px-3 py-3 rounded-md border focus:ring-2 focus:ring-pt-mint transition"
              >
                <option>All</option>
                <option>Design</option>
                <option>Development</option>
                <option>Writing</option>
                <option>Marketing</option>
              </select>
              <button className="px-5 py-3 rounded-md bg-pt-pink text-white font-medium animate-pulseScale hover:scale-105 transition">
                Search
              </button>
            </div>

            <div className="mt-8 flex gap-4 animate-fadeInUp delay-600">
              <a
                href="#browse"
                className="px-5 py-3 rounded-md border hover:bg-pt-mint hover:text-white transition"
              >
                Browse jobs
              </a>
              <a
                href="/post"
                className="px-5 py-3 rounded-md bg-pt-mint text-white hover:bg-pt-dark-mint transition"
              >
                Post a job
              </a>
            </div>
          </div>

          <div className="hidden md:block animate-fadeInUp delay-800">
            <div className="bg-gradient-to-br from-pt-pink to-pt-mint rounded-3xl p-8 text-white shadow-lg">
              <h3 className="text-xl font-semibold">Top categories</h3>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {['Design', 'Development', 'Writing', 'Marketing'].map((cat, i) => (
                  <div
                    key={i}
                    className="bg-white/20 rounded-xl p-4 hover:scale-105 transform transition duration-300"
                  >
                    <div className="font-semibold">{cat}</div>
                    <div className="text-xs mt-1">{Math.floor(Math.random() * 1500) + 100}+ jobs</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="max-w-7xl mx-auto px-6 py-12 animate-fadeInUp" id="browse">
        <h2 className="text-2xl font-bold">Featured Jobs</h2>
        <p className="text-gray-500 mt-2">
          Curated part-time & freelance gigs — lorem ipsum used as placeholder details.
        </p>
        <JobsPreview />
      </section>

      {/* How it works */}
      <section className="bg-gray-50 py-12 animate-fadeInUp">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-bold">How It Works</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Post a job', 'Hire talent', 'Pay securely'].map((step, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transform hover:-translate-y-2 transition duration-500 animate-fadeInUp delay-200"
              >
                <div className="text-xl font-semibold">{step}</div>
                <div className="mt-2 text-gray-500">Lorem ipsum dolor sit amet.</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-6 py-12 animate-fadeInUp">
        <h3 className="text-2xl font-bold">What people say</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { text: '"Great platform to hire fast."', name: 'Alex' },
            { text: '"Found perfect part-time designer."', name: 'Priya' },
            { text: '"Smooth payment & communication."', name: 'Rohit' },
          ].map((t, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-2 transition duration-500 animate-fadeInUp delay-300"
            >
              {t.text}
              <div className="mt-3 text-sm text-gray-500">— {t.name}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

