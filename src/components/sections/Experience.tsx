import { useLocale } from "../../locale";
import { ScreenLayout } from "../ScreenLayout";
import { Card } from "../ui";

export function ExperienceSection() {
  const { t } = useLocale();

  return (
    <ScreenLayout
      id="experience"
      overline={t.ui.expOverline}
      title={t.ui.expTitle}
      description={t.ui.expLead}
    >
      {t.experience.map((job) => (
        <Card key={`${job.company}-${job.period}`}>
          <p className="field-label">{job.period}</p>
          <h3 className="text-base font-semibold text-slate-100 mt-1">{job.role}</h3>
          <p className="text-sm text-blue-400/90 font-medium mt-0.5">{job.company}</p>
          <p className="mt-2 text-sm text-slate-400 leading-relaxed">{job.description}</p>
          {job.highlights.length > 0 && (
            <ul className="mt-3 space-y-1.5">
              {job.highlights.map((h) => (
                <li key={h} className="text-sm text-slate-400 flex gap-2 leading-snug">
                  <span className="text-blue-500/80 shrink-0">▸</span>
                  {h}
                </li>
              ))}
            </ul>
          )}
        </Card>
      ))}
    </ScreenLayout>
  );
}
