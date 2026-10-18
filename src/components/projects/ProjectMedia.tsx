import type { PortfolioProject } from "@/types/portfolio";

interface ProjectMediaProps {
  project: PortfolioProject;
  spotlight?: boolean;
}

/**
 * All screenshots reference actual, public images in the corresponding GitHub repositories.
 * They are not mockups. The static site deliberately uses plain <img> elements because
 * screenshots live on GitHub and GitHub Pages has no image optimization server.
 */
export function ProjectMedia({ project, spotlight = false }: ProjectMediaProps) {
  const screenshot = project.screenshot;

  if (!screenshot) {
    if (project.id !== "stockflow-backend") return null;

    return (
      <div className="mb-6 overflow-hidden rounded-xl border border-slate-700/70 bg-[#0a1524]" aria-label="Selected StockFlow backend API routes">
        <div className="flex items-center justify-between border-b border-slate-700/70 px-4 py-3">
          <span className="font-mono text-xs font-semibold text-slate-200">StockFlow API</span>
          <span className="text-[11px] text-slate-400">Source-backed endpoints, not a UI screenshot</span>
        </div>
        <div className="space-y-2 px-4 py-4 font-mono text-xs">
          <p><span className="mr-3 text-emerald-300">POST</span><span className="text-slate-200">/auth/login</span></p>
          <p><span className="mr-4 text-sky-300">GET</span><span className="text-slate-200">/products</span></p>
          <p><span className="mr-3 text-emerald-300">POST</span><span className="text-slate-200">/inventory/adjust</span></p>
          <p><span className="mr-3 text-emerald-300">POST</span><span className="text-slate-200">/transfers/:id/complete</span></p>
        </div>
      </div>
    );
  }

  return (
    <figure className={spotlight ? "w-full" : "mb-6 w-full"}>
      <a
        href={screenshot.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View full-size screenshot: ${project.title}`}
        className="group/image block overflow-hidden rounded-xl border border-slate-700/70 bg-[#091321] transition-colors hover:border-cyan-300/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
      >
        {/* The exact original image is loaded from the author's public repository. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={screenshot.sourceUrl}
          alt={screenshot.alt}
          width={1360}
          height={640}
          loading={spotlight ? "eager" : "lazy"}
          decoding="async"
          referrerPolicy="no-referrer"
          className="aspect-[16/9] w-full object-contain transition-transform duration-300 motion-safe:group-hover/image:scale-[1.01]"
        />
      </a>
      <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-x-3 gap-y-2 text-xs text-slate-400">
        <span>Actual application screenshot</span>
        <a
          href={screenshot.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-sm font-medium text-cyan-300 hover:text-cyan-100 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
        >
          View full size <span aria-hidden="true">↗</span>
        </a>
      </figcaption>
      {spotlight && project.extraScreenshots?.length ? (
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs">
          {project.extraScreenshots.map((extra) => (
            <a
              key={extra.sourceUrl}
              href={extra.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-slate-300 underline-offset-4 hover:text-cyan-200 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              {extra.label} <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      ) : null}
    </figure>
  );
}
