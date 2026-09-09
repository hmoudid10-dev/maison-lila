import { CustomerReview } from '../types';

export const REVIEWS: CustomerReview[] = [
  {
    id: '1',
    author: 'Ghita Berrada',
    location: 'Souissi, Rabat',
    date: 'Il y a 3 jours',
    rating: 5,
    comment: 'Pour les fiançailles de ma sœur, nous avons commandé Le Lila Impérial et un assortiment de macarons. Tous les convives ont été émerveillés par la finesse de la fleur d’oranger et l’équilibre des saveurs. Une adresse incontournable à Rabat.',
    occasion: 'Fiançailles',
    favoriteProduct: 'Le Lila Impérial'
  },
  {
    id: '2',
    author: 'Karim Alami',
    location: 'Hay Riad, Rabat',
    date: 'Il y a 1 semaine',
    rating: 5,
    comment: 'Je passe chaque samedi matin chercher les viennoiseries et la tarte à la pistache. Le feuilletage du croissant est le meilleur de toute la ville, croustillant et pur beurre. L’accueil en boutique est tout simplement parfait.',
    occasion: 'Brunch du week-end',
    favoriteProduct: 'Tarte Sublime Pistache & Fleur d’Oranger'
  },
  {
    id: '3',
    author: 'Salma El Fassi',
    location: 'Agdal, Rabat',
    date: 'Il y a 2 semaines',
    rating: 5,
    comment: 'Le gâteau d’anniversaire commandé pour les 30 ans de mon époux était une œuvre d’art. La plaquette personnalisée avec le message calligraphié a fait son effet. La livraison réfrigérée est arrivée pile à l’heure.',
    occasion: 'Anniversaire surprise',
    favoriteProduct: 'Ébène & Noisette du Piémont'
  },
  {
    id: '4',
    author: 'Dr. Mehdi Bennani',
    location: 'Hassan, Rabat',
    date: 'Il y a 3 semaines',
    rating: 5,
    comment: 'Les coffrets de macarons sont devenus mon cadeau signature pour mes collègues et partenaires. Le packaging rose poudré avec les rubans satinés est d’un raffinement rare. Bravo à l’équipe de Maison Lila.',
    occasion: 'Cadeau professionnel',
    favoriteProduct: 'Coffret Prestige 12 Macarons'
  }
];
