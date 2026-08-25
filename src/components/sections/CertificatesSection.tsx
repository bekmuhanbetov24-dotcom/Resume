import { useLocale } from "../../locale";
import { ScreenLayout } from "../ScreenLayout";
import { CertificatesCarousel } from "./Certificates";

export function CertificatesSection() {
  const { t } = useLocale();

  return (
    <ScreenLayout
      id="certificates"
      overline={t.ui.certsOverline}
      title={t.ui.certsTitle}
      description={t.ui.certsLead}
    >
      <CertificatesCarousel />
    </ScreenLayout>
  );
}
