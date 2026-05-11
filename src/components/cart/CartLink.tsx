"use client";

import Link from "next/link";
import { useCart } from "@/context/cart-context";

export function CartLink() {
  const { totalItems, hydrated } = useCart();

  return (
    <Link
      href="/sepet"
      className="relative inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-semibold text-foreground/80 ring-1 ring-line-soft transition hover:bg-accent-violet/[0.08] hover:text-accent-deep"
      aria-label={hydrated ? `Sepet, ${totalItems} ürün` : "Sepet"}
    >
      <svg
        className="h-5 w-5 opacity-85"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <circle cx="9" cy="21" r="1" />
        <circle cx="18" cy="21" r="1" />
        <path d="M3 5h2l2 14h11l2-9H7" />
        <path d="M16 10V7a4 4 0 00-8 0v3" />
      </svg>
      <span className="hidden sm:inline">Sepet</span>
      {hydrated && totalItems > 0 ? (
        <span className="absolute -right-0.5 -top-0.5 flex h-[1.125rem] min-w-[1.125rem] items-center justify-center rounded-full bg-accent-coral px-1 text-[10px] font-bold text-white shadow-sm tabular-nums">
          {totalItems > 99 ? "99+" : totalItems}
        </span>
      ) : null}
    </Link>
  );
}
