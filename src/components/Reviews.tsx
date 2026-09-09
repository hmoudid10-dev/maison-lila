import React from 'react';
import { REVIEWS } from '../data/reviews';
import { Star, MapPin, Quote, Heart } from 'lucide-react';

export const Reviews: React.FC = () => {
  return (
    <section id="avis" className="py-16 sm:py-24 bg-[#FFFDF9] border-y border-[#E8B4B8]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#E8B4B8] text-[#C97A85] text-xs font-semibold mb-3">
            <Heart className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Vos Mots Doux</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#3D271D]">
            Ce que disent nos clients de Rabat
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#5C4033] font-light">
            Découvrez les retours de nos fidèles amateurs de haute pâtisserie, pour leurs anniversaires, fiançailles et douceurs du quotidien.
          </p>
          <div className="w-16 h-0.5 bg-[#C5A059] mx-auto mt-4 rounded-full" />
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E8B4B8]/40 hover:border-[#C5A059] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#C5A059]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#C5A059]" />
                    ))}
                  </div>
                  <span className="text-[10px] text-[#5C4033]/60 font-medium">
                    {rev.date}
                  </span>
                </div>

                {/* Comment */}
                <p className="text-xs text-[#3D271D] leading-relaxed font-light italic mb-5 relative">
                  <Quote className="w-4 h-4 text-[#E8B4B8] inline mr-1 -mt-1 opacity-60" />
                  {rev.comment}
                </p>
              </div>

              {/* Author & Occasion */}
              <div className="pt-4 border-t border-[#E8B4B8]/30">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-sm font-bold text-[#3D271D]">
                      {rev.author}
                    </h4>
                    <span className="text-[11px] text-[#5C4033]/80 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#C5A059]" />
                      {rev.location}
                    </span>
                  </div>
                </div>

                <div className="mt-3 pt-2 border-t border-[#E8B4B8]/20 flex items-center justify-between text-[10px] text-[#C97A85]">
                  <span className="font-medium">Coup de cœur :</span>
                  <span className="font-semibold text-[#3D271D] truncate max-w-[140px]">
                    {rev.favoriteProduct}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trustpilot / Google style banner */}
        <div className="mt-12 p-4 rounded-2xl bg-[#FAF7F2] border border-[#E8B4B8]/40 max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#3D271D] text-[#C5A059] flex items-center justify-center font-serif font-bold text-lg">
              5.0
            </div>
            <div>
              <p className="text-xs font-bold text-[#3D271D]">
                Excellence reconnue à Rabat
              </p>
              <p className="text-[11px] text-[#5C4033]">
                Noté 5/5 par plus de 450 amateurs de pâtisserie fine
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/212661000000?text=Bonjour%20Maison%20Lila%2C%20je%20souhaite%20laisser%20mon%20avis%20sur%20ma%20derni%C3%A8re%20commande."
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-[#C97A85] hover:underline"
          >
            Partager votre expérience →
          </a>
        </div>

      </div>
    </section>
  );
};
