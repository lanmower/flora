import { BadgeCheck, Leaf, Droplet, Sun, Wind, Heart, Moon, Flower2, Sprout, CloudSun } from "lucide-react";

export type Ingredient = {
  id: string;
  name: string;
  description: string;
  benefits: string[];
  scientificName: string;
  origin: string;
  image: string;
  icon: any;
  traditionalUses: string[];
  safetyInfo: string;
  sustainabilityInfo: string;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  ingredients: string[];
  benefits: string[];
  usage: string;
  category: string;
  size: string;
  rating: number;
  reviews: number;
  featured?: boolean;
  new?: boolean;
  stockStatus: 'in stock' | 'low stock' | 'out of stock';
};

export const ingredients: Ingredient[] = [
  {
    id: "chamomile",
    name: "Chamomile",
    description: "A gentle herb known for its calming properties and rich history in traditional medicine",
    scientificName: "Matricaria chamomilla",
    origin: "Mediterranean Region",
    benefits: [
      "Promotes relaxation and better sleep",
      "Supports digestive health",
      "Natural anti-inflammatory properties",
      "Helps reduce anxiety and stress",
      "Soothes skin irritations",
      "Supports immune system function"
    ],
    image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&q=80",
    icon: Sun,
    traditionalUses: [
      "Ancient Egyptian medicine for fevers",
      "Traditional European sleep aid",
      "Greek and Roman medicinal tea"
    ],
    safetyInfo: "Generally safe for most people. Consult healthcare provider if pregnant or nursing.",
    sustainabilityInfo: "Sustainably harvested from organic farms in Egypt and Croatia."
  },
  {
    id: "lavender",
    name: "Lavender",
    description: "A fragrant herb with soothing properties and centuries of therapeutic use",
    scientificName: "Lavandula angustifolia",
    origin: "Mediterranean Basin",
    benefits: [
      "Promotes peaceful sleep",
      "Reduces stress and anxiety",
      "Natural antiseptic properties",
      "Supports skin health",
      "Alleviates headaches",
      "Improves mood"
    ],
    image: "https://images.unsplash.com/photo-1595159814851-675dcdd0699a?auto=format&fit=crop&q=80",
    icon: Wind,
    traditionalUses: [
      "Roman baths and perfumes",
      "Medieval healing sachets",
      "Traditional French aromatherapy"
    ],
    safetyInfo: "Safe for most users. May cause drowsiness when used in high concentrations.",
    sustainabilityInfo: "Grown in sustainable farms in Provence, France using traditional methods."
  },
  {
    id: "valerian",
    name: "Valerian Root",
    description: "A powerful natural sleep aid with deep relaxation properties",
    scientificName: "Valeriana officinalis",
    origin: "Europe and Asia",
    benefits: [
      "Improves sleep quality",
      "Reduces anxiety",
      "Helps with insomnia",
      "Natural muscle relaxant",
      "Supports stress management",
      "Calms nervous system"
    ],
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80",
    icon: Moon,
    traditionalUses: [
      "Ancient Greek sleep remedy",
      "Traditional Chinese medicine",
      "European anxiety treatment"
    ],
    safetyInfo: "Avoid combining with other sleep medications. Not recommended for long-term use without consultation.",
    sustainabilityInfo: "Wildcrafted from sustainable sources in Eastern Europe."
  },
  {
    id: "echinacea",
    name: "Echinacea",
    description: "A powerful immune-boosting herb with natural defense properties",
    scientificName: "Echinacea purpurea",
    origin: "North America",
    benefits: [
      "Boosts immune system",
      "Reduces cold symptoms",
      "Anti-inflammatory properties",
      "Supports respiratory health",
      "Natural antioxidant",
      "Promotes wound healing"
    ],
    image: "https://images.unsplash.com/photo-1530126483408-aa533e55bdb2?auto=format&fit=crop&q=80",
    icon: Flower2,
    traditionalUses: [
      "Native American traditional medicine",
      "Pioneer era immune support",
      "Historical wound treatment"
    ],
    safetyInfo: "Safe for short-term use. May interact with certain medications.",
    sustainabilityInfo: "Cultivated on certified organic farms in North America."
  }
];

export const products: Product[] = [
  {
    id: "sleep-blend",
    name: "Tranquil Dreams Sleep Blend",
    description: "A harmonious blend of calming herbs to promote restful sleep and peaceful nights",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1614806687394-7e093b514592?auto=format&fit=crop&q=80",
    ingredients: ["chamomile", "lavender", "valerian"],
    benefits: [
      "Promotes deep, restful sleep",
      "Reduces nighttime anxiety",
      "100% natural ingredients",
      "Non-habit forming",
      "Improves sleep quality",
      "Gentle and effective"
    ],
    usage: "Steep 1 teaspoon in hot water for 5-7 minutes before bedtime",
    category: "Sleep & Relaxation",
    size: "60g (30 servings)",
    rating: 4.8,
    reviews: 128,
    featured: true,
    stockStatus: 'in stock'
  },
  {
    id: "immune-boost",
    name: "Vital Shield Immune Support",
    description: "A powerful blend of immune-boosting herbs to support your natural defenses",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1512675828443-4f454c42253a?auto=format&fit=crop&q=80",
    ingredients: ["echinacea"],
    benefits: [
      "Strengthens immune system",
      "Supports respiratory health",
      "Rich in antioxidants",
      "Natural defense support",
      "Year-round protection",
      "Quick absorption"
    ],
    usage: "Take 2 capsules daily with meals",
    category: "Immune Support",
    size: "90 capsules",
    rating: 4.9,
    reviews: 256,
    new: true,
    stockStatus: 'in stock'
  },
  {
    id: "calm-mind",
    name: "Serene Mind Tincture",
    description: "A concentrated blend of calming herbs for stress relief and mental clarity",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1612538498456-e861df91d4d0?auto=format&fit=crop&q=80",
    ingredients: ["lavender", "chamomile"],
    benefits: [
      "Reduces stress and anxiety",
      "Improves focus",
      "Promotes relaxation",
      "Supports emotional balance",
      "Fast-acting formula",
      "Travel-friendly"
    ],
    usage: "Take 1-2 droppers under tongue as needed",
    category: "Stress Relief",
    size: "30ml",
    rating: 4.7,
    reviews: 89,
    stockStatus: 'low stock'
  }
];

export const categories = [
  "Sleep & Relaxation",
  "Immune Support",
  "Stress Relief",
  "Digestive Health",
  "Energy & Vitality",
  "Mood Support"
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Wellness Coach",
    content: "Flora Infusions has transformed my clients' approach to natural wellness. The quality and effectiveness of their products is unmatched.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "David L.",
    role: "Holistic Practitioner",
    content: "As someone who works with natural remedies daily, I'm impressed by the purity and potency of Flora Infusions products.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Emily R.",
    role: "Yoga Instructor",
    content: "The Tranquil Dreams blend has become an essential part of my evening routine. My sleep quality has improved dramatically.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80"
  }
];