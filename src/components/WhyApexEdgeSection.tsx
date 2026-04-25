import { useEffect, useRef, useState, type TouchEvent } from "react";

type WhyCard = {
  title: string;
  description: string;
  icon: string;
  color: string;
};

const cards: WhyCard[] = [
  {
    title: "Comprehensive English Preparation",
    description:
      "Apex Edge offers IELTS, PTE, Spoken English, and CELPIP learning paths built to improve your English skills effectively.",
    icon: "📚",
    color: "#d8ecff",
  },
  {
    title: "Expert Instructors and Resources",
    description:
      "Learn from experienced mentors with practice material, feedback, and guidance tailored to your goals.",
    icon: "👥",
    color: "#f9efd7",
  },
  {
    title: "Flexible Learning Options",
    description:
      "Study at your own pace with accessible lessons and resources that fit your daily routine.",
    icon: "📖",
    color: "#e5f7de",
  },
  {
    title: "Assignments & Mock Tests",
    description:
      "Track progress with regular tasks, mock tests, and helpful feedback for real exam readiness.",
    icon: "📝",
    color: "#fbe1ef",
  },
];

export function WhyApexEdgeSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lastDirection, setLastDirection] = useState<"next" | "prev">("next");
  const [isAnimating, setIsAnimating] = useState(false);
  const [animDirection, setAnimDirection] = useState<"next" | "prev">("next");
  const touchStartX = useRef<number | null>(null);
  const animationTimeoutRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    return () => {
      if (animationTimeoutRef.current !== undefined) {
        window.clearTimeout(animationTimeoutRef.current);
      }
    };
  }, []);

  const animateTo = (direction: "next" | "prev") => {
    if (isAnimating) {
      return;
    }

    setAnimDirection(direction);
    setIsAnimating(true);

    if (animationTimeoutRef.current !== undefined) {
      window.clearTimeout(animationTimeoutRef.current);
    }

    animationTimeoutRef.current = window.setTimeout(() => {
      setLastDirection(direction);
      setActiveIndex((current) =>
        direction === "next"
          ? (current + 1) % cards.length
          : (current - 1 + cards.length) % cards.length
      );
      setIsAnimating(false);
    }, 260);
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) {
      return;
    }

    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const deltaX = endX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(deltaX) < 36) {
      return;
    }

    if (deltaX < 0) {
      animateTo("next");
      return;
    }

    animateTo("prev");
  };

  const renderCard = (card: WhyCard, index: number) => (
    <article
      key={card.title}
      className="relative z-10 w-full min-h-72 rounded-[2rem] p-6 sm:p-7 lg:p-8 shadow-[0_14px_35px_-24px_rgba(0,0,0,0.18)]"
      style={{ backgroundColor: card.color }}
    >
      <div className={`mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white/80 text-4xl shadow-[0_10px_25px_-18px_rgba(0,0,0,0.2)] ${index % 2 === 1 ? "ml-auto" : ""}`}>
        {card.icon}
      </div>

      <h3 className={`text-2xl sm:text-[1.65rem] lg:text-[1.75rem] leading-tight font-black tracking-tight text-[oklch(0.16_0.02_250)] max-w-[16ch] ${index % 2 === 1 ? "ml-auto text-right" : ""}`}>
        {card.title}
      </h3>

      <p className={`mt-4 text-sm sm:text-base leading-7 text-[oklch(0.24_0.02_250)] max-w-[30ch] font-medium ${index % 2 === 1 ? "ml-auto text-right" : ""}`}>
        {card.description}
      </p>
    </article>
  );

  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 xl:px-12 pb-16 lg:pb-24 font-serif">
      <div className="mx-auto max-w-384">
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-[oklch(0.16_0.02_250)]">
          Join <span className="text-[#d90f40]">Apex Edge</span>: Here&apos;s Why!
        </h2>

        <p className="mt-4 text-center text-sm sm:text-base lg:text-lg leading-relaxed text-[oklch(0.26_0.02_250)] max-w-5xl mx-auto font-medium">
          Short, focused learning support built for English language goals.
        </p>

        <div className="mt-10 sm:hidden">
          <div
            className="relative min-h-112"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {(() => {
              const currentCard = cards[activeIndex];

              if (!currentCard) {
                return null;
              }

              const exitX = animDirection === "next" ? -115 : 115;
              const exitRotate = animDirection === "next" ? -11 : 11;

              return (
                <div
                  key={`current-${currentCard.title}-${activeIndex}`}
                  className="absolute inset-x-0 top-0 z-40 transition-all duration-250 ease-out"
                  style={{
                    transform: isAnimating
                      ? `translate(${exitX}px, -6px) rotate(${exitRotate}deg) scale(0.92)`
                      : "translate(0px, 0px) rotate(0deg) scale(1)",
                    opacity: isAnimating ? 0 : 1,
                  }}
                >
                  {renderCard(currentCard, activeIndex)}
                </div>
              );
            })()}

            {[1, 2, 3].map((offset) => {
              const index = (activeIndex + offset) % cards.length;
              const card = cards[index];

              if (!card) {
                return null;
              }

              const x = (lastDirection === "next" ? 14 : -14) * offset;
              const y = offset * 14;
              const scale = 1 - offset * 0.04;
              const opacity = 1 - offset * 0.18;
              const rotate = (offset % 2 === 0 ? 1 : -1) * (lastDirection === "next" ? 1 : -1) * 3;

              return (
                <div
                  key={`${card.title}-${offset}`}
                  className="absolute inset-x-0 top-0 transition-all duration-300 ease-out"
                  style={{
                    transform: `translate(${x}px, ${y}px) rotate(${rotate}deg) scale(${scale})`,
                    zIndex: 20 - offset,
                    opacity,
                  }}
                  aria-hidden="true"
                >
                  {renderCard(card, index)}
                </div>
              );
            })}
          </div>

          <div className="mt-7 flex items-center justify-center gap-2" aria-hidden="true">
            {cards.map((card, index) => (
              <span
                key={card.title}
                className={`h-2.5 rounded-full transition-all ${index === activeIndex ? "w-6 bg-[#d90f40]" : "w-2.5 bg-black/20"}`}
              />
            ))}
          </div>

          <p className="mt-3 text-center text-xs font-semibold tracking-wide text-black/60">
            Swipe left or right to browse cards
          </p>
        </div>

        <div className="relative mt-14 hidden sm:grid gap-5 lg:grid-cols-2">
          <div className="pointer-events-none absolute inset-0 m-auto hidden lg:flex h-64 w-64 items-center justify-center rounded-full bg-white shadow-[0_20px_50px_-28px_rgba(0,0,0,0.28)] ring-1 ring-black/10 text-center px-6 z-30">
            <div>
              <div className="text-2xl font-black tracking-tight text-[oklch(0.18_0.02_250)]">WHY</div>
              <div className="text-xl font-semibold text-[#d90f40]">Apex Edge</div>
            </div>
          </div>

          {cards.map((card, index) => renderCard(card, index))}
        </div>
      </div>
    </section>
  );
}
