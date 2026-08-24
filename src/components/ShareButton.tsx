import { useMemo, useState } from "react";
import { useLocale } from "../locale";

function buildShareUrl(locale: string) {
  const url = new URL(window.location.href);
  url.searchParams.set("lang", locale);
  url.hash = "";
  return url.toString();
}

export function ShareButton() {
  const { locale, t } = useLocale();
  const [copied, setCopied] = useState(false);

  const shareUrl = useMemo(() => buildShareUrl(locale), [locale]);

  async function handleShare() {
    const payload = {
      title: t.meta.pageTitle,
      text: `${t.profile.role} · ${t.meta.tagline}`,
      url: shareUrl,
    };

    if (typeof navigator.share === "function") {
      try {
        await navigator.share(payload);
        return;
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") return;
      }
    }

    try {
      await navigator.clipboard.writeText(shareUrl);
    } catch {
      window.prompt(t.ui.share, shareUrl);
      return;
    }

    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  }

  return (
    <button type="button" className="cta-btn" onClick={() => void handleShare()}>
      {copied ? t.ui.shareCopied : t.ui.share}
    </button>
  );
}
