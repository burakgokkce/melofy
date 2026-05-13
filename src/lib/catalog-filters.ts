import type { Product } from "@/lib/site";

export type FilterGroupId = "family" | "tone" | "material";

export const filterDefinitions = [
  {
    id: "family" as const,
    title: "Enstrüman ailesi",
    options: ["Telli", "Yaylı", "Nefesli", "Tuşlu", "Vurmalı"],
  },
  {
    id: "tone" as const,
    title: "Ton & karakter",
    options: ["Parlak", "Dolgun", "Nötr", "Sıcak", "Karanlık"],
  },
  {
    id: "material" as const,
    title: "Malzeme / yapı",
    options: ["Ahşap türü", "Tel / yay yapısı", "Manyetik düzeni", "Ağızlık"],
  },
] as const;

export type ActiveFilters = Record<FilterGroupId, string[]>;

export function emptyActiveFilters(): ActiveFilters {
  return { family: [], tone: [], material: [] };
}

function textBlob(p: Product): string {
  return `${p.name} ${p.category} ${p.description} ${p.tags.join(" ")}`.toLocaleLowerCase(
    "tr-TR",
  );
}

/** Aile: ürün kategorisi ve isim-etiketi ile eşleşir */
function matchesFamily(p: Product, chips: string[]): boolean {
  if (chips.length === 0) return true;
  const c = p.category;
  return chips.some((chip) => {
    switch (chip) {
      case "Telli":
        return (
          c === "Gitar" ||
          /tel\b|tel seti|gitar|bas gitar|mızıka|ukulele|string/i.test(
            textBlob(p),
          )
        );
      case "Yaylı":
        return c === "Yaylı" || /keman|viyola|çello|yay\b|yayı/i.test(textBlob(p));
      case "Nefesli":
        return c === "Nefesli";
      case "Tuşlu":
        return c === "Tuşlu";
      case "Vurmalı":
        return c === "Vurmalı";
      default:
        return false;
    }
  });
}

/** Ton: etiket ve isimde anahtar kelime */
function matchesTone(p: Product, chips: string[]): boolean {
  if (chips.length === 0) return true;
  const t = textBlob(p);
  return chips.some((chip) => {
    switch (chip) {
      case "Parlak":
        return /parlak|bright|cam|parlak ton|yüksek frekans|presence/.test(t);
      case "Dolgun":
        return /dolgun|füll|rich|derin gövde|grand feel/.test(t);
      case "Nötr":
        return /nötr|balanced|referans|mix|dayanıklı|stüdyo standardı|kapalı kulaklık/.test(
          t,
        );
      case "Sıcak":
        return /sıcak|warm|mahogany|cedar|tube|valf|bur|analog/.test(t);
      case "Karanlık":
        return /karanlık|dark|overdrive|dist|high gain|mezmer|heavy/.test(t);
      default:
        return false;
    }
  });
}

/** Malzeme / yapı */
function matchesMaterial(p: Product, chips: string[]): boolean {
  if (chips.length === 0) return true;
  const t = textBlob(p);
  return chips.some((chip) => {
    switch (chip) {
      case "Ahşap türü":
        return /ahşap|alder|mahogany|cedar|sitka|grenadilla|abanoz|maple|rosewood|fan bracing|gövde/.test(
          t,
        );
      case "Tel / yay yapısı":
        return /tel\b|yay\b|tel seti|yaylı|steg|köprü/.test(t);
      case "Manyetik düzeni":
        return /manyetik|humbucker|hss|single|alnico|aktif eq|pickup|dinamik mikrofon|kondenser/.test(
          t,
        );
      case "Ağızlık":
        return /ağız|bek\b|kamış|klarnet|saksafon|nefesli|reed/.test(t);
      default:
        return false;
    }
  });
}

export function productPassesFilters(
  p: Product,
  active: ActiveFilters,
): boolean {
  return (
    matchesFamily(p, active.family) &&
    matchesTone(p, active.tone) &&
    matchesMaterial(p, active.material)
  );
}

export function filterProducts(
  products: Product[],
  active: ActiveFilters,
): Product[] {
  return products.filter((p) => productPassesFilters(p, active));
}
