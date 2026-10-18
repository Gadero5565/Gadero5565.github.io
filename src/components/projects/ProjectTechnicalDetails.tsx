import type { PortfolioProject } from "@/types/portfolio";

interface ProjectTechnicalDetailsProps {
  project: PortfolioProject;
}

/** Native disclosure keeps the technical content accessible without client JS. */
export function ProjectTechnicalDetails({ project }: ProjectTechnicalDetailsProps) {
  return (
    <details className="group/details mt-6 w-full rounded-lg border border-slate-700/70 bg-slate-900/40 px-4 py-3 open:bg-slate-900/70">
      <summary className="cursor-pointer text-sm font-semibold text-slate-200 marker:text-cyan-300 hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
        Engineering details
      </summary>
      <div className="mt-4 space-y-3 border-t border-slate-700/70 pt-4 text-sm leading-relaxed text-slate-300">
        <div>
          <p className="mb-1 font-semibold text-slate-100">Problem</p>
          <p>{project.problem}</p>
        </div>
        <div>
          <p className="mb-1 font-semibold text-slate-100">Approach</p>
          <p>{project.engineering}</p>
        </div>
        <ul className="list-outside list-disc space-y-1 pl-5 text-slate-400">
          {project.highlights.slice(0, 3).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </details>
  );
}
