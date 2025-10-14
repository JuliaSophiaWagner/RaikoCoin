
import React, { useState } from 'react';
import { WalletIcon, SwapIcon, DogIcon, siteConfig } from '../constants';

const StepCard = ({ icon, title, description, step }: { icon: React.ReactNode; title: string; description: string; step: number }) => (
  <div className="relative bg-slate-800/50 border border-purple-600 rounded-xl pt-12 p-6 text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/30 h-full">
    <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-cyan-500 text-slate-900 w-12 h-12 rounded-full flex items-center justify-center font-bold text-2xl border-4 border-[#1a103c] font-orbitron">{step}</div>
    <div className="mb-4 flex justify-center text-pink-400">{icon}</div>
    <h3 className="text-2xl font-bold mb-2 text-cyan-300">{title}</h3>
    <p className="text-slate-400">{description}</p>
  </div>
);

const CopyButton = ({ textToCopy }: { textToCopy: string }) => {
  const [buttonText, setButtonText] = useState('Copy Address');

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
    setButtonText('Copied!');
    setTimeout(() => setButtonText('Copy Address'), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition-all duration-300"
    >
      {buttonText}
    </button>
  );
};

const HowToBuySection = () => {
  return (
    <section id="how-to-buy" className="py-20 bg-[#1a103c]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-pink-500">Get Your Paws on Raiko</h2>
          <p className="text-lg text-slate-300 mt-2">Join the pack in three easy steps.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-16 md:gap-8">
          <StepCard 
            step={1}
            icon={<WalletIcon />} 
            title="Create a Wallet" 
            description="Download a wallet like Phantom. Desktop users, get the browser extension. Mobile users, get the app."
          />
          <StepCard 
            step={2}
            icon={<SwapIcon />} 
            title="Get some PEPU" 
            description="Have PEPU in your wallet to swap. You can buy PEPU on an exchange or directly in your wallet."
          />
          <StepCard 
            step={3}
            icon={<DogIcon />} 
            title="Go to PepuSwap" 
            description="Go to a DEX like PepuSwap. Paste the $RAIKO token address, select Raiko, and confirm the swap."
          />
        </div>
        {siteConfig.contractAddress && (
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-cyan-300 mb-4">Token Contract Address</h3>
            <div className="max-w-xl mx-auto bg-slate-800/50 border border-purple-600 rounded-full p-2 flex items-center justify-between">
              <p className="text-slate-300 truncate px-4 font-mono text-sm md:text-base">{siteConfig.contractAddress}</p>
              <CopyButton textToCopy={siteConfig.contractAddress} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export default HowToBuySection;