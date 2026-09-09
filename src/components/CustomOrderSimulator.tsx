import React, { useState, useMemo } from 'react';
import { Cake, Users, Calendar, Sparkles, MessageCircle, Check, HeartHandshake } from 'lucide-react';
import { CardImage } from './CardImage';

export const CustomOrderSimulator: React.FC = () => {
  const [eventType, setEventType] = useState('Mariage & Fiançailles');
  const [guestCount, setGuestCount] = useState(30);
  const [flavorPreference, setFlavorPreference] = useState('Fleur d’oranger, Framboise & Amande');
  const [hasGoldLeaf, setHasGoldLeaf] = useState(true);
  const [hasFreshFlowers, setHasFreshFlowers] = useState(true);
  const [hasMacaronTower, setHasMacaronTower] = useState(false);
  const [eventDate, setEventDate] = useState('');
  const [notes, setNotes] = useState('');

  // Estimation calculation
  const estimatedTotal = useMemo(() => {
    let basePerGuest = 45; // DH per portion
    if (eventType === 'Mariage & Fiançailles') basePerGuest = 55;
    if (eventType === 'Buffet d’Entreprise') basePerGuest = 40;

    let total = guestCount * basePerGuest;
    if (hasGoldLeaf) total += 150;
    if (hasFreshFlowers) total += 200;
    if (hasMacaronTower) total += 350;

    return total;
  }, [eventType, guestCount, hasGoldLeaf, hasFreshFlowers, hasMacaronTower]);

  const handleWhatsAppQuote = () => {
    let text = `*Bonjour Maison Lila, je souhaite solliciter un devis pour un gâteau / buffet sur-mesure :*\n\n`;
    text += `• *Type d’événement :* ${eventType}\n`;
    text += `• *Nombre de convives :* ${guestCount} personnes\n`;
    text += `• *Saveurs souhaitées :* ${flavorPreference}\n`;
    text += `• *Finition :* ${hasGoldLeaf ? 'Feuilles d’or 24k ' : ''}${hasFreshFlowers ? 'Fleurs fraîches ' : ''}${hasMacaronTower ? 'Cascade de macarons ' : ''}\n`;
    if (eventDate) text += `• *Date de l’événement :* ${eventDate}\n`;
    if (notes) text += `• *Précisions :* ${notes}\n`;
    text += `• *Estimation indicative du simulateur :* environ ${estimatedTotal} DH\n\n`;
    text += `Pourrions-nous convenir d’un échange ou d’une dégustation à votre atelier de Rabat ?`;

    const url = `https://wa.me/212661000000?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="sur-mesure" className="py-16 sm:py-24 bg-[#FFFDF9] border-b border-[#E8B4B8]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#E8B4B8] text-[#3D271D] text-xs font-semibold mb-3">
            <HeartHandshake className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Prestations d’Exception à Rabat</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#3D271D]">
            Créations Sur-Mesure & Événements
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#5C4033] font-light max-w-2xl mx-auto">
            Pour vos mariages, fiançailles, anniversaires ou réceptions corporatives, Maison Lila façonne
            des pièces montées sculpturales et des tables de desserts inoubliables.
          </p>
          <div className="w-16 h-0.5 bg-[#C5A059] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Simulator Form */}
          <div className="lg:col-span-7 bg-[#FAF7F2] p-6 sm:p-8 rounded-3xl border border-[#E8B4B8]/50 shadow-xs">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#3D271D] mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#C5A059]" />
              <span>Simulateur de Devis Instantané</span>
            </h3>

            {/* Event Type */}
            <div className="mb-6">
              <label className="block text-xs font-bold text-[#3D271D] uppercase tracking-wider mb-2">
                1. Type d’événement
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  'Mariage & Fiançailles',
                  'Anniversaire',
                  'Baptême & Naissance',
                  'Buffet d’Entreprise'
                ].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setEventType(type)}
                    className={`p-2.5 rounded-xl text-xs font-medium border text-center transition-all ${
                      eventType === type
                        ? 'bg-[#3D271D] text-[#FAF7F2] border-[#3D271D] font-bold shadow-xs'
                        : 'bg-[#FFFDF9] text-[#5C4033] border-[#E8B4B8]/40 hover:border-[#3D271D]'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Guest Count Slider */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-[#3D271D] uppercase tracking-wider">
                  2. Nombre de convives
                </label>
                <span className="font-serif text-lg font-bold text-[#C5A059] px-3 py-0.5 bg-[#FFFDF9] rounded-full border border-[#E8B4B8]/50">
                  {guestCount} convives
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="200"
                step="5"
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="w-full h-2 bg-[#E8B4B8]/50 rounded-lg appearance-none cursor-pointer accent-[#3D271D]"
              />
              <div className="flex justify-between text-[11px] text-[#5C4033]/70 mt-1.5 font-medium">
                <span>10 personnes (Intimiste)</span>
                <span>80 personnes</span>
                <span>200+ personnes (Grande Réception)</span>
              </div>
            </div>

            {/* Flavor preference */}
            <div className="mb-6">
              <label className="block text-xs font-bold text-[#3D271D] uppercase tracking-wider mb-2">
                3. Profil de saveurs privilégié
              </label>
              <select
                value={flavorPreference}
                onChange={(e) => setFlavorPreference(e.target.value)}
                className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-[#FFFDF9] border border-[#E8B4B8] text-[#3D271D] focus:outline-none focus:border-[#3D271D]"
              >
                <option value="Fleur d’oranger, Framboise & Amande">Fleur d’oranger de Fès, Framboise fraîche & Amandes douces</option>
                <option value="Chocolat Grand Cru 70% & Praliné Noisette">Chocolat Grand Cru Valrhona & Praliné Noisette maison</option>
                <option value="Pistache d’Iran & Coulis Fruits Rouges">Pistache pure d’Iran & Coulis acidulé fruits rouges</option>
                <option value="Vanille Bourbon de Madagascar & Salé">Vanille Bourbon gousses entières & Caramel beurre salé</option>
                <option value="Citron de Berkane & Meringue Dorée">Citron de Berkane & Meringue soyeuse à la bergamote</option>
              </select>
            </div>

            {/* Decorative Touches */}
            <div className="mb-6">
              <label className="block text-xs font-bold text-[#3D271D] uppercase tracking-wider mb-2">
                4. Finitions décoratives artistiques
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <label className="flex items-center gap-2 p-3 rounded-xl bg-[#FFFDF9] border border-[#E8B4B8]/50 text-xs text-[#3D271D] cursor-pointer hover:border-[#3D271D] transition-colors">
                  <input
                    type="checkbox"
                    checked={hasGoldLeaf}
                    onChange={(e) => setHasGoldLeaf(e.target.checked)}
                    className="rounded accent-[#3D271D] w-4 h-4"
                  />
                  <span>Feuilles d’or 24k (+150 DH)</span>
                </label>

                <label className="flex items-center gap-2 p-3 rounded-xl bg-[#FFFDF9] border border-[#E8B4B8]/50 text-xs text-[#3D271D] cursor-pointer hover:border-[#3D271D] transition-colors">
                  <input
                    type="checkbox"
                    checked={hasFreshFlowers}
                    onChange={(e) => setHasFreshFlowers(e.target.checked)}
                    className="rounded accent-[#3D271D] w-4 h-4"
                  />
                  <span>Fleurs fraîches (+200 DH)</span>
                </label>

                <label className="flex items-center gap-2 p-3 rounded-xl bg-[#FFFDF9] border border-[#E8B4B8]/50 text-xs text-[#3D271D] cursor-pointer hover:border-[#3D271D] transition-colors">
                  <input
                    type="checkbox"
                    checked={hasMacaronTower}
                    onChange={(e) => setHasMacaronTower(e.target.checked)}
                    className="rounded accent-[#3D271D] w-4 h-4"
                  />
                  <span>Macarons d’ornement (+350 DH)</span>
                </label>
              </div>
            </div>

            {/* Event date and notes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-xs font-bold text-[#3D271D] uppercase tracking-wider mb-1.5">
                  Date de la célébration
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full px-4 py-2 text-xs rounded-xl bg-[#FFFDF9] border border-[#E8B4B8] text-[#3D271D] focus:outline-none focus:border-[#3D271D]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#3D271D] uppercase tracking-wider mb-1.5">
                  Lieu de réception à Rabat
                </label>
                <input
                  type="text"
                  placeholder="Ex : Villa à Souissi, Sofitel Jardin des Roses, Domicile..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-2 text-xs rounded-xl bg-[#FFFDF9] border border-[#E8B4B8] text-[#3D271D] placeholder:text-[#5C4033]/40 focus:outline-none focus:border-[#3D271D]"
                />
              </div>
            </div>

          </div>

          {/* Quote Summary Box & Visual Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Visual preview */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-2 border-[#E8B4B8]/40 aspect-[16/10] bg-[#3D271D]">
              <CardImage
                src="wedding-cake.jpg"
                alt="Pièce montée de mariage d'exception"
                className="w-full h-full object-cover"
                containerClassName="w-full h-full aspect-[16/10]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#251610]/85 via-transparent to-transparent flex flex-col justify-end p-6 text-[#FAF7F2] pointer-events-none">
                <span className="text-[11px] uppercase tracking-wider text-[#C5A059] font-bold">
                  Savoir-Faire Haute Couture
                </span>
                <p className="font-serif text-lg font-bold">
                  L’élégance d’une table sucrée royale pour vos convives à Rabat
                </p>
              </div>
            </div>

            {/* Price estimation box */}
            <div className="bg-[#FFFDF9] p-6 sm:p-7 rounded-3xl border border-[#C5A059]/40 shadow-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#F3EFEA]">
                  <span className="text-xs uppercase font-bold text-[#5C4033] tracking-wider">
                    Estimation Indicative
                  </span>
                  <span className="text-xs text-[#C97A85] font-semibold bg-[#F6E6E8] px-2.5 py-0.5 rounded-full">
                    Sans engagement
                  </span>
                </div>

                <div className="py-4">
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="font-serif text-3xl sm:text-4xl font-bold text-[#3D271D]">
                      ~ {estimatedTotal} <span className="text-lg font-sans font-medium text-[#C5A059]">DH</span>
                    </span>
                    <span className="text-xs text-[#5C4033]/80">
                      (soit env. {Math.round(estimatedTotal / guestCount)} DH / part)
                    </span>
                  </div>
                  <p className="text-xs text-[#5C4033]/80 mt-2 leading-relaxed">
                    Ce tarif inclut la conception artisanale, la décoration choisie, l’emballage de protection et les conseils de mise en place.
                  </p>
                </div>

                <ul className="text-xs text-[#3D271D] space-y-2 py-3 border-t border-[#F3EFEA]">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#2E7D32]" />
                    <span>Dégustation préalable offerte sur rendez-vous à Rabat</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#2E7D32]" />
                    <span>Livraison sur le lieu de réception par véhicule réfrigéré</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#2E7D32]" />
                    <span>Plaquette calligraphiée personnalisée incluse</span>
                  </li>
                </ul>
              </div>

              <div className="pt-5 border-t border-[#F3EFEA] flex flex-col gap-2.5">
                <button
                  id="bouton-envoyer-devis-whatsapp"
                  onClick={handleWhatsAppQuote}
                  className="w-full py-3.5 px-5 rounded-full bg-[#3D271D] text-[#FAF7F2] font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-[#251610] shadow-md hover:shadow-lg transition-all border border-[#C5A059]/40"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Envoyer ma demande de devis sur WhatsApp</span>
                </button>
                <p className="text-[10px] text-center text-[#5C4033]/70">
                  Réponse personnalisée sous 24h par la cheffe pâtissière de Maison Lila.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
