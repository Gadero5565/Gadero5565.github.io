import type { PortfolioProject } from "@/types/portfolio";
import { ProjectLinks } from "./ProjectLinks";
import { TechTags } from "./TechTags";

interface SecondaryProjectCardProps {
  project: PortfolioProject;
}

/** More technical context than an experiment card, without competing with featured work. */
export function SecondaryProjectCard({ project }: SecondaryProjectCardProps) {
  const titleId = `project-${project.id}`;

  return (
    <article
      aria-labelledby={titleId}
      className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-700/70 bg-[#111c2e] transition-colors hover:border-slate-500/90"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700/60 bg-slate-800/30 px-6 py-4">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-300">
          Open-source engineering
        </p>
        <span className="rounded-full border border-slate-600/70 px-2.5 py-1 text-[11px] font-medium text-slate-300">
          {project.status === "prototype" ? "Prototype" : project.status === "in-development" ? "In development" : "Project"}
        </span>
      </div>

      <div className="flex h-full flex-col p-6 sm:p-7">
        <h3 id={titleId} className="text-xl font-bold tracking-tight text-white">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-slate-300">{project.summary}</p>

        <div className="mt-6 grid gap-4 border-t border-slate-700/60 pt-5 sm:grid-cols-2">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-300">Problem</h4>
            <p className="mt-2 text-sm leading-6 text-slate-300">{project.problem}</p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-300">Implementation</h4>
            <p className="mt-2 text-sm leading-6 text-slate-300">{project.engineering}</p>
          </div>
        </div>

        {project.highlights.length > 0 ? (
          <ul className="mt-5 list-outside list-disc space-y-1.5 pl-5 text-sm leading-6 text-slate-400 marker:text-cyan-400">
            {project.highlights.slice(0, 3).map((item) => <li key={item}>{item}</li>)}
          </ul>
        ) : null}

        <div className="mt-auto pt-6">
          <TechTags tech={project.tech} />
          <div className="mt-5 border-t border-slate-700/60 pt-4">
            <ProjectLinks links={project.links} />
          </div>
        </div>
      </div>
    </article>
  );
}
