export type ProductCategory =
  | 'tous'
  | 'evenements'
  | 'individuelles'
  | 'viennoiseries'
  | 'macarons'
  | 'tradition'
  | 'entremets'
  | 'tartes'
  | 'coffrets';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  shortDescription: string;
  fullDescription: string;
  price: number; // in MAD (DH)
  portions: string;
  image: string;
  isSignature?: boolean;
  isNew?: boolean;
  isBestseller?: boolean;
  flavors: string[];
  ingredients: string[];
  allergens: string[];
  dietary?: ('sans-gluten' | 'vegetarien' | 'sans-fruits-a-coque')[];
  conservation: string;
  customizableMessage?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedPortions?: string;
  customMessage?: string;
}

export interface CustomerReview {
  id: string;
  author: string;
  location: string;
  date: string;
  rating: number;
  comment: string;
  occasion: string;
  favoriteProduct: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'commande' | 'conservation' | 'livraison' | 'sur-mesure';
}

export interface CustomEventQuote {
  eventType: string;
  guestsCount: number;
  flavorPreference: string;
  date: string;
  notes: string;
  estimatedPrice: number;
}
