
import React from 'react';

interface Phase {
    emoji: string;
    title: string;
    items: string[];
}

const phases: Phase[] = [
    {
        emoji: '🍼',
        title: 'Phase 1 – Wuff Begins',
        items: ['Token launch on Pepu Unchained', 'Website online', 'Telegram channel live'],
    },
    {
        emoji: '🐾',
        title: 'Phase 2 – Story Time',
        items: ['First Telegram vote', 'Story PDF published on site', 'Starmap updated'],
    },
    {
        emoji: '🚀',
        title: 'Phase 3 – NFT Unlocks',
        items: ['First NFT drop (cover + story)', 'ETH or USDC only (RKO later optional)'],
    },
    {
        emoji: '💫',
        title: 'Phase 4 – Expansion',
        items: ['More planets & votes', 'Animated Shorts (community-created)', 'Merch ideas & Discord expansion'],
    },
];

const RoadmapCard = ({ phase, index }: { phase: Phase, index: number }) => (
    <div className="flex md:contents">
        <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
            <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-purple-800 pointer-events-none"></div>
            </div>
            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-pink-500 shadow text-center flex items-center justify-center">
                {phase.emoji}
            </div>
        </div>
        <div className="bg-slate-800/50 border border-purple-700 col-start-4 col-end-12 p-6 rounded-xl my-4 mr-auto shadow-md w-full transition-transform transform hover:scale-105 hover:shadow-pink-500/20">
            <h3 className="font-semibold text-xl mb-2 text-cyan-300">{phase.title}</h3>
            <ul className="list-disc list-inside text-slate-300 space-y-1">
              {phase.items.map(item => <li key={item}>{item}</li>)}
            </ul>
        </div>
    </div>
);


export default function RoadmapSection() {
    return (
        <section id="roadmap" className="py-20 bg-grid-purple-500/[0.1] border-y border-purple-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-cyan-400">Roadbark</h2>
                    <p className="text-lg text-slate-300 mt-2">Charting our course to the moon, one paw print at a time.</p>
                </div>
                <div className="flex flex-col md:grid grid-cols-12 text-gray-50">
                    {phases.map((phase, index) => (
                        <RoadmapCard key={index} phase={phase} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};