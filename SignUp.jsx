<<<<<<< HEAD
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  function submit(e) {
    e.preventDefault();

    const userData = { 
      name, 
      email, 
      password, 
      role: email === "admin@example.com" ? "admin" : "user" 
    };

    localStorage.setItem("pt-user", JSON.stringify(userData));
    setSuccess(true);

    setName('');
    setEmail('');
    setPassword('');

    setTimeout(() => navigate("/signin"), 1500);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pt-pink to-pt-mint">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>

        {success && (
          <div className="mb-4 p-3 text-center bg-green-100 border border-green-300 text-green-700 rounded-md">
            🎉 Account created! Redirecting to Sign In...
          </div>
        )}

        <form onSubmit={submit} className="space-y-4">
          <div>
            <label>Full Name</label>
            <input value={name} onChange={e => setName(e.target.value)} className="w-full mt-2 px-3 py-2 border rounded-md" required />
          </div>

          <div>
            <label>Email</label>
            <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="w-full mt-2 px-3 py-2 border rounded-md" required />
          </div>

          <div>
            <label>Password</label>
            <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="w-full mt-2 px-3 py-2 border rounded-md" required />
          </div>

          <button className="w-full py-2 rounded-md bg-pt-mint text-white">Sign Up</button>
        </form>

        <p className="text-sm text-gray-500 mt-4 text-center">
          Already have an account? <a href="/signin" className="text-pt-pink font-medium">Sign In</a>
        </p>
      </div>
    </div>
  );
}

=======
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  function submit(e) {
    e.preventDefault();

    const userData = { 
      name, 
      email, 
      password, 
      role: email === "admin@example.com" ? "admin" : "user" 
    };

    localStorage.setItem("pt-user", JSON.stringify(userData));
    setSuccess(true);

    setName('');
    setEmail('');
    setPassword('');

    setTimeout(() => navigate("/signin"), 1500);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pt-pink to-pt-mint">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>

        {success && (
          <div className="mb-4 p-3 text-center bg-green-100 border border-green-300 text-green-700 rounded-md">
            🎉 Account created! Redirecting to Sign In...
          </div>
        )}

        <form onSubmit={submit} className="space-y-4">
          <div>
            <label>Full Name</label>
            <input value={name} onChange={e => setName(e.target.value)} className="w-full mt-2 px-3 py-2 border rounded-md" required />
          </div>

          <div>
            <label>Email</label>
            <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="w-full mt-2 px-3 py-2 border rounded-md" required />
          </div>

          <div>
            <label>Password</label>
            <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="w-full mt-2 px-3 py-2 border rounded-md" required />
          </div>

          <button className="w-full py-2 rounded-md bg-pt-mint text-white">Sign Up</button>
        </form>

        <p className="text-sm text-gray-500 mt-4 text-center">
          Already have an account? <a href="/signin" className="text-pt-pink font-medium">Sign In</a>
        </p>
      </div>
    </div>
  );
}

>>>>>>> d87ac241a95a5ee40d192550cf09261d5df70803
