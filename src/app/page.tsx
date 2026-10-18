import { Contact } from "@/components/sections/Contact";
import { CorporateExperience } from "@/components/sections/CorporateExperience";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Hero } from "@/components/sections/Hero";
import { OtherProjects } from "@/components/sections/OtherProjects";
import { Skills } from "@/components/sections/Skills";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { corporateProjects, skillCategories } from "@/data/portfolio";
import { featuredProjects, otherProjects, owlExperiments } from "@/data/projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b1220] text-slate-100">
      <SiteHeader />
      <main id="top">
        <Hero />
        <FeaturedProjects projects={featuredProjects} />
        <CorporateExperience projects={corporateProjects} />
        <OtherProjects projects={otherProjects} experiments={owlExperiments} />
        <Skills categories={skillCategories} />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
