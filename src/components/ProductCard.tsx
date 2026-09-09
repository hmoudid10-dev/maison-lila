import React from 'react';
import { Product } from '../types';
import { Plus, Eye, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { CardImage } from './CardImage';

interface ProductCardProps {
  product: Product;
  onOpenModal: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenModal }) => {
  const { addItem } = useCart();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem(product, 1);
  };

  return (
    <div
      id={`carte-produit-${product.id}`}
      onClick={() => onOpenModal(product)}
      className="group bg-[#FFFDF9] rounded-2xl border border-[#E8B4B8]/40 hover:border-[#C5A059] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden cursor-pointer"
    >
      {/* Image container */}
      <div className="relative w-full overflow-hidden">
        <CardImage
          src={product.image}
          alt={product.name}
          className="group-hover:scale-105 transition-transform duration-500 ease-out"
          containerClassName="aspect-[4/3] w-full"
        />

        {/* Badges overlay */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10 pointer-events-none">
          {product.isSignature && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#3D271D]/90 text-[#FAF7F2] text-[10px] font-bold tracking-wider uppercase backdrop-blur-xs border border-[#C5A059]/50">
              <Sparkles className="w-2.5 h-2.5 text-[#C5A059]" />
              Signature
            </span>
          )}
          {product.isNew && (
            <span className="inline-block px-2.5 py-1 rounded-full bg-[#C97A85] text-white text-[10px] font-bold tracking-wider uppercase">
              Nouveauté
            </span>
          )}
          {product.isBestseller && !product.isSignature && (
            <span className="inline-block px-2.5 py-1 rounded-full bg-[#C5A059] text-[#251610] text-[10px] font-bold tracking-wider uppercase">
              Plébiscité
            </span>
          )}
        </div>

        {/* Portions pill */}
        <div className="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-md bg-[#FFFDF9]/95 text-[#3D271D] text-[11px] font-semibold backdrop-blur-xs shadow-xs border border-[#E8B4B8]/40 z-10 pointer-events-none">
          {product.portions}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Flavor notes */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {product.flavors.slice(0, 2).map((fl, i) => (
              <span
                key={i}
                className="text-[10px] font-medium text-[#C97A85] bg-[#F6E6E8]/60 px-2 py-0.5 rounded-full"
              >
                {fl}
              </span>
            ))}
          </div>

          {/* Product Name */}
          <h3 className="font-serif text-lg sm:text-xl font-bold text-[#3D271D] group-hover:text-[#C97A85] transition-colors leading-snug mb-2">
            {product.name}
          </h3>

          {/* Short description */}
          <p className="text-xs text-[#5C4033] line-clamp-2 leading-relaxed font-light mb-4">
            {product.shortDescription}
          </p>
        </div>

        {/* Bottom price and actions */}
        <div className="pt-4 border-t border-[#F3EFEA] flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase text-[#5C4033]/70 font-semibold block leading-none mb-1">
              Prix atelier
            </span>
            <span className="font-serif text-xl font-bold text-[#3D271D]">
              {product.price} <span className="text-sm font-sans font-semibold text-[#C5A059]">DH</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenModal(product);
              }}
              className="p-2 rounded-full border border-[#E8B4B8] text-[#3D271D] hover:bg-[#FAF7F2] hover:border-[#3D271D] transition-colors"
              title="Consulter les ingrédients et détails"
              aria-label={`Détails pour ${product.name}`}
            >
              <Eye className="w-4 h-4" />
            </button>

            <button
              id={`bouton-ajouter-${product.id}`}
              onClick={handleQuickAdd}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#3D271D] text-[#FAF7F2] text-xs font-semibold hover:bg-[#251610] shadow-xs hover:shadow-md transition-all border border-[#C5A059]/40"
              title="Ajouter au panier"
              aria-label={`Ajouter ${product.name} au panier`}
            >
              <Plus className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Ajouter</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
