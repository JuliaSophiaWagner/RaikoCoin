
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FeaturesSection from './components/FeaturesSection';
import MemeSection from './components/MemeSection';
import RoadmapSection from './components/RoadmapSection';
import StarmapSection from './components/StarmapSection';
import HowToBuySection from './components/HowToBuySection';
import GameSection from './components/GameSection';
import Footer from './components/Footer';
import ImpressumSection from './components/ImpressumSection';

const App = () => {
  return (
    <div className="bg-animated-galaxy text-white min-h-screen">
        <div className="relative z-10 flex flex-col min-h-screen bg-black/10">
            <Header />
            <main className="flex-grow">
                <HeroSection />
                <AboutSection />
                <FeaturesSection />
                <MemeSection />
                <RoadmapSection />
                <StarmapSection />
                <HowToBuySection />
                <GameSection />
                <ImpressumSection />
            </main>
            <Footer />
        </div>
    </div>
  );
};

export default App;