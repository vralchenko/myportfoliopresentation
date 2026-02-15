import React from 'react';

interface TopNavigationProps {
    currentSlide: number;
    setCurrentSlide: (slide: number) => void;
    setDemoStep: (step: number) => void;
    t: any;
}

const TopNavigation: React.FC<TopNavigationProps> = ({ currentSlide, setCurrentSlide, setDemoStep, t }) => {
    return (
        <div className="absolute top-14 md:top-8 left-1/2 -translate-x-1/2 flex gap-4 md:gap-8 z-50 items-center bg-black/40 backdrop-blur-md px-4 py-2 md:px-6 md:py-3 rounded-2xl border border-white/5 shadow-2xl w-[95%] md:w-auto overflow-x-auto no-scrollbar justify-center md:justify-center">
            {[
                { label: t.navIntro, range: [0, 0] },
                { label: t.navCareer, range: [1, 5] },
                { label: t.navForeteller, range: [6, 10] },
                { label: t.navBizLingo, range: [11, 15] },
                { label: t.navFinish, range: [16, 16] }
            ].map((group) => (
                <div key={group.label} className="flex flex-col items-center gap-1 md:gap-2 shrink-0">
                    <span className={`text-[6px] md:text-[8px] font-black tracking-[0.2em] transition-colors whitespace-nowrap ${currentSlide >= group.range[0] && currentSlide <= group.range[1]
                        ? 'text-purple-400'
                        : 'text-slate-600'
                        }`}>
                        {group.label}
                    </span>
                    <div className="flex gap-1 md:gap-1.5">
                        {Array.from({ length: group.range[1] - group.range[0] + 1 }).map((_, idx) => {
                            const slideIdx = group.range[0] + idx;
                            const isActive = slideIdx === currentSlide;
                            return (
                                <button
                                    key={slideIdx}
                                    onClick={() => {
                                        setCurrentSlide(slideIdx);
                                        setDemoStep(0);
                                    }}
                                    className={`h-1 md:h-1.5 rounded-full transition-all duration-500 hover:opacity-80 ${isActive
                                        ? 'w-4 md:w-6 bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]'
                                        : 'w-1.5 md:w-2 bg-slate-700'
                                        }`}
                                />
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TopNavigation;
