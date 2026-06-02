import { resume } from "../../data/resume";
import { Badge, Card, ProfilePhoto, SectionTitle } from "../ui";

export function OverviewSection() {
  const { profile, stats, education, featured } = resume;

  return (
    <div id="overview" className="space-y-5 sm:space-y-6 animate-fade-up">
      <Card className="relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600/80 via-blue-500/40 to-transparent" />

        <div className="flex flex-col sm:flex-row gap-5 sm:gap-6">
          <ProfilePhoto
            name={profile.name}
            url={profile.avatarUrl || undefined}
          />
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <Badge variant="success">
                <span className="status-dot inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 mr-1.5" />
                {profile.status}
              </Badge>
              <Badge variant="muted">{profile.location}</Badge>
            </div>
            <h1 className="name-title text-2xl sm:text-3xl font-bold leading-tight">
              {profile.nameShort}
            </h1>
            <p className="mt-1 text-base font-medium text-slate-200">{profile.role}</p>
            <p className="mt-1 text-sm text-slate-500">{profile.roleSub}</p>
          </div>
        </div>

        <p className="mt-5 text-sm sm:text-[15px] text-slate-400 leading-relaxed border-t border-slate-700/50 pt-5">
          {profile.summary}
        </p>

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

      {featured.length > 0 && (
        <Card className="!py-4 sm:!py-5">
          <SectionTitle
            overline="Публикации"
            title="В СМИ и науке"
            className="!mb-3"
          />
          <ul className="space-y-2">
            {featured.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-lg border border-slate-700/50 bg-slate-800/30 px-3.5 py-3 transition-colors hover:border-blue-600/40 hover:bg-slate-800/60"
                >
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-blue-400/80 w-14 shrink-0">
                    {item.type === "press" ? "Press" : "Research"}
                  </span>
                  <span className="text-sm text-slate-300 leading-snug group-hover:text-slate-100 transition-colors">
                    {item.label} →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Card>
      )}

      <Card>
        <SectionTitle overline="Образование" title="Education" />
        <ul className="space-y-3">
          {education.map((edu) => (
            <li
              key={edu.title}
              className="border-b border-slate-700/40 pb-3 last:border-0 last:pb-0"
            >
              <p className="text-[11px] font-medium text-blue-400/80">{edu.period}</p>
              <p className="text-sm font-medium text-slate-200 mt-0.5">{edu.title}</p>
              <p className="text-xs text-slate-500 mt-0.5">{edu.note}</p>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
