import { useState } from "react";
import type { CSSProperties, ReactNode } from "react";

export function Card({
  children,
  className = "",
  id,
  style,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
}) {
  return (
    <section
      id={id}
      style={style}
      className={`card-glass rounded-xl p-4 sm:p-5 md:p-6 ${className}`}
    >
      {children}
    </section>
  );
}

export function SectionTitle({
  overline,
  title,
  description,
  className = "",
}: {
  overline?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <header className={`mb-4 sm:mb-5 ${className}`}>
      {overline && (
        <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-slate-500 mb-2">
          {overline}
        </p>
      )}
      <div className="accent-line mb-3" />
      <h2 className="text-lg sm:text-xl font-semibold text-slate-50 tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-1.5 text-sm text-slate-400 leading-relaxed">{description}</p>
      )}
    </header>
  );
}

export function Badge({
  children,
  variant = "default",
}: {
  children: ReactNode;
  variant?: "default" | "success" | "muted";
}) {
  const styles = {
    default: "bg-slate-800/80 text-slate-300 border-slate-600/40",
    success: "bg-emerald-950/50 text-emerald-400/90 border-emerald-800/40",
    muted: "bg-blue-950/40 text-blue-300/90 border-blue-800/30",
  };
  return (
    <span
      className={`inline-flex items-center rounded-md border px-2 py-0.5 text-[11px] sm:text-xs font-medium ${styles[variant]}`}
    >
      {children}
    </span>
  );
}

export function ProfilePhoto({
  name,
  url,
  size = "lg",
}: {
  name: string;
  url?: string;
  size?: "sm" | "lg";
}) {
  const [imgError, setImgError] = useState(false);
  const initials = name
    .split(" ")
    .filter(Boolean)
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const frameOuter =
    size === "sm"
      ? "h-10 w-10 rounded-md"
      : "h-[7.5rem] w-[7.5rem] sm:h-32 sm:w-32 rounded-lg";

  const frameInner =
    size === "sm"
      ? "border border-slate-600/50 bg-slate-800"
      : "border-2 border-slate-600/50 bg-slate-900 shadow-lg";

  const objectPos = size === "sm" ? "center 34%" : "center 36%";

  if (url && !imgError) {
    return (
      <div className={`${frameOuter} ${frameInner} overflow-hidden shrink-0`}>
        <img
          src={url}
          alt={name}
          className="h-full w-full object-cover"
          style={{ objectPosition: objectPos }}
          onError={() => setImgError(true)}
        />
      </div>
    );
  }

  return (
    <div
      className={`${frameOuter} ${frameInner} flex items-center justify-center ${size === "sm" ? "text-xs" : "text-xl"} font-semibold text-slate-400 shrink-0`}
      aria-hidden
    >
      {initials}
    </div>
  );
}
