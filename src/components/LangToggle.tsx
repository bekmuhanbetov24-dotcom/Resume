import { useLocale } from "../locale";

export function LangToggle({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale, t } = useLocale();

  return (
    <div
      className={`inline-flex rounded-md border border-slate-700/50 overflow-hidden ${compact ? "text-[10px]" : "text-xs"}`}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => setLocale("ru")}
        className={`px-2 py-1 font-medium transition-colors ${
          locale === "ru"
            ? "bg-blue-600/20 text-blue-300"
            : "text-slate-500 hover:text-slate-300"
        }`}
      >
        {t.ui.langRu}
      </button>
      <button
        type="button"
        onClick={() => setLocale("en")}
        className={`px-2 py-1 font-medium transition-colors ${
          locale === "en"
            ? "bg-blue-600/20 text-blue-300"
            : "text-slate-500 hover:text-slate-300"
        }`}
      >
        {t.ui.langEn}
      </button>
    </div>
  );
}
