import { useLocale } from "../../locale";
import { ScreenLayout } from "../ScreenLayout";
import { Badge, Card } from "../ui";

export function CredentialsSection() {
  const { t } = useLocale();

  return (
    <ScreenLayout
      id="credentials"
      overline={t.ui.credsOverline}
      title={t.ui.credsTitle}
      description={t.ui.credsLead}
    >
      <Card>
        <h3 className="card-subtitle">{t.ui.eduTitle}</h3>
        <ul className="divide-y divide-slate-700/40">
          {t.education.map((edu) => (
            <li key={edu.title} className="py-3 first:pt-0 last:pb-0">
              <p className="field-label">{edu.period}</p>
              <p className="text-sm font-medium text-slate-200 mt-0.5">{edu.title}</p>
              <p className="text-xs text-slate-500 mt-0.5">{edu.note}</p>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-slate-500">{t.profile.languages}</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {t.skillTags.map((tag) => (
            <li key={tag}>
              <Badge>{tag}</Badge>
            </li>
          ))}
        </ul>
      </Card>

      {t.featured.length > 0 && (
        <Card>
          <h3 className="card-subtitle">{t.ui.proofTitle}</h3>
          <ul className="divide-y divide-slate-700/40">
            {t.featured.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 py-3 first:pt-0 last:pb-0 transition-colors"
                >
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-blue-400/80 w-14 shrink-0">
                    {item.type === "press" ? "Press" : "Research"}
                  </span>
                  <span className="text-sm text-slate-300 leading-snug group-hover:text-slate-100">
                    {item.label} →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Card>
      )}

      {t.otherCredentials.length > 0 && (
        <Card>
          <ul className="space-y-2 text-sm text-slate-500">
            {t.otherCredentials.map((c) => (
              <li key={c.title}>
                <span className="text-xs text-slate-600 mr-2">{c.year}</span>
                {c.title}
                {c.issuer ? ` · ${c.issuer}` : ""}
              </li>
            ))}
          </ul>
        </Card>
      )}
    </ScreenLayout>
  );
}
