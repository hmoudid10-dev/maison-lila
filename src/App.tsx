import React, { useState } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Values } from './components/Values';
import { ProductCatalog } from './components/ProductCatalog';
import { ProductModal } from './components/ProductModal';
import { CustomOrderSimulator } from './components/CustomOrderSimulator';
import { StoryAndCraft } from './components/StoryAndCraft';
import { Reviews } from './components/Reviews';
import { StoreLocation } from './components/StoreLocation';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { Product } from './types';

const MainContent: React.FC = () => {
  const { setIsCartOpen } = useCart();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#3D271D] flex flex-col selection:bg-[#F3D8D8] selection:text-[#3D271D]">
      {/* Header with cart and links */}
      <Header onOpenCart={() => setIsCartOpen(true)} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Core Craftsmanship Values */}
        <Values />

        {/* Interactive Pastry Catalog */}
        <ProductCatalog onOpenModal={(product) => setSelectedProduct(product)} />

        {/* Bespoke Event Simulator (Weddings, Celebrations) */}
        <CustomOrderSimulator />

        {/* Story & Atelier Craftsmanship in Rabat */}
        <StoryAndCraft />

        {/* Customer Testimonials from Rabat */}
        <Reviews />

        {/* Boutique Location, Opening Hours & Delivery Zones */}
        <StoreLocation />

        {/* Accordion FAQ */}
        <FaqSection />
      </main>

      {/* Comprehensive Footer */}
      <Footer />

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      {/* Cart Sliding Drawer */}
      <CartDrawer />
    </div>
  );
};

export default function App() {
  return (
    <CartProvider>
      <MainContent />
    </CartProvider>
  );
}
