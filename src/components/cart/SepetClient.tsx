"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/cart-context";
import { getProductById } from "@/lib/site";

export function SepetClient() {
  const { lines, setQuantity, removeLine, hydrated } = useCart();

  if (!hydrated) {
    return (
      <p className="text-sm text-muted" aria-live="polite">
        Sepet yükleniyor…
      </p>
    );
  }

  if (lines.length === 0) {
    return (
      <div className="rounded-2xl border border-line-soft bg-card p-10 text-center shadow-sm">
        <p className="font-display text-lg font-semibold text-foreground">
          Sepetin boş
        </p>
        <p className="mt-2 text-sm text-muted">
          Mağazadan enstrüman ekleyerek başlayabilirsin.
        </p>
        <Link
          href="/magaza"
          className="btn-primary mt-6 inline-flex rounded-full px-6 py-3 text-sm font-semibold"
        >
          Mağazaya git
        </Link>
      </div>
    );
  }

  return (
    <ul className="space-y-4">
      {lines.map((line) => {
        const product = getProductById(line.productId);
        if (!product) {
          return (
            <li
              key={line.productId}
              className="flex items-center justify-between rounded-2xl border border-line-soft bg-card p-4"
            >
              <span className="text-sm text-muted">
                Ürün bulunamadı (ID: {line.productId})
              </span>
              <button
                type="button"
                className="text-xs font-semibold text-accent-coral"
                onClick={() => removeLine(line.productId)}
              >
                Kaldır
              </button>
            </li>
          );
        }
        return (
          <li
            key={line.productId}
            className="flex flex-col gap-4 rounded-2xl border border-line-soft bg-card p-4 shadow-sm sm:flex-row sm:items-center"
          >
            <Link
              href={`/magaza/${product.id}`}
              className="relative h-28 w-full shrink-0 overflow-hidden rounded-xl bg-zinc-100 sm:h-24 sm:w-32"
            >
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                sizes="128px"
                className="object-cover"
              />
            </Link>
            <div className="min-w-0 flex-1">
              <Link
                href={`/magaza/${product.id}`}
                className="font-display font-semibold text-foreground hover:text-accent-deep"
              >
                {product.name}
              </Link>
              <p className="mt-1 text-xs text-muted">
                {product.category} · {product.city} · {product.condition}
              </p>
              <p className="mt-2 text-lg font-bold tabular-nums text-foreground">
                {product.price}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 sm:flex-col sm:items-end">
              <div className="flex items-center gap-2 rounded-full border border-line-soft bg-white px-2 py-1">
                <button
                  type="button"
                  className="flex h-8 w-8 items-center justify-center rounded-full text-lg font-semibold text-foreground hover:bg-accent-violet/10"
                  onClick={() =>
                    setQuantity(line.productId, line.quantity - 1)
                  }
                  aria-label="Adet azalt"
                >
                  −
                </button>
                <span className="min-w-[2ch] text-center text-sm font-semibold tabular-nums">
                  {line.quantity}
                </span>
                <button
                  type="button"
                  className="flex h-8 w-8 items-center justify-center rounded-full text-lg font-semibold text-foreground hover:bg-accent-violet/10"
                  onClick={() =>
                    setQuantity(line.productId, line.quantity + 1)
                  }
                  aria-label="Adet artır"
                >
                  +
                </button>
              </div>
              <button
                type="button"
                className="text-xs font-semibold text-accent-coral hover:underline"
                onClick={() => removeLine(line.productId)}
              >
                Satırı kaldır
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
