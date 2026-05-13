import Link from "next/link";
import { MelofyLogo } from "@/components/brand/MelofyLogo";
import { SloganTagline } from "@/components/brand/SloganTagline";
import { nav } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line-soft bg-gradient-to-b from-card to-accent-violet/[0.03]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        <div>
          <Link
            href="/"
            className="inline-flex rounded-md ring-offset-2 ring-offset-transparent transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-violet/30"
          >
            <MelofyLogo className="text-[2rem] sm:text-[2.2rem] lg:text-[2.4rem]" />
            <span className="sr-only">MELOFY — ana sayfa</span>
          </Link>
          <SloganTagline variant="footer" className="mt-2" />
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            Müzisyenler için pazar yeri, akademi ve topluluk. Öğretmek ve
            keşfetmek; satış kadar önemli.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">Bölümler</p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            {nav.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-accent-deep" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">Yakında</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Enstrüman kiralama — öğrencilerin pahalı enstrümanları denemesi için
            esnek seçenekler.
          </p>
        </div>
      </div>
      <div className="border-t border-line-soft px-4 py-5 text-center text-[11px] leading-relaxed text-muted">
        <p>© {new Date().getFullYear()} MELOFY. Tüm hakları saklıdır.</p>
        <p className="mt-1 opacity-90">
          Örnek görseller stok fotoğraflardan oluşturulmuştur (Unsplash).
        </p>
      </div>
    </footer>
  );
}
