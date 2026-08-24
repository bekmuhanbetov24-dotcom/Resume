import { useLocale } from "../../locale";
import { Card, SectionTitle } from "../ui";

export function ImpactSection() {
  const { t } = useLocale();

  return (
    <div id="impact" className="space-y-4 sm:space-y-5 animate-fade-up">
      <SectionTitle
        overline={t.ui.casesOverline}
        title={t.ui.casesTitle}
        description={t.ui.casesLead}
      />
      {t.cases.map((item) => (
        <Card key={item.id}>
          <h3 className="text-base sm:text-lg font-semibold text-slate-100 leading-snug">
            {item.title}
          </h3>
          <dl className="mt-4 space-y-3">
            <div>
              <dt className="text-[11px] font-medium uppercase tracking-wider text-blue-400/80">
                {t.ui.caseMandate}
              </dt>
              <dd className="mt-1 text-sm text-slate-400 leading-relaxed">{item.mandate}</dd>
            </div>
            <div>
              <dt className="text-[11px] font-medium uppercase tracking-wider text-slate-500">
                {t.ui.caseScale}
              </dt>
              <dd className="mt-1 text-sm text-slate-300">{item.scale}</dd>
            </div>
            <div>
              <dt className="text-[11px] font-medium uppercase tracking-wider text-slate-500">
                {t.ui.caseResult}
              </dt>
              <dd className="mt-1 text-sm text-slate-200">{item.result}</dd>
            </div>
            <div>
              <dt className="text-[11px] font-medium uppercase tracking-wider text-slate-500">
                {t.ui.caseRole}
              </dt>
              <dd className="mt-1 text-sm text-slate-400 leading-relaxed">
                {item.contribution}
              </dd>
            </div>
          </dl>
        </Card>
      ))}
    </div>
  );
}
