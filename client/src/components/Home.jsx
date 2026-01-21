import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, ShieldCheck, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    // 1. OUTER CONTAINER: Full height, flex center, dark background
    <div className="min-h-screen bg-midnight flex items-center justify-center pt-24 pb-12 px-4 sm:px-6">
      
      {/* 2. INNER CONTENT WRAPPER: Max width constraint and centered margin */}
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT COLUMN: Text */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-primary/30 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-[0.2em] mb-8">
            <Star size={12} fill="currentColor" />
            <span>Premium Living</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl lg:text-7xl font-serif text-white leading-[1.1] mb-6">
            Invest in <br />
            <span className="text-gold">Timeless Legacy</span>
          </h1>

          <p className="text-muted text-lg leading-relaxed mb-10 max-w-lg">
            Secure prime land in the city's most exclusive corridors. 
            Verified titles, high appreciation, and a lifestyle reserved for the few.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
             <Link to="/projects">
                <button className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primaryHover text-midnight font-bold uppercase tracking-widest text-sm rounded-sm transition-all flex items-center justify-center gap-2">
                  View Collection <ArrowRight size={16} />
                </button>
             </Link>
             <button className="w-full sm:w-auto px-8 py-4 border border-white/20 hover:bg-white hover:text-midnight text-white font-bold uppercase tracking-widest text-sm rounded-sm transition-all">
                Book VIP Visit
             </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/5 flex gap-8">
             <div className="flex items-center gap-3">
                <ShieldCheck className="text-primary" size={20} />
                <span className="text-white text-xs uppercase tracking-wider">RERA Approved</span>
             </div>
             <div className="flex items-center gap-3">
                <TrendingUp className="text-primary" size={20} />
                <span className="text-white text-xs uppercase tracking-wider">High ROI</span>
             </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Image (Desktop Only) */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="relative hidden lg:block h-[600px]"
        >
          {/* Main Image Frame */}
          <div className="absolute inset-0 border border-primary/20 transform translate-x-4 translate-y-4"></div>
          <div className="absolute inset-0 overflow-hidden bg-surface">
             <img 
               src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop" 
               className="w-full h-full object-cover opacity-80" 
               alt="Luxury Villa"
             />
             {/* Gradient Overlay */}
             <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent"></div>
          </div>

          {/* Floating Stat Card */}
          <div className="absolute bottom-10 left-10 bg-midnight/90 backdrop-blur border border-white/10 p-6 max-w-xs">
             <p className="text-primary text-xs uppercase tracking-widest mb-2">Market Status</p>
             <h3 className="text-white font-serif text-2xl">High Demand</h3>
             <p className="text-muted text-sm mt-2">Prices in this sector have appreciated by 15% in the last quarter.</p>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Home;