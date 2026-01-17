import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, MessageCircle, MapPin } from 'lucide-react';

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

const ProjectCard = ({ project, user, index }) => {
  const [size, setSize] = useState(900);
  const [isCustom, setIsCustom] = useState(false);

  const totalPrice = size * project.price;

  const handleWhatsApp = () => {
    const text = `*New Lead Inquiry*%0a` +
                 `--------------------%0a` +
                 `👤 Name: ${user.name}%0a` +
                 `📱 Phone: ${user.phone}%0a` +
                 `🏡 Project: ${project.name}%0a` +
                 `📍 Location: ${project.location}%0a` +
                 `📏 Size: ${size} sq.ft%0a` +
                 `💰 Estimated Price: ${formatCurrency(totalPrice)}%0a` +
                 `--------------------%0a` +
                 `Please contact me for a site visit.`;

    window.open(`https://wa.me/919999999999?text=${text}`, '_blank');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col"
    >
      {/* 1. Verified Badge */}
      <div className="absolute top-4 left-4 z-10 bg-white/90 dark:bg-black/80 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 shadow-sm border border-white/20">
        Verified
      </div>

      {/* 2. Image Section */}
      <div className="h-56 overflow-hidden relative">
        <img 
          src={project.image} 
          alt={project.name} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
        
        {/* Text Overlay */}
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-serif font-bold tracking-wide">{project.name}</h3>
          <p className="text-slate-300 text-sm flex items-center gap-1 opacity-90 mt-1">
            <MapPin size={14} className="text-teal-400" /> 
            {project.location}
          </p>
        </div>
      </div>

      {/* 3. Content & Calculator Section */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Price Rate */}
        <div className="flex justify-between items-center mb-5 pb-4 border-b border-slate-200 dark:border-slate-700">
          <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">Current Rate</span>
          <span className="text-primary dark:text-teal-400 font-bold text-lg">₹{project.price}/sq.ft</span>
        </div>

        {/* Customizer Tool */}
        <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl mb-6 border border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-2 mb-3 text-slate-700 dark:text-slate-300">
            <Calculator size={16} />
            <span className="font-medium text-sm">Estimate Cost</span>
          </div>

          {/* Size Buttons */}
          <div className="flex gap-2 mb-3 flex-wrap">
            {[600, 900, 1200].map(s => (
              <button
                key={s}
                onClick={() => { setSize(s); setIsCustom(false); }}
                className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                  size === s && !isCustom 
                    ? 'bg-primary dark:bg-teal-600 text-white border-primary dark:border-teal-600' 
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-300 dark:border-slate-600 hover:border-primary dark:hover:border-teal-500'
                }`}
              >
                {s}
              </button>
            ))}
            <button
               onClick={() => setIsCustom(true)}
               className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                 isCustom 
                   ? 'bg-primary dark:bg-teal-600 text-white border-primary dark:border-teal-600' 
                   : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-300 dark:border-slate-600'
               }`}
            >
              Custom
            </button>
          </div>

          {/* Custom Input */}
          {isCustom && (
            <input 
              type="number" 
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              className="w-full px-3 py-2 text-sm border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-white rounded focus:ring-1 focus:ring-primary outline-none mb-2 transition-colors"
              placeholder="Enter sq.ft"
            />
          )}

          {/* Total Price Display */}
          <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700 flex justify-between items-end">
            <span className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider">Total</span>
            <motion.span 
              key={totalPrice}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="text-xl font-bold text-slate-900 dark:text-white"
            >
              {formatCurrency(totalPrice)}
            </motion.span>
          </div>
        </div>

        {/* WhatsApp Button */}
        <button 
          onClick={handleWhatsApp}
          className="mt-auto w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg active:scale-95"
        >
          <MessageCircle size={20} />
          Get Quote on WhatsApp
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;