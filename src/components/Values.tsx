import React from 'react';
import { Sparkles, UtensilsCrossed, Leaf, Truck } from 'lucide-react';

export const Values: React.FC = () => {
  const values = [
    {
      icon: Leaf,
      title: 'Matières Premières Nobles',
      subtitle: 'Sélection rigoureuse et éthique',
      description: 'Vanille Bourbon de Madagascar en gousses entières, beurre de baratte AOP Charentes-Poitou, chocolat noir Valrhona grand cru et amandes douces récoltées dans le Moyen Atlas marocain.'
    },
    {
      icon: UtensilsCrossed,
      title: 'Haute Précision Artisanale',
      subtitle: 'Gestes minutieux faits main',
      description: 'Chaque entremet, tarte et viennoiserie est monté à la main chaque matin dans notre laboratoire de Souissi par notre brigade passionnée, garantissant une fraîcheur irréprochable.'
    },
    {
      icon: Sparkles,
      title: 'Créations Sur-Mesure',
      subtitle: 'Pour vos célébrations uniques',
      description: 'Mariages, fiançailles, baptêmes ou anniversaires : nous personnalisons saveurs, hauteurs, inscriptions en chocolat et décors floraux pour sublimer vos moments inoubliables.'
    },
    {
      icon: Truck,
      title: 'Livraison Soignée à Rabat',
      subtitle: 'Fraîcheur préservée à 4°C',
      description: 'Nos livreurs dédiés acheminent vos créations dans des caissons isothermes sécurisés directement à votre domicile à Rabat (Souissi, Agdal, Hay Riad, Hassan, Harhoura).'
    }
  ];

  return (
    <section className="py-16 bg-[#FFFDF9] border-y border-[#E8B4B8]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-[#C5A059] font-bold block mb-2">
            Notre Philosophie
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#3D271D]">
            L’exigence de l’excellence dans chaque détail
          </h2>
          <div className="w-12 h-0.5 bg-[#C5A059] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="group relative p-6 rounded-2xl bg-[#FAF7F2] border border-[#E8B4B8]/40 hover:border-[#C5A059] hover:bg-[#FFFDF9] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FFFDF9] border border-[#E8B4B8]/60 flex items-center justify-center text-[#3D271D] group-hover:text-[#C5A059] group-hover:scale-110 transition-transform mb-5 shadow-xs">
                    <Icon className="w-6 h-6 stroke-[1.6]" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#3D271D] mb-1">
                    {val.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#C97A85] mb-3">
                    {val.subtitle}
                  </p>
                  <p className="text-xs text-[#5C4033] leading-relaxed font-light">
                    {val.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#E8B4B8]/20 flex items-center gap-1.5 text-[11px] text-[#C5A059] font-medium">
                  <Sparkles className="w-3 h-3" />
                  <span>Signature Maison Lila</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
