import React from 'react';
import { MEME_URLS } from '../constants';

const MemeCard = ({ img, text }: { img: string; text: string; }) => (
    <div className="bg-slate-800/50 border border-purple-600 rounded-xl p-4 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/30 flex flex-col">
        <img src={img} alt="Raiko Meme" className="w-full h-80 object-cover rounded-lg mb-4" />
        <p className="text-center font-semibold text-cyan-300 mt-auto">"{text}"</p>
    </div>
);

export default function MemeSection() {
    return (
        <section id="memes" className="py-20 bg-[#1a103c]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-pink-500">The Raiko Memes</h2>
                    <p className="text-lg text-slate-300 mt-2">In Memes We Trust. Much Wow. Very Moon.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <MemeCard img={MEME_URLS[0]} text="In Treats We Trust. Verified Good Boi." />
                    <MemeCard img={MEME_URLS[1]} text="RAIKO TO THE MOON" />
                </div>
            </div>
        </section>
    );
}