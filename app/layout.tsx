import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Leaf } from "lucide-react";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Flora Infusions - Natural Wellness Products',
  description: 'Discover our premium collection of natural wellness products and remedies.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background text-foreground">
            {/* Navigation */}
            <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="max-w-7xl mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <Link href="/" className="flex items-center gap-2">
                      <Leaf className="h-6 w-6 text-green-600" />
                      <span className="font-semibold text-lg">Flora Infusions</span>
                    </Link>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <Link href="/products">
                      <Button variant="ghost">Products</Button>
                    </Link>
                    <Link href="/ingredients">
                      <Button variant="ghost">Ingredients</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </nav>

            <main>{children}</main>

            {/* Footer */}
            <footer className="border-t bg-background">
              <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <Link href="/" className="flex items-center gap-2">
                      <Leaf className="h-6 w-6 text-green-600" />
                      <span className="font-semibold text-lg">Flora Infusions</span>
                    </Link>
                    <p className="mt-4 text-muted-foreground">
                      Discover the healing power of nature with our premium wellness products.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4">Quick Links</h3>
                    <div className="space-y-3">
                      <Link href="/products" className="block text-muted-foreground hover:text-foreground">
                        Products
                      </Link>
                      <Link href="/ingredients" className="block text-muted-foreground hover:text-foreground">
                        Ingredients
                      </Link>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4">Contact</h3>
                    <p className="text-muted-foreground">
                      Email: contact@florainfusions.com<br />
                      Phone: (555) 123-4567
                    </p>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
                  <p>&copy; {new Date().getFullYear()} Flora Infusions. All rights reserved.</p>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}