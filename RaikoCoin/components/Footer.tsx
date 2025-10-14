
import React from 'react';
import { LOGO_URL, siteConfig } from '../constants';

const Footer = () => {
    
    const handleNavigate = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
        e.preventDefault();
        const hash = path.split('#')[1];
        if (hash) {
            document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    
    return (
        <footer className="py-12 bg-slate-900/50 border-t border-purple-900/50">
            <div className="container mx-auto px-6 text-center text-slate-400">
                <div className="flex justify-center items-center mb-4">
                    <img src={LOGO_URL} alt="Raiko Coin Logo" className="h-10 w-10 rounded-full" />
                    <h3 className="ml-3 text-xl font-bold text-white font-orbitron">RAIKO COIN</h3>
                </div>
                <p className="mb-4">"The only coin that barks back."</p>
                <div className="flex justify-center flex-wrap gap-x-6 gap-y-2 mb-6">
                    <a href={siteConfig.socials.x} target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">X</a>
                    <a href={siteConfig.socials.telegram} target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">Telegram</a>
                    <a href={siteConfig.dexScreenerLink} target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">DexScreener</a>
                    <a href={siteConfig.whitepaperLink} target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">Whitepaper</a>
                    <a href="#impressum" onClick={(e) => handleNavigate(e, '#impressum')} className="hover:text-pink-400 transition-colors">Impressum</a>
                </div>
                <div className="max-w-2xl mx-auto border-t border-b border-purple-800/50 py-4 mb-6">
                    <h4 className="font-bold text-cyan-300">Animators & Artists Wanted!</h4>
                    <p className="text-sm mt-1">Our meme-dog needs your talent! Join our Telegram to learn more.</p>
                </div>
                <p className="text-sm mb-4">&copy; {new Date().getFullYear()} Raiko Coin. All rights reserved. This is not financial advice.</p>
                <p className="text-xs text-slate-500 max-w-3xl mx-auto">
                    RaikoCoin is a cultural meme project with no financial purpose. It is not an investment object, not a financial instrument, and no guarantee of value increase. All content is for entertainment purposes.
                </p>
            </div>
        </footer>
    );
};

export default Footer;