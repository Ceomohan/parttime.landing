<<<<<<< HEAD
import React, { useState } from "react";

export default function AdminJob() {
  const [jobs, setJobs] = useState([
    { id: 1, title: "Frontend Developer", company: "ABC Corp", location: "Remote", salary: "₹40,000" },
    { id: 2, title: "Backend Developer", company: "XYZ Ltd", location: "Bangalore", salary: "₹50,000" },
  ]);

  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");

  // Generate unique ID
  const generateId = () => {
    if (jobs.length === 0) return 1;
    const maxId = Math.max(...jobs.map((job) => job.id));
    return maxId + 1;
  };

  // Add new job
  const handleAddJob = () => {
    if (!title || !company || !location || !salary) return;

    const newJob = {
      id: generateId(),
      title,
      company,
      location,
      salary,
    };

    setJobs([...jobs, newJob]);
    setTitle("");
    setCompany("");
    setLocation("");
    setSalary("");
  };

  // Remove job by ID
  const handleRemoveJob = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Manage Jobs</h1>

      {/* Add Job Form */}
      <div className="mb-6 p-4 border rounded-md">
        <h2 className="font-semibold mb-2">Add New Job</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Job Title"
            className="border px-2 py-1 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Company"
            className="border px-2 py-1 rounded"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <input
            type="text"
            placeholder="Location"
            className="border px-2 py-1 rounded"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <input
            type="text"
            placeholder="Salary"
            className="border px-2 py-1 rounded"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
          <button
            onClick={handleAddJob}
            className="px-4 py-1 bg-green-500 text-white rounded"
          >
            Add Job
          </button>
        </div>
      </div>

      {/* Jobs Table */}
      <table className="min-w-full border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2 text-left">ID</th>
            <th className="border px-4 py-2 text-left">Title</th>
            <th className="border px-4 py-2 text-left">Company</th>
            <th className="border px-4 py-2 text-left">Location</th>
            <th className="border px-4 py-2 text-left">Salary</th>
            <th className="border px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.id} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{job.id}</td>
              <td className="border px-4 py-2">{job.title}</td>
              <td className="border px-4 py-2">{job.company}</td>
              <td className="border px-4 py-2">{job.location}</td>
              <td className="border px-4 py-2">{job.salary}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleRemoveJob(job.id)}
                  className="px-2 py-1 bg-yellow-500 text-white rounded"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
=======
import React, { useState } from "react";

export default function AdminJob() {
  const [jobs, setJobs] = useState([
    { id: 1, title: "Frontend Developer", company: "ABC Corp", location: "Remote", salary: "₹40,000" },
    { id: 2, title: "Backend Developer", company: "XYZ Ltd", location: "Bangalore", salary: "₹50,000" },
  ]);

  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");

  // Generate unique ID
  const generateId = () => {
    if (jobs.length === 0) return 1;
    const maxId = Math.max(...jobs.map((job) => job.id));
    return maxId + 1;
  };

  // Add new job
  const handleAddJob = () => {
    if (!title || !company || !location || !salary) return;

    const newJob = {
      id: generateId(),
      title,
      company,
      location,
      salary,
    };

    setJobs([...jobs, newJob]);
    setTitle("");
    setCompany("");
    setLocation("");
    setSalary("");
  };

  // Remove job by ID
  const handleRemoveJob = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Manage Jobs</h1>

      {/* Add Job Form */}
      <div className="mb-6 p-4 border rounded-md">
        <h2 className="font-semibold mb-2">Add New Job</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Job Title"
            className="border px-2 py-1 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Company"
            className="border px-2 py-1 rounded"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <input
            type="text"
            placeholder="Location"
            className="border px-2 py-1 rounded"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <input
            type="text"
            placeholder="Salary"
            className="border px-2 py-1 rounded"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
          <button
            onClick={handleAddJob}
            className="px-4 py-1 bg-green-500 text-white rounded"
          >
            Add Job
          </button>
        </div>
      </div>

      {/* Jobs Table */}
      <table className="min-w-full border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2 text-left">ID</th>
            <th className="border px-4 py-2 text-left">Title</th>
            <th className="border px-4 py-2 text-left">Company</th>
            <th className="border px-4 py-2 text-left">Location</th>
            <th className="border px-4 py-2 text-left">Salary</th>
            <th className="border px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.id} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{job.id}</td>
              <td className="border px-4 py-2">{job.title}</td>
              <td className="border px-4 py-2">{job.company}</td>
              <td className="border px-4 py-2">{job.location}</td>
              <td className="border px-4 py-2">{job.salary}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleRemoveJob(job.id)}
                  className="px-2 py-1 bg-yellow-500 text-white rounded"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
>>>>>>> d87ac241a95a5ee40d192550cf09261d5df70803
