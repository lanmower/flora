import { BadgeCheck, Leaf, Droplet, Sun, Wind, Heart, Moon, Flower2, Sprout, Cloud, Shield, Star } from 'lucide-react';
import { Ingredient } from './types';

export const ingredients: Ingredient[] = [
  {
    id: "cannabis-comfrey",
    name: "Cannabis-Comfrey Blend",
    scientificName: "Cannabis sativa × Symphytum officinale",
    description: "A powerful healing combination of cannabis and comfrey for pain relief and tissue repair.",
    category: "healing",
    properties: ["anti-inflammatory", "analgesic", "tissue-repair", "skin-healing"],
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&q=80&w=300",
    origin: "North America & Europe",
    traditionalUses: ["Pain relief", "Tissue repair", "Inflammation reduction"],
    icon: Heart
  },
  {
    id: "dandelion",
    name: "Dandelion",
    scientificName: "Taraxacum officinale",
    description: "Detoxifying herb that supports liver function and skin health.",
    category: "detox",
    properties: ["detoxifying", "liver-support", "skin-health"],
    image: "https://images.unsplash.com/photo-1585411521318-c8d83bb5f773?auto=format&fit=crop&q=80&w=300",
    origin: "Europe & Western Asia",
    traditionalUses: ["Liver detox", "Digestive support", "Skin purification"],
    icon: Leaf
  },
  {
    id: "comfrey",
    name: "Comfrey",
    scientificName: "Symphytum officinale",
    description: "Known as 'knitbone', comfrey accelerates healing and reduces inflammation.",
    category: "healing",
    properties: ["tissue-repair", "anti-inflammatory", "bone-healing"],
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80&w=300",
    origin: "Europe",
    traditionalUses: ["Bone support", "Tissue repair", "Bruise healing"],
    icon: Flower2
  },
  {
    id: "gotu-kola",
    name: "Gotu Kola",
    scientificName: "Centella asiatica",
    description: "Ancient herb for skin health, wound healing, and cognitive function.",
    category: "skin",
    properties: ["skin-health", "wound-healing", "cognitive-enhancement"],
    image: "https://images.unsplash.com/photo-1600857062241-98e5dba7214b?auto=format&fit=crop&q=80&w=300",
    origin: "South Asia",
    traditionalUses: ["Skin healing", "Cognitive support", "Circulation"],
    icon: Sprout
  },
  {
    id: "nasturtium",
    name: "Nasturtium",
    scientificName: "Tropaeolum majus",
    description: "Immune-boosting flower with natural antibiotic properties.",
    category: "immune",
    properties: ["immune-boosting", "antibiotic", "skin-health"],
    image: "https://images.unsplash.com/photo-1559007615-cd4628902d4a?auto=format&fit=crop&q=80&w=300",
    origin: "South America",
    traditionalUses: ["Immune support", "Antimicrobial", "Skin conditioning"],
    icon: Sun
  },
  {
    id: "hemp",
    name: "Hemp",
    scientificName: "Cannabis sativa subsp. sativa",
    description: "Rich in essential fatty acids for skin nourishment and protection.",
    category: "skin",
    properties: ["skin-nourishing", "anti-inflammatory", "protective"],
    image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd4eae7?auto=format&fit=crop&q=80&w=300",
    origin: "Central Asia",
    traditionalUses: ["Skin nourishment", "Anti-inflammatory", "Joint support"],
    icon: Droplet
  }
];