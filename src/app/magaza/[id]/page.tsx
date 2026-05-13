import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/cart/AddToCartButton";
import { getProductById } from "@/lib/site";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) {
    return { title: "Ürün bulunamadı — MELOFY" };
  }
  return {
    title: `${product.name} — MELOFY`,
    description: `${product.category} · ${product.price} · ${product.city}. ${product.description.slice(0, 140)}`,
  };
}

export default async function UrunDetailPage({ params }: Props) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <nav className="text-sm text-muted">
        <Link href="/magaza" className="font-medium hover:text-accent-deep">
          Mağaza
        </Link>
        <span aria-hidden className="mx-2">
          /
        </span>
        <span className="text-foreground">{product.category}</span>
      </nav>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
        <div className="relative aspect-square max-h-[min(640px,86vw)] overflow-hidden rounded-3xl bg-zinc-100 shadow-xl ring-1 ring-black/5">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-zinc-900 shadow-sm ring-1 ring-black/5">
            {product.condition}
          </span>
        </div>

        <div className="flex min-w-0 flex-col">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-violet">
            {product.category}
          </p>
          <h1 className="font-display mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {product.name}
          </h1>
          <p className="mt-3 text-sm text-muted">{product.city}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {product.tags.map((t) => (
              <span
                key={t}
                className="rounded-lg bg-zinc-50 px-2.5 py-1 text-xs font-medium text-zinc-800 ring-1 ring-zinc-200/80"
              >
                {t}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-muted">
            {product.description}
          </p>
          <p className="mt-8 text-3xl font-bold tabular-nums tracking-tight text-foreground sm:text-4xl">
            {product.price}
          </p>
          <p className="mt-4 text-xs text-muted">
            Fotoğraf stok görseldir; teslimatta seri numarası ve satıcı garanti
            bilgisi paylaşılacaktır.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <AddToCartButton productId={product.id} />
            <Link
              href="/magaza"
              className="inline-flex items-center justify-center rounded-full border border-line-strong bg-white px-8 py-3.5 text-sm font-semibold text-accent-deep shadow-sm transition hover:border-accent-violet/35"
            >
              Mağazaya dön
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
