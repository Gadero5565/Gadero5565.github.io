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
          Building reliable Odoo systems, secure integrations, and OWL
          applications.
        </h1>

        <p className="mt-6 max-w-3xl text-lg text-slate-300">
          I specialize in Odoo backend development, business workflows, API
          integrations, security, reports, and OWL-based applications. I build
          and maintain custom Odoo modules for real business requirements, and
          also work with NestJS, TypeScript, and JWT-based backend systems.
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
          Selected enterprise Odoo projects completed in professional
          environments. Due to company contracts and confidentiality
          requirements, client names, screenshots, URLs, source code, and
          private implementation details are not publicly shared.
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

              <div className="mt-5 flex flex-wrap gap-4">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
                >
                  GitHub Repository →
                </a>

                {"odooApp" in project && project.odooApp && (
                  <a
                    href={project.odooApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
                  >
                    Odoo Apps →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 md:p-10">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
            Contact
          </p>

          <h2 className="mt-3 text-3xl font-bold">Let&apos;s Connect</h2>

          <p className="mt-4 max-w-2xl text-slate-300">
            I&apos;m interested in Odoo backend development, custom modules,
            integrations, OWL applications, and backend engineering
            opportunities. Feel free to connect with me or explore my
            open-source work.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/gadeer-mahmoud-6447b7151"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/Gadero5565"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-slate-500"
            >
              GitHub
            </a>

            <a
              href="mailto:gadero5655@gmail.com"
              className="rounded-full border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-slate-500"
            >
              Email Me
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
