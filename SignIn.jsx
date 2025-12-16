<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignIn({ setIsLoggedIn, setRole }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("loggedIn") === "true") navigate("/home");
  }, []);

  function submit(e) {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem("pt-user"));
    if (!savedUser) return setError("No account found. Please sign up first.");
    if (savedUser.email !== email || savedUser.password !== password) return setError("Invalid email or password.");

    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("role", savedUser.role || "user");
    setIsLoggedIn(true);
    setRole(savedUser.role || "user");

    navigate("/home");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pt-mint to-pt-pink">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>

        {error && <div className="mb-4 p-3 text-red-700 bg-red-100 border border-red-300 rounded-md">{error}</div>}

        <form onSubmit={submit} className="space-y-4">
          <div>
            <label>Email</label>
            <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="w-full mt-2 px-3 py-2 border rounded-md" required />
          </div>

          <div>
            <label>Password</label>
            <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="w-full mt-2 px-3 py-2 border rounded-md" required />
          </div>

          <button type="submit" className="w-full py-2 bg-pt-pink text-white rounded-md">Sign In</button>
        </form>

        <p className="text-sm text-gray-500 mt-4 text-center">
          Don't have an account? <a href="/signup" className="text-pt-pink font-medium">Sign Up</a>
        </p>
      </div>
    </div>
  );
}


=======
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignIn({ setIsLoggedIn, setRole }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("loggedIn") === "true") navigate("/home");
  }, []);

  function submit(e) {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem("pt-user"));
    if (!savedUser) return setError("No account found. Please sign up first.");
    if (savedUser.email !== email || savedUser.password !== password) return setError("Invalid email or password.");

    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("role", savedUser.role || "user");
    setIsLoggedIn(true);
    setRole(savedUser.role || "user");

    navigate("/home");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pt-mint to-pt-pink">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>

        {error && <div className="mb-4 p-3 text-red-700 bg-red-100 border border-red-300 rounded-md">{error}</div>}

        <form onSubmit={submit} className="space-y-4">
          <div>
            <label>Email</label>
            <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="w-full mt-2 px-3 py-2 border rounded-md" required />
          </div>

          <div>
            <label>Password</label>
            <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="w-full mt-2 px-3 py-2 border rounded-md" required />
          </div>

          <button type="submit" className="w-full py-2 bg-pt-pink text-white rounded-md">Sign In</button>
        </form>

        <p className="text-sm text-gray-500 mt-4 text-center">
          Don't have an account? <a href="/signup" className="text-pt-pink font-medium">Sign Up</a>
        </p>
      </div>
    </div>
  );
}


>>>>>>> d87ac241a95a5ee40d192550cf09261d5df70803
