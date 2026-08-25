import { useCallback, useEffect, useRef, useState, type TouchEvent } from "react";
import { createPortal } from "react-dom";
import { useLocale } from "../../locale";
import type { Certificate } from "../../data/resume";
import { Card } from "../ui";

function CertCaption({ cert, index, total }: { cert: Certificate; index: number; total: number }) {
  return (
    <div className="cert-carousel-caption px-4 sm:px-5 py-4 border-t border-slate-700/50 bg-slate-900/40">
      <p className="text-[11px] font-medium uppercase tracking-wider text-blue-400/90">
        {cert.year} · {index + 1} / {total}
      </p>
      <h3 className="text-base sm:text-lg font-semibold text-slate-100 mt-1 leading-snug">
        {cert.title}
      </h3>
      <p className="text-sm text-slate-400 mt-0.5">{cert.issuer}</p>
      {cert.detail && <p className="text-xs text-slate-500 mt-1">{cert.detail}</p>}
    </div>
  );
}

function useTouchSwipe(onLeft: () => void, onRight: () => void) {
  const touchStartX = useRef(0);
  const touchDelta = useRef(0);

  return {
    onTouchStart: (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
      touchDelta.current = 0;
    },
    onTouchMove: (e: TouchEvent) => {
      touchDelta.current = e.touches[0].clientX - touchStartX.current;
    },
    onTouchEnd: () => {
      if (touchDelta.current < -50) onLeft();
      else if (touchDelta.current > 50) onRight();
    },
  };
}

export function CertificatesCarousel() {
  const { t } = useLocale();
  const certs = t.certificates;
  const [index, setIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const viewportRef = useRef<HTMLDivElement>(null);

  const go = useCallback(
    (next: number) => setIndex(Math.max(0, Math.min(next, certs.length - 1))),
    [certs.length],
  );

  useEffect(() => {
    setIndex((current) => Math.min(current, Math.max(0, certs.length - 1)));
  }, [certs.length]);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const measure = () => setSlideWidth(el.clientWidth);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!fullscreen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setFullscreen(false);
      if (e.key === "ArrowLeft") go(index - 1);
      if (e.key === "ArrowRight") go(index + 1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [fullscreen, go, index]);

  const swipePrev = useCallback(() => go(index - 1), [go, index]);
  const swipeNext = useCallback(() => go(index + 1), [go, index]);
  const inlineTouch = useTouchSwipe(swipeNext, swipePrev);
  const lightboxTouch = useTouchSwipe(swipeNext, swipePrev);

  const cert = certs[index];
  const offset = slideWidth * index;
  if (!cert) return null;

  const lightbox =
    fullscreen &&
    createPortal(
      <div
        className="cert-lightbox"
        role="dialog"
        aria-modal="true"
        aria-label={cert.title}
      >
        <button
          type="button"
          className="cert-lightbox-close"
          onClick={() => setFullscreen(false)}
          aria-label={t.ui.closeFullscreen}
        >
          ×
        </button>
        {index > 0 && (
          <button
            type="button"
            className="cert-lightbox-arrow cert-lightbox-arrow--left"
            onClick={() => go(index - 1)}
            aria-label={t.ui.prev}
          >
            ←
          </button>
        )}
        <div className="cert-lightbox-stage" {...lightboxTouch}>
          <img src={cert.image} alt="" draggable={false} />
        </div>
        {index < certs.length - 1 && (
          <button
            type="button"
            className="cert-lightbox-arrow cert-lightbox-arrow--right"
            onClick={() => go(index + 1)}
            aria-label={t.ui.next}
          >
            →
          </button>
        )}
      </div>,
      document.body,
    );

  return (
    <>
      <Card className="flex flex-col !p-0 overflow-hidden">
        <div
          ref={viewportRef}
          className="cert-carousel-viewport flex-1 touch-pan-y"
          {...inlineTouch}
        >
          <div
            className="cert-carousel-track"
            style={{ transform: `translate3d(-${offset}px, 0, 0)` }}
          >
            {certs.map((c, i) => (
              <div key={c.id} className="cert-carousel-slide">
                <button
                  type="button"
                  className="cert-slide-open"
                  onClick={() => {
                    go(i);
                    setFullscreen(true);
                  }}
                  aria-label={c.title}
                >
                  <img src={c.image} alt="" draggable={false} />
                </button>
              </div>
            ))}
          </div>
        </div>
        <CertCaption cert={cert} index={index} total={certs.length} />
        <div className="flex items-center justify-between gap-3 px-4 pb-4">
          <button
            type="button"
            onClick={() => go(index - 1)}
            disabled={index === 0}
            className="cert-nav-btn"
            aria-label={t.ui.prev}
          >
            ←
          </button>
          <div className="flex gap-1.5 flex-1 justify-center">
            {certs.map((c, i) => (
              <button
                key={c.id}
                type="button"
                onClick={() => go(i)}
                className={`cert-dot ${i === index ? "active" : ""}`}
                aria-label={c.title}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => go(index + 1)}
            disabled={index === certs.length - 1}
            className="cert-nav-btn"
            aria-label={t.ui.next}
          >
            →
          </button>
        </div>
      </Card>
      {lightbox}
    </>
  );
}
