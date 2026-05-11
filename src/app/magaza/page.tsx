import type { Metadata } from "next";
import { ProductCard } from "@/components/ProductCard";
import { allProducts } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mağaza — MELOFY",
  description:
    "Yeni ve ikinci el enstrümanlar, emanet ödeme ve müzisyene özel filtreler.",
};

const filterGroups = [
  {
    title: "Enstrüman ailesi",
    options: ["Telli", "Yaylı", "Nefesli", "Tuşlu", "Vurmalı"],
  },
  {
    title: "Ton & karakter",
    options: ["Parlak", "Dolgun", "Nötr", "Sıcak", "Karanlık"],
  },
  {
    title: "Malzeme / yapı",
    options: ["Ahşap türü", "Tel / yay yapısı", "Manyetik düzeni", "Ağızlık"],
  },
] as const;

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

      <div className="mt-12 flex flex-col gap-10 lg:flex-row">
        <aside className="shrink-0 lg:w-72">
          <div className="sticky top-24 rounded-2xl border border-line-soft bg-card/95 p-6 shadow-[0_12px_40px_-16px_rgba(36,52,52,0.12)] backdrop-blur-sm">
            <h2 className="font-display text-lg font-semibold tracking-tight text-foreground">
              Müzisyene özel filtreler
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-muted">
              İsimle aramanın ötesinde: ahşap, yapı, tonalite ve daha fazlası.
            </p>
            <div className="mt-6 space-y-6">
              {filterGroups.map((g) => (
                <div key={g.title}>
                  <p className="text-xs font-semibold uppercase tracking-wide text-accent-deep">
                    {g.title}
                  </p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {g.options.map((o) => (
                      <li key={o}>
                        <button
                          type="button"
                          className="rounded-full border border-line-soft bg-accent-violet/[0.05] px-3 py-1.5 text-xs font-medium text-foreground transition hover:border-line-strong hover:bg-accent-violet/10"
                        >
                          {o}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </aside>

        <div className="min-w-0 flex-1">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-muted">
              <span className="font-semibold text-accent-deep">
                {allProducts.length} ürün
              </span>
              <span className="text-muted"> — vitrin örneği</span>
            </p>
            <span className="rounded-full bg-accent-violet/10 px-3 py-1 text-xs font-semibold text-accent-deep ring-1 ring-line-strong">
              Emanet ödeme yakında
            </span>
          </div>
          <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
            {allProducts.map((p, index) => (
              <ProductCard
                key={p.id}
                product={p}
                priorityImage={index < 6}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
