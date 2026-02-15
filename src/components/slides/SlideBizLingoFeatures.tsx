import React from 'react';
import { motion } from 'framer-motion';

interface SlideBizLingoFeaturesProps {
    t: any;
}

const SlideBizLingoFeatures: React.FC<SlideBizLingoFeaturesProps> = ({ t }) => {
    return (
        <motion.div
            key="biz-features"
            className="w-full h-full flex flex-col items-center justify-center p-8"
        >
            <div className="max-w-5xl w-full">
                <h2 className="text-5xl font-bold mb-16 text-center text-blue-400">{t.featuresTitle2}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-slate-900/40 p-8 rounded-3xl border border-white/5">
                        <h3 className="text-3xl font-bold text-blue-400 mb-4">🧠 {t.feat1Title2}</h3>
                        <p className="text-xl text-gray-400 leading-relaxed">{t.feat1Desc2}</p>
                    </div>
                    <div className="bg-slate-900/40 p-8 rounded-3xl border border-white/5">
                        <h3 className="text-3xl font-bold text-cyan-400 mb-4">⚖️ {t.feat2Title2}</h3>
                        <p className="text-xl text-gray-400 leading-relaxed">{t.feat2Desc2}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default SlideBizLingoFeatures;
