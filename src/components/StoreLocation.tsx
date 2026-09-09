import React, { useState } from 'react';
import { MapPin, Clock, Phone, MessageCircle, Navigation, CheckCircle2, Bike, Sparkles } from 'lucide-react';

export const StoreLocation: React.FC = () => {
  const [selectedZone, setSelectedZone] = useState('Souissi');

  const deliveryZones = [
    { name: 'Souissi', time: '30 à 45 min', fee: 'Gratuit dès 350 DH' },
    { name: 'Hay Riad', time: '40 à 50 min', fee: 'Gratuit dès 350 DH' },
    { name: 'Agdal', time: '35 à 45 min', fee: 'Gratuit dès 350 DH' },
    { name: 'Hassan', time: '45 à 55 min', fee: 'Gratuit dès 350 DH' },
    { name: 'Aviation & Bir Kacem', time: '30 à 40 min', fee: 'Gratuit dès 350 DH' },
    { name: 'Harhoura & Témara', time: '45 à 60 min', fee: 'Gratuit dès 350 DH' }
  ];

  return (
    <section id="boutique" className="py-16 sm:py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFDF9] border border-[#E8B4B8] text-[#C97A85] text-xs font-semibold mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Notre Écrin à Rabat</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#3D271D]">
            Visiter Notre Boutique & Atelier
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#5C4033] font-light">
            Retrait direct de vos commandes à Souissi ou livraison réfrigérée soignée sur tout Rabat.
          </p>
          <div className="w-16 h-0.5 bg-[#C5A059] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Practical Info Card */}
          <div className="lg:col-span-6 bg-[#FFFDF9] p-6 sm:p-8 rounded-3xl border border-[#E8B4B8]/50 shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#3D271D] mb-6">
                Informations & Horaires d’Ouverture
              </h3>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E8B4B8] flex items-center justify-center text-[#3D271D] shrink-0 mt-1">
                    <MapPin className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#3D271D]">Adresse de l’Atelier</h4>
                    <p className="text-xs sm:text-sm text-[#5C4033] mt-0.5">
                      18 Avenue Mohammed VI, Quartier Souissi, Rabat
                    </p>
                    <span className="text-[11px] text-[#C5A059] font-medium block mt-1">
                      Parking sécurisé et dépose-minute devant la boutique.
                    </span>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E8B4B8] flex items-center justify-center text-[#3D271D] shrink-0 mt-1">
                    <Clock className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#3D271D]">Horaires de la Boutique</h4>
                    <div className="text-xs sm:text-sm text-[#5C4033] mt-1 space-y-1">
                      <div className="flex justify-between gap-6">
                        <span>Mardi au Dimanche :</span>
                        <span className="font-semibold text-[#3D271D]">08h30 – 20h00</span>
                      </div>
                      <div className="flex justify-between gap-6 text-[#C97A85]">
                        <span>Lundi :</span>
                        <span className="font-semibold">Fermeture hebdomadaire de l’atelier</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Direct Contacts */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E8B4B8] flex items-center justify-center text-[#3D271D] shrink-0 mt-1">
                    <Phone className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#3D271D]">Ligne Directe & WhatsApp</h4>
                    <p className="text-xs sm:text-sm text-[#5C4033] mt-0.5">
                      Téléphone : +212 5 37 65 43 21
                    </p>
                    <p className="text-xs sm:text-sm text-[#5C4033]">
                      WhatsApp Commandes : +212 6 61 00 00 00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="pt-8 border-t border-[#F3EFEA] mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/212661000000?text=Bonjour%20Maison%20Lila%2C%20je%20souhaite%20r%C3%A9server%20un%20g%C3%A2teau%20pour%20retrait%20en%20boutique."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-full bg-[#3D271D] text-[#FAF7F2] font-semibold text-xs flex items-center justify-center gap-2 hover:bg-[#251610] shadow-xs border border-[#C5A059]/40"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Contacter sur WhatsApp</span>
              </a>

              <a
                href="#carte"
                className="flex-1 py-3 px-4 rounded-full bg-[#FAF7F2] text-[#3D271D] font-semibold text-xs flex items-center justify-center gap-2 border border-[#E8B4B8] hover:border-[#3D271D]"
              >
                <Navigation className="w-4 h-4 text-[#C5A059]" />
                <span>Choisir mes gâteaux</span>
              </a>
            </div>

          </div>

          {/* Delivery Map & Zones Coverage */}
          <div className="lg:col-span-6 bg-[#FFFDF9] p-6 sm:p-8 rounded-3xl border border-[#E8B4B8]/50 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Bike className="w-5 h-5 text-[#C5A059]" />
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#3D271D]">
                    Zones Desservies à Rabat
                  </h3>
                </div>
                <span className="text-[11px] font-bold text-[#2E7D32] bg-[#E8F5E9] px-2.5 py-0.5 rounded-full">
                  Livraison Réfrigérée
                </span>
              </div>

              <p className="text-xs text-[#5C4033] mb-6 font-light">
                Chaque commande est transportée dans un véhicule isotherme climatisé afin de garantir la fraîcheur intacte de nos ganaches, mousses et décors en chocolat.
              </p>

              {/* Zones selector / pills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-6">
                {deliveryZones.map((zone) => (
                  <button
                    key={zone.name}
                    type="button"
                    onClick={() => setSelectedZone(zone.name)}
                    className={`p-3 rounded-xl text-left border transition-all ${
                      selectedZone === zone.name
                        ? 'bg-[#3D271D] text-[#FAF7F2] border-[#3D271D] shadow-xs'
                        : 'bg-[#FAF7F2] text-[#3D271D] border-[#E8B4B8]/40 hover:border-[#C5A059]'
                    }`}
                  >
                    <span className="block text-xs font-bold leading-tight">{zone.name}</span>
                    <span className={`text-[10px] block mt-1 ${selectedZone === zone.name ? 'text-[#C5A059]' : 'text-[#5C4033]/80'}`}>
                      {zone.time}
                    </span>
                  </button>
                ))}
              </div>

              {/* Selected Zone Detail Banner */}
              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E8B4B8]/50 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#C5A059] block">
                    Quartier sélectionné
                  </span>
                  <h4 className="text-sm font-bold text-[#3D271D]">
                    {selectedZone}
                  </h4>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-[#2E7D32] block">
                    Livraison offerte dès 350 DH
                  </span>
                  <span className="text-[10px] text-[#5C4033]">
                    (30 DH pour commandes inférieures)
                  </span>
                </div>
              </div>
            </div>

            {/* Atmosphere quote & boutique visual preview */}
            <div className="mt-6 pt-6 border-t border-[#F3EFEA] flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-[#FFFDF9] border border-[#E8B4B8] flex items-center justify-center shrink-0 text-[#C97A85] shadow-xs">
                <Sparkles className="w-7 h-7 text-[#C5A059]" />
              </div>
              <p className="text-xs text-[#5C4033] leading-relaxed italic">
                « Un accueil chaleureux dans un écrin rose poudré et boisé, où flottent les arômes de vanille et de beurre doré. »
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
