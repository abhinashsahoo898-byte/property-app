import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import EntryModal from './components/EntryModal';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Dashboard from './components/Dashboard'; 
import AdminPanel from './components/AdminPanel';
import BackgroundDecor from './components/BackgroundDecor';

const About = () => <div className="p-20 text-center text-slate-600 dark:text-slate-300 text-2xl">About Us Page Content</div>;
const Contact = () => <div className="p-20 text-center text-slate-600 dark:text-slate-300 text-2xl">Contact Us Form</div>;

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  // --- DEBUG MODE: FORCE MODAL TO SHOW ---
  // If you want to see the website, change "true" to "false" below.
  const showModalAlways = true; 

  return (
    <div className="font-sans text-slate-800 dark:text-white transition-colors duration-300 relative min-h-screen selection:bg-teal-500 selection:text-white">
       <BackgroundDecor />

       <div className="relative z-10">
          <AnimatePresence mode="wait">
            {/* FORCE SHOW MODAL for testing */}
            {(showModalAlways || !user) ? (
              <EntryModal key="modal" onComplete={handleLogin} />
            ) : (
              <Router>
                <div className="min-h-screen bg-transparent"> 
                    <Navbar user={user} />
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/projects" element={<Dashboard user={user} />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/admin" element={<AdminPanel />} />
                      <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </div>
              </Router>
            )}
          </AnimatePresence>
       </div>
    </div>
  );
}

export default App;