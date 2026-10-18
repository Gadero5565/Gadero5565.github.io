/** Public contact and site identity, shared by navigation, hero, contact, and SEO. */
export const profile = {
  name: "Gadeer Mahmoud",
  siteUrl: "https://gadero5565.github.io",
  role: "Senior Odoo Backend Developer",
  headline: "Senior Odoo Backend Developer & Software Engineer",
  description:
    "Gadeer Mahmoud is a Senior Odoo Backend Developer and Software Engineer building custom Odoo modules, Python and NestJS backend systems, OWL applications, and open-source developer tools.",
  githubUrl: "https://github.com/Gadero5565",
  linkedInUrl: "https://www.linkedin.com/in/gadeer-mahmoud-6447b7151",
  email: "gadero5655@gmail.com",
  /** Provide an approved, current PDF before making a CV download visible. */
  cvUrl: null as string | null,
} as const;

export const navigation = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Open source", href: "#open-source" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;
