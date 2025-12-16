import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

import Home from './pages/Home';
import Browse from './pages/Browse';
import PostJob from './pages/PostJob';
import About from './pages/About';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Admin from './pages/Admin';
import AdminSettings from './pages/AdminSettings';
import AdminUser from './pages/AdminUser'; 
import AdminJob from './pages/AdminJob'; 

import AdminReport from './pages/AdminReport'; 
// Inside <Routes>:
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("loggedIn") === "true";
    const savedRole = localStorage.getItem("role");
    setIsLoggedIn(saved);
    setRole(savedRole);
  }, []);

  return (
    <div className="min-h-screen">
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} role={role} />

      <main className="pt-6">
        <Routes>
          <Route path="/" element={<SignIn setIsLoggedIn={setIsLoggedIn} setRole={setRole} />} />
          <Route path="/signin" element={<SignIn setIsLoggedIn={setIsLoggedIn} setRole={setRole} />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/browse" element={<ProtectedRoute><Browse /></ProtectedRoute>} />
          <Route path="/post" element={<ProtectedRoute><PostJob /></ProtectedRoute>} />
          <Route path="/about" element={<About />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<ProtectedAdmin><Admin /></ProtectedAdmin>} />
          <Route path="/admin/users" element={<ProtectedAdmin><AdminUser /></ProtectedAdmin>} />
          <Route path="/admin/report" element={<ProtectedAdmin><AdminReport /></ProtectedAdmin>} />
          
          <Route path="/admin/job" element={<ProtectedAdmin><AdminJob /></ProtectedAdmin>} />
          <Route path="/admin-settings" element={<ProtectedAdmin><AdminSettings /></ProtectedAdmin>} /> {/* <-- Add this */}
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

/* ----------------- HEADER ----------------- */
function Header({ isLoggedIn, setIsLoggedIn, role }) {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("role");
    setIsLoggedIn(false);
    navigate("/signin");
  }

  return (
    <header className="shadow-sm bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to={isLoggedIn ? "/home" : "/"} className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-pt-pink to-pt-mint flex items-center justify-center text-white font-bold">PT</div>
          <div>
            <div className="font-bold text-lg">PART TIME</div>
            <div className="text-xs text-gray-500">Hire part-time talent</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link to="/browse" className="hover:text-pt-dark-pink">Browse Jobs</Link>
          <Link to="/post" className="hover:text-pt-dark-pink">Post Job</Link>
          <Link to="/about" className="hover:text-pt-dark-pink">About</Link>

          {role === "admin" && <Link to="/admin" className="hover:text-pt-dark-pink">Admin</Link>}

          {!isLoggedIn ? (
            <>
              <Link to="/signin" className="hover:text-pt-dark-pink">Sign In</Link>
              <Link to="/signup" className="px-4 py-2 rounded-md bg-pt-pink text-white font-medium">Sign Up</Link>
            </>
          ) : (
            <button onClick={logout} className="px-4 py-2 rounded-md bg-red-500 text-white font-medium">Logout</button>
          )}
        </nav>

        <div className="md:hidden">
          <MobileMenu isLoggedIn={isLoggedIn} logout={logout} role={role} />
        </div>
      </div>
    </header>
  );
}

/* ----------------- MOBILE MENU ----------------- */
function MobileMenu({ isLoggedIn, logout, role }) {
  return (
    <details className="mr-2">
      <summary className="cursor-pointer px-3 py-2 rounded-md border">Menu</summary>
      <div className="mt-2 p-4 bg-white rounded-md shadow-sm">
        <Link className="block py-1" to="/browse">Browse Jobs</Link>
        <Link className="block py-1" to="/post">Post Job</Link>
        <Link className="block py-1" to="/about">About</Link>
        {role === "admin" && <Link className="block py-1" to="/admin">Admin</Link>}

        {!isLoggedIn ? (
          <>
            <Link className="block py-1" to="/signin">Sign In</Link>
            <Link className="block py-1" to="/signup">Sign Up</Link>
          </>
        ) : (
          <button onClick={logout} className="block w-full text-left py-1 text-red-500">Logout</button>
        )}
      </div>
    </details>
  );
}

/* ----------------- FOOTER ----------------- */
function Footer() {
  return (
    <footer className="mt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-8 text-sm text-gray-600 flex flex-col md:flex-row justify-between">
        <div>
          <div className="font-bold">PART TIME</div>
          <div className="mt-2">© {new Date().getFullYear()} PART TIME. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}

/* ----------------- PROTECTED ROUTES ----------------- */
function ProtectedRoute({ children }) {
  const loggedIn = localStorage.getItem("loggedIn") === "true";
  if (!loggedIn) {
    return <div className="p-8 text-red-500 font-bold">Access Denied. Please sign in.</div>;
  }
  return children;
}

function ProtectedAdmin({ children }) {
  const role = localStorage.getItem("role");
  if (role !== "admin") {
    return <div className="p-8 text-red-500 font-bold">Access Denied. You are not an admin.</div>;
  }
  return children;
}
