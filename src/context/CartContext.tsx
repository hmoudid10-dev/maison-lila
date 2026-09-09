import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem } from '../types';

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, quantity?: number, portions?: string, customMessage?: string) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  totalCount: number;
  subtotal: number;
  deliveryFee: number;
  total: number;
  deliveryMethod: 'retrait' | 'livraison';
  setDeliveryMethod: (method: 'retrait' | 'livraison') => void;
  deliveryZone: string;
  setDeliveryZone: (zone: string) => void;
  deliveryDate: string;
  setDeliveryDate: (date: string) => void;
  deliveryTimeSlot: string;
  setDeliveryTimeSlot: (slot: string) => void;
  customerName: string;
  setCustomerName: (name: string) => void;
  customerPhone: string;
  setCustomerPhone: (phone: string) => void;
  customerAddress: string;
  setCustomerAddress: (address: string) => void;
  notes: string;
  setNotes: (notes: string) => void;
  generateWhatsAppLink: () => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'maison_lila_panier_v1';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [deliveryMethod, setDeliveryMethod] = useState<'retrait' | 'livraison'>('retrait');
  const [deliveryZone, setDeliveryZone] = useState('Souissi, Rabat');
  
  // Default date to tomorrow formatted YYYY-MM-DD
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const defaultDateStr = tomorrow.toISOString().split('T')[0];

  const [deliveryDate, setDeliveryDate] = useState(defaultDateStr);
  const [deliveryTimeSlot, setDeliveryTimeSlot] = useState('11h00 - 13h00');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Ignore storage errors
    }
  }, [items]);

  const addItem = (product: Product, quantity = 1, portions?: string, customMessage?: string) => {
    setItems(prevItems => {
      const existingIndex = prevItems.findIndex(item => item.product.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
          customMessage: customMessage || updated[existingIndex].customMessage
        };
        return updated;
      } else {
        return [
          ...prevItems,
          {
            product,
            quantity,
            selectedPortions: portions || product.portions,
            customMessage: customMessage || ''
          }
        ];
      }
    });
    setIsCartOpen(true);
  };

  const removeItem = (productId: string) => {
    setItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }
    setItems(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  
  // Delivery is free from 350 DH or if pickup in boutique
  const deliveryFee = deliveryMethod === 'retrait' ? 0 : (subtotal >= 350 ? 0 : 30);
  const total = subtotal + deliveryFee;

  const generateWhatsAppLink = () => {
    const phoneNumber = '212661000000'; // Boutique WhatsApp number
    let text = `*Bonjour Maison Lila, je souhaite passer commande :*\n\n`;
    
    text += `*DÉTAILS DES DOUCEURS :*\n`;
    items.forEach(item => {
      text += `• ${item.quantity}x ${item.product.name} (${item.product.price} DH)\n`;
      if (item.customMessage) {
        text += `   ↳ Inscription souhaitée : « ${item.customMessage} »\n`;
      }
    });

    text += `\n*Sous-total :* ${subtotal} DH\n`;
    if (deliveryMethod === 'livraison') {
      text += `*Mode :* Livraison à domicile (${deliveryFee === 0 ? 'Offerte' : `${deliveryFee} DH`})\n`;
      text += `*Quartier / Zone :* ${deliveryZone}\n`;
      if (customerAddress) text += `*Adresse exacte :* ${customerAddress}\n`;
    } else {
      text += `*Mode :* Retrait à la boutique (Souissi, Rabat)\n`;
    }

    text += `*Date souhaitée :* ${deliveryDate}\n`;
    text += `*Créneau horaire :* ${deliveryTimeSlot}\n`;
    text += `*Total :* ${total} DH\n\n`;

    if (customerName) text += `*Nom du client :* ${customerName}\n`;
    if (customerPhone) text += `*Téléphone :* ${customerPhone}\n`;
    if (notes) text += `*Remarques particulières :* ${notes}\n`;

    text += `\nMerci de me confirmer la disponibilité et la validation de ma commande !`;

    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart doit être utilisé à l’intérieur d’un CartProvider');
  }
  return context;
};
