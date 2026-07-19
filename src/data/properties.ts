export interface Property {
  id: number
  image: string
  gallery: string[]
  title: string
  location: string
  price: string
  beds: number
  baths: number
  sqft: string
  tag: string
  yearBuilt: number
  garage: number
  description: string
  features: string[]
  coordinates: [number, number]
  agent: {
    name: string
    role: string
    image: string
    phone: string
    email: string
  }
}

export const properties: Property[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
    gallery: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200',
    ],
    title: 'Modern Penthouse Suite',
    location: 'Beverly Hills, CA',
    price: '$4,500,000',
    beds: 4,
    baths: 3,
    sqft: '3,500',
    tag: 'Featured',
    yearBuilt: 2022,
    garage: 2,
    description:
      'A breathtaking modern penthouse offering panoramic city views from every room. This architectural masterpiece features floor-to-ceiling windows, Italian marble flooring, a chef\'s kitchen with Miele appliances, and a private rooftop terrace perfect for entertaining. Located in the heart of Beverly Hills with concierge service and world-class amenities.',
    features: [
      'Floor-to-ceiling windows',
      'Italian marble flooring',
      'Chef\'s kitchen with Miele appliances',
      'Private rooftop terrace',
      'Smart home automation',
      'Wine cellar',
      'Home theater',
      'Infinity pool',
    ],
    coordinates: [34.0736, -118.4004],
    agent: {
      name: 'Victoria Sterling',
      role: 'Senior Luxury Agent',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
      phone: '+1 (555) 234-5678',
      email: 'victoria@luxuryrealty.com',
    },
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200',
    ],
    title: 'Waterfront Villa',
    location: 'Miami Beach, FL',
    price: '$8,200,000',
    beds: 6,
    baths: 5,
    sqft: '6,200',
    tag: 'New',
    yearBuilt: 2023,
    garage: 3,
    description:
      'An exclusive waterfront estate with direct ocean access and stunning sunrise views. This tropical paradise features a resort-style pool, private dock, summer kitchen, and lush tropical gardens. The open-concept living spaces flow seamlessly to expansive terraces, creating the ultimate indoor-outdoor lifestyle.',
    features: [
      'Direct ocean access',
      'Private dock',
      'Resort-style infinity pool',
      'Summer kitchen & BBQ',
      'Tropical landscaped gardens',
      'Home automation system',
      'Elevator',
      'Guest house',
    ],
    coordinates: [25.7617, -80.1918],
    agent: {
      name: 'Alexander Reed',
      role: 'Waterfront Specialist',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
      phone: '+1 (555) 345-6789',
      email: 'alexander@luxuryrealty.com',
    },
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200',
    ],
    title: 'Mountain Retreat',
    location: 'Aspen, CO',
    price: '$5,750,000',
    beds: 5,
    baths: 4,
    sqft: '4,800',
    tag: 'Popular',
    yearBuilt: 2021,
    garage: 2,
    description:
      'A majestic mountain estate nestled among towering pines with breathtaking alpine views. This timber and stone masterpiece features a great room with vaulted ceilings, a gourmet kitchen, a spa-like primary suite, and a glass-enclosed wine room. Ski-in/ski-out access and a private hot tub make this the ultimate mountain escape.',
    features: [
      'Ski-in/ski-out access',
      'Vaulted timber ceilings',
      'Stone fireplace',
      'Private hot tub',
      'Glass-enclosed wine room',
      'Mudroom with gear storage',
      'Home gym',
      'Sauna',
    ],
    coordinates: [39.1911, -106.8175],
    agent: {
      name: 'Victoria Sterling',
      role: 'Senior Luxury Agent',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
      phone: '+1 (555) 234-5678',
      email: 'victoria@luxuryrealty.com',
    },
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200',
    ],
    title: 'Urban Loft',
    location: 'Manhattan, NY',
    price: '$3,200,000',
    beds: 2,
    baths: 2,
    sqft: '1,800',
    tag: 'Exclusive',
    yearBuilt: 2020,
    garage: 0,
    description:
      'A stunning converted industrial loft in the heart of SoHo with soaring 14-foot ceilings and original exposed brick. This designer residence features custom millwork, a professional-grade kitchen, and oversized factory windows flooding the space with natural light. Steps from world-class dining and shopping.',
    features: [
      '14-foot ceilings',
      'Original exposed brick',
      'Custom millwork throughout',
      'Professional-grade kitchen',
      'Oversized factory windows',
      'Hardwood floors',
      'Central air',
      'Doorman building',
    ],
    coordinates: [40.7128, -74.0060],
    agent: {
      name: 'Michael Chen',
      role: 'Manhattan Specialist',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
      phone: '+1 (555) 456-7890',
      email: 'michael@luxuryrealty.com',
    },
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800',
    gallery: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200',
    ],
    title: 'Coastal Paradise',
    location: 'Malibu, CA',
    price: '$12,000,000',
    beds: 7,
    baths: 6,
    sqft: '8,500',
    tag: 'Premium',
    yearBuilt: 2023,
    garage: 4,
    description:
      'An extraordinary Malibu estate perched above the Pacific Ocean with unobstructed horizon views. This architectural tour de force includes an infinity pool that merges with the ocean, a full spa, screening room, and a glass-bottom bridge connecting the main house to the guest pavilion. The pinnacle of coastal luxury living.',
    features: [
      'Unobstructed ocean views',
      'Infinity edge pool',
      'Full home spa',
      'Screening room',
      'Glass-bottom bridge',
      'Outdoor fire pit',
      'Chef\'s & prep kitchens',
      '4-car gallery garage',
    ],
    coordinates: [34.0259, -118.7798],
    agent: {
      name: 'Victoria Sterling',
      role: 'Senior Luxury Agent',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
      phone: '+1 (555) 234-5678',
      email: 'victoria@luxuryrealty.com',
    },
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800',
    gallery: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200',
    ],
    title: 'Historic Estate',
    location: 'Charleston, SC',
    price: '$6,800,000',
    beds: 6,
    baths: 5,
    sqft: '7,200',
    tag: 'Heritage',
    yearBuilt: 1920,
    garage: 2,
    description:
      'A meticulously restored 1920s estate blending timeless Southern charm with modern luxury. Set on two acres of manicured gardens with ancient oaks, this property features original hardwood floors, ornate plasterwork, a chef\'s kitchen, and a carriage house. A rare opportunity to own a piece of Charleston history.',
    features: [
      'Meticulously restored original details',
      'Two acres of manicured gardens',
      'Ancient oak-lined drive',
      'Original hardwood floors',
      'Ornate plaster moldings',
      'Carriage house',
      'Heated saltwater pool',
      'Wine cellar',
    ],
    coordinates: [32.7765, -79.9311],
    agent: {
      name: 'Emily Davis',
      role: 'Heritage Properties',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
      phone: '+1 (555) 567-8901',
      email: 'emily@luxuryrealty.com',
    },
  },
]

export function getPropertyById(id: number): Property | undefined {
  return properties.find((p) => p.id === id)
}
