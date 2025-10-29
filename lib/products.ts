import { BadgeCheck, Leaf, Droplet, Sun, Wind, Heart, Moon, Flower2, Sprout, Cloud, Shield, Star } from 'lucide-react';
import { Product } from './types';

export const products: Product[] = [
  {
    id: "cannabis-cream",
    name: "Cannabis Healing Cream",
    description: "A potent topical cream for pain relief and inflammation reduction.",
    category: "topical",
    price: 45,
    ingredients: ["cannabis-comfrey", "gotu-kola", "hemp"],
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&q=80&w=500",
    featured: true,
    new: false,
    stockStatus: "in stock",
    benefits: ["Pain relief", "Anti-inflammatory", "Topical healing"],
    usage: "Apply to affected area as needed",
    size: "50ml",
    rating: 4.8,
    reviews: 12
  },
  {
    id: "comfrey-oil",
    name: "Comfrey Infused Oil",
    description: "Traditional healing oil for bruises, sprains, and tissue damage.",
    category: "oil",
    price: 25,
    ingredients: ["comfrey", "hemp"],
    image: "https://images.unsplash.com/photo-1559007615-cd4628902d4a?auto=format&fit=crop&q=80&w=500",
    featured: true,
    new: false,
    stockStatus: "in stock",
    benefits: ["Bruise healing", "Tissue repair", "Anti-inflammatory"],
    usage: "Massage into affected areas",
    size: "100ml",
    rating: 4.7,
    reviews: 9
  },
  {
    id: "dandelion-spagyric",
    name: "Dandelion Spagyric Tincture",
    description: "Full spectrum dandelion extract for liver detox and skin purification.",
    category: "tincture",
    price: 35,
    ingredients: ["dandelion"],
    image: "https://images.unsplash.com/photo-1585411521318-c8d83bb5f773?auto=format&fit=crop&q=80&w=500",
    featured: true,
    new: false,
    stockStatus: "in stock",
    benefits: ["Liver detox", "Digestive support", "Skin health"],
    usage: "10-15 drops in water 3x daily",
    size: "30ml",
    rating: 4.6,
    reviews: 11
  }
];