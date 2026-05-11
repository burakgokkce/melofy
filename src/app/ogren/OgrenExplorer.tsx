"use client";

import Image from "next/image";
import { useState } from "react";
import {
  learnCategories,
  starterStepsContent,
} from "@/lib/learn";

const videoThumb =
  "https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?auto=format&fit=crop&w=720&q=85";

export function OgrenExplorer() {
  const [selectedCategorySlug, setSelectedCategorySlug] = useState<string | null>(
    null,
  );
  const [openStepId, setOpenStepId] = useState<string | null>(null);
  const [videoHint, setVideoHint] = useState(false);

  const selectedCat = selectedCategorySlug
    ? learnCategories.find((c) => c.slug === selectedCategorySlug)
    : null;

  return (
    <>
      <section className="mt-14 grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-line-soft bg-gradient-to-br from-white to-accent-violet/[0.04] p-6 shadow-sm ring-1 ring-line-soft sm:p-8">
          <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
            İnteraktif başlangıç — ilk 5 adım
          </h2>
          <p className="mt-2 text-sm text-muted">
            Bir adıma tıkla; açıklama ve pratik öneriler aşağıda görünsün.
          </p>
          <ul className="mt-6 space-y-2">
            {starterStepsContent.map((step, i) => {
              const open = openStepId === step.id;
              return (
                <li key={step.id}>
                  <button
                    type="button"
                    onClick={() =>
                      setOpenStepId(open ? null : step.id)
                    }
                    className="flex w-full gap-3 rounded-xl bg-white/90 px-4 py-3 text-left text-sm font-medium text-foreground ring-1 ring-line-soft transition hover:border-line-strong hover:ring-accent-violet/20"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent-violet to-accent-coral text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    <span className="min-w-0 flex-1">{step.title}</span>
                    <span className="shrink-0 text-muted" aria-hidden>
                      {open ? "▲" : "▼"}
                    </span>
                  </button>
                  {open ? (
                    <div className="mt-2 rounded-xl border border-line-soft bg-card/90 px-4 py-4 text-sm leading-relaxed text-foreground">
                      <p className="text-muted">{step.intro}</p>
                      <ul className="mt-3 list-disc space-y-1.5 pl-5 text-muted">
                        {step.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                      <p className="mt-4 rounded-lg bg-accent-violet/[0.06] px-3 py-2 text-xs font-semibold text-accent-deep">
                        Özet: {step.takeaway}
                      </p>
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="rounded-2xl border border-line-soft bg-card p-6 shadow-sm sm:p-8">
          <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
            Püf noktaları (kısa video)
          </h2>
          <p className="mt-2 text-sm text-muted">
            Oynata tıkladığında içerik alanı burada “açılıyor” (örnek; gerçek
            Video entegrasyonu sonra bağlanır).
          </p>
          <button
            type="button"
            onClick={() => setVideoHint((v) => !v)}
            className="relative mt-6 aspect-[9/16] max-h-96 w-full max-w-[240px] overflow-hidden rounded-2xl text-left shadow-xl ring-2 ring-white/90 outline-none ring-offset-2 transition focus-visible:ring-accent-violet/40"
          >
            <Image
              src={videoThumb}
              alt="Örnek ders görseli"
              fill
              sizes="240px"
              className="object-cover object-[center_20%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-accent-deep/35" />
            <div className="relative flex h-full flex-col items-center justify-center gap-3 p-5 text-center text-white">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-2xl backdrop-blur-sm ring-1 ring-white/40">
                ▶
              </span>
              <p className="text-sm font-semibold leading-snug drop-shadow">
                45 sn — parmak dağılımı ve basınç kontrolü
              </p>
            </div>
          </button>
          {videoHint ? (
            <div
              className="mt-4 rounded-xl border border-accent-violet/25 bg-accent-violet/[0.06] p-4 text-sm text-foreground"
              role="region"
              aria-live="polite"
            >
              <p className="font-semibold text-accent-deep">
                Video oynatılıyor (demo)
              </p>
              <p className="mt-2 text-muted">
                Barre akorlarında indeks parmağını her telde eşit basınca
                oturt; boğuk tel varsa bilek açısını milimetrik kaldır. Bu
                kısa formatı her gün 2 tekrar uygula.
              </p>
            </div>
          ) : null}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
          Rehber ve bakım içerikleri
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          Kategoriye tıkla; ilgili rehber özetleri ve ısınma maddeleri altta açılır.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {learnCategories.map((c) => {
            const active = selectedCategorySlug === c.slug;
            return (
              <div
                key={c.slug}
                className={`rounded-2xl border p-5 transition hover:shadow-md ${
                  active
                    ? "border-accent-violet/40 bg-accent-violet/[0.04] shadow-md"
                    : "border-line-soft bg-white hover:border-line-strong"
                }`}
              >
                <p className="font-semibold text-foreground">{c.title}</p>
                <p className="mt-2 text-xs text-muted">{c.preview}</p>
                <button
                  type="button"
                  onClick={() =>
                    setSelectedCategorySlug(active ? null : c.slug)
                  }
                  className="mt-4 text-xs font-bold uppercase tracking-wide text-accent-violet"
                >
                  {active ? "Kapat" : "Kategoriyi aç →"}
                </button>
              </div>
            );
          })}
        </div>

        {selectedCat ? (
          <div
            className="mt-8 rounded-2xl border border-line-strong bg-gradient-to-b from-white to-accent-coral/[0.04] p-6 sm:p-8"
            role="region"
            aria-labelledby="learn-panel-title"
          >
            <h3
              id="learn-panel-title"
              className="font-display text-lg font-semibold text-foreground"
            >
              {selectedCat.title} — seçtiğin içerikler
            </h3>
            <p className="mt-2 text-sm text-muted">{selectedCat.preview}</p>
            <ul className="mt-6 space-y-5">
              {selectedCat.guides.map((g) => (
                <li
                  key={g.title}
                  className="rounded-xl border border-line-soft bg-card p-4"
                >
                  <p className="font-semibold text-foreground">{g.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {g.summary}
                  </p>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-xl bg-accent-deep/[0.06] px-4 py-3">
              <p className="text-xs font-bold uppercase tracking-wide text-accent-deep">
                Bugünkü ısınma
              </p>
              <ul className="mt-2 space-y-1 text-sm text-muted">
                {selectedCat.warmup.map((w) => (
                  <li key={w}>· {w}</li>
                ))}
              </ul>
            </div>
          </div>
        ) : null}
      </section>
    </>
  );
}
