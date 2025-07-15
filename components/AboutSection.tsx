
import React from 'react';
import { ABOUT_IMAGE_URL } from '../constants';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-grid-purple-500/[0.1] border-y border-purple-900">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-4xl font-bold mb-4 text-cyan-400">Who is Raiko?</h2>
          <p className="text-lg text-slate-300 mb-4 leading-relaxed">
            Raiko isn't just a German Shepherd; he's a legend. A digital pioneer on the Pepu Unchained blockchain, he's the epitome of a "Verified Good Boi." Fueled by treats and an unshakeable belief in decentralized fun, Raiko Coin is more than a meme—it's a movement.
          </p>
          <h3 className="text-2xl font-bold text-pink-400 mb-3">Why Pepu Unchained?</h3>
          <p className="text-lg text-slate-300 mb-6 leading-relaxed">
           Because Raiko can only live on a chain as chaotic, wild, and free as he is. Pepu Unchained is a chain for paws & plush, not for stuffy suits. It's the perfect playground with ultra-low fees for all our treat transactions!
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="bg-purple-900/50 border border-purple-700 rounded-lg p-4 flex-1">
              <h3 className="font-bold text-pink-400 text-xl">100% Community</h3>
              <p className="text-slate-400 mt-1">Fair launch, no team tokens. All for the pack!</p>
            </div>
            <div className="bg-purple-900/50 border border-purple-700 rounded-lg p-4 flex-1">
              <h3 className="font-bold text-pink-400 text-xl">Meme-First Culture</h3>
              <p className="text-slate-400 mt-1">This is a home for memes, joy, and a little bit of 'woof'.</p>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <img src={ABOUT_IMAGE_URL} alt="Raiko with a phone" className="rounded-2xl shadow-2xl shadow-cyan-500/20 max-w-sm w-full transform transition-transform duration-500 hover:scale-105" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;