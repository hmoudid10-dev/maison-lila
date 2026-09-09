import React from 'react';
import { ArrowRight, Sparkles, Award, Heart, ShieldCheck, MessageCircle } from 'lucide-react';
import { CardImage } from './CardImage';

export const Hero: React.FC = () => {
  return (
    <section id="accueil" className="relative overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-[#F6E6E8]/30 to-[#FAF7F2] pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Delicate background decorative elements */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#E8B4B8]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Tag pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFDF9] border border-[#E8B4B8] text-[#3D271D] text-xs font-semibold shadow-xs mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Haute Pâtisserie Artisanale • Rabat Souissi</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#3D271D] leading-[1.15] mb-6">
              L’émotion d’une pâtisserie d’exception,{' '}
              <span className="italic font-normal text-[#C97A85] block sm:inline">
                façonnée avec amour.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#5C4033] leading-relaxed mb-8 max-w-2xl font-light">
              Maison Lila réinvente la haute gourmandise au cœur de Rabat. Nos entremets délicats,
              tartes fines et macarons signatures marient la pure tradition française aux trésors
              parfumés du Maroc : fleur d’oranger distillée, amandes du Moyen Atlas et chocolats grands crus.
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                id="bouton-hero-decouvrir"
                href="#carte"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#3D271D] text-[#FAF7F2] font-semibold text-sm hover:bg-[#251610] shadow-md hover:shadow-lg transition-all group border border-[#C5A059]/40"
              >
                <span>Découvrir la carte des créations</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#C5A059]" />
              </a>

              <a
                id="bouton-hero-whatsapp"
                href="https://wa.me/212661000000?text=Bonjour%20Maison%20Lila%2C%20je%20d%C3%A9sire%20passer%20une%20commande%20pour%20une%20p%C3%A2tisserie."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#FFFDF9] text-[#3D271D] font-semibold text-sm hover:bg-[#FAF7F2] border border-[#E8B4B8] shadow-xs hover:border-[#3D271D] transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Commander sur WhatsApp</span>
              </a>
            </div>

            {/* Reassurance Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-[#E8B4B8]/30 w-full">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#FFFDF9] border border-[#E8B4B8]/60 flex items-center justify-center text-[#C5A059]">
                  <Award className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="text-xs font-bold text-[#3D271D] block">100% Artisanal</span>
                  <span className="text-[11px] text-[#5C4033]/80">Fait main chaque matin</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#FFFDF9] border border-[#E8B4B8]/60 flex items-center justify-center text-[#C97A85]">
                  <Heart className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="text-xs font-bold text-[#3D271D] block">Ingrédients Purs</span>
                  <span className="text-[11px] text-[#5C4033]/80">Beurre AOP & Grands Crus</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <div className="w-8 h-8 rounded-full bg-[#FFFDF9] border border-[#E8B4B8]/60 flex items-center justify-center text-[#C5A059]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="text-xs font-bold text-[#3D271D] block">Livraison Rabat</span>
                  <span className="text-[11px] text-[#5C4033]/80">Caissons réfrigérés</span>
                </div>
              </div>
            </div>

          </div>

          {/* Visual Showcase Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main artistic image frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FFFDF9] bg-[#3D271D] aspect-[4/5] group">
                <CardImage
                  src="magasin.jpg"
                  alt="Devanture de la boutique Maison Lila à Rabat"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  containerClassName="w-full h-full aspect-[4/5]"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#251610]/85 via-transparent to-transparent pointer-events-none" />

                {/* Overlay details */}
                <div className="absolute bottom-6 left-6 right-6 text-[#FAF7F2] pointer-events-none">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#C5A059] text-[#251610] text-[11px] font-bold tracking-wider uppercase mb-2">
                    Boutique & Salon de Thé
                  </span>
                  <h2 className="font-serif text-2xl font-bold mb-1">
                    Maison Lila Rabat
                  </h2>
                  <p className="text-xs text-[#FAF7F2]/90 line-clamp-2">
                    Pâtisseries d’exception, viennoiseries dorées & créations sur-mesure au quartier Souissi.
                  </p>
                  <div className="mt-3 flex items-center justify-between pt-3 border-t border-[#FAF7F2]/20">
                    <span className="text-sm font-light text-[#FAF7F2]/80">Souissi • Rabat</span>
                    <span className="text-sm font-bold text-[#C5A059]">Ouvert 7j/7</span>
                  </div>
                </div>
              </div>

              {/* Floating complementary card: Macaron prestige */}
              <div className="absolute -bottom-6 -left-6 sm:-left-8 bg-[#FFFDF9] p-3 sm:p-4 rounded-xl shadow-xl border border-[#E8B4B8]/60 flex items-center gap-3.5 max-w-xs animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-[#E8B4B8]/40">
                  <CardImage
                    src="macarons.jpg"
                    alt="Macarons artisanaux"
                    className="w-full h-full object-cover"
                    containerClassName="w-12 h-12"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-[#C5A059] text-xs">
                    <span>★ ★ ★ ★ ★</span>
                  </div>
                  <h3 className="text-xs font-bold text-[#3D271D] leading-snug">
                    Coffrets Macarons
                  </h3>
                  <p className="text-[11px] text-[#5C4033]/80">
                    Poudre d’amandes pures
                  </p>
                </div>
              </div>

              {/* Atelier badge */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-[#3D271D] text-[#FAF7F2] p-3.5 rounded-full shadow-lg border-2 border-[#C5A059] flex flex-col items-center justify-center w-24 h-24 text-center">
                <span className="text-[10px] uppercase font-bold text-[#C5A059] tracking-wider">Atelier</span>
                <span className="font-serif text-sm font-bold">Rabat</span>
                <span className="text-[9px] text-[#FAF7F2]/75">Souissi</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
