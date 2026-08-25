import { useLocale } from "../../locale";
import { ContactIcons } from "../ContactIcons";
import { ShareButton } from "../ShareButton";
import { Badge, Card, ProfilePhoto } from "../ui";

export function MandateSection() {
  const { t } = useLocale();
  const { profile, stats } = t;
  const paragraphs = profile.summary.split("\n\n").filter(Boolean);

  return (
    <div id="mandate" className="animate-fade-up page-body page-body--mandate">
      <div className="screen-stack">
        <Card className="relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600/80 via-blue-500/40 to-transparent" />

        <div className="flex flex-col sm:flex-row gap-5 sm:gap-6">
          <ProfilePhoto
            name={profile.name}
            url={profile.avatarUrl || undefined}
          />
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <Badge variant="muted">{profile.location}</Badge>
            </div>
            <h1 className="name-title text-2xl sm:text-3xl font-bold leading-tight">
              {profile.nameShort}
            </h1>
            <p className="mt-1 text-base font-medium text-slate-200">{profile.role}</p>
            <p className="mt-1 text-sm text-slate-500">{profile.roleSub}</p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <ContactIcons links={t.contact} />
              <span className="hidden sm:block w-px h-6 bg-slate-700/60" aria-hidden />
              <div className="flex flex-wrap gap-2">
                <button type="button" className="cta-btn" onClick={() => window.print()}>
                  {t.ui.printPdf}
                </button>
                <ShareButton />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 space-y-3 text-sm sm:text-[15px] text-slate-400 leading-relaxed border-t border-slate-700/50 pt-5">
          {paragraphs.map((p) => (
            <p key={p.slice(0, 32)}>{p}</p>
          ))}
        </div>

        <ul className="mt-4 flex flex-wrap gap-2">
          {profile.highlights.map((h) => (
            <li key={h}>
              <Badge>{h}</Badge>
            </li>
          ))}
        </ul>
        </Card>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {stats.map((stat) => (
          <Card key={stat.label} className="!p-3 sm:!p-4 text-center">
            <p className="stat-value text-2xl sm:text-[1.75rem] font-bold">{stat.value}</p>
            <p className="text-xs font-medium text-slate-400 mt-1">{stat.label}</p>
            {stat.hint && (
              <p className="text-[10px] text-slate-600 mt-0.5">{stat.hint}</p>
            )}
          </Card>
        ))}
        </div>
      </div>
    </div>
  );
}
