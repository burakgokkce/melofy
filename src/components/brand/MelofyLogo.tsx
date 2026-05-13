type MelofyLogoProps = {
  /** Tailwind genişlik/yükseklik; metin ölçeği için `text-[...]` kullanılır. */
  className?: string;
  /** Erişilebilir başlık (varsayılan: "MELOFY"). */
  title?: string;
  /** `<Image priority>` benzeri prop yerine SSR’de inline render edilir. */
  priority?: boolean;
};

/**
 * MELOFY logosu — pure SVG.
 * Beyaz arka plan asla oluşmaz; renkler tema değişkenlerinden gradient ile gelir.
 * Ölçek: dışarıdan `text-[1.8rem]` gibi font-size ver, glyph’ler buna göre büyür.
 */
export function MelofyLogo({
  className = "text-[1.7rem] sm:text-[1.95rem] lg:text-[2.2rem]",
  title = "MELOFY",
}: MelofyLogoProps) {
  return (
    <span
      role="img"
      aria-label={title}
      className={`font-display inline-flex select-none items-center gap-[0.04em] font-black leading-none tracking-[-0.04em] ${className}`}
    >
      <span className="brand-gradient">MEL</span>
      <HornGlyph className="brand-horn" />
      <span className="brand-gradient">FY</span>
    </span>
  );
}

/** Korno / O yerine kullanılan stilize sembol. `currentColor`’dan rengini alır. */
function HornGlyph({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden="true"
      className={`inline-block h-[0.94em] w-[0.94em] -translate-y-[0.02em] ${className}`}
    >
      <defs>
        <linearGradient id="melofy-horn-grad" x1="6" y1="6" x2="94" y2="94" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="var(--color-accent-deep)" />
          <stop offset="55%" stopColor="var(--color-accent-violet)" />
          <stop offset="100%" stopColor="var(--color-accent-coral)" />
        </linearGradient>
      </defs>
      <g
        fill="none"
        stroke="url(#melofy-horn-grad)"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="50" cy="58" r="34" />
        <circle cx="50" cy="58" r="17" />
        <path d="M73 30 L92 14 L86 36 Z" fill="url(#melofy-horn-grad)" />
        <path d="M71 32 L62 44" />
        <path d="M40 24 Q44 18 50 20" />
      </g>
    </svg>
  );
}
