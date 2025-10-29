// Re-export all data from modular files
export type { Product, Ingredient } from './types';
export { ingredients } from './ingredients';
export { products } from './products';
export { additionalProducts } from './additional-products';
export { allProducts } from './queries';
export { getProducts, getProduct, categories, testimonials } from './queries';