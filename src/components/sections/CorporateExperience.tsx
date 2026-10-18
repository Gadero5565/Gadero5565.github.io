import { CorporateCaseStudyCard } from "@/components/projects/CorporateCaseStudyCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { corporateProjects } from "@/data/portfolio";

type CorporateProject = (typeof corporateProjects)[number];

interface CorporateExperienceProps {
  projects: readonly CorporateProject[];
}

export function CorporateExperience({ projects }: CorporateExperienceProps) {
  return (
    <section id="experience" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Professional experience"
          title="Confidential Corporate Case Studies"
          description="Selected enterprise Odoo projects completed in professional environments. Due to company contracts and confidentiality requirements, client names, screenshots, URLs, source code, and private implementation details are not publicly shared."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <CorporateCaseStudyCard
              key={project.title}
              project={project}
              index={index}
              total={projects.length}
              wide={index === projects.length - 1 && projects.length % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
