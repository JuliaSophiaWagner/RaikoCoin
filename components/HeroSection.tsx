
import React from 'react';
import { HERO_IMAGE_URL, siteConfig } from '../constants';

const HeroSection = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetSelector: string) => {
    e.preventDefault();
    const hash = targetSelector.split('#')[1];
    if (hash) {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="pt-32 pb-16 min-h-screen flex items-center justify-center text-center" style={{ backgroundImage: `linear-gradient(rgba(26, 16, 60, 0.8), #1a103c)`}}>
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-8 z-10">
        <div className="md:w-1/2 flex justify-center">
          <img 
            src={HERO_IMAGE_URL} 
            alt="Raiko To The Moon" 
            className="w-full max-w-md rounded-2xl shadow-[0_0_40px_rgba(236,72,153,0.5)] border-4 border-pink-500"
          />
        </div>
        <div className="md:w-1/2 md:text-left">
          <h1 className="text-5xl md:text-7xl font-black uppercase text-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
            RAIKO
            <span className="block text-pink-500 animate-pulse">To The Moon</span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-cyan-200 max-w-lg">
            The galaxy's goodest boi has arrived on Pepu Unchained. In Treats We Trust.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <a 
              href={siteConfig.buyLink} 
              onClick={(e) => handleScroll(e, siteConfig.buyLink)}
              className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.8)] hover:shadow-[0_0_25px_rgba(6,182,212,1)] transform hover:-translate-y-1"
            >
              Get Raiko
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;