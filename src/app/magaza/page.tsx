import type { Metadata } from "next";
import { MagazaCatalog } from "./MagazaCatalog";
import { allProducts } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mağaza — MELOFY",
  description:
    "Yeni ve ikinci el enstrümanlar, emanet ödeme ve müzisyene özel filtreler.",
};

export default function MagazaPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-16">
      <header className="max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-widest text-accent-violet">
          Ticari boyut
        </p>
        <h1 className="font-display mt-2 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
          Enstrüman <span className="text-gradient">mağazası</span>
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          Markalar, mağazalar ve bireysel satıcılar bir arada. Güvenli ödeme için
          emanet akışı: para, alıcı ürünü teslim alıp onaylayana kadar
          bekletilir — pahalı enstrümanlarda kritik bir güvence.
        </p>
      </header>

      <MagazaCatalog products={allProducts} />
    </main>
  );
}
