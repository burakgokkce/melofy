import Image from "next/image";

const SRC = "/melofy-logo.png";
const WIDTH = 470;
const HEIGHT = 260;

type MelofyLogoProps = {
  /** Tailwind height/width; default fits the header bar. */
  className?: string;
  priority?: boolean;
};

/**
 * Official MELOFY wordmark (French horn “O”); height drives scale, width follows aspect ratio.
 */
export function MelofyLogo({
  className = "h-8 w-auto shrink-0 sm:h-9",
  priority = false,
}: MelofyLogoProps) {
  return (
    <Image
      src={SRC}
      alt="MELOFY"
      width={WIDTH}
      height={HEIGHT}
      priority={priority}
      sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 360px"
      className={className}
    />
  );
}
