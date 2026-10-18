import { OWLExperimentCard } from "@/components/projects/OWLExperimentCard";
import { SecondaryProjectCard } from "@/components/projects/SecondaryProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { PortfolioProject } from "@/types/portfolio";

interface OtherProjectsProps {
  projects: readonly PortfolioProject[];
  experiments: readonly PortfolioProject[];
}

export function OtherProjects({ projects, experiments }: OtherProjectsProps) {
  if (!projects.length && !experiments.length) return null;

  return (
    <section id="open-source" className="scroll-mt-24 border-y border-white/10 bg-[#0d1728] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="More work"
          title="Other Open-Source Projects"
          description="Request-management and authentication projects, alongside smaller OWL experiments built inside Odoo."
        />

        {projects.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project) => <SecondaryProjectCard key={project.id} project={project} />)}
          </div>
        ) : null}

        {experiments.length > 0 ? (
          <div className={projects.length ? "mt-14 border-t border-slate-700/60 pt-10 sm:mt-16" : ""}>
            <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="text-xl font-bold tracking-tight text-white">OWL Experiments</h3>
              <span className="text-xs text-slate-400">Smaller Odoo frontend projects</span>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {experiments.map((project) => <OWLExperimentCard key={project.id} project={project} />)}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
