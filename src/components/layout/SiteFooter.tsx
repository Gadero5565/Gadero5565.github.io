import { navigation, profile } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#09101d]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-9 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-slate-100">{profile.name}<span className="text-cyan-300">.</span></p>
          <p className="mt-1 text-sm text-slate-400">{profile.headline}</p>
        </div>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-4 gap-y-3 text-sm text-slate-400">
          {navigation.map(({ href, label }) => (
            <a key={href} href={href} className="rounded-sm hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">{label}</a>
          ))}
        </nav>
        <a href="#top" className="self-start rounded-sm text-sm text-cyan-300 hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 md:self-auto">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
