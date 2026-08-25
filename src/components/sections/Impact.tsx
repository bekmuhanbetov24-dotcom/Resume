import { useLocale } from "../../locale";
import { ScreenLayout } from "../ScreenLayout";
import { Card } from "../ui";

export function ImpactSection() {
  const { t } = useLocale();

  return (
    <ScreenLayout
      id="impact"
      overline={t.ui.casesOverline}
      title={t.ui.casesTitle}
      description={t.ui.casesLead}
    >
      {t.cases.map((item) => (
        <Card key={item.id}>
          <h3 className="text-base sm:text-lg font-semibold text-slate-100 leading-snug">
            {item.title}
          </h3>
          <dl className="mt-4 space-y-3">
            <div>
              <dt className="field-label">{t.ui.caseMandate}</dt>
              <dd className="mt-1 text-sm text-slate-400 leading-relaxed">{item.mandate}</dd>
            </div>
            <div>
              <dt className="field-label field-label--muted">{t.ui.caseScale}</dt>
              <dd className="mt-1 text-sm text-slate-300">{item.scale}</dd>
            </div>
            <div>
              <dt className="field-label field-label--muted">{t.ui.caseResult}</dt>
              <dd className="mt-1 text-sm text-slate-200">{item.result}</dd>
            </div>
            <div>
              <dt className="field-label field-label--muted">{t.ui.caseRole}</dt>
              <dd className="mt-1 text-sm text-slate-400 leading-relaxed">{item.contribution}</dd>
            </div>
          </dl>
        </Card>
      ))}
    </ScreenLayout>
  );
}
