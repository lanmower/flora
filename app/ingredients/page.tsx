"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ingredients } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function IngredientsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredIngredients = ingredients.filter(ingredient =>
    ingredient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ingredient.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ingredient.scientificName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Natural Ingredients</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Learn about the powerful natural ingredients we use in our products
          </p>
          
          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search ingredients..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredIngredients.map((ingredient) => {
            const Icon = ingredient.icon;
            return (
              <Card key={ingredient.id} className="overflow-hidden">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="h-full">
                    <img 
                      src={ingredient.image} 
                      alt={ingredient.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <CardHeader className="p-0 mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="w-5 h-5 text-green-600 dark:text-green-400" />
                        <h3 className="text-2xl font-semibold">{ingredient.name}</h3>
                      </div>
                      <Badge variant="outline" className="mb-2">
                        {ingredient.scientificName}
                      </Badge>
                      <p className="text-muted-foreground">{ingredient.description}</p>
                    </CardHeader>
                    <CardContent className="p-0">
                      <Accordion type="single" collapsible>
                        <AccordionItem value="origin">
                          <AccordionTrigger>Origin</AccordionTrigger>
                          <AccordionContent>
                            <p className="text-muted-foreground">{ingredient.origin}</p>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="benefits">
                          <AccordionTrigger>Health Benefits</AccordionTrigger>
                          <AccordionContent>
                            <ul className="list-disc list-inside text-muted-foreground">
                              {ingredient.benefits.map((benefit, index) => (
                                <li key={index}>{benefit}</li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="traditional">
                          <AccordionTrigger>Traditional Uses</AccordionTrigger>
                          <AccordionContent>
                            <ul className="list-disc list-inside text-muted-foreground">
                              {ingredient.traditionalUses.map((use, index) => (
                                <li key={index}>{use}</li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="safety">
                          <AccordionTrigger>Safety Information</AccordionTrigger>
                          <AccordionContent>
                            <p className="text-muted-foreground">{ingredient.safetyInfo}</p>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="sustainability">
                          <AccordionTrigger>Sustainability</AccordionTrigger>
                          <AccordionContent>
                            <p className="text-muted-foreground">{ingredient.sustainabilityInfo}</p>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}