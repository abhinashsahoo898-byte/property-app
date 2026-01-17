import React from 'react';

const BackgroundDecor = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Top Right Blob - Teal */}
      <div className="absolute -top-[10%] -right-[10%] w-[40rem] h-[40rem] bg-teal-500/20 rounded-full blur-3xl opacity-50 animate-pulse mix-blend-multiply dark:mix-blend-screen" />
      
      {/* Bottom Left Blob - Blue/Purple */}
      <div className="absolute -bottom-[10%] -left-[10%] w-[35rem] h-[35rem] bg-blue-600/20 rounded-full blur-3xl opacity-50 animate-pulse mix-blend-multiply dark:mix-blend-screen" style={{ animationDelay: '2s' }} />
      
      {/* Center Subtle Highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-indigo-500/10 rounded-full blur-3xl opacity-30" />
      
      {/* Texture Overlay (Grain) */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
    </div>
  );
};

export default BackgroundDecor;