export const platformNames = [
  "Nomad RMS",
  "Adala KW",
  "Inspira Zentrum",
  "Funparey",
  "ClientRx",
  "Oxil Solutions",
  "Voltswitch GPS",
  "Servortex",
  "Marot Properties",
  "ChatAdvisor",
];

export const solutions = [
  {
    id: "ai-automation",
    title: "AI & automation",
    category: "Intelligent operations",
    icon: "ai",
    description:
      "Give your people practical assistance and connect the work between your systems.",
    challenge:
      "Knowledge scattered across documents. Repeated manual decisions. Processes that depend on copying data between tools.",
    outcomes: [
      "Knowledge assistants with source context",
      "Document intake and human review",
      "Connected approval and follow-up workflows",
    ],
    service: "ai-automation",
    image: "ai",
  },
  {
    id: "digital-products",
    title: "Digital products",
    category: "Product engineering",
    icon: "product",
    description:
      "Turn a focused idea into a useful web, mobile, or SaaS product with room for its next chapter.",
    challenge:
      "An idea needs a first release. An existing product is difficult to use. The experience and architecture have grown in different directions.",
    outcomes: [
      "Product discovery and interactive prototypes",
      "Web, mobile, and SaaS development",
      "Onboarding, permissions, and account journeys",
    ],
    service: "software-development",
    image: "product",
  },
  {
    id: "business-platforms",
    title: "Business platforms",
    category: "Connected systems",
    icon: "platform",
    description:
      "Bring customers, records, and everyday workflows into a clearer shared workspace.",
    challenge:
      "Important records live in separate places, while teams need a consistent view of the customer and the work.",
    outcomes: [
      "CRM and business system integrations",
      "Role-based operational workspaces",
      "Customer portals and internal tools",
    ],
    service: "software-development",
    image: "product",
  },
  {
    id: "operational-systems",
    title: "Operational systems",
    category: "Everyday clarity",
    icon: "operations",
    description:
      "Design around the real decisions, exceptions, and handoffs that keep an operation moving.",
    challenge:
      "Bookings, assets, appointments, or field activities need a clearer flow from request to completion.",
    outcomes: [
      "Booking and scheduling experiences",
      "Rental and asset management workflows",
      "Operational records and exception handling",
    ],
    service: "software-development",
    image: "cloud",
  },
  {
    id: "data-intelligence",
    title: "Data & intelligence",
    category: "A clearer picture",
    icon: "data",
    description:
      "Connect the data behind your business to reporting that people can understand and act on.",
    challenge:
      "Reports disagree. Useful data is hard to access. Deployments and data flows need a more dependable operating model.",
    outcomes: [
      "Data pipelines and database modeling",
      "Dashboards with agreed metric definitions",
      "Cloud architecture and deployment pipelines",
    ],
    service: "cloud-data",
    image: "cloud",
  },
  {
    id: "customer-experience",
    title: "Customer experience",
    category: "Better interactions",
    icon: "experience",
    description:
      "Make each step from first impression to ongoing support feel like part of one thoughtful experience.",
    challenge:
      "Enquiries lose momentum. Customers struggle with forms. Follow-up depends on disconnected tools and manual reminders.",
    outcomes: [
      "Accessible websites and application journeys",
      "E-commerce and enquiry experiences",
      "CRM, marketing automation, and support tooling",
    ],
    service: "security-growth-support",
    image: "security",
  },
];

export const deliveryDetails = [
  {
    label: "Discover",
    icon: "discover",
    heading: "Understand the business behind the brief.",
    text: "We start with the people using the product and the work they need to do. Real examples reveal where a workflow breaks down and where software can make a useful difference.",
    outputs: [
      "Business context and user journeys",
      "Current systems and constraints",
      "Priorities and open questions",
    ],
    note: "The right questions make the next decision easier.",
  },
  {
    label: "Define",
    icon: "define",
    heading: "Give the first release a clear purpose.",
    text: "Turn the conversation into an agreed scope. We make assumptions, dependencies, and trade-offs visible so you know what the first release includes and what comes later.",
    outputs: [
      "Requirements and acceptance criteria",
      "Release scope and dependencies",
      "Architecture and delivery plan",
    ],
    note: "A shared understanding before a larger commitment.",
  },
  {
    label: "Design",
    icon: "design",
    heading: "Make the important interactions tangible.",
    text: "Explore the product through flows, wireframes, and interactive prototypes. We resolve navigation, information hierarchy, and difficult edge cases before they become expensive changes.",
    outputs: [
      "User flows and prototypes",
      "Visual direction and reusable UI",
      "Loading, empty, and recovery states",
    ],
    note: "A product should feel clear before it becomes complex.",
  },
  {
    label: "Engineer",
    icon: "engineer",
    heading: "Build the product in visible increments.",
    text: "Develop the interface and systems together, connect the required services, and share working progress. Changes are discussed against the agreed priorities and technical constraints.",
    outputs: [
      "Working application increments",
      "Integrations and data models",
      "Technical documentation",
    ],
    note: "Working software is the most useful progress update.",
  },
  {
    label: "Validate",
    icon: "validate",
    heading: "Test the journey, including the difficult parts.",
    text: "Check the agreed requirements, responsive behavior, accessibility, performance, and recovery paths. Findings are prioritized and addressed before the release is considered ready.",
    outputs: [
      "Functional and integration checks",
      "Responsive and accessibility review",
      "Release findings and fixes",
    ],
    note: "Quality includes the moments when something goes wrong.",
  },
  {
    label: "Launch & evolve",
    icon: "launch",
    heading: "Release with a useful plan for what follows.",
    text: "Prepare deployment, configuration, and handover. Agree who owns operation and support, then use real feedback to shape the next useful improvement.",
    outputs: [
      "Deployment and release verification",
      "Handover and operating guidance",
      "Improvement and maintenance priorities",
    ],
    note: "A launch is a beginning with clear responsibilities.",
  },
];
