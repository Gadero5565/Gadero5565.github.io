/** Project presentation tiers used by the later homepage redesign. */
export type ProjectCategory = "featured" | "other" | "owl-experiment";

/** A repository's status is not the same as a verified production deployment. */
export type ProjectStatus =
  | "released"
  | "maintained"
  | "in-development"
  | "prototype"
  | "experiment";

export type OdooMajorVersion = 16 | 17 | 18 | 19;

export type ProjectLinkKind =
  | "github"
  | "release"
  | "documentation"
  | "odoo-apps"
  | "version"
  | "screenshot";

export interface ProjectLink {
  label: string;
  href: string;
  kind: ProjectLinkKind;
}

/**
 * Existing images in the public repositories. These are source references, not
 * local image paths. Approved images can be copied into public/ in Phase 4.
 */
export interface ProjectScreenshot {
  sourceUrl: string;
  alt: string;
}

export interface ProjectScreenshotLink extends ProjectScreenshot {
  label: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  summary: string;
  /** Concise problem and engineering approach for future project cards/details. */
  problem: string;
  engineering: string;
  highlights: readonly string[];
  tech: readonly string[];
  repo: string;
  category: ProjectCategory;
  status: ProjectStatus;
  links: readonly ProjectLink[];
  odooVersions?: readonly OdooMajorVersion[];
  /** This is the latest release referenced in the audited repository, if any. */
  release?: {
    version: string;
    publishedAt: string;
  };
  screenshot?: ProjectScreenshot;
  /** Additional genuine repository screenshots offered as external full-size links. */
  extraScreenshots?: readonly ProjectScreenshotLink[];
  /** Backwards-compatible link used by the existing page.tsx. */
  odooApp?: string;
  /** Version, implementation, or publication caveat displayed in future UI. */
  notes?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: readonly string[];
}
