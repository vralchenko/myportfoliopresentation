import React from 'react';

interface LanguageSwitcherProps {
    lang: 'en' | 'de' | 'ru' | 'ua';
    setLang: (lang: 'en' | 'de' | 'ru' | 'ua') => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ lang, setLang }) => {
    return (
        <div className="absolute top-4 left-4 md:top-6 md:right-6 md:left-auto z-50 flex gap-1 md:gap-2 scale-75 md:scale-100 origin-top-left md:origin-top-right">
            {[
                { code: 'en', label: 'EN' },
                { code: 'de', label: 'DE' },
                { code: 'ua', label: 'UA' },
                { code: 'ru', label: 'RU' }
            ].map(l => (
                <button
                    key={l.code}
                    onClick={() => setLang(l.code as any)}
                    className={`px-2 py-0.5 md:px-3 md:py-1 rounded border text-xs md:text-base font-bold transition-all ${lang === l.code ? 'bg-purple-600 border-purple-600 text-white shadow-lg' : 'bg-transparent border-slate-600 text-slate-400 hover:text-white'}`}
                >
                    {l.label}
                </button>
            ))}
        </div>
    );
};

export default LanguageSwitcher;
