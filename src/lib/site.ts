export const nav = [
  { href: "/magaza", label: "Mağaza" },
  { href: "/ogren", label: "Öğren" },
  { href: "/kesfet", label: "Keşfet" },
] as const;

/** Marka sloganı — logo paletiyle uyumlu vurgular için kelime sırası. */
export const siteSlogan = "Çal · Öğren · Keşfet" as const;

export const siteSloganWords = ["Çal", "Öğren", "Keşfet"] as const;

export type Product = {
  id: string;
  name: string;
  category: string;
  price: string;
  city: string;
  condition: "Sıfır" | "İkinci el";
  tags: string[];
  /** Unsplash (or other) photo — shown on product tile */
  imageUrl: string;
};

const u = (id: string, variant = 0) => {
  const w = 760 + (variant % 3) * 140;
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=85`;
};

/** Görsel havuzu — enstrüman / müzik temalı Unsplash kimlikleri */
const PHOTO_IDS = [
  "1558098329-a11cff621064",
  "1598488035139-bdbb2231ce04",
  "1520523839897-bd0b52f945a0",
  "1511379938547-c1f69419868d",
  "1519892301635-81ce298f9b1e",
  "1493225457124-a3eb161ffa5f",
  "1514320291840-2e0d1e9e5e0b",
  "1520523132285-180274f3a9b4",
  "1571336349647-89cbf1a93a8e",
  "1598659870294-ee9a5a02c87a",
  "1510915361894-db8b79c880d2",
  "1498038432885-c6f3d1b7b6d0",
  "1504609771531-49ba541e9a9d",
  "1459747512899-146ccf16cad8",
  "1514525253161-7a46d19cd819",
  "1470225621710-d075e2c2d8d6",
  "1511671782779-c2d579fe2b99",
  "1464372989693-6148c10f24f0",
  "1511371482916-0d04efd19f8a",
  "1516280443064-f78e1989c8fa",
] as const;

const cities = [
  "İstanbul",
  "Ankara",
  "İzmir",
  "Bursa",
  "Antalya",
  "Adana",
  "Kocaeli",
  "Eskişehir",
  "Trabzon",
  "Gaziantep",
] as const;

const productSeeds = [
  ["Fender Player Stratocaster", "Gitar", 42900, "Sıfır", ["Alder gövde", "Parlak ton"]],
  ["Yamaha YAS-280 Alto Saksafon", "Nefesli", 38500, "İkinci el", ["Öğrenci seti", "Tam bakım"]],
  ["Roland FP-30X Dijital Piyano", "Tuşlu", 29750, "Sıfır", ["Taşınabilir", "Bluetooth"]],
  ["Eastman VL80 Keman 4/4", "Yaylı", 18200, "İkinci el", ["Abanoz aksam", "Dolgun ses"]],
  ["Gibson Les Paul Studio", "Gitar", 68900, "Sıfır", ["Mahogany", "Burstbucker"]],
  ["Pearl Export EXX Davul Seti", "Vurmalı", 45500, "İkinci el", ["5 parça", "Zil dahil değil"]],
  ["Kawai CA49 Dijital Piyano", "Tuşlu", 62400, "Sıfır", ["Grand Feel", "Bluetooth audio"]],
  ["Buffet Crampon E12 Klarinet", "Nefesli", 35800, "Sıfır", ["Grenadilla", "Bakım seti"]],
  ["Shure SM58 Dinamik Mikrofon", "Ses", 4200, "Sıfır", ["Sahne standardı", "Dayanıklı gövde"]],
  ["Focusrite Scarlett 2i2 4th Gen", "Ses", 7800, "Sıfır", ["USB-C", "Air modları"]],
  ["Ibanez RG550 Genesis", "Gitar", 51200, "İkinci el", ["Edge tremolo", "HSS"]],
  ["Taylor GS Mini Mahogany", "Gitar", 28900, "Sıfır", ["Travel beden", "Warm ton"]],
  ["Yamaha TRBX304 Bas Gitar", "Gitar", 12400, "İkinci el", ["Aktif EQ", "4 tel"]],
  ["Hohner Special 20 Mızıka", "Nefesli", 1850, "Sıfır", ["Richter", "C tonu"]],
  ["Arturia MiniLab 3", "Tuşlu", 5600, "Sıfır", ["25 tuş", "Analog Lab"]],
  ["Neumann TLM 103", "Ses", 38500, "Sıfır", ["Büyük diyafram", "Stüdyo"]],
  ["Audio-Technica ATH-M50x", "Ses", 7200, "Sıfır", ["Kapalı kulaklık", "Mix"]],
  ["Boss Katana 50 MKII", "Gitar", 11800, "Sıfır", ["50W", "Çoklu amp modeli"]],
  ["Orange Crush Bass 50", "Gitar", 9800, "İkinci el", ["Analog preamp", "Tuner"]],
  ["Casio CT-S1000V Arranger", "Tuşlu", 14200, "Sıfır", ["Vokal sentez", "Hafif"]],
  ["Squier Classic Vibe 60s Strat", "Gitar", 16800, "Sıfır", ["Vintage radius", "Alnico"]],
  ["Epiphone SG Standard", "Gitar", 19500, "İkinci el", ["Mahogany", "LockTone"]],
  ["Martin LX1 Little Martin", "Gitar", 11200, "Sıfır", ["Kompakt", "Sitka üst"]],
  ["Cordoba C5 Klasik Gitar", "Gitar", 8900, "Sıfır", ["Cedar üst", "Fan bracing"]],
  ["Yamaha Pacifica 112V", "Gitar", 9800, "Sıfır", ["Alnico V", "HSS"]],
  ["PRS SE Custom 24", "Gitar", 28500, "İkinci el", ["Wide Thin", "Tremolo"]],
  ["Jackson JS32 Dinky", "Gitar", 11200, "Sıfır", ["HSS", "Floyd Rose"]],
  ["Gretsch G2622 Streamliner", "Gitar", 22500, "İkinci el", ["Broad'Tron", "Semi hollow"]],
  ["D'Addario NYXL 10-46 Tel Seti (12 pk)", "Aksesuar", 4200, "Sıfır", ["Uzun ömür", "Paket"]],
  ["Mono M80 Vertigo Gitar Çantası", "Aksesuar", 12500, "Sıfır", ["Hibrit koruması", "Siyah"]],
  ["Hercules GS414B Gitar Standı", "Aksesuar", 1850, "Sıfır", ["Katlanır", "Yumuşak contalar"]],
  ["TC Electronic Hall of Fame 2", "Gitar", 4200, "İkinci el", ["Mash footswitch", "TonePrint"]],
  ["Strymon BigSky", "Gitar", 28500, "Sıfır", ["Reverb", "300 preset"]],
  ["Line 6 Helix LT", "Gitar", 38500, "İkinci el", ["IR desteği", "Footswitch"]],
  ["Kemper Profiler Head", "Gitar", 98500, "İkinci el", ["Profil kaydı", "Rig yönetimi"]],
  ["Universal Audio Volt 276", "Ses", 11200, "Sıfır", ["1176 tarzı", "USB"]],
  ["Presonus Studio 24c", "Ses", 7800, "Sıfır", ["2 in / 2 out", "48V"]],
  ["Adam Audio T5V Monitör (çift)", "Ses", 18500, "Sıfır", ["U-ART tweeter", "5 inç"]],
  ["Yamaha HS5 Monitör (çift)", "Ses", 14200, "Sıfır", ["Room control", "5 inç"]],
  ["Rode NT1-A Paket", "Ses", 6200, "Sıfır", ["Şok mount", "Pop filtre"]],
  ["Sennheiser HD 600", "Ses", 14800, "İkinci el", ["Açık kulaklık", "Referans"]],
  ["Beyerdynamic DT 770 Pro 80Ω", "Ses", 7200, "Sıfır", ["Kapalı", "Stüdyo"]],
  ["Akai MPK Mini MK3", "Tuşlu", 4200, "Sıfır", ["8 pad", "Arpeggiator"]],
  ["Novation Launchkey 37 MK3", "Tuşlu", 9800, "Sıfır", ["Ableton entegrasyonu", "RGB pad"]],
  ["Nord Stage 4 88", "Tuşlu", 285000, "Sıfır", ["Triple sensor", "Organ + piano"]],
  ["Korg SV-2 73", "Tuşlu", 98500, "İkinci el", ["Vintage tuşlar", "RH3"]],
  ["Wittner Metronom 813M", "Aksesuar", 1850, "Sıfır", ["Mekanik", "Cilalı"]],
  ["Manhasset Nota Sehpası 4801", "Aksesuar", 3200, "Sıfır", ["Orkestra", "Alüminyum"]],
  ["BG Franck Bec L2 Saksafon", "Nefesli", 420, "Sıfır", ["Ebonit", "Alto"]],
  ["Vandoren V5 A27 Alto Bek", "Nefesli", 1850, "Sıfır", ["Klasik jazz", "Abanoz"]],
] as const;

function formatTry(n: number): string {
  return `${n.toLocaleString("tr-TR")} ₺`;
}

export const catalogProducts: Product[] = productSeeds.map((row, i) => {
  const [name, category, basePrice, condition, tags] = row;
  const photoId = PHOTO_IDS[i % PHOTO_IDS.length];
  const jitter = ((i * 173) % 900) - 400;
  const priceNum = Math.max(120, basePrice + jitter);
  return {
    id: String(i + 1),
    name,
    category,
    price: formatTry(priceNum),
    city: cities[i % cities.length],
    condition: condition as Product["condition"],
    tags: [...tags],
    imageUrl: u(photoId, i),
  };
});

/** Mağazada listelenen tam katalog (50 ürün). */
export const allProducts = catalogProducts;

/** Ana sayfa vitrin — ilk 8 ürün. */
export const featuredProducts = catalogProducts.slice(0, 8);

export function getProductById(id: string): Product | undefined {
  return allProducts.find((p) => p.id === id);
}
