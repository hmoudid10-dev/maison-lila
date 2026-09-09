import React, { useState } from 'react';
import { Sparkles, MessageCircle, MapPin, Clock, Phone, Mail, Check, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#251610] text-[#FAF7F2] border-t border-[#C5A059]/30">
      {/* Top Newsletter & Teaser Bar */}
      <div className="border-b border-[#FAF7F2]/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#3D271D] rounded-3xl p-8 sm:p-10 border border-[#C5A059]/30 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center lg:text-left">
              <span className="text-xs uppercase tracking-[0.2em] text-[#C5A059] font-bold block mb-2">
                Le Carnet Gourmand
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                Recevez en avant-première nos créations éphémères
              </h3>
              <p className="text-xs sm:text-sm text-[#FAF7F2]/75 mt-2 font-light">
                Chaque saison, notre cheffe imagine de nouvelles symphonies sucrées. Inscrivez-vous pour être invité à nos dégustations privées à Rabat.
              </p>
            </div>

            <div className="w-full lg:w-auto">
              {isSubscribed ? (
                <div className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#FAF7F2]/10 border border-[#C5A059] text-[#C5A059] text-xs font-semibold">
                  <Check className="w-4 h-4" />
                  <span>Merci pour votre inscription à notre carnet gourmand !</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
                  <input
                    type="email"
                    required
                    placeholder="Votre adresse e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-4 py-3 rounded-full bg-[#251610] border border-[#C5A059]/40 text-xs sm:text-sm text-[#FAF7F2] placeholder:text-[#FAF7F2]/40 focus:outline-none focus:border-[#C5A059]"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-full bg-[#C5A059] text-[#251610] font-bold text-xs sm:text-sm hover:bg-[#E8D3A7] transition-colors shrink-0 shadow-md"
                  >
                    S’inscrire
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#3D271D] border border-[#C5A059] flex items-center justify-center text-[#C5A059]">
                <span className="font-serif text-xl font-bold">L</span>
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-wide block">
                  Maison Lila
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059]">
                  Haute Pâtisserie Fine • Rabat
                </span>
              </div>
            </div>

            <p className="text-xs text-[#FAF7F2]/75 leading-relaxed font-light max-w-sm">
              Maison Lila célèbre l’art de la pâtisserie artisanale d’exception à Rabat Souissi. Des créations raffinées qui subliment vos réceptions, anniversaires et moments de convivialité.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-full bg-[#3D271D] border border-[#FAF7F2]/20 hover:border-[#C5A059] text-xs text-[#FAF7F2] transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://wa.me/212661000000"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-full bg-[#3D271D] border border-[#FAF7F2]/20 hover:border-[#C5A059] text-xs text-[#FAF7F2] transition-colors flex items-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-serif text-sm font-bold text-[#C5A059] uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FAF7F2]/80">
              <li>
                <a href="#accueil" className="hover:text-[#C5A059] transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#carte" className="hover:text-[#C5A059] transition-colors">
                  Carte des douceurs
                </a>
              </li>
              <li>
                <a href="#sur-mesure" className="hover:text-[#C5A059] transition-colors">
                  Gâteaux sur-mesure & Mariages
                </a>
              </li>
              <li>
                <a href="#atelier" className="hover:text-[#C5A059] transition-colors">
                  L’Atelier & Savoir-faire
                </a>
              </li>
              <li>
                <a href="#avis" className="hover:text-[#C5A059] transition-colors">
                  Avis de nos clients
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#C5A059] transition-colors">
                  Foire aux questions
                </a>
              </li>
            </ul>
          </div>

          {/* Our Specialties */}
          <div>
            <h4 className="font-serif text-sm font-bold text-[#C5A059] uppercase tracking-wider mb-4">
              Nos Spécialités
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FAF7F2]/80">
              <li>
                <a href="#carte" className="hover:text-[#C5A059] transition-colors">
                  Le Lila Impérial
                </a>
              </li>
              <li>
                <a href="#carte" className="hover:text-[#C5A059] transition-colors">
                  Tarte Pistache & Fleur d’oranger
                </a>
              </li>
              <li>
                <a href="#carte" className="hover:text-[#C5A059] transition-colors">
                  Coffrets Prestige de Macarons
                </a>
              </li>
              <li>
                <a href="#carte" className="hover:text-[#C5A059] transition-colors">
                  Saint-Honoré Rose Poudrée
                </a>
              </li>
              <li>
                <a href="#carte" className="hover:text-[#C5A059] transition-colors">
                  Viennoiseries Pur Beurre AOP
                </a>
              </li>
            </ul>
          </div>

          {/* Boutique Contact & Hours */}
          <div>
            <h4 className="font-serif text-sm font-bold text-[#C5A059] uppercase tracking-wider mb-4">
              Boutique & Atelier
            </h4>
            <div className="space-y-3 text-xs text-[#FAF7F2]/80">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                <span>18 Avenue Mohammed VI, Quartier Souissi, Rabat</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                <span>Mar – Dim : 08h30 – 20h00 (Fermé lundi)</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                <span>+212 5 37 65 43 21</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                <span>contact@maisonlila.ma</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-8 border-t border-[#FAF7F2]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF7F2]/60">
          <p>© 2026 Maison Lila — Tous droits réservés. Pâtisserie fine artisanale à Rabat.</p>
          <div className="flex items-center gap-1">
            <span>Façonné avec</span>
            <Heart className="w-3 h-3 text-[#C97A85] fill-[#C97A85]" />
            <span>pour les amateurs de haute pâtisserie</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
