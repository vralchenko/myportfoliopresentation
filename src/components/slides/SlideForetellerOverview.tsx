import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import QRCode from 'react-qr-code';

interface SlideForetellerOverviewProps {
    t: any;
}

const SlideForetellerOverview: React.FC<SlideForetellerOverviewProps> = ({ t }) => {
    return (
        <motion.div
            key="project-overview"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="w-full h-full flex flex-col items-center justify-start md:justify-center p-4 pt-24 md:p-8 overflow-y-auto no-scrollbar"
        >
            <div className="max-w-4xl w-full text-center space-y-6 md:space-y-8">
                <div className="inline-block p-3 md:p-4 bg-purple-500/10 rounded-2xl md:rounded-3xl border border-purple-500/30 mb-2 md:mb-4 animate-bounce">
                    <Sparkles size={48} className="text-purple-400 md:w-16 md:h-16" />
                </div>
                <h2 className="text-4xl md:text-7xl font-black text-white px-2 leading-tight">{t.flagship}</h2>
                <p className="text-lg md:text-3xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto px-4">
                    {t.projectDesc}
                </p>
                <div className="pt-4 md:pt-8 flex flex-col items-center pb-8">
                    <a
                        href="https://foreteller.vercel.app/"
                        target="_blank"
                        className="bg-white p-3 md:p-4 rounded-xl md:rounded-2xl shadow-2xl hover:scale-105 transition duration-300 ring-4 ring-purple-500/20 group block relative"
                    >
                        <QRCode value="https://foreteller.vercel.app/" size={120} className="md:w-[140px] md:h-[140px]" />
                        <div className="text-black text-[8px] md:text-[11px] font-black mt-2 uppercase tracking-widest">{t.navForeteller}</div>
                        <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/5 transition-colors" />
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default SlideForetellerOverview;
