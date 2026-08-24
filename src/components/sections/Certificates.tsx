import { useCallback, useEffect, useRef, useState, type TouchEvent } from "react";
import { useLocale } from "../../locale";
import { Card } from "../ui";

export function CertificatesCarousel() {
  const { t } = useLocale();
  const certs = t.certificates;
  const [index, setIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchDelta = useRef(0);

  const go = useCallback(
    (next: number) => {
      setIndex(Math.max(0, Math.min(next, certs.length - 1)));
    },
    [certs.length],
  );

  useEffect(() => {
    setIndex((current) => Math.min(current, certs.length - 1));
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

  const onTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchDelta.current = 0;
  };

  const onTouchMove = (e: TouchEvent) => {
    touchDelta.current = e.touches[0].clientX - touchStartX.current;
  };

  const onTouchEnd = () => {
    if (touchDelta.current < -50) go(index + 1);
    else if (touchDelta.current > 50) go(index - 1);
  };

  const cert = certs[index];
  const offset = slideWidth * index;

  if (!cert) return null;

  return (
    <Card className="flex flex-col !p-0 overflow-hidden">
      <div
        ref={viewportRef}
        className="cert-carousel-viewport flex-1 touch-pan-y"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="cert-carousel-track"
          style={{ transform: `translate3d(-${offset}px, 0, 0)` }}
        >
          {certs.map((c) => (
            <div key={c.id} className="cert-carousel-slide">
              <img src={c.image} alt={`${c.title} — ${c.issuer}`} draggable={false} />
            </div>
          ))}
        </div>
      </div>

      <div className="cert-carousel-caption px-4 sm:px-5 py-4 border-t border-slate-700/50 bg-slate-900/40">
        <p className="text-[11px] font-medium uppercase tracking-wider text-blue-400/90">
          {cert.year} · {index + 1} / {certs.length}
        </p>
        <h3 className="text-base sm:text-lg font-semibold text-slate-100 mt-1 leading-snug">
          {cert.title}
        </h3>
        <p className="text-sm text-slate-400 mt-0.5">{cert.issuer}</p>
        {cert.detail && <p className="text-xs text-slate-500 mt-1">{cert.detail}</p>}
      </div>

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
  );
}
