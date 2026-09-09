import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'wedding-cake',
    name: 'Wedding Cake',
    category: 'evenements',
    shortDescription: 'Gâteau de mariage d’exception et pièces montées sur-mesure pour célébrer vos réceptions inoubliables.',
    fullDescription: 'La pièce maîtresse de vos célébrations à Rabat. Étages généreux, textures raffinées (génoise moelleuse à la vanille Bourbon ou chocolat grand cru, ganache montée légère) et décors personnalisés (fleurs fraîches, dorures 24 carats, calligraphie fine).',
    price: 950,
    portions: '20 à 40 parts',
    image: 'wedding-cake.jpg',
    isSignature: true,
    isBestseller: true,
    flavors: ['Vanille Bourbon', 'Framboise fraîche', 'Praliné amande'],
    ingredients: [
      'Gousses de vanille Bourbon',
      'Crème légère fouettée',
      'Framboises fraîches',
      'Chocolat blanc Valrhona',
      'Beurre fin AOP'
    ],
    allergens: ['Lait', 'Gluten', 'Œufs', 'Fruits à coque'],
    dietary: ['vegetarien'],
    conservation: 'Conserver entre 2°C et 4°C. Livré en caisson réfrigéré dans tout Rabat.',
    customizableMessage: true
  },
  {
    id: 'cupcakes',
    name: 'Cupcakes',
    category: 'individuelles',
    shortDescription: 'Délicieux cupcakes moelleux couronnés d’un pochage crémeux et de perles gourmandes.',
    fullDescription: 'Assortiment de cupcakes artisanaux confectionnés à la commande. Cœur fondant (caramel au beurre salé, confit de fruits rouges ou praliné noisette) et dôme de crème soyeuse aérienne.',
    price: 35,
    portions: 'À la pièce ou coffret',
    image: 'cupcakes.jpg',
    isSignature: false,
    isNew: true,
    flavors: ['Chocolat noir Guanaja', 'Vanille & Rose', 'Caramel salé'],
    ingredients: [
      'Farine de tradition',
      'Beurre doux de baratte',
      'Crème au mascarpone fouettée',
      'Chocolat Valrhona',
      'Glaçage velouté'
    ],
    allergens: ['Gluten', 'Lait', 'Œufs'],
    dietary: ['vegetarien'],
    conservation: 'À déguster sous 48 heures au frais.',
    customizableMessage: true
  },
  {
    id: 'viennoiseries',
    name: 'Viennoiseries',
    category: 'viennoiseries',
    shortDescription: 'Croissants dorés pur beurre AOP, pains au chocolat croustillants et brioches fondantes.',
    fullDescription: 'Pâte levée feuilletée façonnée à la main chaque nuit dans notre atelier de Souissi. Beurre de tourage Charentes-Poitou AOP pour un croustillant aérien et un parfum toasté inimitable.',
    price: 22,
    portions: 'Individuel / Lot du matin',
    image: 'viennoiseries.jpg',
    isSignature: true,
    isBestseller: true,
    flavors: ['Beurre AOP Charentes', 'Chocolat noir 60%', 'Amandes effilées'],
    ingredients: [
      'Farine française Label Rouge',
      'Beurre de tourage AOP 84% MG',
      'Levain naturel de l’atelier',
      'Chocolat grand cru',
      'Œufs frais fermiers'
    ],
    allergens: ['Gluten', 'Lait', 'Œufs'],
    dietary: ['vegetarien'],
    conservation: 'À déguster chaud le jour même pour un croustillant optimal.',
    customizableMessage: false
  },
  {
    id: 'donuts',
    name: 'Donuts',
    category: 'individuelles',
    shortDescription: 'Donuts artisanaux ultra moelleux, nappés de glaçages gourmands et garnitures croquantes.',
    fullDescription: 'Une pâte briochée extra moelleuse, levée lentement puis dorée à la perfection. Glacés au chocolat noir, pistache d’Iran, caramel beurre salé ou framboise acidulée.',
    price: 28,
    portions: 'Individuel',
    image: 'donuts.jpg',
    isSignature: false,
    isNew: true,
    flavors: ['Pistache', 'Chocolat noisette', 'Caramel fleur de sel', 'Framboise'],
    ingredients: [
      'Farine fine',
      'Lait entier frais',
      'Beurre fermier',
      'Glaçages artisanaux chocolat et fruits',
      'Éclats de pistaches torréfiées'
    ],
    allergens: ['Gluten', 'Lait', 'Œufs', 'Fruits à coque'],
    dietary: ['vegetarien'],
    conservation: 'À savourer dans les 24 heures pour conserver toute sa tendresse.',
    customizableMessage: false
  },
  {
    id: 'macarons',
    name: 'Macarons',
    category: 'macarons',
    shortDescription: 'Coques craquantes d’amandes douces garnies de ganaches généreuses et parfumées.',
    fullDescription: 'Le grand classique de notre maison : confectionné exclusivement à partir de poudre d’amande pure blanchie et de ganaches riches en arômes naturels (pistache d’Iran, rose de Dadès, vanille Bourbon, chocolat Guanaja, fleur d’oranger).',
    price: 185,
    portions: 'Coffret 12 pièces',
    image: 'macarons.jpg',
    isSignature: true,
    isBestseller: true,
    flavors: ['Pistache', 'Rose & Litchi', 'Chocolat Guanaja', 'Caramel salé', 'Vanille', 'Fleur d’oranger'],
    ingredients: [
      'Poudre d’amandes douces extra-fines',
      'Sucre glace',
      'Blancs d’œufs montés serrés',
      'Chocolats grands crus Valrhona',
      'Purée de fruits et pâtes de fruits à coque'
    ],
    allergens: ['Fruits à coque (amandes, pistaches)', 'Œufs', 'Lait'],
    dietary: ['sans-gluten', 'vegetarien'],
    conservation: 'À conserver entre 2°C et 4°C dans son écrin fermé jusqu’à 5 jours.',
    customizableMessage: true
  },
  {
    id: 'cookies',
    name: 'Cookies',
    category: 'individuelles',
    shortDescription: 'Cookies crousti-fondants riches en pépites de chocolat belge et noisettes torréfiées.',
    fullDescription: 'Texture irrésistible : bords croustillants et cœur moelleux presque coulant. Préparés avec du beurre noisette AOP, du sucre muscovado et une pincée de fleur de sel.',
    price: 30,
    portions: 'Individuel',
    image: 'cookies.jpg',
    isSignature: false,
    isBestseller: true,
    flavors: ['Chocolat noir & Lait', 'Noisette du Piémont', 'Fleur de sel'],
    ingredients: [
      'Chocolat belge 65%',
      'Beurre frais noisette AOP',
      'Sucre de canne blond & muscovado',
      'Farine meule de pierre',
      'Fleur de sel marin'
    ],
    allergens: ['Gluten', 'Lait', 'Œufs', 'Fruits à coque (noisettes)'],
    dietary: ['vegetarien'],
    conservation: 'À conserver dans une boîte hermétique à température ambiante douce pendant 3 jours.',
    customizableMessage: false
  },
  {
    id: 'patisserie-marocaine',
    name: 'Pâtisseries marocaines',
    category: 'tradition',
    shortDescription: 'Cornes de gazelle fines à la fleur d’oranger, briouates croustillantes et m’hancha aux amandes.',
    fullDescription: 'L’héritage de la haute pâtisserie marocaine sublimé : pâte fine translucide, pâte d’amandes pures du Moyen Atlas broyées avec de la cannelle fine et parfumées à l’eau de fleur d’oranger distillée à Fès.',
    price: 240,
    portions: 'Plateau 500g (environ 16 pièces)',
    image: 'patisserie-marocaine.jpg',
    isSignature: true,
    isBestseller: true,
    flavors: ['Fleur d’oranger de Fès', 'Amandes de l’Atlas', 'Cannelle douce', 'Miel pur'],
    ingredients: [
      'Amandes pures marocaines du Moyen Atlas',
      'Eau de fleur d’oranger de Fès pure',
      'Miel pur d’oranger',
      'Farine fine',
      'Beurre clarifié (Smen doux)'
    ],
    allergens: ['Fruits à coque (amandes)', 'Gluten'],
    dietary: ['vegetarien'],
    conservation: 'Se conserve jusqu’à 15 jours dans une boîte hermétique à l’abri de l’humidité.',
    customizableMessage: true
  }
];

export const CATEGORIES_CONFIG = [
  { id: 'tous', label: 'Toutes nos créations' },
  { id: 'evenements', label: 'Wedding Cakes' },
  { id: 'individuelles', label: 'Pâtisseries, Cupcakes & Cookies' },
  { id: 'viennoiseries', label: 'Viennoiseries' },
  { id: 'macarons', label: 'Macarons' },
  { id: 'tradition', label: 'Pâtisseries marocaines' }
];
