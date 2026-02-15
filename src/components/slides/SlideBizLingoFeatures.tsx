import React from 'react';
import { motion } from 'framer-motion';

interface SlideBizLingoFeaturesProps {
    t: any;
}

const SlideBizLingoFeatures: React.FC<SlideBizLingoFeaturesProps> = ({ t }) => {
    return (
        <motion.div
            key="biz-features"
            className="w-full h-full flex flex-col items-center justify-start md:justify-center p-8 pt-32 md:p-8 overflow-y-auto no-scrollbar"
        >
            <div className="max-w-5xl w-full">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-8 md:mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 leading-tight tracking-tighter py-2">{t.featuresTitle2}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 pb-20 md:pb-0">
                    <div className="bg-slate-900/40 p-6 md:p-8 rounded-3xl border border-white/5">
                        <h3 className="text-2xl md:text-3xl font-bold text-blue-400 mb-4">{t.feat1Title2}</h3>
                        <p className="text-lg md:text-xl text-gray-400 leading-relaxed">{t.feat1Desc2}</p>
                    </div>
                    <div className="bg-slate-900/40 p-6 md:p-8 rounded-3xl border border-white/5">
                        <h3 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-4">{t.feat2Title2}</h3>
                        <p className="text-lg md:text-xl text-gray-400 leading-relaxed">{t.feat2Desc2}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default SlideBizLingoFeatures;
