import { getProduct, getProducts, ingredients, Product } from '@/lib/data';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product: Product) => ({
    id: product.id.toString(),
  }));
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  console.log('Rendering product page for ID:', params.id);
  const product = await getProduct(params.id);
  
  if (!product) {
    notFound();
  }

  console.log('Product data:', { 
    name: product.name, 
    ingredients: product.ingredients 
  });

  console.log('Available ingredients:', ingredients.map(i => i.id));

  const productIngredients = ingredients.filter(ingredient => 
    product.ingredients.includes(ingredient.id)
  );

  console.log('Filtered ingredients:', productIngredients.map(i => ({ id: i.id, name: i.name })));

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
            <div className="aspect-square overflow-hidden rounded-lg relative">
              <Image 
                src={product.image} 
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-4xl font-bold">{product.name}</h1>
                <p className="mt-2 text-xl text-muted-foreground">${product.price}</p>
              </div>
              <Badge variant={
                product.stockStatus === 'in stock' ? 'default' :
                product.stockStatus === 'low stock' ? 'secondary' : 'destructive'
              }>
                {product.stockStatus}
              </Badge>
            </div>

            <div className="flex items-center gap-1 mt-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${i < product.rating ? 'fill-primary text-primary' : 'fill-muted text-muted-foreground'}`}
                />
              ))}
              <span className="ml-2 text-muted-foreground">({product.reviews} reviews)</span>
            </div>

            <p className="text-lg mb-8">{product.description}</p>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Key Ingredients</h2>
              <div className="space-y-6">
                {productIngredients.map((ingredient) => (
                  <div key={ingredient.id} className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="relative w-20 h-20">
                        <Image 
                          src={ingredient.image} 
                          alt={ingredient.name}
                          fill
                          className="rounded-md object-cover"
                          sizes="80px"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold">{ingredient.name}</h3>
                        <p className="text-sm text-muted-foreground italic mb-2">{ingredient.scientificName}</p>
                        <p className="text-sm mb-2">{ingredient.description}</p>
                        <div className="text-sm">
                          <span className="font-medium">Origin:</span> {ingredient.origin}
                        </div>
                        <div className="mt-2">
                          <Badge variant="outline" className="mr-2">
                            {ingredient.traditionalUses[0]}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">How to Use</h2>
              <p>{product.usage}</p>
            </div>

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