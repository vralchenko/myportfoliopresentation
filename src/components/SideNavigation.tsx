import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SideNavigationProps {
    currentSlide: number;
    totalSlides: number;
    nextSlide: () => void;
    prevSlide: () => void;
}

const SideNavigation: React.FC<SideNavigationProps> = ({ currentSlide, totalSlides, nextSlide, prevSlide }) => {
    return (
        <>
            {currentSlide > 0 && (
                <button
                    onClick={prevSlide}
                    className="absolute left-4 bottom-8 md:left-8 md:top-1/2 md:-translate-y-1/2 z-[100] p-3 md:p-4 rounded-full bg-slate-800/80 hover:bg-purple-600 border border-slate-700 hover:border-purple-500 text-white transition shadow-2xl active:scale-95"
                    aria-label="Previous slide"
                >
                    <ChevronLeft size={24} className="md:w-8 md:h-8" />
                </button>
            )}

            {currentSlide < totalSlides - 1 && (
                <button
                    onClick={nextSlide}
                    className="absolute right-4 bottom-8 md:right-8 md:top-1/2 md:-translate-y-1/2 z-[100] p-3 md:p-4 rounded-full bg-slate-800/80 hover:bg-purple-600 border border-slate-700 hover:border-purple-500 text-white transition shadow-2xl active:scale-95"
                    aria-label="Next slide"
                >
                    <ChevronRight size={24} className="md:w-8 md:h-8" />
                </button>
            )}
        </>
    );
};

export default SideNavigation;
