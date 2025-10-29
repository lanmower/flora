import { BadgeCheck, Leaf, Droplet, Sun, Wind, Heart, Moon, Flower2, Sprout, CloudSun } from "lucide-react";
import { Product } from './types';

// Additional products that extend the main products array
export const additionalProducts: Product[] = [
  {
    id: "cannabis-feco",
    name: "Cannabis Full Spectrum Oil (FECO)",
    description: "Full extract cannabis oil with complete cannabinoid profile",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&q=80&w=500",
    ingredients: ["cannabis"],
    benefits: ["Full spectrum relief", "Custom dosing", "Sublingual absorption"],
    usage: "Dose as needed under tongue",
    category: "oil",
    size: "30ml",
    stockStatus: 'in stock',
    rating: 4.8,
    reviews: 20
  },
  {
    id: "comfrey-cream",
    name: "Comfrey Repair Cream",
    description: "Skin-regenerative cream with allantoin",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80&w=500",
    ingredients: ["comfrey"],
    benefits: ["Bone support", "Tissue repair", "Anti-inflammatory"],
    usage: "Apply to unbroken skin 2x daily",
    category: "topical",
    size: "50ml",
    stockStatus: 'in stock',
    rating: 4.4,
    reviews: 7
  },
  {
    id: "nasturtium-oil",
    name: "Nasturtium Infused Oil",
    description: "Antimicrobial oil with vibrant pigment",
    price: 27.99,
    image: "https://images.unsplash.com/photo-1559007615-cd4628902d4a?auto=format&fit=crop&q=80&w=500",
    ingredients: ["nasturtium"],
    benefits: ["Skin conditioning", "Natural preservative", "Antioxidant"],
    usage: "Use as massage/base oil",
    category: "oil",
    size: "50ml",
    stockStatus: 'in stock',
    rating: 4.1,
    reviews: 3
  },
  {
    id: "hemp-soap",
    name: "Handmade Hemp Soap",
    description: "Pure cold-process soap with hemp oil",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1600857062241-98e5dba7214b?auto=format&fit=crop&q=80&w=500",
    ingredients: ["cannabis"],
    benefits: ["Gentle cleansing", "Moisturizing", "Eco-friendly"],
    usage: "Daily facial/body use",
    category: "soap",
    size: "100g",
    stockStatus: 'in stock',
    rating: 4.0,
    reviews: 2
  },
  {
    id: "cannabis-comfrey",
    name: "Cannabis & Comfrey Cream",
    description: "Synergistic blend for deep tissue repair",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&q=80&w=500",
    ingredients: ["cannabis", "comfrey"],
    benefits: ["Muscle recovery", "Joint support", "Anti-inflammatory"],
    usage: "Apply 3x daily",
    category: "topical",
    size: "100ml",
    stockStatus: 'low stock',
    rating: 4.2,
    reviews: 5
  }
];