import { resume } from "../../data/resume";
import { Card, SectionTitle } from "../ui";

export function ExperienceSection() {
  return (
    <Card id="experience" className="animate-fade-up">
      <SectionTitle
        overline="Карьера"
        title="Опыт работы"
        description="IT и строительство · BI Innovations"
      />
      <ol className="relative space-y-6 sm:space-y-7">
        {resume.experience.map((job, index) => (
          <li
            key={`${job.company}-${job.period}`}
            className="relative pl-6 sm:pl-7 border-l border-slate-700/60"
          >
            <span
              className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-blue-500 ring-4 ring-[#161b24]"
              aria-hidden
            />
            {index === 0 && (
              <span className="absolute -left-[5px] top-4 bottom-0 w-px bg-slate-700/40" aria-hidden />
            )}
            <p className="text-[11px] font-medium uppercase tracking-wide text-slate-500">
              {job.period}
            </p>
            <h3 className="text-base font-semibold text-slate-100 mt-1">{job.role}</h3>
            <p className="text-sm text-blue-400/90 font-medium">{job.company}</p>
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
          </li>
        ))}
      </ol>
    </Card>
  );
}
