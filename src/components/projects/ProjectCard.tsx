import type { PortfolioProject, ProjectStatus } from "@/types/portfolio";
import { ProjectLinks } from "./ProjectLinks";
import { ProjectMedia } from "./ProjectMedia";
import { ProjectTechnicalDetails } from "./ProjectTechnicalDetails";
import { TechTags } from "./TechTags";

interface ProjectCardProps {
  project: PortfolioProject;
  variant?: "spotlight" | "standard" | "compact";
}

const statusLabels: Record<ProjectStatus, string> = {
  released: "Released",
  maintained: "Maintained",
  "in-development": "In development",
  prototype: "Prototype",
  experiment: "Experiment",
};

export function ProjectCard({ project, variant = "standard" }: ProjectCardProps) {
  const isSpotlight = variant === "spotlight";
  const isCompact = variant === "compact";
  const titleId = `project-${project.id}`;
  const status = project.release
    ? `${statusLabels[project.status]} ${project.release.version}`
    : statusLabels[project.status];

  return (
    <article
      aria-labelledby={titleId}
      className={`group h-full rounded-2xl border border-slate-700/70 bg-[#111c2e] shadow-md shadow-black/10 transition-colors hover:border-slate-500/90 ${
        isSpotlight ? "p-5 sm:p-8" : isCompact ? "p-5" : "p-6"
      }`}
    >
      <div className={isSpotlight ? "grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start" : "flex h-full flex-col"}>
        {!isSpotlight && !isCompact ? <ProjectMedia project={project} /> : null}

        <div className="flex min-w-0 flex-1 flex-col items-start">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">{status}</p>
          <h3
            id={titleId}
            className={`font-bold tracking-tight text-white ${isSpotlight ? "text-2xl sm:text-3xl" : "text-xl"}`}
          >
            {project.title}
          </h3>
          <p className={`mt-3 leading-relaxed text-slate-300 ${isCompact ? "text-sm" : "text-sm sm:text-base"}`}>
            {project.summary}
          </p>
          {isSpotlight ? <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400">{project.engineering}</p> : null}
          {project.odooVersions?.length ? (
            <p className="mt-4 text-xs font-medium text-slate-400">Odoo {project.odooVersions.join(" · ")}</p>
          ) : null}

          <div className={`mt-5 w-full ${!isSpotlight ? "flex-1" : ""}`}>
            <TechTags tech={isCompact ? project.tech.slice(0, 4) : project.tech} />
          </div>
          {!isCompact ? <ProjectTechnicalDetails project={project} /> : null}
          <div className="mt-6"><ProjectLinks links={project.links} /></div>
        </div>

        {isSpotlight ? <ProjectMedia project={project} spotlight /> : null}
      </div>
    </article>
  );
}
