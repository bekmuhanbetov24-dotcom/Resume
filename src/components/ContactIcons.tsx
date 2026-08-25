import type { ReactNode } from "react";
import type { ContactLink } from "../data/resume";

const icons: Record<string, { label: string; node: ReactNode }> = {
  email: {
    label: "Email",
    node: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path d="M4 6h16v12H4z" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    ),
  },
  telegram: {
    label: "Telegram",
    node: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
      </svg>
    ),
  },
  linkedin: {
    label: "LinkedIn",
    node: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
};

const order: ContactLink["type"][] = ["email", "telegram", "linkedin"];

export function ContactIcons({ links }: { links: ContactLink[] }) {
  const sorted = order
    .map((type) => links.find((l) => l.type === type))
    .filter((l): l is ContactLink => Boolean(l));

  return (
    <div className="flex items-center gap-2">
      {sorted.map((link) => {
        const icon = icons[link.type];
        if (!icon) return null;
        const external = link.type !== "email";
        return (
          <a
            key={link.type}
            href={link.href}
            className="contact-icon-btn"
            aria-label={icon.label}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {icon.node}
          </a>
        );
      })}
    </div>
  );
}
