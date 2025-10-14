
import React from 'react';

const FeatureIcon = ({ children }: { children: React.ReactNode }) => (
    <div className="mb-4 text-cyan-400">{children}</div>
);

const VoteIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const BookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
);

const ImageIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    </svg>
);

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string; }) => (
    <div className="bg-slate-800/50 border border-purple-600 rounded-xl p-6 text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-500/30 flex flex-col items-center">
        <FeatureIcon>{icon}</FeatureIcon>
        <h3 className="text-2xl font-bold mb-2 text-pink-400">{title}</h3>
        <p className="text-slate-300 leading-relaxed">{description}</p>
    </div>
);

const FeaturesSection = () => {
    return (
        <section id="features" className="py-20 bg-[#1a103c]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-pink-500">Join the Raikoverse</h2>
                    <p className="text-lg text-slate-300 mt-2">This isn't just a coin, it's a story you help create.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <FeatureCard
                        icon={<VoteIcon />}
                        title="Community-Driven Lore"
                        description="Vote on Raiko's next adventure via Telegram polls. The community decides how the story unfolds. Vote instead of paying!"
                    />
                    <FeatureCard
                        icon={<BookIcon />}
                        title="Story Unlocks"
                        description="The winning story paths are written and published for everyone to enjoy. Explore the galaxy one chapter at a time."
                    />
                    <FeatureCard
                        icon={<ImageIcon />}
                        title="Optional Story NFTs"
                        description="Love the story? You can collect a limited edition NFT cover to commemorate the adventure and support the ecosystem."
                    />
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;