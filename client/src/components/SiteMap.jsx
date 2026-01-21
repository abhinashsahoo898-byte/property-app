import React from 'react';
import { motion } from 'framer-motion';

const SiteMap = () => {
  // Generate fake plot data
  const plots = Array.from({ length: 24 }, (_, i) => {
    const isSold = [2, 5, 8, 12, 15, 19, 22].includes(i); // Random sold plots
    const size = i % 3 === 0 ? 1200 : 900;
    return {
      id: i + 1,
      isSold,
      size,
      price: (size * 3500) / 100000 // Price in Lakhs
    };
  });

  return (
    <div className="py-20 bg-midnight text-white text-center">
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-4xl font-serif mb-2">Master Plan</h2>
            <p className="text-muted text-sm mb-12">Hover over a plot to view details.</p>

            {/* The Map Grid */}
            <div className="grid grid-cols-4 md:grid-cols-6 gap-4 p-8 border-2 border-dashed border-white/10 rounded-3xl bg-surface relative">
                
                {/* Decorative Road */}
                <div className="absolute top-1/2 left-0 w-full h-8 bg-black/40 -translate-y-1/2 flex items-center justify-center text-[10px] text-white/20 tracking-[1em] uppercase pointer-events-none">
                    Main Avenue Road
                </div>

                {plots.map((plot) => (
                    <motion.div
                        key={plot.id}
                        whileHover={{ scale: 1.05 }}
                        className={`
                            relative h-24 rounded-lg flex flex-col items-center justify-center border transition-all cursor-pointer group
                            ${plot.isSold 
                                ? 'bg-red-900/20 border-red-500/30' 
                                : 'bg-emerald-900/20 border-emerald-500/30 hover:bg-emerald-900/40 hover:border-emerald-400'}
                        `}
                    >
                        <span className={`text-xl font-bold ${plot.isSold ? 'text-red-500/50' : 'text-emerald-400'}`}>
                            {plot.id}
                        </span>
                        
                        {/* Sold Badge */}
                        {plot.isSold && (
                            <span className="text-[10px] text-red-400 uppercase tracking-wider mt-1">Sold Out</span>
                        )}

                        {/* Hover Tooltip (Only for Available) */}
                        {!plot.isSold && (
                            <div className="absolute opacity-0 group-hover:opacity-100 bottom-full mb-2 bg-white text-midnight p-3 rounded-lg text-left w-32 shadow-xl z-10 pointer-events-none transition-opacity">
                                <p className="font-bold text-sm">Plot {plot.id}</p>
                                <p className="text-xs text-slate-500">{plot.size} Sq.Ft</p>
                                <p className="text-sm font-bold text-primary mt-1">₹{plot.price} L</p>
                                <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45"></div>
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>

            {/* Legend */}
            <div className="flex justify-center gap-8 mt-8">
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-emerald-900/20 border border-emerald-500/30"></div>
                    <span className="text-sm text-muted">Available</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-red-900/20 border border-red-500/30"></div>
                    <span className="text-sm text-muted">Sold Out</span>
                </div>
            </div>
        </div>
    </div>
  );
};

export default SiteMap;