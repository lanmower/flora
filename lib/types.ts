import { BadgeCheck, Leaf, Droplet, Sun, Wind, Heart, Moon, Flower2, Sprout, Cloud, Shield, Star } from 'lucide-react';

export type Ingredient = {
  id: string;
  name: string;
  description: string;
  category: string;
  properties: string[];
  image?: string;
  scientificName?: string;
  origin?: string;
  traditionalUses?: string[];
  icon?: any;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  ingredients: string[];
  image?: string;
  featured?: boolean;
};