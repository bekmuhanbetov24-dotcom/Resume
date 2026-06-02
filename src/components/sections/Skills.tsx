import { resume, skillCategories, type Skill } from "../../data/resume";
import { Card, SectionTitle } from "../ui";

function SkillsByCategory({ category }: { category: Skill["category"] }) {
  const items = resume.skills.filter((s) => s.category === category);
  if (items.length === 0) return null;

  return (
    <div>
      <h3 className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-3">
        {skillCategories[category]}
      </h3>
      <ul className="space-y-3">
        {items.map((skill) => (
          <li key={skill.name}>
            <div className="flex justify-between text-sm mb-1.5">
              <span className="text-slate-200">{skill.name}</span>
              <span className="text-xs text-slate-500 tabular-nums">{skill.level}%</span>
            </div>
            <div className="skill-bar" role="progressbar" aria-valuenow={skill.level} aria-valuemin={0} aria-valuemax={100}>
              <div className="skill-bar-fill" style={{ width: `${skill.level}%` }} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SkillsSection() {
  const categories = ["pm", "analytics", "tools", "tech", "languages"] as const;

  return (
    <Card id="skills" className="animate-fade-up">
      <SectionTitle
        overline="Компетенции"
        title="Навыки"
        description="Project management, agile, analytics, tools"
      />
      <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
        {categories.map((cat) => (
          <SkillsByCategory key={cat} category={cat} />
        ))}
      </div>
    </Card>
  );
}
