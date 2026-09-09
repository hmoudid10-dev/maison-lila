import React from 'react';
import { Sparkles, Heart, Award, CheckCircle2, ShieldCheck, Flame, Flower2, UtensilsCrossed } from 'lucide-react';

export const StoryAndCraft: React.FC = () => {
  return (
    <section id="atelier" className="py-16 sm:py-24 bg-[#FAF7F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Craft & Values Bento Grid (No external images) */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              
              {/* Pillar 1 */}
              <div className="p-6 rounded-3xl bg-[#FFFDF9] border border-[#E8B4B8]/50 shadow-xs hover:border-[#C5A059] transition-colors flex flex-col justify-between aspect-[4/4.5]">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-[#E8B4B8] flex items-center justify-center text-[#C97A85]">
                  <Flame className="w-6 h-6 text-[#C5A059]" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#C97A85] block mb-1">
                    Feuilletage Pur Beurre
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#3D271D] mb-1">
                    Beurre AOP 84%
                  </h3>
                  <p className="text-xs text-[#5C4033]/80 leading-relaxed">
                    Beurre Charentes-Poitou d'exception pour des viennoiseries légères et aérées.
                  </p>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="p-6 rounded-3xl bg-[#3D271D] text-[#FAF7F2] border border-[#C5A059]/40 shadow-md flex flex-col justify-between aspect-[4/4.5] mt-6">
                <div className="w-12 h-12 rounded-2xl bg-[#251610] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059]">
                  <Flower2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#C5A059] block mb-1">
                    Héritage Marocain
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#FAF7F2] mb-1">
                    Fleur d’Oranger de Fès
                  </h3>
                  <p className="text-xs text-[#FAF7F2]/80 leading-relaxed">
                    Distillation florale pure et amandes douces sélectionnées au Moyen Atlas.
                  </p>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="p-6 rounded-3xl bg-[#3D271D] text-[#FAF7F2] border border-[#C5A059]/40 shadow-md flex flex-col justify-between aspect-[4/4.5] -mt-6">
                <div className="w-12 h-12 rounded-2xl bg-[#251610] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059]">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#C5A059] block mb-1">
                    Grands Crus
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#FAF7F2] mb-1">
                    Chocolat Valrhona
                  </h3>
                  <p className="text-xs text-[#FAF7F2]/80 leading-relaxed">
                    Guanaja 70% et fèves nobles pour des ganaches d'une intensité inégalée.
                  </p>
                </div>
              </div>

              {/* Pillar 4 */}
              <div className="p-6 rounded-3xl bg-[#FFFDF9] border border-[#E8B4B8]/50 shadow-xs hover:border-[#C5A059] transition-colors flex flex-col justify-between aspect-[4/4.5]">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-[#E8B4B8] flex items-center justify-center text-[#C97A85]">
                  <UtensilsCrossed className="w-6 h-6 text-[#C97A85]" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#C97A85] block mb-1">
                    Geste Artisanal
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#3D271D] mb-1">
                    Façonné à la Main
                  </h3>
                  <p className="text-xs text-[#5C4033]/80 leading-relaxed">
                    Chaque création est dressée avec patience chaque matin dans notre laboratoire de Rabat.
                  </p>
                </div>
              </div>

            </div>

            {/* Central Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FFFDF9] px-4 py-3 rounded-2xl shadow-xl border border-[#C5A059] text-center max-w-[210px] backdrop-blur-xs">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A059] block mb-0.5">
                Maison Lila Rabat
              </span>
              <p className="font-serif text-xs font-bold text-[#3D271D]">
                Excellence & Tradition
              </p>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFDF9] border border-[#E8B4B8] text-[#C97A85] text-xs font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>L’Histoire de Maison Lila</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3D271D] leading-tight mb-6">
              Quand la haute pâtisserie française rencontre l’âme marocaine.
            </h2>

            <p className="text-sm sm:text-base text-[#5C4033] leading-relaxed mb-6 font-light">
              Nichée dans le quartier résidentiel de Souissi à Rabat, <strong className="font-semibold text-[#3D271D]">Maison Lila</strong> est née de la volonté d’unir la précision orfèvre des techniques pâtissières françaises et la richesse poétique des saveurs du terroir marocain.
            </p>

            <p className="text-sm text-[#5C4033] leading-relaxed mb-8 font-light">
              Nos entremets, tartes fines et pièces d’exception sont élaborés sans arômes artificiels, sans conservateurs et avec un taux de sucre minutieusement réduit pour laisser s’épanouir la noblesse des matières premières.
            </p>

            {/* Commitments list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <span className="text-xs text-[#3D271D] font-medium">
                  Beurre de tourage AOP Charentes-Poitou & crèmes fraîches d’exception.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <span className="text-xs text-[#3D271D] font-medium">
                  Chocolats pure origine éthique et grands crus Valrhona.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <span className="text-xs text-[#3D271D] font-medium">
                  Fleurs d’oranger distillées à Fès & amandes douces de l’Atlas.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <span className="text-xs text-[#3D271D] font-medium">
                  Production artisanale quotidienne en quantités limitées.
                </span>
              </div>
            </div>

            {/* Signature quote block */}
            <div className="p-5 rounded-2xl bg-[#FFFDF9] border-l-4 border-[#C97A85] border-y border-r border-[#E8B4B8]/40 shadow-xs w-full">
              <p className="font-serif italic text-sm text-[#3D271D] leading-relaxed">
                « Une pâtisserie ne doit pas seulement être dégustée ; elle doit susciter une émotion sincère et réunir ceux qui partagent la table. »
              </p>
              <span className="text-xs font-semibold text-[#C5A059] block mt-2">
                — L’Équipe des Chefs Maison Lila
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
