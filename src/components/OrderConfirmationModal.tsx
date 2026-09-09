import React from 'react';
import { CartItem } from '../types';
import { CheckCircle2, Printer, MessageCircle, X, Sparkles, MapPin, Calendar, Clock } from 'lucide-react';

interface OrderConfirmationModalProps {
  orderReference: string;
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  total: number;
  deliveryMethod: 'retrait' | 'livraison';
  deliveryZone: string;
  deliveryDate: string;
  deliveryTimeSlot: string;
  customerName: string;
  customerPhone: string;
  customerAddress: string;
  notes: string;
  onClose: () => void;
  onSendWhatsApp: () => void;
}

export const OrderConfirmationModal: React.FC<OrderConfirmationModalProps> = ({
  orderReference,
  items,
  subtotal,
  deliveryFee,
  total,
  deliveryMethod,
  deliveryZone,
  deliveryDate,
  deliveryTimeSlot,
  customerName,
  customerPhone,
  customerAddress,
  notes,
  onClose,
  onSendWhatsApp,
}) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="modal-confirmation-commande"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#251610]/70 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#FFFDF9] rounded-3xl shadow-2xl border border-[#C5A059]/40 overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#3D271D] text-[#FAF7F2] p-6 text-center relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-[#251610] text-[#FAF7F2]/80 hover:text-white transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-14 h-14 rounded-full bg-[#C5A059] text-[#251610] flex items-center justify-center mx-auto mb-3 shadow-md">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <span className="text-[11px] uppercase tracking-widest text-[#C5A059] font-bold">
            Commande Enregistrée avec Succès
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold mt-1">
            Merci pour votre confiance
          </h2>
          <p className="text-xs text-[#FAF7F2]/80 mt-1">
            Référence de votre commande : <strong className="text-[#C5A059]">{orderReference}</strong>
          </p>
        </div>

        {/* Printable receipt content */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6 text-xs sm:text-sm text-[#3D271D]">
          {/* Status banner */}
          <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E8B4B8]/50 flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-[#C5A059] shrink-0" />
            <p className="text-xs text-[#5C4033] leading-relaxed">
              Votre commande a été transmise à notre atelier de Souissi à Rabat. Notre cheffe prépare vos pâtisseries selon la tradition artisanale.
            </p>
          </div>

          {/* Delivery & Schedule details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-[#FAF7F2] border border-[#E8B4B8]/40">
            <div>
              <span className="text-[10px] uppercase font-bold text-[#5C4033] block mb-1">
                Modalité
              </span>
              <p className="font-bold text-sm">
                {deliveryMethod === 'retrait' ? 'Retrait à la boutique (Souissi)' : 'Livraison réfrigérée à domicile'}
              </p>
              {deliveryMethod === 'livraison' && (
                <p className="text-xs text-[#5C4033] mt-0.5">
                  Quartier : {deliveryZone} {customerAddress ? `• ${customerAddress}` : ''}
                </p>
              )}
            </div>

            <div>
              <span className="text-[10px] uppercase font-bold text-[#5C4033] block mb-1">
                Date & Créneau
              </span>
              <p className="font-bold text-sm flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                {deliveryDate}
              </p>
              <p className="text-xs text-[#5C4033] flex items-center gap-1.5 mt-0.5">
                <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                {deliveryTimeSlot}
              </p>
            </div>

            {customerName && (
              <div className="sm:col-span-2 pt-2 border-t border-[#E8B4B8]/20">
                <span className="text-[10px] uppercase font-bold text-[#5C4033] block mb-0.5">
                  Coordonnées Client
                </span>
                <p className="text-xs">
                  {customerName} {customerPhone ? `• Tél : ${customerPhone}` : ''}
                </p>
              </div>
            )}
          </div>

          {/* Items Summary Table */}
          <div>
            <h4 className="text-xs uppercase font-bold text-[#5C4033] tracking-wider mb-3">
              Récapitulatif des Délices
            </h4>
            <div className="border border-[#E8B4B8]/40 rounded-2xl divide-y divide-[#F3EFEA] overflow-hidden">
              {items.map((item, idx) => (
                <div key={idx} className="p-3.5 flex items-center justify-between gap-4">
                  <div>
                    <span className="font-bold text-xs sm:text-sm text-[#3D271D]">
                      {item.quantity}x {item.product.name}
                    </span>
                    <span className="block text-[11px] text-[#5C4033]/80">
                      {item.selectedPortions}
                    </span>
                    {item.customMessage && (
                      <span className="block text-[11px] text-[#C97A85] italic mt-0.5">
                        ↳ Inscription : « {item.customMessage} »
                      </span>
                    )}
                  </div>
                  <span className="font-bold text-xs sm:text-sm text-[#3D271D] shrink-0">
                    {item.product.price * item.quantity} DH
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Totals */}
          <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E8B4B8]/40 space-y-1.5">
            <div className="flex justify-between text-xs text-[#5C4033]">
              <span>Sous-total des pâtisseries</span>
              <span>{subtotal} DH</span>
            </div>
            <div className="flex justify-between text-xs text-[#5C4033]">
              <span>Frais de livraison</span>
              <span>{deliveryFee === 0 ? 'Offerte' : `${deliveryFee} DH`}</span>
            </div>
            <div className="pt-2 border-t border-[#E8B4B8]/30 flex justify-between font-serif text-lg font-bold text-[#3D271D]">
              <span>Total à régler</span>
              <span className="text-[#C5A059]">{total} DH</span>
            </div>
            <p className="text-[10px] text-[#5C4033]/70 pt-1 text-center">
              Règlement à la livraison ou au retrait (Espèces ou Carte Bancaire marocaine).
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-5 bg-[#FAF7F2] border-t border-[#E8B4B8]/40 flex flex-col sm:flex-row gap-3">
          <button
            onClick={onSendWhatsApp}
            className="flex-1 py-3 px-4 rounded-full bg-[#3D271D] text-[#FAF7F2] font-semibold text-xs flex items-center justify-center gap-2 hover:bg-[#251610] shadow-xs border border-[#C5A059]/40"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Transmettre le reçu sur WhatsApp</span>
          </button>

          <button
            onClick={handlePrint}
            className="py-3 px-5 rounded-full bg-[#FFFDF9] text-[#3D271D] font-semibold text-xs flex items-center justify-center gap-2 border border-[#E8B4B8] hover:border-[#3D271D]"
          >
            <Printer className="w-4 h-4 text-[#C5A059]" />
            <span>Imprimer le reçu</span>
          </button>
        </div>
      </div>
    </div>
  );
};
