import { corporateProjects, publicProjects, skills } from "@/data/portfolio";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-3 text-base font-medium text-slate-300">
          Gadeer Saleh Mahmoud
        </p>

        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
          Senior Odoo Backend Developer
        </p>

        <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
          Building reliable Odoo backend systems, REST API integrations, OWL
          dashboards.
        </h1>

        <p className="mt-6 max-w-3xl text-lg text-slate-300">
          I specialize in backend workflows, API security,
          business dashboards, reports, and integration-heavy enterprise
          systems. I also work with NestJS, TypeScript, and JWT-based backend
          applications.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://github.com/Gadero5565"
            className="rounded-full bg-cyan-400 px-5 py-3 font-semibold text-slate-950"
          >
            View GitHub
          </a>

          <a
            href="#projects"
            className="rounded-full border border-slate-700 px-5 py-3 font-semibold text-slate-100"
          >
            View Projects
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl font-bold">Core Skills</h2>

        <div className="mt-6 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl font-bold">
          Confidential Corporate Case Studies
        </h2>
        <p className="mt-3 max-w-3xl text-slate-400">
          These projects were delivered under company contracts, so client
          names, screenshots, URLs, and private implementation details are
          intentionally not shared.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {corporateProjects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <p className="text-sm text-cyan-400">{project.type}</p>
              <h3 className="mt-2 text-xl font-semibold">{project.title}</h3>
              <p className="mt-3 text-slate-300">{project.summary}</p>

              <ul className="mt-4 list-inside list-disc space-y-1 text-sm text-slate-400">
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl font-bold">Public Projects</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {publicProjects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-3 text-slate-300">{project.summary}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.repo}
                className="mt-5 inline-block text-sm font-semibold text-cyan-400"
              >
                View Repository →
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
