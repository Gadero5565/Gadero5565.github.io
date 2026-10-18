interface TechTagsProps {
  tech: readonly string[];
}

export function TechTags({ tech }: TechTagsProps) {
  return (
    <ul aria-label="Technologies" className="flex flex-wrap gap-2">
      {tech.map((item) => (
        <li key={item} className="rounded-md border border-slate-700/60 bg-slate-800/80 px-2.5 py-1 text-xs font-medium text-slate-300">
          {item}
        </li>
      ))}
    </ul>
  );
}
