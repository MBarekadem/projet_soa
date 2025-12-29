export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuel: string;
  transmission: string;
  description: string;
  image: string;
  images: string[];
  location: string;
  sellerName: string;
}

export const mockCars: Car[] = [
  {
    id: '1',
    brand: 'BMW',
    model: 'Série 3',
    year: 2021,
    price: 35000,
    mileage: 45000,
    fuel: 'Diesel',
    transmission: 'Automatique',
    description: 'BMW Série 3 en excellent état, entretien complet, toutes options.',
    image: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg',
    images: [
      'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg',
      'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg',
      'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg'
    ],
    location: 'Paris, France',
    sellerName: 'Jean Dupont'
  },
  {
    id: '2',
    brand: 'Mercedes',
    model: 'Classe A',
    year: 2020,
    price: 28000,
    mileage: 60000,
    fuel: 'Essence',
    transmission: 'Automatique',
    description: 'Mercedes Classe A, intérieur cuir, GPS intégré, caméra de recul.',
    image: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg',
    images: [
      'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg',
      'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg',
      'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg'
    ],
    location: 'Lyon, France',
    sellerName: 'Marie Martin'
  },
  {
    id: '3',
    brand: 'Audi',
    model: 'A4',
    year: 2019,
    price: 26500,
    mileage: 75000,
    fuel: 'Diesel',
    transmission: 'Manuelle',
    description: 'Audi A4 très bien entretenue, pneus neufs, révision récente.',
    image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg',
    images: [
      'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg',
      'https://images.pexels.com/photos/100650/pexels-photo-100650.jpeg',
      'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg'
    ],
    location: 'Marseille, France',
    sellerName: 'Pierre Leroy'
  },
  {
    id: '4',
    brand: 'Volkswagen',
    model: 'Golf GTI',
    year: 2022,
    price: 32000,
    mileage: 25000,
    fuel: 'Essence',
    transmission: 'Automatique',
    description: 'VW Golf GTI, sportive et économique, état impeccable.',
    image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg',
    images: [
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg',
      'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg',
      'https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg'
    ],
    location: 'Toulouse, France',
    sellerName: 'Sophie Dubois'
  },
  {
    id: '5',
    brand: 'Peugeot',
    model: '3008',
    year: 2021,
    price: 29000,
    mileage: 40000,
    fuel: 'Hybride',
    transmission: 'Automatique',
    description: 'Peugeot 3008 hybride, SUV familial, spacieux et confortable.',
    image: 'https://images.pexels.com/photos/627678/pexels-photo-627678.jpeg',
    images: [
      'https://images.pexels.com/photos/627678/pexels-photo-627678.jpeg',
      'https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg',
      'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg'
    ],
    location: 'Nice, France',
    sellerName: 'Luc Bernard'
  },
  {
    id: '6',
    brand: 'Renault',
    model: 'Clio',
    year: 2020,
    price: 15000,
    mileage: 55000,
    fuel: 'Essence',
    transmission: 'Manuelle',
    description: 'Renault Clio idéale pour la ville, économique et fiable.',
    image: 'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg',
    images: [
      'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg',
      'https://images.pexels.com/photos/70912/pexels-photo-70912.jpeg',
      'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg'
    ],
    location: 'Bordeaux, France',
    sellerName: 'Claire Petit'
  },
  {
    id: '7',
    brand: 'Tesla',
    model: 'Model 3',
    year: 2022,
    price: 45000,
    mileage: 20000,
    fuel: 'Électrique',
    transmission: 'Automatique',
    description: 'Tesla Model 3, véhicule électrique avec autopilot, autonomie 500km.',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    images: [
      'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
      'https://images.pexels.com/photos/3848242/pexels-photo-3848242.jpeg',
      'https://images.pexels.com/photos/2882234/pexels-photo-2882234.jpeg'
    ],
    location: 'Paris, France',
    sellerName: 'Thomas Rousseau'
  },
  {
    id: '8',
    brand: 'Porsche',
    model: '911',
    year: 2020,
    price: 95000,
    mileage: 30000,
    fuel: 'Essence',
    transmission: 'Automatique',
    description: 'Porsche 911 Carrera, performance exceptionnelle, collector.',
    image: 'https://images.pexels.com/photos/1213294/pexels-photo-1213294.jpeg',
    images: [
      'https://images.pexels.com/photos/1213294/pexels-photo-1213294.jpeg',
      'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg',
      'https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg'
    ],
    location: 'Monaco',
    sellerName: 'Alexandre Laurent'
  }
];


