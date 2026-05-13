export const nav = [
  { href: "/magaza", label: "Mağaza" },
  { href: "/ogren", label: "Öğren" },
  { href: "/kesfet", label: "Keşfet" },
] as const;

/** Marka sloganı — logo paletiyle uyumlu vurgular için kelime sırası. */
export const siteSlogan = "Çal · Öğren · Keşfet" as const;

export const siteSloganWords = ["Çal", "Öğren", "Keşfet"] as const;

export type { Product } from "./products-catalog";

export {
  allProducts,
  catalogProducts,
  featuredProducts,
  getProductById,
} from "./products-catalog";
