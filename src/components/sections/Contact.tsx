import { resume } from "../../data/resume";
import { Card, SectionTitle } from "../ui";

const iconMap: Record<string, string> = {
  email: "✉",
  github: "⌘",
  linkedin: "in",
  telegram: "✈",
  phone: "☎",
  other: "↗",
};

export function ContactSection() {
  return (
    <Card id="contact" className="animate-fade-up">
      <SectionTitle
        overline="Contact"
        title="Контакты"
      />
      <div className="grid gap-3 sm:grid-cols-2">
        {resume.contact.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.type === "email" || link.type === "phone" ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-lg border border-slate-700/50 bg-slate-800/30 p-4 transition-all hover:border-blue-600/35 hover:bg-slate-800/60"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600/10 text-sm text-blue-400/90 group-hover:bg-blue-600/20 transition-colors">
              {iconMap[link.type] ?? "↗"}
            </span>
            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-wide text-slate-500">{link.type}</p>
              <p className="text-sm font-medium text-slate-200 truncate group-hover:text-slate-50 transition-colors">
                {link.label}
              </p>
            </div>
          </a>
        ))}
      </div>
      <p className="mt-6 text-center text-xs text-slate-600">
        © {new Date().getFullYear()} · {resume.profile.name}
      </p>
    </Card>
  );
}
