import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import EntryModal from './components/EntryModal';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import ChatBot from './components/ChatBot'; 
// AdminPanel import removed

const About = () => <div className="min-h-screen bg-midnight pt-32 text-center text-white text-2xl font-serif">About Us Page Content</div>;
const Contact = () => <div className="min-h-screen bg-midnight pt-32 text-center text-white text-2xl font-serif">Contact Us Form</div>;

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  return (
    <div className="font-sans text-slate-800 dark:text-white transition-colors duration-300 relative min-h-screen selection:bg-primary selection:text-white">
       
       <div className="relative z-10">
          <AnimatePresence mode="wait">
            {!user ? (
              <EntryModal key="modal" onComplete={handleLogin} />
            ) : (
              <Router>
                <div className="min-h-screen bg-midnight"> 
                    <Navbar user={user} />
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/projects" element={<Dashboard user={user} />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/contact" element={<Contact />} />
                      {/* Admin Route Removed */}
                      <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                    <ChatBot />
                </div>
              </Router>
            )}
          </AnimatePresence>
       </div>
    </div>
  );
}

export default App;