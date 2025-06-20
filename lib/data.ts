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
  stockStatus: 'in stock' | 'low stock' | 'out of stock';
  featured?: boolean;
  new?: boolean;
  rating: number;
  reviews: number;
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
  },
  {
    id: "gotu-kola",
    name: "Gotu Kola",
    description: "A revered herb in Ayurvedic medicine known for its cognitive and skin healing properties",
    scientificName: "Centella asiatica",
    origin: "Southeast Asia",
    benefits: [
      "Enhances cognitive function",
      "Supports skin healing",
      "Improves circulation",
      "Reduces anxiety",
      "Promotes wound healing",
      "Supports collagen production"
    ],
    image: "https://images.unsplash.com/photo-1540845511934-7721dd7adec3?auto=format&fit=crop&q=80",
    icon: Sprout,
    traditionalUses: [
      "Traditional brain tonic",
      "Ayurvedic longevity herb",
      "Skin healing applications"
    ],
    safetyInfo: "Generally safe. Consult healthcare provider if pregnant or taking medications.",
    sustainabilityInfo: "Sustainably grown in controlled organic environments in India."
  },
  {
    id: "dandelion",
    name: "Dandelion Root",
    description: "A common yet powerful herb known for its detoxifying and liver-supporting properties",
    scientificName: "Taraxacum officinale",
    origin: "Europe and North America",
    benefits: [
      "Supports liver health",
      "Natural detoxifier",
      "Rich in antioxidants",
      "Aids digestion",
      "Supports kidney function",
      "Anti-inflammatory properties"
    ],
    image: "https://images.unsplash.com/photo-1558697698-9300a84a6a99?auto=format&fit=crop&q=80",
    icon: Sun,
    traditionalUses: [
      "Traditional liver tonic",
      "Natural diuretic",
      "Folk medicine remedy"
    ],
    safetyInfo: "Safe for most people. May interact with certain medications.",
    sustainabilityInfo: "Wildcrafted sustainably from pristine meadows."
  },
  {
    id: "cannabis",
    name: "Cannabis",
    description: "A therapeutic plant with a rich history in traditional medicine and modern applications",
    scientificName: "Cannabis sativa",
    origin: "Central Asia",
    benefits: [
      "Pain management",
      "Reduces inflammation",
      "Supports sleep",
      "Anxiety relief",
      "Neuroprotective properties",
      "Skin health support"
    ],
    image: "https://images.unsplash.com/photo-1536819114556-1c7906228ed2?auto=format&fit=crop&q=80",
    icon: Leaf,
    traditionalUses: [
      "Traditional pain relief",
      "Ancient medicinal use",
      "Historical therapeutic applications"
    ],
    safetyInfo: "Use as directed. Follow local regulations and consult healthcare provider.",
    sustainabilityInfo: "Grown in controlled environments following sustainable practices."
  },
  {
    id: "comfrey",
    name: "Comfrey",
    description: "A powerful healing herb known for its tissue regeneration properties",
    scientificName: "Symphytum officinale",
    origin: "Europe",
    benefits: [
      "Supports bone health",
      "Accelerates wound healing",
      "Reduces inflammation",
      "Soothes skin conditions",
      "Aids muscle recovery",
      "Promotes tissue repair"
    ],
    image: "https://images.unsplash.com/photo-1515586000433-45406d8e6662?auto=format&fit=crop&q=80",
    icon: Heart,
    traditionalUses: [
      "Traditional wound healing",
      "Bone and joint support",
      "Historical poultice use"
    ],
    safetyInfo: "For external use only. Do not apply to open wounds.",
    sustainabilityInfo: "Cultivated using organic methods in controlled environments."
  },
  {
    id: "nasturtium",
    name: "Nasturtium",
    description: "A vibrant herb with both culinary and medicinal properties",
    scientificName: "Tropaeolum majus",
    origin: "South and Central America",
    benefits: [
      "Natural antibiotic",
      "Immune support",
      "Anti-inflammatory",
      "Skin health",
      "Respiratory support",
      "Antioxidant rich"
    ],
    image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&q=80",
    icon: CloudSun,
    traditionalUses: [
      "Traditional respiratory support",
      "Historical immune tonic",
      "Natural antibiotic"
    ],
    safetyInfo: "Generally safe. Avoid if allergic to cruciferous plants.",
    sustainabilityInfo: "Grown in organic gardens using companion planting methods."
  }
];

export const products: Product[] = [
  // Gotu Kola Products
  {
    id: "gotu-spagyric",
    name: "Gotu Kola Spagyric Tincture",
    description: "Advanced spagyric preparation for cognitive enhancement",
    price: 49.99,
    image: "/gotu-spagyric.jpg",
    ingredients: ["gotu-kola"],
    benefits: ["Mental clarity", "Tissue regeneration", "Circulatory support"],
    usage: "15-20 drops under tongue 2x daily",
    category: "Tinctures",
    size: "30ml",
    stockStatus: 'in stock',
    rating: 4.5,
    reviews: 12
  },
  {
    id: "gotu-infused-oil",
    name: "Gotu Kola Infused Oil",
    description: "Cold-infused organic oil for topical application",
    price: 34.99,
    image: "/gotu-oil.jpg",
    ingredients: ["gotu-kola"],
    benefits: ["Skin healing", "Collagen production", "Anti-inflammatory"],
    usage: "Apply to affected area 2x daily",
    category: "Oils",
    size: "50ml",
    stockStatus: 'in stock',
    rating: 4.2,
    reviews: 8
  },

  // Dandelion Product
  {
    id: "dandelion-spagyric",
    name: "Dandelion Spagyric Tincture",
    description: "Liver-supporting spagyric with detox properties",
    price: 42.99,
    image: "/dandelion-tincture.jpg",
    ingredients: ["dandelion"],
    benefits: ["Liver detox", "Digestive support", "Antioxidant rich"],
    usage: "10-15 drops in water 3x daily",
    category: "Tinctures",
    size: "30ml",
    stockStatus: 'in stock',
    rating: 4.7,
    reviews: 15
  },

  // Cannabis Products
  {
    id: "cannabis-feco",
    name: "Cannabis Full Spectrum Oil (FECO)",
    description: "Full extract cannabis oil with complete cannabinoid profile",
    price: 89.99,
    image: "/cannabis-feco.jpg",
    ingredients: ["cannabis"],
    benefits: ["Full spectrum relief", "Custom dosing", "Sublingual absorption"],
    usage: "Dose as needed under tongue",
    category: "Oils",
    size: "30ml",
    stockStatus: 'in stock',
    rating: 4.8,
    reviews: 20
  },
  {
    id: "cannabis-cream",
    name: "Cannabis Relief Cream",
    description: "Potent topical analgesic with CBD isolate",
    price: 54.99,
    image: "/cannabis-cream.jpg",
    ingredients: ["cannabis"],
    benefits: ["Targeted pain relief", "Non-greasy formula", "Fast absorption"],
    usage: "Apply to affected area every 4-6 hours",
    category: "Topicals",
    size: "100ml",
    stockStatus: 'in stock',
    rating: 4.6,
    reviews: 10
  },

  // Comfrey Products
  {
    id: "comfrey-cream",
    name: "Comfrey Repair Cream",
    description: "Skin-regenerative cream with allantoin",
    price: 39.99,
    image: "/comfrey-cream.jpg",
    ingredients: ["comfrey"],
    benefits: ["Bone support", "Tissue repair", "Anti-inflammatory"],
    usage: "Apply to unbroken skin 2x daily",
    category: "Topicals",
    size: "50ml",
    stockStatus: 'in stock',
    rating: 4.4,
    reviews: 7
  },
  {
    id: "comfrey-oil",
    name: "Comfrey Infused Oil",
    description: "Traditional herbal oil for external use",
    price: 29.99,
    image: "/comfrey-oil.jpg",
    ingredients: ["comfrey"],
    benefits: ["Muscle recovery", "Joint support", "Skin health"],
    usage: "Massage into affected areas",
    category: "Oils",
    size: "100ml",
    stockStatus: 'in stock',
    rating: 4.3,
    reviews: 5
  },

  // Other Products
  {
    id: "nasturtium-oil",
    name: "Nasturtium Infused Oil",
    description: "Antimicrobial oil with vibrant pigment",
    price: 27.99,
    image: "/nasturtium-oil.jpg",
    ingredients: ["nasturtium"],
    benefits: ["Skin conditioning", "Natural preservative", "Antioxidant"],
    usage: "Use as massage/base oil",
    category: "Oils",
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
    image: "/hemp-soap.jpg",
    ingredients: ["cannabis"],
    benefits: ["Gentle cleansing", "Moisturizing", "Eco-friendly"],
    usage: "Daily facial/body use",
    category: "Body Care",
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
    image: "/cannabis-comfrey.jpg",
    ingredients: ["cannabis", "comfrey"],
    benefits: ["Muscle recovery", "Joint support", "Anti-inflammatory"],
    usage: "Apply 3x daily",
    category: "Topicals",
    size: "100ml",
    stockStatus: 'low stock',
    rating: 4.2,
    reviews: 5
  }
];

export const getProducts = async (): Promise<Product[]> => {
  console.log('Fetching all products...');
  return products;
};

export const getProduct = async (id: string): Promise<Product | undefined> => {
  console.log('Fetching product with ID:', id);
  return products.find(product => product.id === id);
};

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