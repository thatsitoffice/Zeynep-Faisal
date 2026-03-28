export function initReviewCarousels(): void {
  document.querySelectorAll<HTMLElement>("[data-carousel]").forEach((root) => {
    const track = root.querySelector<HTMLElement>("[data-carousel-track]");
    const prev = root.querySelector<HTMLButtonElement>("[data-carousel-prev]");
    const next = root.querySelector<HTMLButtonElement>("[data-carousel-next]");
    if (!track || !prev || !next) return;

    const getStep = (): number => {
      const slide = track.querySelector<HTMLElement>("[data-carousel-slide]");
      if (!slide) return track.clientWidth * 0.88;
      const gap = parseFloat(getComputedStyle(track).gap || "16") || 16;
      return slide.offsetWidth + gap;
    };

    prev.addEventListener("click", () => {
      track.scrollBy({ left: -getStep(), behavior: "smooth" });
    });
    next.addEventListener("click", () => {
      track.scrollBy({ left: getStep(), behavior: "smooth" });
    });

    track.addEventListener("keydown", (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        track.scrollBy({ left: -getStep(), behavior: "smooth" });
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        track.scrollBy({ left: getStep(), behavior: "smooth" });
      }
    });
  });
}

initReviewCarousels();
