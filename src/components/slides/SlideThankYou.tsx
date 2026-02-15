import React from 'react';
import { motion } from 'framer-motion';
import QRCode from 'react-qr-code';

interface SlideThankYouProps {
    t: any;
}

const SlideThankYou: React.FC<SlideThankYouProps> = ({ t }) => {
    return (
        <motion.div
            key="thank-you"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="w-full h-full flex flex-col items-center justify-start md:justify-center p-4 pt-48 md:pt-40 text-center overflow-y-auto no-scrollbar"
        >
            <h2 className="text-4xl md:text-7xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 leading-tight py-2 max-w-5xl mx-auto">
                {t.thankYou}
            </h2>
            <p className="text-lg md:text-3xl text-gray-400 mb-6 italic">{t.questions}</p>

            <div className="mb-8 md:mb-12 flex flex-col items-center">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 md:px-6 md:py-3 rounded-full mb-4 md:mb-6 flex items-center gap-2 md:gap-3"
                >
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(16,185,129,0.8)]" />
                    <span className="text-emerald-400 font-black tracking-widest uppercase text-[10px] md:text-sm">{t.openToWork}</span>
                </motion.div>
                <p className="text-base md:text-2xl text-gray-300 max-w-2xl leading-relaxed font-light px-2">
                    {t.hiringNotice}
                </p>
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
        </motion.div>
    );
};

export default SlideThankYou;
