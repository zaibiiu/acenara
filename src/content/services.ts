export type Offering = { id: string; name: string; description: string };
export type Service = {
  slug: string;
  number: string;
  short: string;
  title: string;
  headline: string;
  intro: string;
  outcome: string;
  visual: string;
  examples: string[];
  capabilities: string[];
  approach: string[];
  offerings: Offering[];
};

export const services: Service[] = [
  {
    slug: "ai-automation",
    number: "01",
    short: "AI & automation",
    title: "AI & Automation",
    headline: "Less repetitive work. More room to think.",
    intro:
      "Give your people useful assistance and your processes a clearer path. We shape AI and automation around real tasks, with human review where decisions need it.",
    outcome: "Turn disconnected tasks into considered, connected workflows.",
    visual: "ai",
    examples: [
      "An assistant that finds answers in approved company documents and shows the source.",
      "A document intake flow that extracts fields, flags uncertainty, and routes exceptions for review.",
      "A lead enquiry workflow that updates your CRM and prepares a response for approval.",
    ],
    capabilities: [
      "LLM integration",
      "Retrieval workflows",
      "API orchestration",
      "Evaluation scenarios",
      "Human approval",
      "Structured extraction",
    ],
    approach: [
      "Map the task and agree what a useful result looks like.",
      "Prototype on representative examples, including failures and exceptions.",
      "Integrate with access controls, review points, and a plan for monitoring.",
    ],
    offerings: [
      {
        id: "strategy",
        name: "AI Strategy & Consulting",
        description:
          "Identify tasks where AI could help, assess the data available, and define a practical pilot with measurable acceptance criteria.",
      },
      {
        id: "generative-ai",
        name: "Generative AI",
        description:
          "Connect language models to specific drafting, summarization, and content workflows with clear instructions and review boundaries.",
      },
      {
        id: "assistants",
        name: "AI Chatbots & Assistants",
        description:
          "Design conversational tools around a defined knowledge base, sensible escalation, and honest handling of questions they cannot answer.",
      },
      {
        id: "predictive",
        name: "Predictive Analytics",
        description:
          "Explore forecasting and classification needs, assess whether historical data supports the task, and compare results with simple baselines.",
      },
      {
        id: "business-automation",
        name: "Business Process Automation",
        description:
          "Connect multi-stage business processes so that approvals, updates, and handoffs follow explicit rules instead of manual copying.",
      },
      {
        id: "documents",
        name: "Document Processing",
        description:
          "Structure document intake, extraction, validation, and review so information reaches the right system with exceptions visible.",
      },
      {
        id: "workflows",
        name: "Workflow Automation",
        description:
          "Link forms, notifications, scheduled tasks, and business tools through maintainable integrations with retries and clear failure reporting.",
      },
      {
        id: "integration",
        name: "AI Integration for Existing Software",
        description:
          "Add focused assistance to an existing product through its APIs and permissions, preserving the business rules people already depend on.",
      },
    ],
  },
  {
    slug: "software-development",
    number: "02",
    short: "Design & development",
    title: "Web, Desktop & Mobile",
    headline: "Software that makes the complex feel simple.",
    intro:
      "From a first product to an established platform, we bring product thinking, interface design, and engineering into one connected conversation.",
    outcome:
      "Build a product people understand and a foundation you can develop.",
    visual: "desktop",
    examples: [
      "A service booking platform with availability, customer accounts, and an operations dashboard.",
      "A SaaS workspace with subscription journeys and role-based access.",
      "A commerce experience connecting product discovery, checkout, and order management.",
    ],
    capabilities: [
      "React & Next.js",
      "TypeScript",
      "API integration",
      "Responsive interfaces",
      "Data modeling",
      "Product prototyping",
    ],
    approach: [
      "Define the essential user journey and the first useful release.",
      "Prototype critical screens and agree the technical architecture.",
      "Deliver working increments with testing, documentation, and handover.",
    ],
    offerings: [
      {
        id: "custom-software",
        name: "Custom Software Development",
        description:
          "Shape bespoke tools around your operations, from requirements and data models to user journeys and the integrations that connect them.",
      },
      {
        id: "web-apps",
        name: "Web Application Development",
        description:
          "Build responsive browser-based products with thoughtful navigation, clear permissions, and interfaces that handle loading, errors, and empty states.",
      },
      {
        id: "desktop",
        name: "Desktop Application Development",
        description:
          "Plan desktop experiences for focused business tasks, with the right approach to local data, updates, and system integration.",
      },
      {
        id: "mobile",
        name: "Mobile Apps (iOS & Android)",
        description:
          "Design touch-first journeys, practical offline behavior, and reliable connections to the services behind an iOS or Android application.",
      },
      {
        id: "saas",
        name: "SaaS Development",
        description:
          "Develop account onboarding, workspace management, subscription journeys, and product administration around a clear service model.",
      },
      {
        id: "websites",
        name: "Website Design & Development",
        description:
          "Create a clear digital presence with considered content, responsive design, accessible interactions, and a practical publishing workflow.",
      },
      {
        id: "commerce",
        name: "E-Commerce Development",
        description:
          "Connect product browsing, cart behavior, checkout handoff, and order workflows into a shopping experience that feels coherent.",
      },
      {
        id: "enterprise",
        name: "Enterprise Applications",
        description:
          "Translate complex requirements into structured workflows, role-based access, system integrations, and maintainable administrative tools.",
      },
      {
        id: "apis",
        name: "API Development & Integration",
        description:
          "Define clear contracts between systems, including authentication, validation, errors, and documentation for future maintainers.",
      },
      {
        id: "ux",
        name: "UI/UX Design",
        description:
          "Map user tasks, simplify information architecture, and design readable, accessible interfaces with complete interaction states.",
      },
      {
        id: "prototyping",
        name: "Product Design & Prototyping",
        description:
          "Turn an early idea into a testable product flow, using prototypes to resolve assumptions before committing to implementation.",
      },
      {
        id: "cms",
        name: "CMS Development",
        description:
          "Structure editable content and publishing permissions so your team can make routine updates without touching application code.",
      },
      {
        id: "modernization",
        name: "Website and Application Modernization",
        description:
          "Improve an existing experience in planned stages, addressing usability, maintainability, performance, and the risks of migration.",
      },
    ],
  },
  {
    slug: "cloud-data",
    number: "03",
    short: "Cloud & data",
    title: "Cloud & Data",
    headline: "A clearer picture. A stronger foundation.",
    intro:
      "Make the information behind your business easier to use, and the systems behind your software easier to operate. Begin with what the workload actually needs.",
    outcome:
      "Connect infrastructure decisions to the people and products they support.",
    visual: "cloud",
    examples: [
      "A reporting workspace bringing operational data into one understandable view.",
      "An automated release pipeline with repeatable checks and a documented rollback path.",
      "A staged migration that validates records before switching a business-critical workflow.",
    ],
    capabilities: [
      "Deployment pipelines",
      "SQL data modeling",
      "API data flows",
      "Dashboard design",
      "Infrastructure planning",
      "Operational visibility",
    ],
    approach: [
      "Review the workload, data sources, costs, and operational constraints.",
      "Agree the target architecture and a staged migration or delivery plan.",
      "Validate deployment and recovery procedures, then document ownership.",
    ],
    offerings: [
      {
        id: "migration",
        name: "Cloud Migration",
        description:
          "Plan a staged move with dependency mapping, data validation, cutover criteria, and a clear fallback before a workload changes home.",
      },
      {
        id: "management",
        name: "Cloud Management",
        description:
          "Review environments, access, usage, and operating practices so the infrastructure has a clear owner and predictable maintenance.",
      },
      {
        id: "devops",
        name: "DevOps",
        description:
          "Improve the connection between development and operations with repeatable environments, useful observability, and documented release practices.",
      },
      {
        id: "cicd",
        name: "CI/CD Implementation",
        description:
          "Create automated checks and release steps appropriate to your application, with environment separation and recoverable deployment changes.",
      },
      {
        id: "deployment",
        name: "Application Deployment",
        description:
          "Prepare configuration, domains, environment variables, and release verification so a finished application reaches users reliably.",
      },
      {
        id: "intelligence",
        name: "Business Intelligence",
        description:
          "Define the questions your reporting should answer, agree metric definitions, and present the results with meaningful context.",
      },
      {
        id: "engineering",
        name: "Data Engineering",
        description:
          "Design ingestion and transformation workflows with explicit schemas, validation checks, and visibility into failed or incomplete records.",
      },
      {
        id: "dashboards",
        name: "Dashboards & Reporting",
        description:
          "Turn relevant data into clear dashboards with useful filtering, sensible defaults, and accessible charts that support everyday decisions.",
      },
      {
        id: "databases",
        name: "Database Design & Optimization",
        description:
          "Model your domain, review queries and indexes, and plan migrations around integrity, access patterns, and expected growth.",
      },
      {
        id: "architecture",
        name: "Cloud Architecture Consulting",
        description:
          "Compare deployment options against reliability, operating effort, and budget, documenting the trade-offs behind the chosen approach.",
      },
    ],
  },
  {
    slug: "security-growth-support",
    number: "04",
    short: "Security, growth & support",
    title: "Security, Growth & IT",
    headline: "Keep your digital business moving forward.",
    intro:
      "Good software needs care beyond its launch. We help scope practical improvements in security, discoverability, connected systems, and ongoing technical support.",
    outcome: "Give your platform a considered plan for improvement and care.",
    visual: "security",
    examples: [
      "A technical website review with prioritized accessibility, performance, and SEO fixes.",
      "A CRM integration that connects qualified enquiries with a visible follow-up process.",
      "An application access review with documented issues and a practical remediation backlog.",
    ],
    capabilities: [
      "Access reviews",
      "Technical SEO",
      "CRM workflows",
      "System integration",
      "Maintenance planning",
      "Application assessment",
    ],
    approach: [
      "Agree the scope, access permissions, and the business priorities.",
      "Assess the current setup and prioritize practical changes.",
      "Implement the agreed work and define support boundaries and response expectations.",
    ],
    offerings: [
      {
        id: "security-consulting",
        name: "Cybersecurity Consulting",
        description:
          "Review application risks, access boundaries, and operational practices within an agreed scope, then turn findings into an actionable improvement plan.",
      },
      {
        id: "assessment",
        name: "Vulnerability Assessment",
        description:
          "Assess authorized systems for common weaknesses, document findings with context, and agree a prioritized remediation and rechecking process.",
      },
      {
        id: "monitoring",
        name: "Security Monitoring",
        description:
          "Scope appropriate signals, alerts, and escalation procedures for your application. Monitoring coverage and response arrangements are agreed per engagement.",
      },
      {
        id: "consulting",
        name: "IT Consulting",
        description:
          "Help compare tools, assess existing systems, and make technical decisions with an explicit view of costs and operational responsibilities.",
      },
      {
        id: "legacy",
        name: "Legacy Modernization",
        description:
          "Identify business-critical dependencies and improve older systems incrementally, with validation and handover built into the migration plan.",
      },
      {
        id: "crm",
        name: "Digital Marketing & CRM",
        description:
          "Connect website enquiries, campaign journeys, and customer records so your business can follow up with relevant, organized communication.",
      },
      {
        id: "seo",
        name: "SEO & Technical SEO",
        description:
          "Improve crawlability, content structure, metadata, internal navigation, and page performance without promising a particular search ranking.",
      },
      {
        id: "marketing",
        name: "Marketing Automation",
        description:
          "Create consent-aware follow-up and notification workflows with clear triggers, useful segmentation, and understandable management controls.",
      },
      {
        id: "systems",
        name: "System Integration",
        description:
          "Connect the business tools you depend on with explicit data ownership, error handling, and a plan for changes in either system.",
      },
      {
        id: "managed",
        name: "Managed IT Services",
        description:
          "Agree a focused maintenance and support scope, covering ownership, routine updates, escalation, and response expectations before service begins.",
      },
      {
        id: "customer-support",
        name: "Customer Support Solutions",
        description:
          "Design help centres, enquiry routing, support tooling, and assistant handoffs. Human coverage and service hours are defined for each engagement.",
      },
    ],
  },
];
