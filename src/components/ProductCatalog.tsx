import React, { useState, useMemo } from 'react';
import { PRODUCTS, CATEGORIES_CONFIG } from '../data/products';
import { Product, ProductCategory } from '../types';
import { ProductCard } from './ProductCard';
import { PhotoStatusManager } from './PhotoStatusManager';
import { Search, Sparkles, Filter, SlidersHorizontal, Cake } from 'lucide-react';

interface ProductCatalogProps {
  onOpenModal: (product: Product) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ onOpenModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('tous');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState<'tous' | 'sans-gluten' | 'sans-fruits-a-coque' | 'vegetarien'>('tous');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category match
      const categoryMatch = selectedCategory === 'tous' || product.category === selectedCategory;

      // Dietary match
      const dietaryMatch =
        dietaryFilter === 'tous' ||
        (product.dietary && product.dietary.includes(dietaryFilter as any));

      // Search match
      const query = searchQuery.toLowerCase().trim();
      const searchMatch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.shortDescription.toLowerCase().includes(query) ||
        product.flavors.some((f) => f.toLowerCase().includes(query)) ||
        product.ingredients.some((i) => i.toLowerCase().includes(query));

      return categoryMatch && dietaryMatch && searchMatch;
    });
  }, [selectedCategory, searchQuery, dietaryFilter]);

  return (
    <section id="carte" className="py-16 sm:py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFDF9] border border-[#E8B4B8] text-[#C97A85] text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Atelier Maison Lila • Rabat</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#3D271D] tracking-tight">
            Nos créations
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#5C4033] font-light max-w-xl mx-auto">
            Découvrez nos créations pâtissières artisanales façonnées chaque jour dans notre atelier de Souissi à Rabat.
          </p>
          <div className="w-16 h-0.5 bg-[#C5A059] mx-auto mt-4 rounded-full" />
        </div>

        {/* Real-time Photo Status & Batch Uploader */}
        <PhotoStatusManager />

        {/* Filter controls container */}
        <div className="bg-[#FFFDF9] p-4 sm:p-6 rounded-3xl border border-[#E8B4B8]/40 shadow-xs mb-10">
          {/* Top Bar: Search & Dietary */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between pb-6 border-b border-[#F3EFEA]">
            
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-[#5C4033]/60 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher par saveur : pistache, framboise, chocolat..."
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#FAF7F2] border border-[#E8B4B8]/50 text-xs sm:text-sm text-[#3D271D] placeholder:text-[#5C4033]/50 focus:outline-none focus:border-[#3D271D] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#5C4033]/60 hover:text-[#3D271D]"
                >
                  Effacer
                </button>
              )}
            </div>

            {/* Dietary Filter Pills */}
            <div className="flex items-center gap-2 flex-wrap w-full md:w-auto justify-start md:justify-end">
              <span className="text-xs font-semibold text-[#5C4033] flex items-center gap-1 mr-1">
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#C5A059]" />
                Régimes :
              </span>
              <button
                onClick={() => setDietaryFilter('tous')}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  dietaryFilter === 'tous'
                    ? 'bg-[#3D271D] text-[#FAF7F2]'
                    : 'bg-[#FAF7F2] text-[#5C4033] hover:bg-[#F6E6E8]'
                }`}
              >
                Tous
              </button>
              <button
                onClick={() => setDietaryFilter('sans-gluten')}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  dietaryFilter === 'sans-gluten'
                    ? 'bg-[#3D271D] text-[#FAF7F2]'
                    : 'bg-[#FAF7F2] text-[#5C4033] hover:bg-[#F6E6E8]'
                }`}
              >
                Sans gluten
              </button>
              <button
                onClick={() => setDietaryFilter('vegetarien')}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  dietaryFilter === 'vegetarien'
                    ? 'bg-[#3D271D] text-[#FAF7F2]'
                    : 'bg-[#FAF7F2] text-[#5C4033] hover:bg-[#F6E6E8]'
                }`}
              >
                Végétarien
              </button>
              <button
                onClick={() => setDietaryFilter('sans-fruits-a-coque')}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  dietaryFilter === 'sans-fruits-a-coque'
                    ? 'bg-[#3D271D] text-[#FAF7F2]'
                    : 'bg-[#FAF7F2] text-[#5C4033] hover:bg-[#F6E6E8]'
                }`}
              >
                Sans fruits à coque
              </button>
            </div>

          </div>

          {/* Category tabs */}
          <div className="pt-4 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES_CONFIG.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as ProductCategory)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#C5A059] text-[#251610] font-bold shadow-xs'
                    : 'bg-[#FAF7F2] text-[#3D271D] hover:bg-[#F6E6E8] border border-[#E8B4B8]/30'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Counter indicator */}
        <div className="flex items-center justify-between mb-6 px-1">
          <p className="text-xs text-[#5C4033] font-medium">
            <span className="font-bold text-[#3D271D]">{filteredProducts.length}</span>{' '}
            création{filteredProducts.length > 1 ? 's' : ''} disponible{filteredProducts.length > 1 ? 's' : ''}
          </p>

          {(selectedCategory !== 'tous' || dietaryFilter !== 'tous' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('tous');
                setDietaryFilter('tous');
                setSearchQuery('');
              }}
              className="text-xs text-[#C97A85] hover:underline font-semibold"
            >
              Réinitialiser tous les filtres
            </button>
          )}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenModal={onOpenModal}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#FFFDF9] rounded-3xl border border-[#E8B4B8]/40 p-8">
            <Cake className="w-12 h-12 text-[#E8B4B8] mx-auto mb-4" />
            <h3 className="font-serif text-xl font-bold text-[#3D271D] mb-2">
              Aucune gourmandise ne correspond à votre recherche
            </h3>
            <p className="text-xs text-[#5C4033] mb-6 max-w-md mx-auto">
              Essayez un autre mot-clé ou réinitialisez les critères pour redécouvrir l’ensemble de notre carte.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('tous');
                setDietaryFilter('tous');
                setSearchQuery('');
              }}
              className="px-6 py-2.5 rounded-full bg-[#3D271D] text-[#FAF7F2] text-xs font-semibold hover:bg-[#251610]"
            >
              Voir toutes nos créations
            </button>
          </div>
        )}

        {/* Custom inquiry callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#F6E6E8]/70 via-[#FAF7F2] to-[#FFFDF9] border border-[#E8B4B8]/50 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <span className="text-xs font-bold text-[#C5A059] uppercase tracking-wider block mb-1">
              Envie d’une création unique ?
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#3D271D]">
              Un gâteau personnalisé pour votre fête à Rabat
            </h3>
            <p className="text-xs sm:text-sm text-[#5C4033] mt-1">
              Nombre de convives particulier, pièce montée ou saveur sur-mesure : échangez avec notre cheffe.
            </p>
          </div>
          <a
            href="#sur-mesure"
            className="shrink-0 px-6 py-3 rounded-full bg-[#3D271D] text-[#FAF7F2] font-semibold text-xs hover:bg-[#251610] shadow-md transition-all border border-[#C5A059]/40"
          >
            Simuler un devis sur-mesure
          </a>
        </div>

      </div>
    </section>
  );
};
