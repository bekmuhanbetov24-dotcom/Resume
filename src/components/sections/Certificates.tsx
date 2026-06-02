import { useCallback, useRef, useState } from "react";
import { resume } from "../../data/resume";
import { Card, SectionTitle } from "../ui";

export function CertificatesScreen() {
  const certs = resume.certificates;
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchDelta = useRef(0);

  const go = useCallback(
    (next: number) => {
      setIndex(Math.max(0, Math.min(next, certs.length - 1)));
    },
    [certs.length],
  );

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchDelta.current = 0;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchDelta.current = e.touches[0].clientX - touchStartX.current;
  };

  const onTouchEnd = () => {
    if (touchDelta.current < -50) go(index + 1);
    else if (touchDelta.current > 50) go(index - 1);
  };

  const cert = certs[index];

  return (
    <div className="animate-fade-up flex flex-col min-h-[calc(100dvh-7rem)] lg:min-h-0">
      <SectionTitle
        overline="Credentials"
        title="Сертификаты"
        description="Свайп влево / вправо"
      />

      <Card className="flex-1 flex flex-col !p-0 overflow-hidden">
        <div
          className="cert-carousel-viewport flex-1 touch-pan-y"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="cert-carousel-track"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {certs.map((c) => (
              <div key={c.id} className="cert-carousel-slide">
                <img
                  src={c.image}
                  alt={`${c.title} — ${c.issuer}`}
                  draggable={false}
                />
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
          {cert.detail && (
            <p className="text-xs text-slate-500 mt-1">{cert.detail}</p>
          )}
        </div>

        <div className="flex items-center justify-between gap-3 px-4 pb-4">
          <button
            type="button"
            onClick={() => go(index - 1)}
            disabled={index === 0}
            className="cert-nav-btn"
            aria-label="Предыдущий"
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
            aria-label="Следующий"
          >
            →
          </button>
        </div>
      </Card>

      {resume.otherCredentials.length > 0 && (
        <ul className="mt-4 space-y-2 text-sm text-slate-500">
          {resume.otherCredentials.map((c) => (
            <li key={c.title}>
              <span className="text-xs text-slate-600 mr-2">{c.year}</span>
              {c.title}
              {c.issuer ? ` · ${c.issuer}` : ""}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
