import React from 'react';
import { NavLink } from 'react-router-dom';
import { Building2 } from 'lucide-react';

const Navbar = ({ user }) => {
  const links = [
    { name: 'Residence', path: '/' },
    { name: 'Portfolio', path: '/projects' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-midnight/80 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <Building2 size={20} />
            </div>
            <div>
                <h1 className="text-2xl font-serif text-white tracking-wide">PrimePlots</h1>
                <p className="text-[10px] text-primary uppercase tracking-[0.3em]">Signature</p>
            </div>
        </div>

        {/* Links (Desktop) */}
        <div className="hidden md:flex items-center gap-12">
            {links.map(link => (
                <NavLink 
                    key={link.name} 
                    to={link.path}
                    className={({isActive}) => `text-sm uppercase tracking-widest transition-colors ${isActive ? 'text-primary' : 'text-muted hover:text-white'}`}
                >
                    {link.name}
                </NavLink>
            ))}
        </div>

        {/* User Status */}
        <div className="hidden md:block text-right">
            <p className="text-[10px] text-muted uppercase">Logged in as</p>
            <p className="text-sm text-white font-serif italic">{user.name}</p>
        </div>

      </div>
    </nav>
  );
};
export default Navbar;