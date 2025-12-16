import React, { useState } from 'react'

export default function Browse() {
  const [filter, setFilter] = useState('All')
  const [keyword, setKeyword] = useState('')
  const jobs = new Array(8).fill(0).map((_, i) => ({
    id: i,
    title: `Sample Job ${i + 1}`,
    cat: i % 2 ? 'Design' : 'Development',
    price: `₹${(i + 1) * 2000}`,
  }))

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 animate-fadeInUp">
      <h1 className="text-2xl font-bold animate-fadeInUp">Browse jobs</h1>

      {/* Filter Section */}
      <div className="mt-4 flex flex-col md:flex-row items-center gap-4 animate-fadeInUp delay-200">
        <select
          value={filter}
          onChange={e => setFilter(e.target.value)}
          className="px-3 py-2 border rounded-md focus:ring-2 focus:ring-pt-mint transition"
        >
          <option>All</option>
          <option>Design</option>
          <option>Development</option>
        </select>

        <input
          placeholder="Filter by keyword"
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
          className="px-3 py-2 border rounded-md flex-1 focus:ring-2 focus:ring-pt-pink transition"
        />
      </div>

      {/* Job Cards */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {jobs
          .filter(j => (filter === 'All' || j.cat === filter) && j.title.toLowerCase().includes(keyword.toLowerCase()))
          .map(j => (
            <div
              key={j.id}
              className="p-4 bg-white rounded-xl shadow-sm flex justify-between items-center animate-fadeInUp hover:shadow-lg hover:-translate-y-2 transition duration-500"
            >
              <div>
                <div className="font-semibold text-pt-dark-pink">{j.title}</div>
                <div className="text-sm text-gray-500">{j.cat} • {j.price}</div>
              </div>
              <div>
                <button className="px-4 py-2 rounded-md bg-pt-mint text-white hover:bg-pt-dark-mint transition animate-pulseScale">
                  Apply
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

