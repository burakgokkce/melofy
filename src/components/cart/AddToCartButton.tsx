"use client";

import { useState } from "react";
import { useCart } from "@/context/cart-context";

type Props = {
  productId: string;
  className?: string;
};

export function AddToCartButton({ productId, className }: Props) {
  const { addItem } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  return (
    <button
      type="button"
      className={
        className ??
        "btn-primary inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold transition"
      }
      onClick={() => {
        addItem(productId, 1);
        setJustAdded(true);
        window.setTimeout(() => setJustAdded(false), 2000);
      }}
    >
      {justAdded ? "Sepete eklendi ✓" : "Sepete ekle"}
    </button>
  );
}
