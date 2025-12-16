import React from 'react'

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 animate-fadeInUp">
      <h1 className="text-2xl font-bold animate-fadeInUp">About PART TIME</h1>
      <p className="mt-4 text-gray-600 animate-fadeInUp delay-200">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, explicabo.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: 'Mission', desc: 'Lorem ipsum dolor sit amet.' },
          { title: 'Vision', desc: 'Lorem ipsum dolor sit amet.' },
          { title: 'Values', desc: 'Lorem ipsum dolor sit amet.' },
        ].map((item, i) => (
          <div
            key={i}
            className="p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transform hover:-translate-y-2 transition duration-500 animate-fadeInUp"
          >
            <div className="font-semibold text-pt-pink">{item.title}</div>
            <div className="text-sm text-gray-500 mt-2">{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

