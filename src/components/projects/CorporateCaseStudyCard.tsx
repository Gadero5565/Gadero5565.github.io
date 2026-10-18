import { corporateProjects } from "@/data/portfolio";
import { TechTags } from "./TechTags";

type CorporateProject = (typeof corporateProjects)[number];

interface CorporateCaseStudyCardProps {
  project: CorporateProject;
  index: number;
  total: number;
  wide?: boolean;
}

/** Presentation only. All text is rendered verbatim from the content-locked source. */
export function CorporateCaseStudyCard({
  project,
  index,
  total,
  wide = false,
}: CorporateCaseStudyCardProps) {
  const titleId = `case-study-${index + 1}`;

  return (
    <article
      aria-labelledby={titleId}
      className={`relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-700/70 bg-[#111c2e] p-6 transition-colors hover:border-slate-500/90 sm:p-8 ${wide ? "md:col-span-2" : ""}`}
    >
      <div aria-hidden="true" className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-cyan-400/70 to-cyan-400/0" />

      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-cyan-300">{project.type}</p>
        <span aria-hidden="true" className="font-mono text-xs text-slate-500">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>

      <h3 id={titleId} className="mt-4 text-xl font-bold leading-snug tracking-tight text-white sm:text-[1.35rem]">
        {project.title}
      </h3>

      <div className={`mt-4 grid flex-1 gap-4 ${wide ? "lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-12" : ""}`}>
        <p className="leading-7 text-slate-300">{project.summary}</p>
        <ul className={`list-outside list-disc space-y-2 pl-5 text-sm leading-6 text-slate-400 marker:text-cyan-400 ${wide ? "lg:border-l lg:border-slate-700/60 lg:pl-9" : ""}`}>
          {project.highlights.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>

      <div className="mt-7 border-t border-slate-700/60 pt-5">
        <TechTags tech={project.tech} />
      </div>
    </article>
  );
}
