import React from "react";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const navigate = useNavigate();

  const dashboardItems = [
    {
      title: "Users",
      description: "Manage users, view registered users, etc.",
      path: "/admin/users",
    },
    {
      title: "Jobs",
      description: "Manage job postings, approve or reject posts.",
      path: "/admin/job",
    },
    {
      title: "Reports",
      description: "View site statistics and reports.",
      path: "/admin/report",
    },
    {
      title: "Settings",
      description: "Admin settings and configurations.",
      path: "/admin-settings",
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {dashboardItems.map((item, index) => (
          <div
            key={index}
            className="p-6 border rounded-lg cursor-pointer hover:bg-gray-100"
            onClick={() => navigate(item.path)}
          >
            <h2 className="font-semibold text-lg">{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
