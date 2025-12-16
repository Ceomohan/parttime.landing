import React from 'react'

const sampleJobs = [
  {id:1, title:'React Frontend Developer', price:'₹15,000 - ₹25,000', tags:['React','Frontend']},
  {id:2, title:'Logo Designer', price:'₹3,000 - ₹8,000', tags:['Design','Logo']},
  {id:3, title:'Content Writer (Part-time)', price:'₹5,000 - ₹12,000', tags:['Writing']},
  {id:4, title:'SEO Specialist', price:'₹8,000 - ₹20,000', tags:['Marketing','SEO']}
]

export default function JobsPreview(){ 
  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {sampleJobs.map(job => (
        <div key={job.id} className="p-4 bg-white rounded-xl shadow hover:shadow-md transition">
          <div className="font-semibold">{job.title}</div>
          <div className="text-sm text-gray-500 mt-1">{job.price}</div>
          <div className="mt-3 flex gap-2 flex-wrap">
            {job.tags.map(t=> <span key={t} className="text-xs px-2 py-1 border rounded-full">{t}</span>)}
          </div>
          <div className="mt-4 flex items-center justify-between">
            <a href="/browse" className="text-pt-dark-pink text-sm">View</a>
            <button className="px-3 py-1 rounded-md bg-pt-mint text-white text-sm">Apply</button>
          </div>
        </div>
      ))}
    </div>
  )
}
