import { ProjectCard } from "@/components/projects/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { PortfolioProject } from "@/types/portfolio";

interface FeaturedProjectsProps {
  projects: readonly PortfolioProject[];
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  const [primary, ...remaining] = projects;
  if (!primary) return null;

  return (
    <section id="projects" aria-label="Featured Projects" className="scroll-mt-24 bg-[#0d1728] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="Selected open source" title="Featured Projects" description="Applications and tools with publicly available source code, technical documentation and implementation details." />
        <ProjectCard project={primary} variant="spotlight" />
        {remaining.length > 0 ? (
          <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {remaining.map((project) => <ProjectCard key={project.id} project={project} />)}
          </div>
        ) : null}
      </div>
    </section>
  );
}
