import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Lock, RefreshCw, Download } from 'lucide-react';

const AdminPanel = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === '1234') { // Simple PIN
      setIsAuthenticated(true);
      fetchLeads();
    } else {
      alert("Invalid Password!");
    }
  };

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const res = await axios.get('http://localhost:5000/api/leads');
      setLeads(res.data);
    } catch (err) {
      alert("Failed to fetch data. Is the backend running?");
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100 dark:bg-slate-900">
        <form onSubmit={handleLogin} className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg w-full max-w-sm text-center">
          <div className="mx-auto w-12 h-12 bg-red-100 text-red-500 rounded-full flex items-center justify-center mb-4">
            <Lock size={24} />
          </div>
          <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">Admin Access</h2>
          <input 
            type="password" 
            placeholder="Enter PIN (1234)" 
            className="w-full px-4 py-3 rounded-lg border dark:bg-slate-700 dark:border-slate-600 dark:text-white mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="w-full bg-slate-900 text-white py-3 rounded-lg font-semibold hover:bg-slate-800">
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-slate-800 dark:text-white">Lead Dashboard</h1>
          <button 
            onClick={fetchLeads} 
            className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
          >
            <RefreshCw size={18} className={loading ? "animate-spin" : ""} /> Refresh Data
          </button>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-200 uppercase text-xs font-bold">
                <tr>
                  <th className="p-4">Date</th>
                  <th className="p-4">Name</th>
                  <th className="p-4">Phone</th>
                  <th className="p-4">Project</th>
                  <th className="p-4">Size</th>
                  <th className="p-4">Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                {leads.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="p-8 text-center text-slate-500">No leads found yet.</td>
                  </tr>
                ) : (
                  leads.map((lead, index) => (
                    <tr key={index} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 text-slate-700 dark:text-slate-300">
                      <td className="p-4 text-sm">{lead.timestamp}</td>
                      <td className="p-4 font-medium">{lead.name}</td>
                      <td className="p-4 font-mono text-sm">{lead.phone}</td>
                      <td className="p-4 text-primary dark:text-teal-400">{lead.project}</td>
                      <td className="p-4">{lead.size}</td>
                      <td className="p-4 font-semibold">{lead.price}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;