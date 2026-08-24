import { useLocale } from "../../locale";
import { Card, SectionTitle } from "../ui";

/** Kept for older routes; credentials now owns this content. */
export function AboutSection() {
  const { t } = useLocale();
  return (
    <Card>
      <SectionTitle title={t.ui.eduTitle} />
      <p className="text-sm text-slate-400">{t.profile.summary}</p>
    </Card>
  );
}
