import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import SiteMap from './SiteMap'; // <--- Importing the new Map Feature

const projects = [
  { id: 1, name: "The Gold Estate", location: "Greater Noida", price: 4500, image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop" },
  { id: 2, name: "Sapphire Heights", location: "Bangalore", price: 6200, image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop" },
  { id: 3, name: "Onyx Meadows", location: "Pune", price: 3800, image: "https://images.unsplash.com/photo-1600596542815-e328701102b9?q=80&w=800&auto=format&fit=crop" },
  { id: 4, name: "Ivory Coast", location: "Udaipur", price: 2900, image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop" },
  { id: 5, name: "Titanium Towers", location: "Hyderabad", price: 7500, image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=800&auto=format&fit=crop" },
  { id: 6, name: "Emerald Valley", location: "Dehradun", price: 3200, image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?q=80&w=800&auto=format&fit=crop" },
];

const Dashboard = ({ user }) => {
  return (
    <div className="min-h-screen bg-midnight pt-32 pb-20 px-4">
      
      {/* 1. HEADER SECTION */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
            <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold">Curated Portfolio</span>
            <h2 className="text-5xl md:text-7xl font-serif text-white mt-4 mb-6">
                The Collection
            </h2>
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
        </motion.div>
      </div>

      {/* 2. PROJECTS GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
        {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} user={user} index={index} />
        ))}
      </div>

      {/* 3. INTERACTIVE SITE MAP (New Feature) */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <SiteMap />
      </motion.div>

    </div>
  );
};

export default Dashboard;