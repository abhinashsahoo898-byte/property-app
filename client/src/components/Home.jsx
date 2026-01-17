import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT COLUMN: Text Content */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-left space-y-8"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300 font-semibold text-sm tracking-wide mb-2 border border-teal-200 dark:border-teal-800">
            ✨ Premium Real Estate
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-serif font-bold leading-tight text-slate-900 dark:text-white">
            Invest in Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-400">
              Future Legacy
            </span>
          </h1>

          <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-lg leading-relaxed">
            Secure prime plotting land in the city's fastest-growing corridors. 
            Verified titles, transparent pricing, and high appreciation potential.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
             <Link to="/projects">
                <button className="w-full sm:w-auto px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-xl flex items-center justify-center gap-2">
                  View Projects <ArrowRight size={20} />
                </button>
             </Link>
             <button className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl font-semibold text-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm">
                Book Site Visit
             </button>
          </div>

          <div className="pt-8 border-t border-slate-200 dark:border-slate-700 flex gap-6 text-sm font-medium text-slate-500 dark:text-slate-400">
             <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-teal-500" /> DTCP Approved</span>
             <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-teal-500" /> Clear Titles</span>
             <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-teal-500" /> Bank Loan</span>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Visual Decoration */}
        <motion.div 
           initial={{ x: 50, opacity: 0 }}
           animate={{ x: 0, opacity: 1 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="relative h-[400px] lg:h-[600px] w-full hidden lg:block"
        >
          {/* Main Image with floating effect */}
          <div className="absolute top-10 right-0 w-4/5 h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 transform rotate-3 hover:rotate-0 transition-all duration-700">
             <img src="https://images.unsplash.com/photo-1600596542815-e328701102b9?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover" alt="Luxury Villa" />
             {/* Glass overlay */}
             <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <p className="font-bold text-lg">Royal Palms</p>
                <p className="text-sm opacity-80">Starting @ ₹4500/sq.ft</p>
             </div>
          </div>

          {/* Floating Decorative Card */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute bottom-20 left-0 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 w-64 z-20"
          >
             <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                   <CheckCircle2 />
                </div>
                <div>
                   <p className="text-xs text-slate-500">Status</p>
                   <p className="font-bold text-slate-800 dark:text-white">Selling Fast</p>
                </div>
             </div>
             <div className="w-full bg-slate-100 rounded-full h-2 mt-2">
                <div className="bg-green-500 h-2 rounded-full w-[85%]"></div>
             </div>
             <p className="text-xs text-right mt-1 text-slate-400">85% Sold Out</p>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
};
export default Home;