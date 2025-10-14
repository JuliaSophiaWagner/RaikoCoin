import React from 'react';

const ImpressumSection = () => {
    return (
        <section id="impressum" className="py-16 bg-[#140b2f]">
            <div className="container mx-auto px-6 text-center text-slate-400 max-w-3xl">
                <h2 className="text-3xl font-bold mb-6 text-cyan-400 font-orbitron">Impressum / Legal Notice</h2>
                <div className="text-left bg-slate-900/60 p-8 rounded-lg border border-purple-700 space-y-4">
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Contact Information</h3>
                        <p className="text-slate-300">
                            For any inquiries, please contact us via email:
                        </p>
                        <a href="mailto:raikocoin.tainted286@passinbox.com" className="text-pink-400 hover:underline break-all">
                            raikocoin.tainted286@passinbox.com
                        </a>
                    </div>
                    <div className="border-t border-purple-800/50 pt-4">
                         <h3 className="text-xl font-semibold text-white mb-2">Disclaimer</h3>
                         <p className="text-slate-300">
                            RaikoCoin is a purely cultural meme project with no commercial purpose. It is neither a financial product nor a service. All content is for entertainment purposes only.
                         </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImpressumSection;