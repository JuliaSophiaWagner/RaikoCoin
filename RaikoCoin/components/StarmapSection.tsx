
import React, { useState } from 'react';
import { starmapData, Planet } from '../constants';

// --- Story Modal Component ---
const StoryModal = ({ planet, onClose }: { planet: Planet, onClose: () => void }) => {
    return (
        <div 
            className="modal-backdrop"
            onClick={onClose}
        >
            <div 
                className="modal-content relative w-full max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
                <button 
                    onClick={onClose} 
                    className="absolute top-3 right-3 text-white bg-black/50 rounded-full p-2 hover:bg-pink-500 z-20 transition-colors"
                    aria-label="Close"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                <div className="overflow-y-auto max-h-[90vh]">
                    {planet.storyImage && <img src={planet.storyImage} alt={`Story of ${planet.name}`} className="w-full h-auto object-cover max-h-96"/>}
                    <div className="p-8">
                        <h3 className="text-3xl font-bold text-pink-400 font-orbitron mb-4">{planet.name}</h3>
                        <p className="text-lg text-slate-300 leading-relaxed whitespace-pre-wrap">{planet.storyText}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};


// --- Planet Component ---
const PlanetComponent = ({ planet, onPlanetClick }: { planet: Planet; onPlanetClick: (planet: Planet) => void }) => {
    const statusIcon = { unlocked: '📖', voting: '🗳️', locked: '🔒' };
    const statusText = { unlocked: 'Story Available', voting: 'Voting Active', locked: 'Locked' };
    const canClick = planet.status === 'unlocked';
    const glowColorMap: { [key in Planet['status']]: string } = { unlocked: '#34d399', voting: '#60a5fa', locked: '#9ca3af' };

    const statusBorderColor = {
        unlocked: 'border-green-400 text-green-300',
        voting: 'border-blue-400 text-blue-300',
        locked: 'border-gray-600 text-gray-400',
    };

    return (
        <div 
            className="absolute group -translate-x-1/2 -translate-y-1/2"
            style={{ top: planet.position.top, left: planet.position.left }}
            onClick={() => canClick && onPlanetClick(planet)}
        >
            <div 
                className={`w-10 h-10 md:w-12 md:h-12 rounded-full ${planet.colorClass} flex items-center justify-center text-lg md:text-2xl transition-transform transform hover:scale-125 
                    ${canClick ? 'cursor-pointer' : 'cursor-not-allowed opacity-60'} 
                    ${planet.status !== 'locked' ? (planet.status === 'voting' ? 'planet-glow-voting planet-glow' : 'planet-glow') : ''}`}
                style={{ '--glow-color': glowColorMap[planet.status] } as React.CSSProperties}
            >
                {statusIcon[planet.status]}
            </div>
            
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 bg-slate-900 border border-purple-500 rounded-lg p-3 text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10 shadow-2xl shadow-purple-500/30">
                <h4 className="font-bold text-pink-400 text-lg">{planet.name}</h4>
                <p className="text-sm text-slate-300 mb-2">{planet.description}</p>
                <div className={`text-xs font-semibold px-2 py-1 rounded-full inline-block border ${statusBorderColor[planet.status]}`}>
                    {statusText[planet.status]}
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 bottom-[-8px] w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-purple-500"></div>
            </div>
        </div>
    );
};


// --- Main Starmap Section Component ---
const StarmapSection = () => {
    const [selectedPlanet, setSelectedPlanet] = useState<Planet | null>(null);

    const handlePlanetClick = (planet: Planet) => {
        if (planet.storyImage || planet.storyText) {
            setSelectedPlanet(planet);
        }
    };

    const unlockedPlanets = starmapData.filter(p => p.status !== 'locked');
    
    return (
        <>
            <section id="starmap" className="py-20 bg-[#1a103c]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-pink-500">Raiko's Starmap</h2>
                        <p className="text-lg text-slate-300 mt-2">The community's journey through the Raikoverse.</p>
                    </div>

                    <div className="relative aspect-[2/1] max-w-6xl mx-auto rounded-2xl border-2 border-purple-500/50 p-4 starmap-bg overflow-hidden">
                        <svg className="absolute top-0 left-0 w-full h-full" style={{ pointerEvents: 'none' }}>
                            <defs>
                                <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#34d399" />
                                    <stop offset="100%" stopColor="#60a5fa" />
                                </linearGradient>
                            </defs>
                            {unlockedPlanets.length > 1 && unlockedPlanets.map((planet, index) => {
                                if (index === 0) return null;
                                const prevPlanet = unlockedPlanets[index - 1];
                                
                                return (
                                   <line 
                                     key={`${prevPlanet.id}-${planet.id}`} 
                                     x1={`${prevPlanet.position.left}`} y1={`${prevPlanet.position.top}`} 
                                     x2={`${planet.position.left}`} y2={`${planet.position.top}`} 
                                     stroke="url(#line-gradient)" strokeWidth="2" strokeDasharray="5, 5" 
                                   />
                                )
                            })}
                        </svg>

                        {starmapData.map(planet => (
                            <PlanetComponent key={planet.id} planet={planet} onPlanetClick={handlePlanetClick} />
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
            {selectedPlanet && <StoryModal planet={selectedPlanet} onClose={() => setSelectedPlanet(null)} />}
        </>
    );
};

export default StarmapSection;
