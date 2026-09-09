import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/faq';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#FFFDF9] border-t border-[#E8B4B8]/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#E8B4B8] text-[#C97A85] text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Foire Aux Questions</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#3D271D]">
            Vos Questions Fréquentes
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#5C4033] font-light">
            Tout ce qu’il faut savoir pour commander vos pâtisseries et préparer vos réceptions à Rabat.
          </p>
          <div className="w-16 h-0.5 bg-[#C5A059] mx-auto mt-4 rounded-full" />
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#FAF7F2] border-[#C5A059] shadow-xs'
                    : 'bg-[#FFFDF9] border-[#E8B4B8]/40 hover:border-[#E8B4B8]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-[#3D271D] leading-snug">
                    {item.question}
                  </span>
                  <div className={`p-1.5 rounded-full transition-transform duration-300 ${
                    isOpen ? 'bg-[#3D271D] text-[#FAF7F2] rotate-180' : 'bg-[#FAF7F2] text-[#3D271D]'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-0 text-xs sm:text-sm text-[#5C4033] leading-relaxed font-light border-t border-[#E8B4B8]/20 mt-1 animate-in fade-in duration-200">
                    <p className="pt-3">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have a question banner */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#FAF7F2] border border-[#E8B4B8]/40">
          <p className="text-xs sm:text-sm text-[#3D271D] font-medium">
            Une question spécifique sur un ingrédient ou une commande urgente ?
          </p>
          <a
            href="https://wa.me/212661000000?text=Bonjour%20Maison%20Lila%2C%20j%27ai%20une%20question%20particuli%C3%A8re."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-3 text-xs font-bold text-[#C5A059] hover:underline"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Écrire directement à notre atelier sur WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
