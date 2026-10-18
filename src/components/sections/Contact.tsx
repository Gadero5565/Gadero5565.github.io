import { profile } from "@/data/profile";

const contactLinks = [
  { label: "LinkedIn", href: profile.linkedInUrl, external: true },
  { label: "GitHub", href: profile.githubUrl, external: true },
  { label: "Email me", href: `mailto:${profile.email}`, external: false },
] as const;

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-5 pb-20 sm:px-8 sm:pb-24">
      <div className="mx-auto max-w-6xl rounded-2xl border border-cyan-400/20 bg-[#132339] px-6 py-10 sm:px-10 sm:py-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Contact</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">Let&apos;s connect</h2>
        <p className="mt-4 max-w-2xl leading-7 text-slate-300">
          I&apos;m interested in Odoo backend development, custom modules, integrations, OWL applications, and backend engineering opportunities. Feel free to connect with me or explore my open-source work.
        </p>
        <a href={`mailto:${profile.email}`} className="mt-4 inline-block break-all rounded-sm text-sm text-slate-200 underline decoration-slate-500 underline-offset-4 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
          {profile.email}
        </a>
        <div className="mt-7 flex flex-wrap gap-3">
          {contactLinks.map(({ label, href, external }, index) => (
            <a
              key={href}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className={`inline-flex min-h-11 items-center rounded-lg border px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${index === 0 ? "border-cyan-300 bg-cyan-300 text-slate-950 hover:bg-cyan-200" : "border-slate-600 text-slate-100 hover:border-cyan-300 hover:text-cyan-300"}`}
            >
              {label} <span aria-hidden="true" className="ml-2">↗</span>
            </a>
          ))}
          {profile.cvUrl ? (
            <a href={profile.cvUrl} download className="inline-flex min-h-11 items-center rounded-lg border border-slate-600 px-5 py-3 text-sm font-semibold text-slate-100 hover:border-cyan-300 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
              Download CV ↓
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
