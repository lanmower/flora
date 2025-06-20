'use client';

import { Product } from '@/lib/data';

export default function ProductClient({ product }: { product: Product }) {
  console.log('Rendering client component for product:', product.id);
  
  return (
    <div>
      {/* Add your interactive elements here */}
    </div>
  );
} 