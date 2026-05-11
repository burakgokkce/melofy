import type { Metadata } from "next";
import { OgrenExplorer } from "./OgrenExplorer";

export const metadata: Metadata = {
  title: "Öğren — MELOFY",
  description:
    "Rehberler, ücretsiz başlangıç adımları ve kısa püf noktası videoları.",
};

export default function OgrenPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
      <header className="max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-widest text-accent-coral">
          Eğitim boyutu
        </p>
        <h1 className="font-display mt-2 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
          <span className="text-gradient">Öğren</span> akademisi
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Adımlara veya kategorilere tıkla; seçtiğin konu için içerik aşağıda
          genişliyor — satın alma rehberleri ve bakım metinleri bu yapının
          üzerine bağlanabilir.
        </p>
      </header>

      <OgrenExplorer />
    </main>
  );
}
