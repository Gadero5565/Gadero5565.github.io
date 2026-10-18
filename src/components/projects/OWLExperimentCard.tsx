import type { PortfolioProject } from "@/types/portfolio";
import { ProjectLinks } from "./ProjectLinks";
import { TechTags } from "./TechTags";

interface OWLExperimentCardProps {
  project: PortfolioProject;
}

/** Small projects remain easy to discover without sharing the featured-project visual weight. */
export function OWLExperimentCard({ project }: OWLExperimentCardProps) {
  return (
    <article
      aria-labelledby={`experiment-${project.id}`}
      className="flex h-full flex-col rounded-xl border border-slate-700/60 bg-[#111c2e] p-5 transition-colors hover:border-slate-500/90 sm:p-6"
    >
      <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
        <span>OWL experiment</span>
        {project.odooVersions?.length ? (
          <span className="rounded-md border border-slate-700 px-2 py-0.5 normal-case tracking-normal text-cyan-300">
            Odoo {project.odooVersions.join(" · ")}
          </span>
        ) : null}
      </div>

      <h4 id={`experiment-${project.id}`} className="mt-4 text-lg font-bold tracking-tight text-white">
        {project.title}
      </h4>
      <p className="mt-2 text-sm leading-6 text-slate-300">{project.summary}</p>

      {project.highlights.length > 0 ? (
        <ul className="mt-4 space-y-2 border-l-2 border-cyan-400/40 pl-3 text-xs leading-5 text-slate-400">
          {project.highlights.slice(0, 2).map((item) => <li key={item}>{item}</li>)}
        </ul>
      ) : null}

      <div className="mt-auto pt-5">
        <TechTags tech={project.tech.slice(0, 3)} />
        <div className="mt-5"><ProjectLinks links={project.links} /></div>
      </div>
    </article>
  );
}
