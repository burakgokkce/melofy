"use client";

import { useCallback, useMemo, useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import {
  emptyActiveFilters,
  filterDefinitions,
  filterProducts,
  type ActiveFilters,
  type FilterGroupId,
} from "@/lib/catalog-filters";
import type { Product } from "@/lib/site";

export function MagazaCatalog({ products }: { products: Product[] }) {
  const [active, setActive] = useState<ActiveFilters>(emptyActiveFilters);

  const toggleChip = useCallback((groupId: FilterGroupId, option: string) => {
    setActive((prev) => {
      const set = new Set(prev[groupId]);
      if (set.has(option)) set.delete(option);
      else set.add(option);
      return { ...prev, [groupId]: [...set] };
    });
  }, []);

  const clearAll = useCallback(() => {
    setActive(emptyActiveFilters());
  }, []);

  const filtered = useMemo(
    () => filterProducts(products, active),
    [products, active],
  );

  const hasFilters = useMemo(
    () =>
      active.family.length > 0 ||
      active.tone.length > 0 ||
      active.material.length > 0,
    [active],
  );

  return (
    <div className="mt-12 flex flex-col gap-10 lg:flex-row">
      <aside className="shrink-0 lg:w-72">
        <div className="sticky top-24 rounded-2xl border border-line-soft bg-card/95 p-6 shadow-[0_12px_40px_-16px_rgba(36,52,52,0.12)] backdrop-blur-sm">
          <div className="flex items-start justify-between gap-2">
            <h2 className="font-display text-lg font-semibold tracking-tight text-foreground">
              Müzisyene özel filtreler
            </h2>
            {hasFilters ? (
              <button
                type="button"
                onClick={clearAll}
                className="shrink-0 text-[11px] font-semibold text-accent-violet underline-offset-2 hover:underline"
              >
                Sıfırla
              </button>
            ) : null}
          </div>
          <p className="mt-2 text-xs leading-relaxed text-muted">
            Birden fazla seçim: aynı grupta “veya”, farklı gruplar “ve” ile
            birleşir.
          </p>
          <div className="mt-6 space-y-6">
            {filterDefinitions.map((g) => (
              <div key={g.id}>
                <p className="text-xs font-semibold uppercase tracking-wide text-accent-deep">
                  {g.title}
                </p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {g.options.map((o) => {
                    const on = active[g.id].includes(o);
                    return (
                      <li key={o}>
                        <button
                          type="button"
                          onClick={() => toggleChip(g.id, o)}
                          aria-pressed={on}
                          className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                            on
                              ? "border-accent-violet/50 bg-accent-violet/15 text-accent-deep ring-1 ring-accent-violet/25"
                              : "border-line-soft bg-accent-violet/[0.05] text-foreground hover:border-line-strong hover:bg-accent-violet/10"
                          }`}
                        >
                          {o}
                        </button>
                      </li>
                    );
                  })}
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
              {filtered.length} ürün
            </span>
            {hasFilters ? (
              <span className="text-muted">
                {" "}
                — filtre uygulandı ({products.length} toplam)
              </span>
            ) : (
              <span className="text-muted"> — vitrin örneği</span>
            )}
          </p>
          <span className="rounded-full bg-accent-violet/10 px-3 py-1 text-xs font-semibold text-accent-deep ring-1 ring-line-strong">
            Emanet ödeme yakında
          </span>
        </div>

        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-line-strong bg-card/80 px-6 py-16 text-center">
            <p className="font-display text-lg font-semibold text-foreground">
              Bu filtrelerle eşleşen ürün yok
            </p>
            <p className="mt-2 text-sm text-muted">
              Seçimleri azalt veya sıfırla.
            </p>
            <button
              type="button"
              onClick={clearAll}
              className="btn-primary mt-6 inline-flex rounded-full px-6 py-2.5 text-sm font-semibold"
            >
              Filtreleri temizle
            </button>
          </div>
        ) : (
          <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((p, index) => (
              <ProductCard
                key={p.id}
                product={p}
                priorityImage={index < 6}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
