import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { Loader2, ArrowRight, Star } from 'lucide-react';

const EntryModal = ({ onComplete }) => {
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API for smooth UX
    try {
      await axios.post('https://property-app-bm8a.onrender.com', { ...formData, project: 'Entry' });
    } catch(e) { console.log(e); }
    
    setTimeout(() => { onComplete(formData); setLoading(false); }, 1000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-midnight/95 backdrop-blur-md">
      {/* Golden Border Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // "Luxury" Easing
        className="relative w-full max-w-[500px] bg-surface p-[1px] rounded-2xl overflow-hidden"
      >
        {/* Animated Gold Border */}
        <div className="absolute inset-0 bg-gold-gradient opacity-30 animate-pulse"></div>

        <div className="relative bg-midnight rounded-2xl p-10 text-center border border-white/5">
            <div className="flex justify-center mb-6 text-primary">
                <Star fill="currentColor" size={24} />
            </div>

            <h2 className="text-4xl font-serif text-white mb-2">PrimePlots</h2>
            <p className="text-muted uppercase tracking-[0.2em] text-xs mb-8">Exclusive Real Estate</p>

            <form onSubmit={handleSubmit} className="space-y-6 text-left">
                <div className="group">
                    <label className="text-xs text-primary uppercase tracking-widest ml-1 mb-2 block">Name</label>
                    <input 
                        type="text" 
                        required
                        className="w-full bg-surface border-b border-white/10 p-4 text-lg text-white outline-none focus:border-primary transition-colors placeholder:text-white/20"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                </div>
                
                <div className="group">
                    <label className="text-xs text-primary uppercase tracking-widest ml-1 mb-2 block">Mobile</label>
                    <input 
                        type="text" 
                        required
                        className="w-full bg-surface border-b border-white/10 p-4 text-lg text-white outline-none focus:border-primary transition-colors placeholder:text-white/20"
                        placeholder="Enter 10-digit number"
                        value={formData.phone}
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                </div>

                <button className="w-full bg-primary hover:bg-primaryHover text-midnight font-bold uppercase tracking-widest py-5 mt-4 transition-all hover:scale-[1.02] flex items-center justify-center gap-4">
                    {loading ? <Loader2 className="animate-spin"/> : "Enter Experience"} <ArrowRight />
                </button>
            </form>
            
            <p className="mt-8 text-[10px] text-white/20 uppercase tracking-widest">
                By Invitation Only
            </p>
        </div>
      </motion.div>
    </div>
  );
};
export default EntryModal;