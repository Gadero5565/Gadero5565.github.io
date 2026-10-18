import type { PortfolioProject } from "@/types/portfolio";

/**
 * Project content audited against the public repositories on 2026-10-18.
 * Screenshots are references to real checked-in images, not generated mockups.
 * Keep future functionality distinct from working source code and releases.
 *
 * `tech`, `repo`, `title` and `summary` also support the current homepage.
 */
export const publicProjects: PortfolioProject[] = [
  {
    id: "odoo-module-explorer",
    title: "Odoo Module Explorer",
    summary:
      "Open-source, local source explorer and static analysis tool for Odoo 16–19 addons. Explore file-size and source-code treemaps; inspect Python/Odoo models, XML/QWeb, JavaScript/OWL, and CSS/SCSS; search symbols and examine model relationships.",
    problem:
      "Large custom addons make it difficult to understand source structure, file sizes, and relationships without manually reading many files.",
    engineering:
      "A read-only FastAPI backend and React interface visualize addon sources without running an Odoo server or database. Incremental caching helps refresh changed files.",
    highlights: [
      "Interactive directory, file, and source-code treemaps",
      "Odoo-aware Python, XML/QWeb, JavaScript/OWL, and CSS/SCSS inspection",
      "Source symbol search and model relationship insights",
      "Incremental refresh and Odoo Source / All Files analysis profiles",
      "Published v0.1.0 Python wheel; source analysis is local and read-only",
    ],
    tech: ["Python", "FastAPI", "React", "TypeScript", "ECharts"],
    repo: "https://github.com/Gadero5565/odoo-module-explorer",
    category: "featured",
    status: "released",
    odooVersions: [16, 17, 18, 19],
    release: { version: "v0.1.0", publishedAt: "2026-10-15" },
    links: [
      {
        kind: "github",
        label: "GitHub",
        href: "https://github.com/Gadero5565/odoo-module-explorer",
      },
      {
        kind: "release",
        label: "v0.1.0 release",
        href: "https://github.com/Gadero5565/odoo-module-explorer/releases/tag/v0.1.0",
      },
      {
        kind: "documentation",
        label: "Installation guide",
        href: "https://github.com/Gadero5565/odoo-module-explorer/blob/main/docs/INSTALLATION.md",
      },
    ],
    screenshot: {
      sourceUrl:
        "https://raw.githubusercontent.com/Gadero5565/odoo-module-explorer/7bd65718379f7cbcc520d85c1dad5c138ed11d36/docs/images/python-inspector.png",
      alt: "Odoo Module Explorer showing the Odoo Python model inspector and source treemap",
    },
    extraScreenshots: [
      {
        sourceUrl: "https://raw.githubusercontent.com/Gadero5565/odoo-module-explorer/7bd65718379f7cbcc520d85c1dad5c138ed11d36/docs/images/advanced-insights.png",
        alt: "Odoo Module Explorer Advanced Insights with global symbol search",
        label: "Advanced Insights screenshot",
      },
    ],
    notes:
      "Reports source file sizes, not compiled or minified Odoo web asset bundle sizes.",
  },
  {
    id: "odoo-whiteboard",
    title: "Odoo Whiteboard",
    summary:
      "Multi-board drawing and diagramming application built inside Odoo with OWL and Fabric.js. Includes shapes, connectors, mind maps, templates, autosave, PNG export, RTL support, and per-user/multi-company access controls.",
    problem:
      "Teams need lightweight visual boards inside Odoo without depending on a separate drawing service.",
    engineering:
      "An OWL client action uses bundled Fabric.js for the canvas and Odoo models and security rules for board persistence, ownership and optimistic concurrency protection.",
    highlights: [
      "Freehand drawing, shapes, arrows, diagrams, and mind maps",
      "Multi-board management, manual save, autosave, and PNG export",
      "User ownership, company isolation, and payload validation",
      "Odoo 17, 18 and 19 editions, plus a separate legacy Odoo 16 implementation",
    ],
    tech: ["Odoo", "OWL", "JavaScript", "Python", "Fabric.js"],
    repo: "https://github.com/Gadero5565/odoo_whiteboard",
    category: "featured",
    status: "maintained",
    odooVersions: [17, 18, 19],
    odooApp: "https://apps.odoo.com/apps/modules/19.0/odoo_whiteboard",
    links: [
      {
        kind: "github",
        label: "GitHub",
        href: "https://github.com/Gadero5565/odoo_whiteboard",
      },
      {
        kind: "odoo-apps",
        label: "Odoo Apps (19.0)",
        href: "https://apps.odoo.com/apps/modules/19.0/odoo_whiteboard",
      },
      {
        kind: "version",
        label: "Legacy Odoo 16 edition",
        href: "https://github.com/Gadero5565/odoo_v16_whiteboard",
      },
    ],
    screenshot: {
      sourceUrl:
        "https://raw.githubusercontent.com/Gadero5565/odoo_whiteboard/8e75c3a9dc8a93c35f2899513b26ec61eac48b1b/odoo_whiteboard/static/description/images/main_screenshot.png",
      alt: "Odoo Whiteboard canvas interface with drawing tools",
    },
    notes:
      "The main repository has 17.0, 18.0 and 19.0 branches; Odoo 16 is a separately maintained implementation.",
  },
  {
    id: "account-coa-hierarchy",
    title: "Chart of Accounts Hierarchy",
    summary:
      "Odoo accounting extension that adds an optional native hierarchy view to the Chart of Accounts, grouping real account records by account type with fold/unfold, lazy loading, and standard search and filter behavior.",
    problem:
      "Large charts of accounts are harder to navigate when the only available presentation is a flat list.",
    engineering:
      "The extension uses virtual account-type roots with real account.account children, preserving standard accounting records, filters, access controls and the default view.",
    highlights: [
      "Account Type → Account hierarchy using Odoo's native hierarchy UI",
      "Fold/unfold and lazy loading of account records",
      "Standard account navigation, filters and multi-company behavior",
      "Version-specific implementations and backend/frontend test suites",
    ],
    tech: ["Odoo", "Python", "JavaScript", "OWL", "Accounting"],
    repo: "https://github.com/Gadero5565/account-coa-hierarchy",
    category: "featured",
    status: "maintained",
    odooVersions: [17, 18, 19],
    odooApp: "https://apps.odoo.com/apps/modules/19.0/account_coa_hierarchy",
    links: [
      {
        kind: "github",
        label: "GitHub",
        href: "https://github.com/Gadero5565/account-coa-hierarchy",
      },
      {
        kind: "odoo-apps",
        label: "Odoo Apps (19.0)",
        href: "https://apps.odoo.com/apps/modules/19.0/account_coa_hierarchy",
      },
      {
        kind: "documentation",
        label: "Odoo 19 documentation",
        href: "https://github.com/Gadero5565/account-coa-hierarchy/blob/19.0/README.md",
      },
    ],
    screenshot: {
      sourceUrl:
        "https://raw.githubusercontent.com/Gadero5565/account-coa-hierarchy/742d0789deafdbefb6628141e33f6dede5ccb12d/docs/images/account-coa-hierarchy.png",
      alt: "Chart of Accounts Hierarchy grouping account records by account type",
    },
    notes: "Use the repository branch matching the Odoo major version.",
  },
  {
    id: "stockflow-backend",
    title: "StockFlow Backend",
    summary:
      "NestJS and PostgreSQL warehouse management API with JWT authentication, role-based permissions, products, warehouses, locations, inventory adjustments, stock movements, and transfer workflows.",
    problem:
      "Warehouse workflows require consistent inventory state and access-controlled APIs for different employee roles.",
    engineering:
      "NestJS modules, TypeORM entities and transactional transfer operations model inventory and warehouse behavior. JWT and role guards protect API access.",
    highlights: [
      "Login, refresh-token flow, user roles and protected endpoints",
      "Product, warehouse, and location management APIs",
      "Inventory read/adjust routes and stock-movement queries",
      "Transfer creation and ready/start/complete/cancel lifecycle routes",
    ],
    tech: ["NestJS", "TypeScript", "PostgreSQL", "TypeORM", "JWT"],
    repo: "https://github.com/Gadero5565/stockflow-backend",
    category: "featured",
    status: "in-development",
    links: [
      {
        kind: "github",
        label: "GitHub",
        href: "https://github.com/Gadero5565/stockflow-backend",
      },
    ],
    notes:
      "A Flutter client and future Odoo integration are separate efforts; barcode scanning, offline sync, and notifications are not claimed as implemented backend features.",
  },
  {
    id: "getmo-requests-system",
    title: "Getmo Requests System",
    summary:
      "Odoo request-management modules covering configurable request types, multi-stage workflows, management dashboards, and scheduled capacity-aware employee assignment.",
    problem:
      "Teams need a structured workflow to receive, assign, monitor and close internal service requests.",
    engineering:
      "Odoo models, scheduled actions and dashboards coordinate request states and assignments. The repository contains a priority-ordered greedy best-fit assignment implementation and additional algorithm experiments.",
    highlights: [
      "Dynamic request types, stages and assigned employees",
      "Manager dashboards and request-management workflows",
      "Scheduled employee assignment based on estimated duration and capacity",
      "Greedy, PSO and tabu-search experimentation in source modules",
    ],
    tech: ["Odoo", "Python", "OWL", "Scheduling", "Dashboards"],
    repo: "https://github.com/Gadero5565/getmo-requests-system",
    category: "other",
    status: "prototype",
    links: [
      {
        kind: "github",
        label: "GitHub",
        href: "https://github.com/Gadero5565/getmo-requests-system",
      },
    ],
    notes:
      "The README is minimal. Do not present an optimal knapsack solution or comparative benchmark results without verified evidence.",
  },
  {
    id: "full-auth-nestjs",
    title: "Full Auth NestJS API",
    summary:
      "NestJS authentication and authorization sample with registration, JWT login, protected profile access, bcrypt password hashing, and admin/manager role-based permissions.",
    problem:
      "Backend applications need an example of JWT-protected endpoints and role checks with persistent user records.",
    engineering:
      "NestJS controllers and guards use Passport JWT, role decorators, TypeORM and PostgreSQL to implement register/login and access control.",
    highlights: [
      "User registration and JWT login",
      "bcrypt password hashing and authenticated profile endpoint",
      "Manager/admin user listing and admin role changes",
      "Source implementation is on the master branch",
    ],
    tech: ["NestJS", "TypeScript", "PostgreSQL", "TypeORM", "JWT"],
    repo: "https://github.com/Gadero5565/full_auth_nest_js/tree/master",
    category: "other",
    status: "prototype",
    links: [
      {
        kind: "github",
        label: "Source (master branch)",
        href: "https://github.com/Gadero5565/full_auth_nest_js/tree/master",
      },
    ],
    notes:
      "The default main branch has little project content. The master branch contains the API and documentation; the sample is not presented as production-hardened.",
  },
  {
    id: "crossword-game",
    title: "Odoo OWL Crossword Game",
    summary:
      "Odoo 16 crossword module with word/clue management, configurable puzzle grids, an OWL gameplay interface, and solution checking.",
    problem: "Explore interactive puzzle UI and backend-managed game data inside Odoo.",
    engineering:
      "Python models and JSON controllers provide puzzle content to an OWL client action.",
    highlights: [
      "Configurable crossword grids and across/down clues",
      "Keyboard controls and interactive solution checking",
    ],
    tech: ["Odoo 16", "OWL", "JavaScript", "Python"],
    repo: "https://github.com/Gadero5565/crossword_game",
    category: "owl-experiment",
    status: "experiment",
    odooVersions: [16],
    links: [
      {
        kind: "github",
        label: "GitHub",
        href: "https://github.com/Gadero5565/crossword_game",
      },
    ],
  },
  {
    id: "maze-game",
    title: "Odoo OWL Maze Game",
    summary:
      "Interactive OWL maze game with procedurally generated mazes, movement and time tracking, and per-user score persistence.",
    problem: "Experiment with an interactive OWL application and persistent game scores.",
    engineering:
      "An OWL interface displays Kruskal-generated mazes and records user results using Odoo models.",
    highlights: [
      "Randomized maze generation and keyboard navigation",
      "Move/time tracking and user-linked score history",
    ],
    tech: ["Odoo", "OWL", "JavaScript", "SCSS"],
    repo: "https://github.com/Gadero5565/maze_game",
    category: "owl-experiment",
    status: "experiment",
    links: [
      {
        kind: "github",
        label: "GitHub",
        href: "https://github.com/Gadero5565/maze_game",
      },
    ],
  },
  {
    id: "tic-tac-toe-game",
    title: "Tic Tac Toe Game in Odoo OWL",
    summary:
      "Odoo 16 OWL Tic Tac Toe game with difficulty settings, current-user score tracking, and recent match history.",
    problem: "Demonstrate small interactive OWL components and user-scoped persistence.",
    engineering:
      "An OWL client action implements gameplay with backend models and security rules for user score records.",
    highlights: [
      "Easy, Smart and Impossible difficulty settings",
      "Current-user score history and recent results",
    ],
    tech: ["Odoo 16", "OWL", "JavaScript", "Python"],
    repo: "https://github.com/Gadero5565/tick_tack_toe_game",
    category: "owl-experiment",
    status: "experiment",
    odooVersions: [16],
    links: [
      {
        kind: "github",
        label: "GitHub",
        href: "https://github.com/Gadero5565/tick_tack_toe_game",
      },
    ],
  },
];

// Used by the Phase 3 featured-project section and Phase 5 compact sections.
export const featuredProjects = publicProjects.filter(
  (project) => project.category === "featured",
);
export const otherProjects = publicProjects.filter(
  (project) => project.category === "other",
);
export const owlExperiments = publicProjects.filter(
  (project) => project.category === "owl-experiment",
);
