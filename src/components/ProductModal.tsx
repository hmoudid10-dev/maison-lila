import React, { useState } from 'react';
import { Product } from '../types';
import { X, Plus, Minus, ShoppingBag, MessageCircle, Sparkles, ShieldAlert, Clock, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { CardImage } from './CardImage';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [customMessage, setCustomMessage] = useState('');
  const [isAdded, setIsAdded] = useState(false);

  if (!product) return null;

  const handleAddToCart = () => {
    addItem(product, quantity, product.portions, customMessage);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 900);
  };

  const handleWhatsAppDirect = () => {
    const message = `Bonjour Maison Lila, je souhaite commander : ${quantity}x ${product.name} (${product.price * quantity} DH)${
      customMessage ? ` avec l’inscription : « ${customMessage} »` : ''
    }. Est-il disponible pour un retrait à l’atelier de Rabat ?`;
    const url = `https://wa.me/212661000000?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div
      id="modal-detail-produit"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#251610]/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#FFFDF9] rounded-3xl shadow-2xl border border-[#E8B4B8]/60 overflow-hidden flex flex-col md:flex-row my-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#FFFDF9]/90 hover:bg-[#FAF7F2] text-[#3D271D] border border-[#E8B4B8] shadow-sm transition-colors"
          aria-label="Fermer la fenêtre"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Visual */}
        <div className="md:w-5/12 relative bg-[#FAF7F2] min-h-[260px] md:min-h-full flex flex-col justify-center">
          <CardImage
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            containerClassName="w-full h-full min-h-[260px] md:min-h-[400px]"
          />
          
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
            <span className="px-3 py-1 rounded-full bg-[#3D271D]/90 text-[#FAF7F2] text-xs font-semibold backdrop-blur-xs border border-[#C5A059]/40">
              {product.portions}
            </span>
            {product.isSignature && (
              <span className="px-3 py-1 rounded-full bg-[#C5A059] text-[#251610] text-xs font-bold uppercase tracking-wider">
                Signature
              </span>
            )}
          </div>
        </div>

        {/* Details & Customization */}
        <div className="md:w-7/12 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[60vh] md:max-h-[85vh]">
          <div>
            {/* Header info */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                {product.flavors.map((fl, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-medium text-[#C97A85] bg-[#F6E6E8] px-2.5 py-0.5 rounded-full"
                  >
                    {fl}
                  </span>
                ))}
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#3D271D] leading-tight">
                {product.name}
              </h2>
              <p className="font-serif text-2xl font-bold text-[#C5A059] mt-1">
                {product.price} <span className="text-base font-sans font-medium text-[#3D271D]">DH</span>
              </p>
            </div>

            {/* Full description */}
            <p className="text-xs sm:text-sm text-[#5C4033] leading-relaxed font-light mb-5">
              {product.fullDescription}
            </p>

            {/* Ingredients list */}
            <div className="mb-5 p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E8B4B8]/40">
              <h4 className="text-xs font-bold text-[#3D271D] uppercase tracking-wider flex items-center gap-1.5 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Ingrédients d’exception</span>
              </h4>
              <p className="text-xs text-[#5C4033]/90 leading-relaxed">
                {product.ingredients.join(' • ')}
              </p>
            </div>

            {/* Allergens & Conservation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5 text-[11px]">
              <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#E8B4B8]/30">
                <span className="font-bold text-[#3D271D] flex items-center gap-1 mb-1">
                  <ShieldAlert className="w-3.5 h-3.5 text-[#C97A85]" />
                  Allergènes :
                </span>
                <span className="text-[#5C4033]">{product.allergens.join(', ')}</span>
              </div>
              <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#E8B4B8]/30">
                <span className="font-bold text-[#3D271D] flex items-center gap-1 mb-1">
                  <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                  Conseil dégustation :
                </span>
                <span className="text-[#5C4033]">{product.conservation}</span>
              </div>
            </div>

            {/* Optional message for chocolate plaque */}
            {product.customizableMessage && (
              <div className="mb-5">
                <label className="block text-xs font-bold text-[#3D271D] mb-1.5">
                  Message personnalisé sur plaquette en chocolat{' '}
                  <span className="text-[11px] font-normal text-[#C5A059]">(Offert)</span>
                </label>
                <input
                  type="text"
                  placeholder="Ex : Joyeux Anniversaire Sarah, Félicitations..."
                  value={customMessage}
                  onChange={(e) => setCustomMessage(e.target.value)}
                  maxLength={40}
                  className="w-full px-3.5 py-2 text-xs rounded-xl bg-[#FFFDF9] border border-[#E8B4B8] focus:outline-none focus:border-[#3D271D] text-[#3D271D] placeholder:text-[#5C4033]/40"
                />
                <span className="text-[10px] text-[#5C4033]/60 mt-1 block">
                  Calligraphié à la main par notre maître chocolatier à Rabat.
                </span>
              </div>
            )}
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-[#E8B4B8]/40 flex flex-col gap-3">
            <div className="flex items-center justify-between gap-4">
              {/* Quantity selector */}
              <div className="flex items-center border border-[#E8B4B8] rounded-full p-1 bg-[#FAF7F2]">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#FFFDF9] text-[#3D271D] transition-colors"
                  aria-label="Diminuer la quantité"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-9 text-center text-sm font-bold text-[#3D271D]">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#FFFDF9] text-[#3D271D] transition-colors"
                  aria-label="Augmenter la quantité"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Total preview */}
              <div className="text-right">
                <span className="text-[10px] uppercase text-[#5C4033]/70 font-semibold block">Total</span>
                <span className="font-serif text-xl font-bold text-[#3D271D]">
                  {product.price * quantity} <span className="text-xs font-sans text-[#C5A059]">DH</span>
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <button
                id="bouton-modal-ajouter"
                onClick={handleAddToCart}
                disabled={isAdded}
                className={`w-full py-3 px-4 rounded-full font-semibold text-xs flex items-center justify-center gap-2 transition-all shadow-md ${
                  isAdded
                    ? 'bg-[#2E7D32] text-white'
                    : 'bg-[#3D271D] text-[#FAF7F2] hover:bg-[#251610] border border-[#C5A059]/40'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Ajouté au panier !</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4 text-[#C5A059]" />
                    <span>Ajouter au panier</span>
                  </>
                )}
              </button>

              <button
                id="bouton-modal-whatsapp"
                onClick={handleWhatsAppDirect}
                className="w-full py-3 px-4 rounded-full bg-[#FFFDF9] text-[#3D271D] font-semibold text-xs flex items-center justify-center gap-2 border border-[#E8B4B8] hover:border-[#3D271D] hover:bg-[#FAF7F2] transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Commander via WhatsApp</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
