<<<<<<< HEAD
import React, { useState } from "react";

export default function AdminReport() {
  const [reports, setReports] = useState([
    { id: 1, title: "Monthly Sales", submittedBy: "Alice", date: "2025-12-01", status: "Pending" },
    { id: 2, title: "Bug Report", submittedBy: "Bob", date: "2025-12-05", status: "Completed" },
  ]);

  const [title, setTitle] = useState("");
  const [submittedBy, setSubmittedBy] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("Pending");

  // Generate unique ID
  const generateId = () => {
    if (reports.length === 0) return 1;
    const maxId = Math.max(...reports.map((report) => report.id));
    return maxId + 1;
  };

  // Add new report
  const handleAddReport = () => {
    if (!title || !submittedBy || !date) return;

    const newReport = {
      id: generateId(),
      title,
      submittedBy,
      date,
      status,
    };

    setReports([...reports, newReport]);
    setTitle("");
    setSubmittedBy("");
    setDate("");
    setStatus("Pending");
  };

  // Remove report
  const handleRemoveReport = (id) => {
    setReports(reports.filter((report) => report.id !== id));
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Manage Reports</h1>

      {/* Add Report Form */}
      <div className="mb-6 p-4 border rounded-md">
        <h2 className="font-semibold mb-2">Add New Report</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Report Title"
            className="border px-2 py-1 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Submitted By"
            className="border px-2 py-1 rounded"
            value={submittedBy}
            onChange={(e) => setSubmittedBy(e.target.value)}
          />
          <input
            type="date"
            className="border px-2 py-1 rounded"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <select
            className="border px-2 py-1 rounded"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>
          <button
            onClick={handleAddReport}
            className="px-4 py-1 bg-green-500 text-white rounded"
          >
            Add Report
          </button>
        </div>
      </div>

      {/* Reports Table */}
      <table className="min-w-full border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2 text-left">ID</th>
            <th className="border px-4 py-2 text-left">Title</th>
            <th className="border px-4 py-2 text-left">Submitted By</th>
            <th className="border px-4 py-2 text-left">Date</th>
            <th className="border px-4 py-2 text-left">Status</th>
            <th className="border px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report.id} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{report.id}</td>
              <td className="border px-4 py-2">{report.title}</td>
              <td className="border px-4 py-2">{report.submittedBy}</td>
              <td className="border px-4 py-2">{report.date}</td>
              <td className="border px-4 py-2">{report.status}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleRemoveReport(report.id)}
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

export default function AdminReport() {
  const [reports, setReports] = useState([
    { id: 1, title: "Monthly Sales", submittedBy: "Alice", date: "2025-12-01", status: "Pending" },
    { id: 2, title: "Bug Report", submittedBy: "Bob", date: "2025-12-05", status: "Completed" },
  ]);

  const [title, setTitle] = useState("");
  const [submittedBy, setSubmittedBy] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("Pending");

  // Generate unique ID
  const generateId = () => {
    if (reports.length === 0) return 1;
    const maxId = Math.max(...reports.map((report) => report.id));
    return maxId + 1;
  };

  // Add new report
  const handleAddReport = () => {
    if (!title || !submittedBy || !date) return;

    const newReport = {
      id: generateId(),
      title,
      submittedBy,
      date,
      status,
    };

    setReports([...reports, newReport]);
    setTitle("");
    setSubmittedBy("");
    setDate("");
    setStatus("Pending");
  };

  // Remove report
  const handleRemoveReport = (id) => {
    setReports(reports.filter((report) => report.id !== id));
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Manage Reports</h1>

      {/* Add Report Form */}
      <div className="mb-6 p-4 border rounded-md">
        <h2 className="font-semibold mb-2">Add New Report</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Report Title"
            className="border px-2 py-1 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Submitted By"
            className="border px-2 py-1 rounded"
            value={submittedBy}
            onChange={(e) => setSubmittedBy(e.target.value)}
          />
          <input
            type="date"
            className="border px-2 py-1 rounded"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <select
            className="border px-2 py-1 rounded"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>
          <button
            onClick={handleAddReport}
            className="px-4 py-1 bg-green-500 text-white rounded"
          >
            Add Report
          </button>
        </div>
      </div>

      {/* Reports Table */}
      <table className="min-w-full border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2 text-left">ID</th>
            <th className="border px-4 py-2 text-left">Title</th>
            <th className="border px-4 py-2 text-left">Submitted By</th>
            <th className="border px-4 py-2 text-left">Date</th>
            <th className="border px-4 py-2 text-left">Status</th>
            <th className="border px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report.id} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{report.id}</td>
              <td className="border px-4 py-2">{report.title}</td>
              <td className="border px-4 py-2">{report.submittedBy}</td>
              <td className="border px-4 py-2">{report.date}</td>
              <td className="border px-4 py-2">{report.status}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleRemoveReport(report.id)}
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
