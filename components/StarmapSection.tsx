
import React from 'react';
import { starmapData, Planet } from '../constants';

const PlanetComponent = ({ planet }: { planet: Planet }) => {
    const statusIcon = {
        unlocked: '📖',
        voting: '🗳️',
        locked: '🔒',
    };

    const statusText = {
        unlocked: 'Story Available',
        voting: 'Voting Active',
        locked: 'Locked',
    };

    const statusColor = {
        unlocked: 'border-green-400 text-green-300',
        voting: 'border-blue-400 text-blue-300',
        locked: 'border-gray-600 text-gray-400',
    };

    return (
        <div 
            className="absolute group"
            style={{ top: planet.position.top, left: planet.position.left }}
        >
            <div className={`w-8 h-8 md:w-12 md:h-12 rounded-full ${planet.colorClass} flex items-center justify-center text-lg md:text-2xl cursor-pointer transition-transform transform hover:scale-125 hover:shadow-2xl hover:shadow-white/50`}>
                {statusIcon[planet.status]}
            </div>
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 bg-slate-900 border border-purple-500 rounded-lg p-3 text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                <h4 className="font-bold text-pink-400 text-lg">{planet.name}</h4>
                <p className="text-sm text-slate-300 mb-2">{planet.description}</p>
                <div className={`text-xs font-semibold px-2 py-1 rounded-full inline-block border ${statusColor[planet.status]}`}>
                    {statusText[planet.status]}
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 bottom-[-8px] w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-purple-500"></div>
            </div>
        </div>
    );
};


const StarmapSection = () => {
  return (
    <section id="starmap" className="py-20 bg-[#1a103c]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-pink-500">Raiko's Starmap</h2>
          <p className="text-lg text-slate-300 mt-2">The community's journey through the Raikoverse.</p>
        </div>

        <div className="relative aspect-[2/1] max-w-6xl mx-auto bg-grid-pink-500/[0.2] rounded-2xl border-2 border-purple-500/50 p-4">
            {/* You can add a background image or other visual elements here */}
            {starmapData.map(planet => (
                <PlanetComponent key={planet.id} planet={planet} />
            ))}
        </div>
        
        <div className="mt-12 flex justify-center items-center flex-wrap gap-x-6 gap-y-2 text-slate-400">
            <div className="flex items-center space-x-2">
                <span className="text-2xl">📖</span>
                <span>Story Unlocked</span>
            </div>
            <div className="flex items-center space-x-2">
                <span className="text-2xl">🗳️</span>
                <span>Voting Active</span>
            </div>
             <div className="flex items-center space-x-2">
                <span className="text-2xl">🔒</span>
                <span>Locked</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default StarmapSection;
