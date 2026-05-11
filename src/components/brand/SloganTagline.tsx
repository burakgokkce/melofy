import { siteSlogan, siteSloganWords } from "@/lib/site";

type Variant = "header" | "hero" | "footer";

const wordColor: Record<number, string> = {
  0: "text-accent-coral",
  1: "text-accent-violet",
  2: "text-accent-deep",
};

type Props = {
  variant?: Variant;
  className?: string;
};

export function SloganTagline({ variant = "header", className = "" }: Props) {
  if (variant === "hero") {
    return (
      <p
        className={`font-display text-2xl font-semibold tracking-tight text-gradient sm:text-3xl lg:text-[2rem] ${className}`}
      >
        {siteSlogan}
      </p>
    );
  }

  const size =
    variant === "footer"
      ? "text-xs font-semibold tracking-[0.12em] sm:text-sm"
      : "text-[11px] font-semibold tracking-[0.14em] sm:text-xs sm:tracking-[0.16em]";

  return (
    <p
      className={`flex flex-wrap items-baseline gap-x-1 gap-y-0.5 ${size} ${className}`}
    >
      {siteSloganWords.map((word, i) => (
        <span key={word} className="inline-flex items-baseline gap-x-1">
          <span className={wordColor[i]}>{word}</span>
          {i < siteSloganWords.length - 1 ? (
            <span className="font-normal text-muted/60" aria-hidden>
              ·
            </span>
          ) : null}
        </span>
      ))}
    </p>
  );
}
