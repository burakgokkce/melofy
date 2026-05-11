import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/site";

type Props = { product: Product; priorityImage?: boolean };

export function ProductCard({ product, priorityImage }: Props) {
  return (
    <Link
      href={`/magaza/${product.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line-soft bg-card shadow-[0_1px_0_rgba(17,12,34,0.04),0_12px_40px_-12px_rgba(36,52,52,0.14)] transition duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-[0_20px_50px_-18px_rgba(36,52,52,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-violet/35"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition duration-500 ease-out group-hover:scale-[1.04]"
          priority={priorityImage ?? product.id === "1"}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-80"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-zinc-900 shadow-sm ring-1 ring-black/5">
          {product.condition}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5 sm:p-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-violet/90">
          {product.category}
        </p>
        <h3 className="font-display text-lg font-semibold leading-snug tracking-tight text-foreground sm:text-xl">
          {product.name}
        </h3>
        <div className="flex flex-wrap gap-1.5">
          {product.tags.map((t) => (
            <span
              key={t}
              className="rounded-md bg-zinc-50 px-2 py-0.5 text-[11px] font-medium text-zinc-700 ring-1 ring-zinc-200/80"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-end justify-between border-t border-line-soft pt-4">
          <p className="text-lg font-bold tabular-nums tracking-tight text-foreground sm:text-xl">
            {product.price}
          </p>
          <p className="text-xs font-medium text-muted">{product.city}</p>
        </div>
      </div>
      <span className="sr-only">Ürün detayına git</span>
    </Link>
  );
}
