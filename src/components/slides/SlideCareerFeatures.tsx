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
            className="w-full h-full flex flex-col items-center justify-start md:justify-center p-8 pt-32 md:p-8 overflow-y-auto no-scrollbar"
        >
            <div className="max-w-6xl w-full">
                <h2 className="text-4xl md:text-5xl font-black mb-8 md:mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                    {t.featuresTitle3}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 pb-20 md:pb-0">
                    <div className="bg-slate-900/60 p-8 md:p-10 rounded-[2.5rem] border border-white/5 hover:border-purple-500/30 transition shadow-xl">
                        <div className="w-14 h-14 md:w-16 md:h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 text-purple-400">
                            <Brain size={32} />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{t.feat1Title3}</h3>
                        <p className="text-lg md:text-xl text-gray-400 leading-relaxed">{t.feat1Desc3}</p>
                    </div>
                    <div className="bg-slate-900/60 p-8 md:p-10 rounded-[2.5rem] border border-white/5 hover:border-blue-500/30 transition shadow-xl">
                        <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 text-blue-400">
                            <Sparkles size={32} />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{t.feat2Title3}</h3>
                        <p className="text-lg md:text-xl text-gray-400 leading-relaxed">{t.feat2Desc3}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default SlideCareerFeatures;
