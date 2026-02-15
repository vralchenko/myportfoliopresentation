import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone } from 'lucide-react';
import QRCode from 'react-qr-code';

interface SlideBizLingoOverviewProps {
    t: any;
}

const SlideBizLingoOverview: React.FC<SlideBizLingoOverviewProps> = ({ t }) => {
    return (
        <motion.div
            key="biz-overview"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="w-full h-full flex flex-col items-center justify-start md:justify-center p-4 pt-32 md:p-8 md:pt-40 overflow-y-auto no-scrollbar"
        >
            <div className="max-w-4xl w-full text-center space-y-6 md:space-y-8">
                <div className="inline-block p-3 md:p-4 bg-blue-500/10 rounded-2xl md:rounded-3xl border border-blue-500/30 mb-2 md:mb-4 animate-pulse">
                    <Smartphone size={48} className="text-blue-400 md:w-16 md:h-16" />
                </div>
                <h2 className="text-4xl md:text-7xl font-black text-white leading-tight">{t.flagship2}</h2>
                <p className="text-lg md:text-3xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto px-2">
                    {t.projectDesc2}
                </p>
                <div className="pt-4 md:pt-8 flex flex-col items-center pb-8">
                    <a
                        href="https://biz-lingo-chi.vercel.app/"
                        target="_blank"
                        className="bg-white p-3 md:p-4 rounded-xl md:rounded-2xl shadow-2xl hover:scale-105 transition duration-300 ring-4 ring-blue-500/20 group block relative"
                    >
                        <QRCode value="https://biz-lingo-chi.vercel.app/" size={120} className="md:w-[140px] md:h-[140px]" />
                        <div className="text-black text-[8px] md:text-[11px] font-black mt-2 uppercase tracking-widest">{t.navBizLingo}</div>
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default SlideBizLingoOverview;
