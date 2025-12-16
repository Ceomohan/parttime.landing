import React, { useState } from 'react'

export default function PostJob() {
  const [title, setTitle] = useState('')
  const [budget, setBudget] = useState('')
  const [desc, setDesc] = useState('')

  function submit(e) {
    e.preventDefault()
    alert('Job posted (mock). Title: ' + title)
    setTitle('')
    setBudget('')
    setDesc('')
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 animate-fadeInUp">
      <h1 className="text-2xl font-bold animate-fadeInUp">Post a Job</h1>
      <form
        onSubmit={submit}
        className="mt-6 space-y-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition duration-500 animate-fadeInUp delay-200"
      >
        <div className="animate-fadeInUp delay-300">
          <label className="text-sm font-medium">Job Title</label>
          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="w-full mt-2 px-3 py-2 border rounded-md focus:ring-2 focus:ring-pt-pink transition"
          />
        </div>
        <div className="animate-fadeInUp delay-400">
          <label className="text-sm font-medium">Budget</label>
          <input
            value={budget}
            onChange={e => setBudget(e.target.value)}
            className="w-full mt-2 px-3 py-2 border rounded-md focus:ring-2 focus:ring-pt-mint transition"
          />
        </div>
        <div className="animate-fadeInUp delay-500">
          <label className="text-sm font-medium">Description</label>
          <textarea
            value={desc}
            onChange={e => setDesc(e.target.value)}
            rows={5}
            className="w-full mt-2 px-3 py-2 border rounded-md focus:ring-2 focus:ring-pt-pink transition"
          />
        </div>
        <div className="flex justify-end animate-fadeInUp delay-600">
          <button className="px-4 py-2 rounded-md bg-pt-mint text-white hover:bg-pt-dark-mint transition animate-pulseScale">
            Post Job
          </button>
        </div>
      </form>
    </div>
  )
}
