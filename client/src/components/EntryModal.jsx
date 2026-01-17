import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { Loader2, User, Phone, ArrowRight, Building2, Lock } from 'lucide-react';

const EntryModal = ({ onComplete }) => {
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
        onComplete(formData);
        setLoading(false);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
      
      {/* 1. BACKGROUND: Deep Blue Gradient (No Image) */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>

      {/* 2. CARD: White with RED BORDER (Debug) */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="relative z-10 w-full max-w-[480px] bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-red-500"
      >
        <div className="p-8 md:p-10">
          
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 text-blue-600 rounded-full mb-4">
              <Building2 size={32} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Welcome Back</h2>
            <p className="text-slate-500 mt-2">Enter details to access the dashboard.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="text-xs font-bold text-slate-500 uppercase">Full Name</label>
                <input 
                  type="text" 
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
            </div>

            <div>
                <label className="text-xs font-bold text-slate-500 uppercase">Phone Number</label>
                <input 
                  type="text" 
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="9876543210"
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                />
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl mt-4 flex items-center justify-center gap-2">
                {loading ? <Loader2 className="animate-spin"/> : "Enter Website"} <ArrowRight size={20} />
            </button>
          </form>

        </div>
      </motion.div>
    </div>
  );
};

export default EntryModal;