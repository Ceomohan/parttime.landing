import React, { useEffect } from "react";

export default function Logout() {
  useEffect(() => {
    // Remove the user from localStorage
    localStorage.removeItem("pt-user");

    // Redirect to Sign In page
    setTimeout(() => {
      window.location.href = "/signin";
    }, 1000);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-6 bg-white rounded-xl shadow-md text-center">
        <h1 className="text-xl font-semibold">Logging out...</h1>
        <p className="text-gray-500 mt-2">Please wait</p>
      </div>
    </div>
  );
}
