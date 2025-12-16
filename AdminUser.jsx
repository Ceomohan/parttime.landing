import React, { useState } from "react";

export default function AdminUsers() {
  const [users, setUsers] = useState([
    { id: 1, name: "Alice", email: "alice@example.com", role: "user" },
    { id: 2, name: "Bob", email: "bob@example.com", role: "user" },
    { id: 3, name: "Charlie", email: "charlie@example.com", role: "admin" },
  ]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("user");

  // Generate a unique ID that is always higher than current max ID
  const generateId = () => {
    if (users.length === 0) return 1;
    const maxId = Math.max(...users.map((user) => user.id));
    return maxId + 1;
  };

  // Add new user
  const handleAddUser = () => {
    if (!name || !email) return;

    const newUser = {
      id: generateId(),
      name,
      email,
      role,
    };
    setUsers([...users, newUser]);
    setName("");
    setEmail("");
    setRole("user");
  };

  // Remove user by id
  const handleRemoveUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Manage Users</h1>

      {/* Add User Form */}
      <div className="mb-6 p-4 border rounded-md">
        <h2 className="font-semibold mb-2">Add New User</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Name"
            className="border px-2 py-1 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="border px-2 py-1 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <select
            className="border px-2 py-1 rounded"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <button
            onClick={handleAddUser}
            className="px-4 py-1 bg-green-500 text-white rounded"
          >
            Add
          </button>
        </div>
      </div>

      {/* Users Table */}
      <table className="min-w-full border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2 text-left">ID</th>
            <th className="border px-4 py-2 text-left">Name</th>
            <th className="border px-4 py-2 text-left">Email</th>
            <th className="border px-4 py-2 text-left">Role</th>
            <th className="border px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{user.id}</td>
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{user.role}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleRemoveUser(user.id)}
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
