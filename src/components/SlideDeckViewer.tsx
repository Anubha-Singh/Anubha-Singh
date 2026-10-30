import { useState, useEffect, useCallback } from "react";

interface DeckConfig {
  id: "pos" | "loyalty";
  title: string;
  subtitle: string;
  slidesCount: number;
}

const DECKS: Record<"pos" | "loyalty", DeckConfig> = {
  pos: {
    id: "pos",
    title: "Retail POS Gap Analysis & Modernization Architecture",
    subtitle: "KPN Fresh · 29 slides · In-depth architectural & operational benchmark",
    slidesCount: 29,
  },
  loyalty: {
    id: "loyalty",
    title: "Tier-Based Omnichannel Loyalty Program for B2P Partners",
    subtitle: "IBO · 11 slides · Customer journeys, tier unit economics & GTM plan",
    slidesCount: 11,
  },
};

export function SlideDeckViewer({
  defaultDeck = "pos",
}: {
  defaultDeck?: "pos" | "loyalty";
}) {
  const [activeDeck, setActiveDeck] = useState<"pos" | "loyalty">(defaultDeck);
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const deck = DECKS[activeDeck];

  // Reset slide index when changing deck
  const switchDeck = (id: "pos" | "loyalty") => {
    setActiveDeck(id);
    setCurrentSlide(1);
  };

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev < deck.slidesCount ? prev + 1 : prev));
  }, [deck.slidesCount]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev > 1 ? prev - 1 : prev));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  const slideSrc = `/decks/${deck.id}/slide-${currentSlide}.png`;

  return (
    <div className="w-full rounded-lg border border-border bg-card p-4 sm:p-6 shadow-sm">
      {/* Top Deck Switcher & Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-border pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="eyebrow text-primary">Interactive Slide Deck</span>
          </div>
          <h3 className="mt-1 text-lg sm:text-xl font-display text-ink">{deck.title}</h3>
          <p className="mt-0.5 text-xs text-muted-foreground">{deck.subtitle}</p>
        </div>

        {/* Clean Deck Selection Tabs */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => switchDeck("pos")}
            className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
              activeDeck === "pos"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "border border-border bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-ink"
            }`}
          >
            POS Gap Analysis (29)
          </button>
          <button
            type="button"
            onClick={() => switchDeck("loyalty")}
            className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
              activeDeck === "loyalty"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "border border-border bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-ink"
            }`}
          >
            B2P Loyalty (11)
          </button>
        </div>
      </div>

      {/* Main Slide Viewer Canvas */}
      <div className="relative mt-4 overflow-hidden rounded-md border border-border/70 bg-neutral-950">
        <div className="relative aspect-[16/9] w-full flex items-center justify-center">
          <img
            key={`${deck.id}-${currentSlide}`}
            src={slideSrc}
            alt={`${deck.title} - Slide ${currentSlide} of ${deck.slidesCount}`}
            className="h-full w-full object-contain select-none transition-opacity duration-150"
            onLoad={() => setIsLoading(false)}
            onLoadStart={() => setIsLoading(true)}
            draggable={false}
          />

          {/* Clickable lateral zones for quick next/prev on desktop */}
          <div
            className="absolute inset-y-0 left-0 w-1/4 cursor-pointer"
            onClick={prevSlide}
            title="Click to go back"
          />
          <div
            className="absolute inset-y-0 right-0 w-1/4 cursor-pointer"
            onClick={nextSlide}
            title="Click to advance"
          />
        </div>
      </div>

      {/* Slide Navigation Controls */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prevSlide}
            disabled={currentSlide <= 1}
            className="rounded border border-border bg-card px-3 py-1.5 text-xs font-medium text-ink transition-colors hover:bg-secondary disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Previous slide"
          >
            ← Previous
          </button>
          <button
            type="button"
            onClick={nextSlide}
            disabled={currentSlide >= deck.slidesCount}
            className="rounded border border-border bg-card px-3 py-1.5 text-xs font-medium text-ink transition-colors hover:bg-secondary disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Next slide"
          >
            Next →
          </button>
        </div>

        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="font-medium text-ink">
            Slide {currentSlide} of {deck.slidesCount}
          </span>
          <span className="hidden sm:inline text-muted-foreground/60">·</span>
          <span className="hidden sm:inline">Use arrow keys (← / →) to flip slides</span>
        </div>

        {/* Slide quick scrub selector */}
        <div className="flex items-center gap-1.5">
          <select
            value={currentSlide}
            onChange={(e) => setCurrentSlide(Number(e.target.value))}
            className="rounded border border-border bg-card px-2.5 py-1 text-xs text-ink focus:outline-none focus:ring-1 focus:ring-primary"
            aria-label="Jump to slide"
          >
            {Array.from({ length: deck.slidesCount }, (_, i) => i + 1).map((num) => (
              <option key={num} value={num}>
                Slide {num}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
