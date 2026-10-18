import { SectionHeading } from "@/components/ui/SectionHeading";
import type { SkillCategory } from "@/types/portfolio";

interface SkillsProps {
  categories: readonly SkillCategory[];
}

export function Skills({ categories }: SkillsProps) {
  return (
    <section id="skills" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="Technical expertise" title="Skills & Technologies" description="The technologies and engineering disciplines I use across business applications, integrations and open-source work." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div key={category.id} className="rounded-xl border border-slate-700/60 bg-[#111c2e] p-6">
              <h3 className="mb-4 font-semibold text-white">{category.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill) => <li key={skill} className="rounded-md bg-slate-800 px-3 py-1.5 text-xs leading-relaxed text-slate-300">{skill}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
