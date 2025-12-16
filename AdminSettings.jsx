import React, { useState } from 'react';

export default function AdminSettings() {
  const [siteName, setSiteName] = useState('My Website');
  const [isMaintenanceMode, setIsMaintenanceMode] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSaveSettings = () => {
    // Here you can call API to save settings
    alert('Settings saved successfully!');
  };

  const handleChangePassword = () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Call API to change password
    alert('Password changed successfully!');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Admin Settings</h1>

      {/* Site Settings */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Site Settings</h2>
        <div className="mb-4">
          <label className="block mb-1">Site Name</label>
          <input
            type="text"
            value={siteName}
            onChange={(e) => setSiteName(e.target.value)}
            className="border rounded px-3 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={isMaintenanceMode}
              onChange={(e) => setIsMaintenanceMode(e.target.checked)}
            />
            Maintenance Mode
          </label>
        </div>
        <button
          onClick={handleSaveSettings}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Save Settings
        </button>
      </section>

      {/* Change Password */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Change Password</h2>
        <div className="mb-4">
          <label className="block mb-1">New Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded px-3 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border rounded px-3 py-2 w-full"
          />
        </div>
        <button
          onClick={handleChangePassword}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Change Password
        </button>
      </section>

      {/* Future: User Management Section */}
      <section>
        <h2 className="text-xl font-semibold mb-2">User Management</h2>
        <p className="text-gray-500">Add, edit, or remove users here.</p>
      </section>
    </div>
  );
}
