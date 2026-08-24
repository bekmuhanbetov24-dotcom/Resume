import { useLocale } from "../../locale";
import { Badge, Card, SectionTitle } from "../ui";
import { CertificatesCarousel } from "./Certificates";

export function CredentialsSection() {
  const { t } = useLocale();

  return (
    <div id="credentials" className="space-y-5 animate-fade-up">
      <SectionTitle
        overline={t.ui.credsOverline}
        title={t.ui.credsTitle}
        description={t.ui.credsLead}
      />

      <Card>
        <h3 className="text-sm font-semibold text-slate-200 mb-3">{t.ui.eduTitle}</h3>
        <ul className="space-y-3">
          {t.education.map((edu) => (
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
        <p className="mt-4 text-xs text-slate-500">{t.profile.languages}</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {t.skillTags.map((tag) => (
            <li key={tag}>
              <Badge>{tag}</Badge>
            </li>
          ))}
        </ul>
      </Card>

      <div>
        <p className="text-[11px] font-medium uppercase tracking-wider text-slate-500 mb-3">
          {t.ui.swipe}
        </p>
        <CertificatesCarousel />
      </div>

      {t.otherCredentials.length > 0 && (
        <ul className="space-y-2 text-sm text-slate-500">
          {t.otherCredentials.map((c) => (
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
