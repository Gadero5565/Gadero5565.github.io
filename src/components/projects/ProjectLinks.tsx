import type { ProjectLink } from "@/types/portfolio";

interface ProjectLinksProps {
  links: readonly ProjectLink[];
}

export function ProjectLinks({ links }: ProjectLinksProps) {
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-2">
      {links.map(({ href, label }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 rounded-sm text-sm font-semibold text-cyan-300 underline-offset-4 transition-colors hover:text-cyan-100 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
        >
          {label}<span aria-hidden="true">↗</span>
        </a>
      ))}
    </div>
  );
}
