import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { Sparkles } from 'lucide-react';

const projects = [
  { id: 1, name: "Green Valley Estates", location: "Sector 14, Greater Noida", price: 4500, image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800" },
  { id: 2, name: "Royal Palms Residency", location: "Whitefield, Bangalore", price: 6200, image: "https://images.unsplash.com/photo-1605276374104-514d533a9bb0?auto=format&fit=crop&q=80&w=800" },
  { id: 3, name: "Sunset Meadows", location: "Kothrud, Pune", price: 3800, image: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?auto=format&fit=crop&q=80&w=800" },
  { id: 4, name: "Lakeside Haven", location: "Udaipur Outskirts", price: 2900, image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800" },
  { id: 5, name: "Urban Sky City", location: "Cyber City, Hyderabad", price: 7500, image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" },
];

const Dashboard = ({ user }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.8 }}
      className="bg-transparent min-h-screen py-8"
    >
      {/* Page Title Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 font-semibold text-sm mb-4 border border-teal-200 dark:border-teal-800"
        >
          <Sparkles size={14} />
          <span>Premium Selection</span>
        </motion.div>
        
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-4">
          Explore Our Projects
        </h2>
        <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Handpicked plotting projects with clear titles, premium amenities, and high appreciation potential.
        </p>
      </div>

      {/* Projects Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} user={user} index={index} />
          ))}
        </div>
      </main>

      {/* Bottom Footer Section */}
      <div className="text-center mt-16 pb-8 text-slate-500 dark:text-slate-400 text-sm">
        <p>Showing {projects.length} Premium Projects available for booking.</p>
      </div>
    </motion.div>
  );
};

export default Dashboard;