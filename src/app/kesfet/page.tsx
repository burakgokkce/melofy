import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Keşfet — MELOFY",
  description: "Bloglar, deneme videoları ve topluluk forumu.",
};

const blogTeasers = [
  {
    title: "İlk sahne deneyimim: kulaklıktan monitöre",
    author: "Deniz K.",
    tag: "Deneyim",
  },
  {
    title: "Ev stüdyosunda gürültüyü yönetmenin pratik yolları",
    author: "Ece M.",
    tag: "Üretim",
  },
  {
    title: "İkinci el gitar alırken kapak içi kontrol listesi",
    author: "Barış T.",
    tag: "Alışveriş",
  },
] as const;

const forumSamples = [
  "Hangi amfiyi almalıyım? (ev provası, komşu dostu)",
  "Bu notayı çalmak için parmak numarası nasıl seçilir?",
  "Yaylıda ince tel seçimi: sıcak iklim için öneri",
] as const;

const demoGuitar =
  "https://images.unsplash.com/photo-1558098329-a11cff621064?auto=format&fit=crop&w=1200&q=85";
const demoPiano =
  "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=1200&q=85";

export default function KesfetPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-16">
      <header className="max-w-3xl">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent-coral">
          Topluluk & deneyim
        </p>
        <h1 className="font-display mt-2 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
          <span className="text-gradient">Keşfet</span>
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          Müzisyen blogları, sitede satılan ürünlerin profesyonel deneme
          videoları ve forum / soru-cevap alanı — birbirinden ilham al.
        </p>
      </header>

      <section className="mt-16">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
          Deneme videoları
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
          Popüler ürünlerin net kayıtlı performansları; satın almadan önce
          gerçek sesi duy.
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <article className="overflow-hidden rounded-2xl border border-line-soft bg-card shadow-[0_16px_48px_-20px_rgba(36,52,52,0.14)] transition hover:border-line-strong">
            <div className="relative aspect-video bg-zinc-100">
              <Image
                src={demoGuitar}
                alt="Elektro gitar deneme kaydı önizlemesi"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/25 transition hover:bg-black/35">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-xl text-accent-deep shadow-lg ring-1 ring-black/5">
                  ▶
                </span>
              </div>
            </div>
            <div className="p-6">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-accent-violet">
                Elektro gitar
              </p>
              <p className="font-display mt-2 text-lg font-semibold tracking-tight text-foreground">
                Strat clean & drive — aynı rig, iki mik pozisyonu
              </p>
            </div>
          </article>
          <article className="overflow-hidden rounded-2xl border border-line-soft bg-card shadow-[0_16px_48px_-20px_rgba(36,52,52,0.14)] transition hover:border-line-strong">
            <div className="relative aspect-video bg-zinc-100">
              <Image
                src={demoPiano}
                alt="Dijital piyano deneme kaydı önizlemesi"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/25 transition hover:bg-black/35">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-xl text-accent-deep shadow-lg ring-1 ring-black/5">
                  ▶
                </span>
              </div>
            </div>
            <div className="p-6">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-accent-violet">
                Dijital piyano
              </p>
              <p className="font-display mt-2 text-lg font-semibold tracking-tight text-foreground">
                Tuş ağırlığı ve pedallar — klasik parça demo
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="mt-20">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
          Müzisyen blogları
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {blogTeasers.map((b) => (
            <article
              key={b.title}
              className="flex flex-col rounded-2xl border border-line-soft bg-gradient-to-b from-accent-violet/[0.04] to-card p-6 shadow-sm transition hover:shadow-md"
            >
              <span className="w-fit rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-accent-deep ring-1 ring-line-strong">
                {b.tag}
              </span>
              <h3 className="font-display mt-4 text-base font-semibold leading-snug tracking-tight text-foreground sm:text-lg">
                {b.title}
              </h3>
              <p className="mt-auto pt-5 text-xs font-medium text-muted">
                Yazar: {b.author}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20 rounded-3xl border border-line-soft bg-card p-8 shadow-inner sm:p-10">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
          Forum & soru-cevap
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Genel e-ticaret sitelerinde eksik kalan müzisyen diyalogları burada.
        </p>
        <ul className="mt-10 space-y-4">
          {forumSamples.map((q) => (
            <li
              key={q}
              className="flex cursor-default items-start gap-3 rounded-xl border border-line-soft bg-accent-violet/[0.04] px-4 py-3.5 text-sm leading-relaxed text-foreground"
            >
              <span className="mt-0.5 font-display font-semibold text-accent-violet">
                ?
              </span>
              <span>{q}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
