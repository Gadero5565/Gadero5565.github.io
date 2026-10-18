# Gadeer Mahmoud — Developer Portfolio

Personal portfolio of **Gadeer Mahmoud**, a Senior Odoo Backend Developer and Software Engineer working with Odoo, Python, OWL, backend APIs, PostgreSQL, and open-source developer tools.

**Website:** [gadero5565.github.io](https://gadero5565.github.io/)  
**GitHub:** [Gadero5565](https://github.com/Gadero5565)  
**LinkedIn:** [Gadeer Mahmoud](https://www.linkedin.com/in/gadeer-mahmoud-6447b7151)

## What's on the site

The portfolio presents:

- **Featured projects:** open-source software with implementation details, repository links, supported versions, and real screenshots when available.
- **Corporate case studies:** selected professional Odoo work. Descriptions are intentionally limited to the approved public content; proprietary code and client assets are not published.
- **Other open-source projects:** backend and request-management projects plus smaller OWL experiments.
- **Skills and contact:** categorized technical skills and professional contact links.

### Featured projects

| Project | What it demonstrates | Source and distribution |
| --- | --- | --- |
| **Odoo Module Explorer** | Local, read-only static analysis and visualization for Odoo 16–19 addons; Python/FastAPI backend with React/TypeScript frontend | [Repository](https://github.com/Gadero5565/odoo-module-explorer) · [v0.1.0 release](https://github.com/Gadero5565/odoo-module-explorer/releases/tag/v0.1.0) |
| **Odoo Whiteboard** | OWL/Fabric.js boards, diagramming, persistence, access controls, and RTL support; dedicated branches for Odoo 17–19 | [Repository](https://github.com/Gadero5565/odoo_whiteboard) · [Odoo Apps (19.0)](https://apps.odoo.com/apps/modules/19.0/odoo_whiteboard) |
| **Chart of Accounts Hierarchy** | Odoo native hierarchy view, account-type grouping, search/filter integration, and version-specific Odoo 17–19 implementations | [Repository](https://github.com/Gadero5565/account-coa-hierarchy) · [Odoo Apps (19.0)](https://apps.odoo.com/apps/modules/19.0/account_coa_hierarchy) |
| **StockFlow Backend** | NestJS/PostgreSQL APIs for authentication, users, warehouses, inventory, movements, and transfers; actively developed | [Repository](https://github.com/Gadero5565/stockflow-backend) |

**Version note:** The Odoo 16 Whiteboard is a [separate legacy implementation](https://github.com/Gadero5565/odoo_v16_whiteboard), not another branch of the main Whiteboard application.

Other public work includes [Getmo Requests System](https://github.com/Gadero5565/getmo-requests-system), [Full Auth NestJS](https://github.com/Gadero5565/full_auth_nest_js/tree/master), and the Odoo OWL [Crossword](https://github.com/Gadero5565/crossword_game), [Maze](https://github.com/Gadero5565/maze_game), and [Tic Tac Toe](https://github.com/Gadero5565/tick_tack_toe_game) projects. The Full Auth source and documentation are on its **`master`** branch.

> Portfolio descriptions distinguish released software, maintained addons, ongoing work, prototypes, and experiments. A source-level feature description is not a claim of independently rerun tests or production readiness.

## Technology and hosting

- Next.js 16 (App Router, **static export**)
- React 19 and TypeScript
- Tailwind CSS 4
- GitHub Pages, deployed with GitHub Actions

The site is a **static portfolio**. It does not require a database, backend API, or runtime GitHub API access. Screenshots of featured applications are sourced from actual public repositories, currently using URLs pinned to specific commits, so those images need a network connection to load.

## Local development

**Requirements:** Node.js 22 (matching the deployment workflow) and npm.

```bash
npm ci
npm run dev
```

Visit **http://localhost:3000** to view the portfolio locally.

### Validation and production build

```bash
npm run lint
npx tsc --noEmit
npm run build
node scripts/verify-export.mjs
```

`npm run build` runs the Next.js static export. `scripts/verify-export.mjs` verifies that the exported HTML, internal navigation, required assets, social metadata, and original corporate content meet the release checks. The output is generated in **`out/`** and is the directory uploaded by the GitHub Pages workflow. For local testing, use `npm run dev`; do not rely on a Next.js server deployment for this static-export configuration.

## Code and content structure

```text
.github/workflows/deploy.yml    # GitHub Pages build and deployment
public/                         # Static files, social preview, sitemap and robots.txt
src/
  app/                          # Homepage, global styles and metadata
  components/
    layout/                      # Site header and footer
    projects/                    # Reusable cards, links and project visuals
    sections/                    # Hero, projects, experience, skills and contact
    ui/                          # Shared presentation components
  data/
    portfolio.ts                 # Skills and approved corporate case studies
    projects.ts                  # Public projects and their presentation metadata
    profile.ts                   # Site identity, contact links and navigation
  types/portfolio.ts             # Typed project data contracts
next.config.ts                  # output: 'export'
```

### Maintaining portfolio content

- Update **`src/data/projects.ts`** to add projects or correct their status, features, Odoo versions, links, and screenshot references. Verify changes against the actual public repositories.
- Keep **`src/data/portfolio.ts` corporate case-study entries exactly unchanged**, including titles, descriptions, highlights, and technology lists. Only their visual presentation may change without separate approval.
- Update **`src/data/profile.ts`** for site identity or contact links. The CV action remains disabled until an approved, current résumé PDF is supplied and explicitly configured.
- Store approved local branding files under **`public/images/branding/`**. The social-sharing preview is `public/images/branding/og-preview.png`.
- Never replace actual project screenshots with fabricated application screens or include confidential employer/client materials.

## Deployment

The existing workflow at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml):

1. Validates pull requests targeting `main`; runs deployment when changes reach `main` (or when manually dispatched on `main`).
2. Sets up Node.js 22 and installs dependencies with `npm ci`.
3. Runs ESLint, TypeScript validation, and `npm run build`.
4. Validates the generated `out/` directory and confirms the five corporate case studies remain unchanged.
5. Publishes the artifact to GitHub Pages **only when all checks pass and the event runs on `main`**. Pull requests never deploy.

Review and validate changes **before** merging or pushing to `main`, because a push triggers deployment. Prefer a feature branch and pull request for portfolio improvements. Deployment is not part of routine documentation edits.

## Contact

- [GitHub](https://github.com/Gadero5565)
- [LinkedIn](https://www.linkedin.com/in/gadeer-mahmoud-6447b7151)
- [Live portfolio](https://gadero5565.github.io/)

For project-specific installation, compatibility, or license details, consult the linked project's own repository.
