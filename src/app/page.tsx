import Image from "next/image";
import Link from "next/link";
import { SloganTagline } from "@/components/brand/SloganTagline";
import { ProductCard } from "@/components/ProductCard";
import { featuredProducts, nav } from "@/lib/site";

const heroImage =
  "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=85";

const pillars = [
  {
    title: "Mağaza",
    href: "/magaza",
    hue: "from-accent-deep to-accent-violet",
    body: "Marka, mağaza ve bireysel satıcılar. Emanet ödeme ile teslim onayı sonrası ödeme.",
  },
  {
    title: "Öğren",
    href: "/ogren",
    hue: "from-accent-violet to-accent-coral",
    body: "Satın alma rehberleri, bakım içerikleri, her kategoride ücretsiz ilk 5 adım ve kısa püf noktası videoları.",
  },
  {
    title: "Keşfet",
    href: "/kesfet",
    hue: "from-accent-coral to-accent-cyan",
    body: "Müzisyen blogları, forum & soru-cevap ve sitede satılan ürünlerin profesyonel deneme kayıtları.",
  },
] as const;

const values = [
  {
    title: "Güven",
    text: "Önce öğretmek, sonra satmak. İçerik ve şeffaflık güveni büyütür.",
  },
  {
    title: "Süreklilik",
    text: "Her gün uğranacak bir öğrenme manyetiği; tek seferlik alışverişten öte.",
  },
  {
    title: "Niş bilgi",
    text: "Ahşap, tel/yay yapısı, tonalite gibi müzisyene özel filtreler ve rehberler.",
  },
] as const;

export default function Home() {
  return (
    <main>
      <section className="mesh-hero border-b border-line-soft">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_minmax(0,0.95fr)] lg:gap-16 lg:py-24">
          <div className="min-w-0">
            <p className="inline-flex rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-deep ring-1 ring-line-soft shadow-sm">
              Müzik ekosistemi
            </p>
            <SloganTagline variant="hero" className="mt-5" />
            <h1 className="font-display mt-5 max-w-2xl text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:mt-6 sm:text-5xl lg:mt-7 lg:text-[3.35rem] lg:leading-[1.06]">
              Enstrüman alışverişi,{" "}
              <span className="text-gradient">öğrenme</span> ve topluluk tek
              çatıda.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              MELOFY yalnızca mağaza değil; müzisyenlerin güvendiği içerik,
              net ürün fotoğrafları ve teknik aramayla büyüyen bir platform.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/magaza"
                className="btn-primary inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold transition"
              >
                Mağazayı gez
              </Link>
              <Link
                href="/ogren"
                className="inline-flex items-center justify-center rounded-full border border-line-strong bg-white/95 px-7 py-3.5 text-sm font-semibold text-accent-deep shadow-sm transition hover:border-accent-violet/35 hover:bg-white"
              >
                Ücretsiz başlangıç dersleri
              </Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent-violet/15 via-transparent to-accent-coral/15 blur-2xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-zinc-200 shadow-[0_24px_60px_-20px_rgba(36,52,52,0.32)] ring-1 ring-black/5">
              <Image
                src={heroImage}
                alt="Gitar çalan müzisyen — MELOFY atmosferi"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover object-[center_30%]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              <p className="absolute bottom-5 left-5 right-5 text-sm font-medium text-white/95 drop-shadow-md">
                Gerçek ilan fotoğraflarıyla güven veren vitrin.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Üç boyut
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
          Mağaza, akademi ve topluluk — aynı marka altında birbirini besleyen
          üç sütun.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="group flex flex-col rounded-2xl border border-line-soft bg-card p-7 shadow-[0_1px_0_rgba(17,12,34,0.04)] transition hover:-translate-y-0.5 hover:border-line-strong hover:shadow-lg"
            >
              <span
                className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${p.hue} text-base font-bold text-white shadow-md`}
              >
                {p.title.slice(0, 1)}
              </span>
              <h3 className="font-display mt-5 text-xl font-semibold tracking-tight text-foreground group-hover:text-accent-deep">
                {p.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {p.body}
              </p>
              <span className="mt-5 text-sm font-semibold text-accent-violet">
                İncele →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-line-soft bg-gradient-to-b from-accent-violet/[0.05] to-transparent">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Neden işe yarar?
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl bg-white/90 p-7 shadow-sm ring-1 ring-line-soft"
              >
                <p className="font-display text-lg font-semibold text-accent-coral">
                  {v.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Öne çıkanlar
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
              Örnek ilanlar gerçek stok fotoğraflarla; satıcılarınız da aynı
              netlikte vitrin açabilsin diye tasarlandı.
            </p>
          </div>
          <Link
            href="/magaza"
            className="text-sm font-semibold text-accent-violet transition hover:text-accent-deep"
          >
            Tüm ilanlar →
          </Link>
        </div>
        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((p) => (
            <ProductCard key={p.id} product={p} priorityImage={p.id === "1"} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-accent-deep via-accent-violet to-accent-coral p-[1px] shadow-xl shadow-[0_24px_48px_-16px_rgba(36,52,52,0.35)]">
          <div className="rounded-[calc(1.5rem-1px)] bg-[#1a2827] px-6 py-12 text-center sm:px-12 sm:py-16">
            <h2 className="font-display mx-auto max-w-3xl text-2xl font-semibold leading-snug tracking-tight text-white sm:text-3xl lg:text-[2rem]">
              Türkiye ve ötesinde müzikseverlerin uğrak noktası
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
              Öğrenme içeriği trafik çeker, topluluk bağlar, mağaza dönüşümü
              besler. Bir sonraki adım: kiralama modülü.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {nav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className="rounded-full bg-white/15 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/25 transition hover:bg-white/25"
                >
                  {n.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
