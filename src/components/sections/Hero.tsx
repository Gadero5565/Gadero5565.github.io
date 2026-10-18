const focusAreas = [
  { number: "01", title: "Odoo business workflows", detail: "Custom modules, access controls and integrations" },
  { number: "02", title: "Backend services", detail: "Python, NestJS, APIs and PostgreSQL" },
  { number: "03", title: "Developer tools", detail: "Source inspection, visualization and automation" },
] as const;

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden border-b border-white/10">
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-cyan-400/[0.06] blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-20 lg:grid-cols-[1.3fr_0.7fr] lg:items-center lg:gap-16 lg:py-28">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.19em] text-cyan-300 sm:text-sm">
            Senior Odoo Backend Developer · Software Engineer
          </p>
          <h1 id="hero-heading" className="max-w-3xl text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[3.45rem]">
            Building reliable business systems and developer tools.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            I develop custom Odoo modules, secure API integrations, business workflows and OWL applications. I also build backend services with Python, NestJS, TypeScript and PostgreSQL.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center justify-center rounded-lg bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1220]">
              Explore projects <span aria-hidden="true" className="ml-2">↗</span>
            </a>
            <a href="https://github.com/Gadero5565" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-lg border border-slate-600 px-5 py-3 text-sm font-semibold text-slate-100 transition-colors hover:border-cyan-300 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
              GitHub <span aria-hidden="true" className="ml-2">↗</span>
            </a>
          </div>
        </div>
        <aside aria-label="Engineering focus areas" className="rounded-2xl border border-slate-700/70 bg-slate-900/65 p-6 shadow-xl shadow-black/10 sm:p-7">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">Engineering focus</p>
          <ul className="space-y-5">
            {focusAreas.map(({ number, title, detail }) => (
              <li key={number} className="flex gap-4 border-b border-slate-700/70 pb-5 last:border-b-0 last:pb-0">
                <span className="pt-0.5 font-mono text-sm text-cyan-300">{number}</span>
                <div>
                  <p className="font-semibold text-slate-100">{title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-400">{detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
