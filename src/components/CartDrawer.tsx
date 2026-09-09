import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { X, Trash2, Plus, Minus, ShoppingBag, MessageCircle, Calendar, Clock, MapPin, Sparkles, Check, ArrowRight } from 'lucide-react';
import { OrderConfirmationModal } from './OrderConfirmationModal';
import { CardImage } from './CardImage';

export const CartDrawer: React.FC = () => {
  const {
    items,
    removeItem,
    updateQuantity,
    clearCart,
    isCartOpen,
    setIsCartOpen,
    totalCount,
    subtotal,
    deliveryFee,
    total,
    deliveryMethod,
    setDeliveryMethod,
    deliveryZone,
    setDeliveryZone,
    deliveryDate,
    setDeliveryDate,
    deliveryTimeSlot,
    setDeliveryTimeSlot,
    customerName,
    setCustomerName,
    customerPhone,
    setCustomerPhone,
    customerAddress,
    setCustomerAddress,
    notes,
    setNotes,
    generateWhatsAppLink
  } = useCart();

  const [confirmedOrder, setConfirmedOrder] = useState<{
    reference: string;
    items: typeof items;
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
  } | null>(null);

  const [formError, setFormError] = useState('');

  if (!isCartOpen && !confirmedOrder) return null;

  const handleSendWhatsApp = () => {
    if (!customerName || !customerPhone) {
      setFormError('Veuillez indiquer votre nom et numéro de téléphone pour finaliser.');
      return;
    }
    setFormError('');
    const link = generateWhatsAppLink();
    window.open(link, '_blank');
  };

  const handleConfirmOnSite = () => {
    if (!customerName.trim()) {
      setFormError('Veuillez indiquer votre nom complet.');
      return;
    }
    if (!customerPhone.trim()) {
      setFormError('Veuillez renseigner votre numéro de téléphone marocain.');
      return;
    }
    if (deliveryMethod === 'livraison' && !customerAddress.trim()) {
      setFormError('Veuillez préciser votre adresse de livraison à Rabat.');
      return;
    }

    setFormError('');
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const orderData = {
      reference: `ML-${new Date().getFullYear()}-${randomCode}`,
      items: [...items],
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
      notes
    };

    setConfirmedOrder(orderData);
    clearCart();
    setIsCartOpen(false);
  };

  return (
    <>
      {/* Background overlay */}
      {isCartOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#251610]/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      {/* Sliding Drawer */}
      {isCartOpen && (
        <div
          id="tiroir-panier"
          className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-[#FFFDF9] shadow-2xl border-l border-[#E8B4B8]/40 flex flex-col justify-between animate-in slide-in-from-right duration-300"
        >
          {/* Drawer Header */}
          <div className="p-5 border-b border-[#E8B4B8]/40 bg-[#FAF7F2] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#3D271D]" />
              <h2 className="font-serif text-lg font-bold text-[#3D271D]">
                Votre Panier Gourmand
              </h2>
              {totalCount > 0 && (
                <span className="px-2 py-0.5 rounded-full bg-[#C5A059] text-[#251610] text-[11px] font-bold">
                  {totalCount}
                </span>
              )}
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 rounded-full hover:bg-[#FFFDF9] text-[#3D271D] transition-colors"
              aria-label="Fermer le panier"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6">
            {items.length === 0 ? (
              <div className="py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-[#FAF7F2] border border-[#E8B4B8] flex items-center justify-center mx-auto mb-4 text-[#C5A059]">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#3D271D] mb-1">
                  Votre panier est vide
                </h3>
                <p className="text-xs text-[#5C4033] max-w-xs mx-auto mb-6">
                  Laissez-vous tenter par nos entremets parfumés, tartes croustillantes ou macarons faits main.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-2.5 rounded-full bg-[#3D271D] text-[#FAF7F2] text-xs font-semibold hover:bg-[#251610]"
                >
                  Découvrir nos créations
                </button>
              </div>
            ) : (
              <>
                {/* Items list */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#5C4033] pb-1 border-b border-[#F3EFEA]">
                    <span>Vos délices ({totalCount})</span>
                    <button
                      onClick={clearCart}
                      className="text-[#C97A85] hover:underline text-[11px]"
                    >
                      Tout vider
                    </button>
                  </div>

                  {items.map((item) => (
                    <div
                      key={item.product.id}
                      className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E8B4B8]/40 flex gap-3 items-center"
                    >
                      <CardImage
                        src={item.product.image}
                        alt={item.product.name}
                        containerClassName="w-16 h-16 rounded-xl shrink-0 border border-[#E8B4B8]/30 overflow-hidden"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-serif text-sm font-bold text-[#3D271D] truncate">
                          {item.product.name}
                        </h4>
                        <span className="text-[11px] text-[#5C4033]/80 block">
                          {item.selectedPortions} • {item.product.price} DH / pièce
                        </span>
                        {item.customMessage && (
                          <span className="text-[10px] text-[#C97A85] block italic truncate mt-0.5">
                            ↳ « {item.customMessage} »
                          </span>
                        )}

                        <div className="flex items-center justify-between mt-2">
                          {/* Quantity control */}
                          <div className="flex items-center border border-[#E8B4B8] rounded-full px-1 py-0.5 bg-[#FFFDF9]">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="w-5 h-5 flex items-center justify-center text-[#3D271D] hover:text-[#C97A85]"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-6 text-center text-xs font-bold text-[#3D271D]">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="w-5 h-5 flex items-center justify-center text-[#3D271D] hover:text-[#C5A059]"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <span className="font-serif text-sm font-bold text-[#3D271D]">
                            {item.product.price * item.quantity} DH
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="p-1.5 text-[#5C4033]/50 hover:text-[#C97A85] transition-colors"
                        title="Supprimer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Delivery mode selection */}
                <div className="pt-2">
                  <label className="block text-xs font-bold text-[#3D271D] uppercase tracking-wider mb-2">
                    Mode de réception
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setDeliveryMethod('retrait')}
                      className={`p-3 rounded-xl text-left border text-xs font-semibold transition-all ${
                        deliveryMethod === 'retrait'
                          ? 'bg-[#3D271D] text-[#FAF7F2] border-[#3D271D]'
                          : 'bg-[#FAF7F2] text-[#3D271D] border-[#E8B4B8]/50'
                      }`}
                    >
                      <span className="block font-bold">Retrait Boutique</span>
                      <span className="text-[10px] font-normal opacity-80">Souissi, Rabat (Gratuit)</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setDeliveryMethod('livraison')}
                      className={`p-3 rounded-xl text-left border text-xs font-semibold transition-all ${
                        deliveryMethod === 'livraison'
                          ? 'bg-[#3D271D] text-[#FAF7F2] border-[#3D271D]'
                          : 'bg-[#FAF7F2] text-[#3D271D] border-[#E8B4B8]/50'
                      }`}
                    >
                      <span className="block font-bold">Livraison à Domicile</span>
                      <span className="text-[10px] font-normal opacity-80">
                        {subtotal >= 350 ? 'Offerte dès 350 DH' : '30 DH'}
                      </span>
                    </button>
                  </div>
                </div>

                {/* If Delivery: choose neighborhood */}
                {deliveryMethod === 'livraison' && (
                  <div>
                    <label className="block text-xs font-bold text-[#3D271D] uppercase tracking-wider mb-1.5">
                      Quartier de livraison à Rabat
                    </label>
                    <select
                      value={deliveryZone}
                      onChange={(e) => setDeliveryZone(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs rounded-xl bg-[#FAF7F2] border border-[#E8B4B8] text-[#3D271D]"
                    >
                      <option value="Souissi, Rabat">Souissi</option>
                      <option value="Hay Riad, Rabat">Hay Riad</option>
                      <option value="Agdal, Rabat">Agdal</option>
                      <option value="Hassan, Rabat">Hassan</option>
                      <option value="Aviation / Bir Kacem">Aviation & Bir Kacem</option>
                      <option value="Harhoura & Témara">Harhoura & Témara</option>
                    </select>

                    <div className="mt-2">
                      <input
                        type="text"
                        placeholder="Adresse complète (Rue, n° de villa ou d’immeuble)"
                        value={customerAddress}
                        onChange={(e) => setCustomerAddress(e.target.value)}
                        className="w-full px-3.5 py-2 text-xs rounded-xl bg-[#FAF7F2] border border-[#E8B4B8] text-[#3D271D] placeholder:text-[#5C4033]/50"
                      />
                    </div>
                  </div>
                )}

                {/* Date & Time Slot */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#3D271D] uppercase tracking-wider mb-1.5">
                      Date de retrait / livraison
                    </label>
                    <input
                      type="date"
                      value={deliveryDate}
                      onChange={(e) => setDeliveryDate(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-xl bg-[#FAF7F2] border border-[#E8B4B8] text-[#3D271D]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#3D271D] uppercase tracking-wider mb-1.5">
                      Créneau horaire
                    </label>
                    <select
                      value={deliveryTimeSlot}
                      onChange={(e) => setDeliveryTimeSlot(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-xl bg-[#FAF7F2] border border-[#E8B4B8] text-[#3D271D]"
                    >
                      <option value="10h00 - 12h00">10h00 - 12h00</option>
                      <option value="12h00 - 14h00">12h00 - 14h00</option>
                      <option value="14h00 - 16h00">14h00 - 16h00</option>
                      <option value="16h00 - 18h00">16h00 - 18h00</option>
                      <option value="18h00 - 20h00">18h00 - 20h00</option>
                    </select>
                  </div>
                </div>

                {/* Customer Contact */}
                <div className="space-y-2 pt-1">
                  <label className="block text-xs font-bold text-[#3D271D] uppercase tracking-wider">
                    Vos coordonnées
                  </label>
                  <input
                    type="text"
                    placeholder="Votre Nom & Prénom"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs rounded-xl bg-[#FAF7F2] border border-[#E8B4B8] text-[#3D271D] placeholder:text-[#5C4033]/50"
                  />
                  <input
                    type="tel"
                    placeholder="Téléphone mobile (ex : 06 61 XX XX XX)"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs rounded-xl bg-[#FAF7F2] border border-[#E8B4B8] text-[#3D271D] placeholder:text-[#5C4033]/50"
                  />
                  <textarea
                    rows={2}
                    placeholder="Instructions particulières pour l’atelier..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs rounded-xl bg-[#FAF7F2] border border-[#E8B4B8] text-[#3D271D] placeholder:text-[#5C4033]/50 resize-none"
                  />
                </div>

                {/* Validation error if any */}
                {formError && (
                  <div className="p-3 rounded-xl bg-[#FDEDED] text-[#D32F2F] text-xs font-medium border border-[#F5C2C7]">
                    {formError}
                  </div>
                )}
              </>
            )}
          </div>

          {/* Drawer Footer & Checkout Actions */}
          {items.length > 0 && (
            <div className="p-5 border-t border-[#E8B4B8]/40 bg-[#FAF7F2] space-y-3">
              <div className="space-y-1.5 text-xs text-[#5C4033]">
                <div className="flex justify-between">
                  <span>Sous-total</span>
                  <span className="font-semibold text-[#3D271D]">{subtotal} DH</span>
                </div>
                <div className="flex justify-between">
                  <span>Frais de livraison</span>
                  <span className="font-semibold text-[#3D271D]">
                    {deliveryFee === 0 ? 'Offerte' : `${deliveryFee} DH`}
                  </span>
                </div>
                <div className="pt-2 border-t border-[#E8B4B8]/30 flex justify-between font-serif text-lg font-bold text-[#3D271D]">
                  <span>Total à régler</span>
                  <span className="text-[#C5A059]">{total} DH</span>
                </div>
              </div>

              <div className="flex flex-col gap-2 pt-1">
                {/* WhatsApp Button */}
                <button
                  id="bouton-commander-panier-whatsapp"
                  onClick={handleSendWhatsApp}
                  className="w-full py-3 px-4 rounded-full bg-[#3D271D] text-[#FAF7F2] font-semibold text-xs flex items-center justify-center gap-2 hover:bg-[#251610] shadow-md transition-all border border-[#C5A059]/40"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Commander via WhatsApp</span>
                </button>

                {/* On-site Confirmation Button */}
                <button
                  id="bouton-confirmer-sur-site"
                  onClick={handleConfirmOnSite}
                  className="w-full py-2.5 px-4 rounded-full bg-[#FFFDF9] text-[#3D271D] font-semibold text-xs flex items-center justify-center gap-2 border border-[#E8B4B8] hover:border-[#3D271D] transition-colors"
                >
                  <Check className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Confirmer la commande sur le site</span>
                </button>
              </div>

              <p className="text-[10px] text-center text-[#5C4033]/70">
                Paiement sécurisé au retrait ou à la livraison (Espèces ou CB marocaine).
              </p>
            </div>
          )}
        </div>
      )}

      {/* Confirmation Modal */}
      {confirmedOrder && (
        <OrderConfirmationModal
          orderReference={confirmedOrder.reference}
          items={confirmedOrder.items}
          subtotal={confirmedOrder.subtotal}
          deliveryFee={confirmedOrder.deliveryFee}
          total={confirmedOrder.total}
          deliveryMethod={confirmedOrder.deliveryMethod}
          deliveryZone={confirmedOrder.deliveryZone}
          deliveryDate={confirmedOrder.deliveryDate}
          deliveryTimeSlot={confirmedOrder.deliveryTimeSlot}
          customerName={confirmedOrder.customerName}
          customerPhone={confirmedOrder.customerPhone}
          customerAddress={confirmedOrder.customerAddress}
          notes={confirmedOrder.notes}
          onClose={() => setConfirmedOrder(null)}
          onSendWhatsApp={() => {
            const link = generateWhatsAppLink();
            window.open(link, '_blank');
          }}
        />
      )}
    </>
  );
};
