import type { SkillCategory } from "@/types/portfolio";

export const skills = [
  "Odoo Backend Development",
  "Python",
  "PostgreSQL",
  "Odoo Security & Access Rules",
  "OWL Framework",
  "JavaScript",
  "XML Views",
  "QWeb Reports",
  "REST API Integrations",
  "API Security",
  "Automated Testing",
  "JWT Authentication",
  "NestJS",
  "TypeScript",
  "Debugging & Production Support",
];

// CONTENT LOCK: preserve these five case studies exactly as in the original.
// In later phases, only their visual presentation may change.
export const corporateProjects = [
  {
    title: "Attendance Integration with Odoo",
    type: "Confidential Corporate Project",
    summary:
      "Built an Odoo attendance integration with an external API, handling synchronization, authentication, validation, and reliable processing of attendance data.",
    highlights: [
      "Token generation module using Odoo config settings",
      "Employee attendance synchronization from external API",
      "Structured API documentation",
      "OWL dashboard for attendance statistics",
      "Backend logic for data handling and monitoring",
      "Problem solving around external API responses and attendance data mapping",
    ],
    tech: ["Odoo", "Python", "OWL", "JavaScript", "XML", "REST API"],
  },
  {
    title: "External Request System Integration",
    type: "Confidential Corporate Project",
    summary:
      "Developed a secured Odoo integration for exchanging business requests with an external system, including authentication, validation, error handling, and controlled data synchronization.",
    highlights: [
      "Requests created from website and sent to Odoo",
      "JWT-based security between systems",
      "Odoo workflow handling",
      "State-change API to notify the external system",
      "Backend validation and secure request processing",
      "Custom business logic for request lifecycle management",
    ],
    tech: ["Odoo", "Python", "REST API", "JWT", "Workflow Automation"],
  },
  {
    title: "Awqaf UAE Hijri Calendar Integration",
    type: "Confidential Corporate Project",
    summary:
      "Implemented Hijri calendar support within Odoo workflows, integrating date conversion and display requirements while preserving compatibility with existing business processes.",
    highlights: [
      "Awqaf UAE API integration",
      "OWL dashboard for Hijri calendar management",
      "Moment-Hijri usage for special conversion cases",
      "Backend handling of calendar data",
      "Custom logic for Gregorian/Hijri date conversion scenarios",
    ],
    tech: ["Odoo", "Python", "OWL", "Moment-Hijri", "REST API"],
  },
  {
    title: "Enterprise OWL Dashboards & Printing Tools",
    type: "Confidential Corporate Projects",
    summary:
      "Built interactive OWL dashboards and printable business views for operational data, combining backend aggregation with responsive frontend components and reporting workflows.",
    highlights: [
      "More than 5 OWL-based custom platforms",
      "Privilege-driven views for users, managers, and admins",
      "Employee-manager dashboards",
      "Python controllers serving dashboard data",
      "OWL printing tool using jsPDF",
      "Dynamic data views based on user permissions",
    ],
    tech: ["Odoo", "OWL", "Python Controllers", "JavaScript", "XML", "jsPDF"],
  },
  {
    title: "General Odoo Module Development, Maintenance & Problem Solving",
    type: "Corporate Odoo Experience",
    summary:
      "Developed and maintained custom Odoo modules, business workflows, reports, access controls, and integrations while debugging and resolving production issues across existing systems.",
    highlights: [
      "Customized and extended Accounting, HR, Projects, Tasks, Timesheets, Sales, Purchase, and E-commerce modules",
      "Built custom Odoo modules based on business requirements",
      "Handled bug fixing, production issue analysis, and module behavior troubleshooting",
      "Created and customized Excel and PDF reports for accounting and business operations",
      "Worked on backend workflows, access rules, record rules, computed fields, constraints, and automated actions",
      "Integrated Odoo backend with mobile applications and external systems",
      "Improved existing modules by adapting them to company-specific workflows",
      "Handled daily problem solving across functional and technical Odoo cases",
    ],
    tech: [
      "Odoo",
      "Python",
      "PostgreSQL",
      "XML",
      "QWeb",
      "Security Rules",
      "Reports",
      "Business Workflows",
    ],
  },
];

/** Future categorized skills presentation; the current `skills` display is unchanged. */
export const skillCategories: SkillCategory[] = [
  {
    id: "odoo",
    title: "Odoo Development",
    skills: [
      "Odoo Backend Development",
      "Odoo Security & Access Rules",
      "XML Views",
      "QWeb Reports",
      "Odoo Model Development",
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    skills: ["Python", "FastAPI", "NestJS", "TypeScript", "JWT Authentication"],
  },
  {
    id: "frontend",
    title: "Frontend and OWL",
    skills: ["OWL Framework", "JavaScript", "React"],
  },
  {
    id: "integrations",
    title: "APIs and Integrations",
    skills: ["REST API Integrations", "API Security"],
  },
  {
    id: "tools",
    title: "Databases, Testing and Tools",
    skills: [
      "PostgreSQL",
      "Automated Testing",
      "Debugging & Production Support",
      "GitHub Actions",
    ],
  },
];

// Retain the existing page.tsx import path; public projects are now typed and
// organized in a separate file without touching the homepage layout in Phase 2.
export { publicProjects } from "./projects";
