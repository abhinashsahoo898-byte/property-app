import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, ArrowUpRight } from 'lucide-react';

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);
};

const ProjectCard = ({ project, user, index }) => {
  const [size, setSize] = useState(900);
  const totalPrice = size * project.price;

  const handleWhatsApp = () => {
    window.open(`https://wa.me/917008664361?text=I am interested in ${project.name}`, '_blank');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-surface border border-white/5 hover:border-primary/50 transition-colors duration-500"
    >
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700">
        <img src={project.image} alt={project.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent opacity-90"></div>
        <div className="absolute bottom-6 left-6">
            <h3 className="text-2xl font-serif text-white">{project.name}</h3>
            <p className="text-primary text-xs uppercase tracking-widest mt-1">{project.location}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="flex justify-between items-end mb-8 border-b border-white/5 pb-6">
            <div>
                <p className="text-muted text-xs uppercase tracking-widest mb-1">Base Price</p>
                <p className="text-white text-xl font-serif">₹{project.price}<span className="text-sm text-muted font-sans"> / sq.ft</span></p>
            </div>
        </div>

        {/* Minimalist Calculator */}
        <div className="bg-white/5 p-6 mb-8">
            <div className="flex items-center gap-2 mb-4 text-primary">
                <Calculator size={14} />
                <span className="text-xs uppercase tracking-widest">Investment Calculator</span>
            </div>
            <div className="flex justify-between text-sm text-muted mb-4">
                {[600, 900, 1200].map(s => (
                    <button key={s} onClick={() => setSize(s)} className={`pb-1 border-b ${size === s ? 'text-white border-primary' : 'border-transparent hover:text-white'}`}>
                        {s} sq.ft
                    </button>
                ))}
            </div>
            <div className="flex justify-between items-center">
                <span className="text-muted text-sm">Est. Total</span>
                <span className="text-gold text-xl font-serif">{formatCurrency(totalPrice)}</span>
            </div>
        </div>

        <button onClick={handleWhatsApp} className="w-full flex items-center justify-between text-white border border-white/10 hover:bg-white hover:text-midnight px-6 py-4 transition-all duration-300 group-hover:border-white">
            <span className="uppercase tracking-widest text-xs font-bold">Inquire Now</span>
            <ArrowUpRight size={18} />
        </button>
      </div>
    </motion.div>
  );
};
export default ProjectCard;