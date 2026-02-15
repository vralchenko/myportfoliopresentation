import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import QRCode from 'react-qr-code';

interface SlideCareerOverviewProps {
    t: any;
}

const SlideCareerOverview: React.FC<SlideCareerOverviewProps> = ({ t }) => {
    return (
        <motion.div
            key="career-overview"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="w-full h-full flex flex-col items-center justify-start md:justify-center p-4 pt-24 md:p-8 overflow-y-auto no-scrollbar"
        >
            <div className="max-w-6xl flex flex-col md:flex-row items-center gap-8 md:gap-16">
                <div className="flex-1 text-left w-full">
                    <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                        <div className="p-3 md:p-4 bg-purple-500 rounded-2xl md:rounded-3xl shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                            <Briefcase className="text-white" size={24} />
                        </div>
                        <h2 className="text-3xl md:text-6xl font-black tracking-tight">{t.flagship3}</h2>
                    </div>
                    <p className="text-lg md:text-3xl text-gray-300 leading-relaxed font-light mb-6 md:mb-10">
                        {t.projectDesc3}
                    </p>
                    <div className="flex gap-4 mb-8 md:mb-0 justify-center md:justify-start">
                        <a
                            href="https://ai-career-coach-production-f43f.up.railway.app/"
                            target="_blank"
                            className="bg-white p-3 md:p-4 rounded-xl shadow-2xl flex flex-col items-center hover:scale-105 transition duration-300 group"
                        >
                            <QRCode value="https://ai-career-coach-production-f43f.up.railway.app/" size={120} className="md:w-[140px] md:h-[140px]" />
                            <div className="text-black text-[8px] md:text-[10px] font-bold mt-2 uppercase tracking-widest">{t.navCareer}</div>
                        </a>
                    </div>
                </div>
                <div className="flex-1 relative group w-full mb-8 md:mb-0">
                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-[2rem] md:rounded-[3rem] blur-xl md:blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                    <div className="relative bg-slate-900 rounded-[1.5rem] md:rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1000&auto=format&fit=crop"
                            alt="Career Coach UI"
                            className="w-full h-auto opacity-80 group-hover:scale-105 transition duration-700"
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default SlideCareerOverview;
