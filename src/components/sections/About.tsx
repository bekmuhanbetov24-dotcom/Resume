import { resume } from "../../data/resume";
import { Card, SectionTitle } from "../ui";

export function AboutSection() {
  return (
    <div className="space-y-4 sm:space-y-5 animate-fade-up">
      <Card id="about">
        <SectionTitle
          overline="01 — profile"
          title="Обо мне"
          description="Кратко о подходе и сильных сторонах"
        />
        <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
          {resume.profile.summary}
        </p>
      </Card>

      <div className="grid sm:grid-cols-2 gap-4">
        <Card>
          <SectionTitle overline="languages" title="Языки" />
          <ul className="space-y-3">
            {resume.languages.map((lang) => (
              <li
                key={lang.name}
                className="flex justify-between items-center text-sm border-b border-white/5 pb-2 last:border-0 last:pb-0"
              >
                <span className="text-zinc-200">{lang.name}</span>
                <span className="text-zinc-500 text-xs sm:text-sm">{lang.level}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <SectionTitle overline="education" title="Образование" />
          <ul className="space-y-4">
            {resume.education.map((edu) => (
              <li key={edu.title}>
                <p className="font-mono text-xs text-indigo-400/90">{edu.period}</p>
                <p className="text-sm font-medium text-zinc-200 mt-0.5">{edu.title}</p>
                <p className="text-xs text-zinc-500 mt-1">{edu.note}</p>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}
