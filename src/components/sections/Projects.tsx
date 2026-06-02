import { resume } from "../../data/resume";
import { Badge, Card, SectionTitle } from "../ui";

const statusLabels = {
  live: { label: "Live", variant: "success" as const },
  wip: { label: "WIP", variant: "warning" as const },
  internal: { label: "Internal", variant: "default" as const },
};

export function ProjectsSection() {
  return (
    <div id="projects" className="animate-fade-up">
      <SectionTitle
        overline="05 — ship"
        title="Проекты"
        description="Что уже в проде или в активной разработке"
        className="mb-4 px-1"
      />
      <div className="grid sm:grid-cols-2 gap-4">
        {resume.projects.map((project) => {
          const status = statusLabels[project.status];
          return (
            <Card key={project.title} className="flex flex-col h-full hover:shadow-lg hover:shadow-indigo-500/5 transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-3">
                <h3 className="font-semibold text-zinc-100">{project.title}</h3>
                <Badge variant={status.variant}>{status.label}</Badge>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {project.stack.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
              {(project.link || project.github) && (
                <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-white/5 text-sm">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      {project.link?.includes("forbes.kz") ? "Forbes →" : "Читать →"}
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-zinc-200 transition-colors"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
}
