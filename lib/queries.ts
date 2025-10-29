import { BadgeCheck, Leaf, Droplet, Sun, Wind, Heart, Moon, Flower2, Sprout, Cloud, Shield, Star } from 'lucide-react';
import { Product } from './types';
import { products } from './products';
import { additionalProducts } from './additional-products';

// Combine all products
export const allProducts = [...products, ...additionalProducts];

export const getProducts = async (): Promise<Product[]> => {
  return allProducts;
};

export const getProduct = async (id: string): Promise<Product | undefined> => {
  return allProducts.find(product => product.id === id);
};

export const categories = [
  {
    id: "topical",
    name: "Topical Products",
    description: "Creams and balms for external use",
    image: "categories/topical.jpg"
  },
  {
    id: "oil",
    name: "Infused Oils",
    description: "Herbal oils for therapeutic applications",
    image: "categories/oil.jpg"
  },
  {
    id: "tincture",
    name: "Tinctures",
    description: "Liquid herbal extracts",
    image: "categories/tincture.jpg"
  },
  {
    id: "extract",
    name: "Extracts",
    description: "Concentrated herbal preparations",
    image: "categories/extract.jpg"
  },
  {
    id: "soap",
    name: "Herbal Soaps",
    description: "Natural cleansing products",
    image: "categories/soap.jpg"
  }
];

export const testimonials = [
  {
    id: "1",
    name: "Sarah M.",
    role: "Wellness Enthusiast",
    content: "The cannabis cream has been amazing for my chronic back pain. I can finally sleep through the night.",
    rating: 5,
    product: "cannabis-cream",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
  },
  {
    id: "2",
    name: "John D.",
    role: "Athlete",
    content: "The comfrey oil helped heal my sprained ankle in record time. I'm back to running in just two weeks!",
    rating: 5,
    product: "comfrey-oil",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
  },
  {
    id: "3",
    name: "Emma L.",
    role: "Skincare Expert",
    content: "The dandelion tincture has cleared up my skin issues. I feel like I'm glowing from the inside out.",
    rating: 5,
    product: "dandelion-spagyric",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
  }
];