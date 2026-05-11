import Link from "next/link";
import { CartLink } from "@/components/cart/CartLink";
import { MelofyLogo } from "@/components/brand/MelofyLogo";
import { SloganTagline } from "@/components/brand/SloganTagline";
import { nav } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line-soft bg-white/80 shadow-[0_1px_0_rgba(17,12,34,0.04)] backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex min-h-[4.25rem] max-w-6xl items-center justify-between gap-4 px-4 py-2.5 sm:min-h-[4.5rem] sm:px-6 sm:py-3">
        <Link
          href="/"
          className="flex min-w-0 flex-col gap-1 rounded-md ring-offset-2 transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-violet/30 sm:gap-1.5"
        >
          <MelofyLogo
            priority
            className="h-10 w-auto max-w-[min(280px,52vw)] shrink-0 sm:h-[3.25rem] sm:max-w-[min(320px,40vw)] lg:h-14 lg:max-w-[360px]"
          />
          <SloganTagline variant="header" className="pl-0.5" />
          <span className="sr-only">MELOFY — ana sayfa</span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-semibold text-foreground/80 transition hover:bg-accent-violet/[0.08] hover:text-accent-deep sm:px-4"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <CartLink />
          <Link
            href="/magaza"
            className="btn-primary hidden rounded-full px-5 py-2.5 text-sm font-semibold transition sm:inline-flex"
          >
            Enstrüman bul
          </Link>
        </div>
      </div>
    </header>
  );
}
