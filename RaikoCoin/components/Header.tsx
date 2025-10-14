
import React from 'react';
import { LOGO_URL, siteConfig } from '../constants';

const Header = () => {
    
  const handleNavigate = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    const hash = path.split('#')[1];
    if (hash) {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a103c]/80 backdrop-blur-sm border-b border-purple-500/30">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#home" onClick={(e) => handleNavigate(e, '#home')} className="flex items-center space-x-3">
          <img src={LOGO_URL} alt="Raiko Coin Logo" className="h-12 w-12 rounded-full border-2 border-pink-500" />
          <span className="text-2xl font-bold tracking-wider text-white font-orbitron">RAIKO</span>
        </a>
        <div className="hidden md:flex items-center space-x-8">
          {siteConfig.navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavigate(e, link.href)}
              className="text-lg font-medium text-cyan-300 hover:text-white transition-colors duration-300 transform hover:scale-105"
            >
              {link.name}
            </a>
          ))}
        </div>
        <a 
          href={siteConfig.buyLink} 
          onClick={(e) => handleNavigate(e, siteConfig.buyLink)}
          className="hidden md:block bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(219,39,119,0.8)] hover:shadow-[0_0_25px_rgba(219,39,119,1)]"
        >
          Buy Now
        </a>
      </nav>
    </header>
  );
};

export default Header;