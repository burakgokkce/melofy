import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CartProvider } from "@/context/cart-context";

export const metadata: Metadata = {
  title: "MELOFY — Çal · Öğren · Keşfet",
  description:
    "Çal, öğren, keşfet: yeni ve ikinci el enstrümanlar, güvenli ödeme, müzisyene özel filtreler; rehberler, başlangıç kursları ve keşfet bölümü.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="h-full scroll-smooth">
      <body className="mesh-page bg-page text-foreground min-h-full flex flex-col font-sans antialiased">
        <CartProvider>
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
