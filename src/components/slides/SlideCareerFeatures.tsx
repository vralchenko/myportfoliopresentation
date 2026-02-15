import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles } from 'lucide-react';

interface SlideCareerFeaturesProps {
    t: any;
}

const SlideCareerFeatures: React.FC<SlideCareerFeaturesProps> = ({ t }) => {
    return (
        <motion.div
            key="career-features"
            className="w-full h-full flex flex-col items-center justify-center p-8"
        >
            <div className="max-w-6xl w-full">
                <h2 className="text-5xl font-black mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                    {t.featuresTitle3}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-slate-900/60 p-10 rounded-[2.5rem] border border-white/5 hover:border-purple-500/30 transition shadow-xl">
                        <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 text-purple-400">
                            <Brain size={32} />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-4">{t.feat1Title3}</h3>
                        <p className="text-xl text-gray-400 leading-relaxed">{t.feat1Desc3}</p>
                    </div>
                    <div className="bg-slate-900/60 p-10 rounded-[2.5rem] border border-white/5 hover:border-blue-500/30 transition shadow-xl">
                        <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 text-blue-400">
                            <Sparkles size={32} />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-4">{t.feat2Title3}</h3>
                        <p className="text-xl text-gray-400 leading-relaxed">{t.feat2Desc3}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default SlideCareerFeatures;
