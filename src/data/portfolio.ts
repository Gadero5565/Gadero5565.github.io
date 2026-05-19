export const skills = [
  "Odoo Backend Development",
  "Python",
  "OWL Framework",
  "JavaScript",
  "XML Views",
  "QWeb Reports",
  "REST API Integrations",
  "JWT Authentication",
  "NestJS",
  "TypeScript",
  "Bug Fixing",
];

export const corporateProjects = [
  {
    title: "Attendance Integration with Odoo",
    type: "Confidential Corporate Project",
    summary:
      "Built an Odoo integration for pulling employee attendance from an external API, including token configuration, API documentation, backend processing, and an OWL statistics dashboard.",
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
      "Integrated an external website request system with Odoo, where requests were created outside Odoo and processed inside Odoo through secured backend workflows.",
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
      "Integrated Awqaf UAE APIs for Hijri calendar handling and created an OWL dashboard for managing Hijri calendar data and special date conversion cases.",
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
      "Built multiple OWL-based platforms and dashboards for employees, managers, attendance, news, notifications, and reporting.",
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
      "Worked on building, customizing, maintaining, and troubleshooting Odoo modules across different business areas, with a strong focus on backend logic, business workflows, reports, and solving real production issues.",
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

export const publicProjects = [
  {
    title: "Getmo Requests System",
    repo: "https://github.com/Gadero5565/getmo-requests-system",
    summary:
      "Odoo request management system based on dynamic request types, workflow handling, privilege-driven dashboards, and intelligent scheduling using a knapsack-greedy algorithm.",
    tech: ["Odoo", "Python", "OWL", "Algorithms", "Dashboards"],
  },
  {
    title: "Odoo OWL Crossword Game",
    repo: "https://github.com/Gadero5565/crossword_game",
    summary:
      "Crossword game built inside Odoo using the OWL framework, with Python backend logic for fetching and managing grid data.",
    tech: ["Odoo", "OWL", "JavaScript", "Python"],
  },
  {
    title: "Odoo OWL Maze Game",
    repo: "https://github.com/Gadero5565/maze_game",
    summary:
      "Interactive maze game built inside Odoo using OWL with gameplay, score tracking, and persistence. Built mainly to explore OWL capabilities inside Odoo.",
    tech: ["Odoo", "OWL", "JavaScript", "SCSS"],
  },
  {
    title: "Tic Tac Toe Game in Odoo OWL",
    repo: "https://github.com/Gadero5565/tick_tack_toe_game",
    summary:
      "Tic Tac Toe game built inside Odoo using OWL, with Python backend logic for storing scores and game results.",
    tech: ["Odoo", "OWL", "JavaScript", "Python"],
  },
  {
    title: "Full Auth NestJS App",
    repo: "https://github.com/Gadero5565/full_auth_nest_js",
    summary:
      "Backend authentication application built with NestJS, TypeScript, and JWT to practice and demonstrate backend authentication flows outside Odoo.",
    tech: ["NestJS", "TypeScript", "JWT", "Backend"],
  },
];
