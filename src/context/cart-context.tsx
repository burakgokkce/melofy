"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type CartLine = {
  productId: string;
  quantity: number;
};

const STORAGE_KEY = "melofy-cart-v1";

type CartContextValue = {
  lines: CartLine[];
  addItem: (productId: string, quantity?: number) => void;
  setQuantity: (productId: string, quantity: number) => void;
  removeLine: (productId: string) => void;
  clear: () => void;
  /** Toplam parça adedi (satır sayısı değil) */
  totalItems: number;
  hydrated: boolean;
};

const CartContext = createContext<CartContextValue | null>(null);

function loadLines(): CartLine[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed
      .map((row) => {
        if (
          row &&
          typeof row === "object" &&
          "productId" in row &&
          "quantity" in row
        ) {
          const productId = String(
            (row as { productId: unknown }).productId,
          );
          const quantity = Math.max(
            1,
            Math.floor(Number((row as { quantity: unknown }).quantity)) || 1,
          );
          return { productId, quantity };
        }
        return null;
      })
      .filter((x): x is CartLine => x !== null);
  } catch {
    return [];
  }
}

function saveLines(lines: CartLine[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setLines(loadLines());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    saveLines(lines);
  }, [lines, hydrated]);

  const addItem = useCallback((productId: string, quantity = 1) => {
    const q = Math.max(1, Math.floor(quantity));
    setLines((prev) => {
      const i = prev.findIndex((l) => l.productId === productId);
      if (i === -1) return [...prev, { productId, quantity: q }];
      const next = [...prev];
      next[i] = {
        productId,
        quantity: next[i].quantity + q,
      };
      return next;
    });
  }, []);

  const setQuantity = useCallback((productId: string, quantity: number) => {
    const q = Math.floor(quantity);
    if (q < 1) {
      setLines((prev) => prev.filter((l) => l.productId !== productId));
      return;
    }
    setLines((prev) => {
      const i = prev.findIndex((l) => l.productId === productId);
      if (i === -1) return [...prev, { productId, quantity: q }];
      const next = [...prev];
      next[i] = { productId, quantity: q };
      return next;
    });
  }, []);

  const removeLine = useCallback((productId: string) => {
    setLines((prev) => prev.filter((l) => l.productId !== productId));
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const totalItems = useMemo(
    () => lines.reduce((s, l) => s + l.quantity, 0),
    [lines],
  );

  const value = useMemo(
    (): CartContextValue => ({
      lines,
      addItem,
      setQuantity,
      removeLine,
      clear,
      totalItems,
      hydrated,
    }),
    [
      lines,
      addItem,
      setQuantity,
      removeLine,
      clear,
      totalItems,
      hydrated,
    ],
  );

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within CartProvider");
  }
  return ctx;
}
