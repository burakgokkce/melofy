import Image from "next/image";

const SRC = "/melofy-logo.png";
const WIDTH = 1024;
const HEIGHT = 682;

type MelofyLogoProps = {
  /** Tailwind yükseklik/genişlik; varsayılan header bar’a uygun. */
  className?: string;
  priority?: boolean;
  alt?: string;
};

/** Marka wordmark — `public/melofy-logo.png` (şeffaf PNG). */
export function MelofyLogo({
  className = "h-8 w-auto shrink-0 sm:h-9",
  priority = false,
  alt = "MELOFY",
}: MelofyLogoProps) {
  return (
    <Image
      src={SRC}
      alt={alt}
      width={WIDTH}
      height={HEIGHT}
      priority={priority}
      sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 400px"
      className={`block w-auto bg-transparent object-contain object-left drop-shadow-[0_1px_10px_rgba(42,79,74,0.18)] ${className}`}
    />
  );
}
