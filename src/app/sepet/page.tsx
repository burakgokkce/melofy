import type { Metadata } from "next";
import Link from "next/link";
import { SepetClient } from "@/components/cart/SepetClient";

export const metadata: Metadata = {
  title: "Sepet — MELOFY",
  description: "Sepetinizdeki enstrümanlar ve adetler.",
};

export default function SepetPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:py-16">
      <header className="mb-8">
        <p className="text-xs font-bold uppercase tracking-widest text-accent-violet">
          Alışveriş
        </p>
        <h1 className="font-display mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Sepet
        </h1>
        <p className="mt-2 text-sm text-muted">
          Ödeme adımı yakında; şimdilik sepet tarayıcında saklanıyor.
        </p>
      </header>
      <SepetClient />
      <p className="mt-8 text-center text-sm text-muted">
        <Link href="/magaza" className="font-semibold text-accent-violet hover:underline">
          Alışverişe devam et
        </Link>
      </p>
    </main>
  );
}
