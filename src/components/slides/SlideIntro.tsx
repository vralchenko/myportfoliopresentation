import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Database, Monitor, Brain, CheckSquare } from 'lucide-react';
import QRCode from 'react-qr-code';
import UserAvatar from '../UserAvatar';

interface SlideIntroProps {
    t: any;
}

const SlideIntro: React.FC<SlideIntroProps> = ({ t }) => {
    return (
        <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full h-full flex flex-col items-center justify-start md:justify-center p-4 pt-48 md:pt-40 text-center overflow-y-auto no-scrollbar"
        >
            <div className="flex flex-col items-center relative z-0">
                <UserAvatar />
                {/* Master Degree Badge */}
                <div className="flex items-center gap-2 mb-2 bg-purple-500/20 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-purple-500/30">
                    <GraduationCap className="text-purple-400" size={16} />
                    <span className="text-purple-300 text-xs md:text-sm font-bold tracking-wider uppercase">{t.masterDegree}</span>
                </div>

                <h1 className="text-4xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-1 leading-none bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 drop-shadow-2xl px-4 scale-90 md:scale-75 origin-center">
                    {t.name}
                </h1>
                <p className="text-lg md:text-2xl text-gray-300 mb-6 font-light tracking-wide max-w-4xl">
                    {t.role}
                </p>

                <div className="flex flex-wrap justify-center gap-3 md:gap-6 max-w-4xl mb-8 md:mb-12">
                    {t.introSkills.map((skill: any) => {
                        const Icon = skill.icon === 'Database' ? Database :
                            skill.icon === 'Monitor' ? Monitor :
                                skill.icon === 'Brain' ? Brain : CheckSquare;
                        return (
                            <div key={skill.label} className="flex items-center gap-2 md:gap-3 px-4 py-2 md:px-6 md:py-3 bg-slate-800/50 backdrop-blur rounded-2xl border border-slate-700 hover:border-purple-500 transition group">
                                <Icon className="text-purple-400 group-hover:scale-110 transition" size={18} />
                                <span className="text-gray-300 font-bold tracking-widest text-xs md:text-sm">{skill.label}</span>
                            </div>
                        );
                    })}
                </div>

                <div className="flex flex-wrap gap-6 md:gap-12 justify-center pb-20">
                    <a href="https://linkedin.com/in/victoralchenko/" target="_blank" className="bg-white p-3 md:p-4 rounded-xl shadow-2xl flex flex-col items-center hover:scale-105 transition duration-300">
                        <QRCode value="https://linkedin.com/in/victoralchenko/" size={120} className="md:w-[140px] md:h-[140px]" />
                        <div className="text-black text-[8px] md:text-[10px] font-bold mt-2 uppercase tracking-widest">{t.linkedin}</div>
                    </a>
                    <a href="https://vralchenko-portfolio.vercel.app/en" target="_blank" className="bg-white p-3 md:p-4 rounded-xl shadow-2xl flex flex-col items-center hover:scale-105 transition duration-300">
                        <QRCode value="https://vralchenko-portfolio.vercel.app/en" size={120} className="md:w-[140px] md:h-[140px]" />
                        <div className="text-black text-[8px] md:text-[10px] font-bold mt-2 uppercase tracking-widest">{t.portfolio}</div>
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default SlideIntro;
