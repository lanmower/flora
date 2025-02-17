"use client";

import { products, ingredients } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === params.id);
  
  if (!product) {
    notFound();
  }

  const productIngredients = ingredients.filter(ingredient => 
    product.ingredients.includes(ingredient.id)
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <Link href="/products">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Button>
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
                <Badge variant="secondary" className="mb-4">
                  {product.category}
                </Badge>
              </div>
              <div className="text-3xl font-bold text-green-600">
                ${product.price}
              </div>
            </div>

            <div className="flex items-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(product.rating)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
              <span className="text-sm text-muted-foreground ml-2">
                ({product.reviews} reviews)
              </span>
            </div>

            <p className="text-lg text-muted-foreground mb-8">
              {product.description}
            </p>

            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-3">Key Benefits</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  {product.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">How to Use</h2>
                <p className="text-muted-foreground">{product.usage}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">Size</h2>
                <p className="text-muted-foreground">{product.size}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">Natural Ingredients</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {productIngredients.map((ingredient) => {
                    const Icon = ingredient.icon;
                    return (
                      <Link 
                        key={ingredient.id} 
                        href={`/ingredients#${ingredient.id}`}
                        className="flex items-center gap-2 p-3 rounded-lg border hover:bg-gray-50 transition-colors"
                      >
                        <Icon className="w-5 h-5 text-green-600" />
                        <span>{ingredient.name}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Badge 
                variant={
                  product.stockStatus === 'in stock' ? 'success' :
                  product.stockStatus === 'low stock' ? 'warning' : 'destructive'
                }
                className="mb-4"
              >
                {product.stockStatus}
              </Badge>
              
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}