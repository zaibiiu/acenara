export type Article = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  visual: string;
  sections: { title: string; paragraphs: string[] }[];
  takeaway: string;
};
export const articles: Article[] = [
  {
    slug: "useful-ai-starts-with-a-specific-task",
    title: "Useful AI starts with a specific task.",
    category: "AI & automation",
    date: "2026-10-24",
    visual: "ai",
    excerpt:
      "Before choosing a model, choose a problem your business can recognize—and a result it can evaluate.",
    sections: [
      {
        title: "Begin with the work, not the tool",
        paragraphs: [
          "“We need AI” is an ambition, but it is not yet a product requirement. A more useful starting point is a task: finding the relevant clause in a supplier agreement, preparing a first draft of a support response, or sorting incoming documents for review.",
          "Write down who performs the task today, which information they use, and what happens when the answer is wrong. This makes the scope concrete. It also reveals whether a simpler search feature, a clear rule, or an improved form would solve the problem more directly.",
        ],
      },
      {
        title: "Define what good looks like",
        paragraphs: [
          "Collect a small, representative set of examples before building. Include ordinary requests, incomplete inputs, ambiguous questions, and cases the system should decline. For each example, describe an acceptable result and who can judge it.",
          "Evaluate the complete workflow rather than a persuasive demonstration. A helpful answer delivered to the wrong customer is still a failure. So is a correct extraction that quietly drops a required field.",
        ],
      },
      {
        title: "Give uncertainty a place to go",
        paragraphs: [
          "Design a review path alongside the happy path. An assistant might prepare a response for a person to approve, or show the document passage behind an answer. A document workflow might route an unclear field into a review queue.",
          "Choose which actions the system may take and which need explicit approval. Keep the permissions narrow enough that a mistaken output cannot silently become an important business decision.",
        ],
      },
      {
        title: "Start small enough to learn",
        paragraphs: [
          "A focused pilot should answer a business question: does this assistance make a particular task easier without creating unacceptable review work? Watch the exceptions and ask the people using it where it becomes confusing.",
          "Expand only when the workflow is understandable, the evaluation is useful, and someone owns ongoing review. The aim is a dependable piece of the business, with clear limits and a practical reason to exist.",
        ],
      },
    ],
    takeaway:
      "Choose one task, define an acceptable result, and design the review path before expanding the scope.",
  },
  {
    slug: "a-saas-product-is-more-than-its-feature-list",
    title: "A SaaS product is more than its feature list.",
    category: "Product thinking",
    date: "2026-10-24",
    visual: "desktop",
    excerpt:
      "The journey from an empty workspace to a useful outcome deserves as much attention as the product roadmap.",
    sections: [
      {
        title: "Make the first useful outcome visible",
        paragraphs: [
          "A new user does not arrive knowing your data model. They arrive with a task. Design the first session around something they can recognize as progress: creating a booking, inviting a colleague, or producing a useful report.",
          "An empty dashboard should explain what belongs there and offer a sensible next action. Sample data can help when it is clearly labeled, but it should not become a barrier to understanding the real workflow.",
        ],
      },
      {
        title: "Treat the account model as product design",
        paragraphs: [
          "Decide what an account represents. Is it an individual, a company, or a workspace that can contain several teams? Clarify who can invite people, view records, export information, and manage billing.",
          "These choices affect navigation and support as much as architecture. A product becomes difficult to use when a person cannot tell which workspace they are in or why a control is unavailable.",
        ],
      },
      {
        title: "Design the states between features",
        paragraphs: [
          "A feature description often covers only a successful action. A complete experience also covers loading, permission errors, empty results, expired invitations, and interrupted payments.",
          "Write those states while designing the main journey. Give each one a useful explanation and a next step. Recovery is part of the product experience, especially when someone is using your software to do their own work.",
        ],
      },
      {
        title: "Build a roadmap around observed friction",
        paragraphs: [
          "After release, ask where users need help and where they leave tasks unfinished. Use that evidence alongside business priorities when deciding the next increment.",
          "Adding features is sometimes the answer. Simplifying a confusing setup, improving a report, or making an integration easier to configure may be the more useful investment. A product roadmap should leave room for both.",
        ],
      },
    ],
    takeaway:
      "Design the first useful outcome, the account boundaries, and the recovery states as one connected product.",
  },
  {
    slug: "business-software-deserves-better-ux",
    title: "Business software deserves better UX.",
    category: "Design",
    date: "2026-10-24",
    visual: "mobile",
    excerpt:
      "Internal tools are used under real pressure. Clear forms and thoughtful defaults make that work easier.",
    sections: [
      {
        title: "Observe the task in context",
        paragraphs: [
          "A screen can look tidy and still make work difficult. Someone might be comparing two records, reading from a printed document, or completing a task while speaking with a customer.",
          "Ask users to walk through a real example. Notice which information they need together and which fields they keep looking up elsewhere. These observations are more useful than simply asking which colors they prefer.",
        ],
      },
      {
        title: "Organize information around decisions",
        paragraphs: [
          "Put the information needed for a decision near the action it supports. A booking approval screen should make the dates, availability, customer, and relevant constraints easy to compare.",
          "Use progressive disclosure for secondary detail, but avoid hiding information people need on every visit. Let the frequency and importance of the task shape the hierarchy.",
        ],
      },
      {
        title: "Make forms explain themselves",
        paragraphs: [
          "A good label tells a person what to enter. Helpful supporting text explains unfamiliar requirements before an error occurs. When validation fails, identify the field and explain how to fix it without erasing the rest of the work.",
          "Defaults should be deliberate and safe. Preselecting an irreversible action is a different decision from remembering a preferred report view. Test forms with keyboard navigation and check that their meaning does not depend on color alone.",
        ],
      },
      {
        title: "Design for an ordinary difficult day",
        paragraphs: [
          "Consider a slow connection, a narrow laptop, a missed required field, or a user returning after a long interruption. The interface should make the current state and the next action clear.",
          "Business software earns trust by behaving consistently. A readable table, a specific confirmation, and a recoverable mistake can matter more than another decorative dashboard panel.",
        ],
      },
    ],
    takeaway:
      "Design around the task people perform repeatedly, including its errors, interruptions, and recovery.",
  },
  {
    slug: "architecture-that-leaves-room-to-grow",
    title: "Architecture that leaves room to grow.",
    category: "Engineering",
    date: "2026-10-24",
    visual: "cloud",
    excerpt:
      "Start with clear boundaries and practical constraints. Complexity should have a reason to exist.",
    sections: [
      {
        title: "Write down the constraints first",
        paragraphs: [
          "Architecture starts with questions about the product: who uses it, which data it owns, how quickly information needs to change, and what the business can operate.",
          "A public information website and a real-time operations platform have different requirements. Documenting those differences helps prevent a fashionable tool from becoming the answer to a question nobody asked.",
        ],
      },
      {
        title: "Prefer boundaries people can explain",
        paragraphs: [
          "Group related business rules and make the contracts between areas explicit. Booking logic should have a clear owner; reporting should not silently invent a different definition of an active customer.",
          "A small application can benefit from these boundaries without becoming a collection of separately deployed services. The important question is whether the structure makes changes easier to reason about.",
        ],
      },
      {
        title: "Plan for change at the edges",
        paragraphs: [
          "Third-party integrations, payment providers, and external data sources can change independently of your product. Keep their details behind a clear interface, and decide how failures reach the user or operator.",
          "Treat schema changes and data migrations as part of delivery. A plan should describe how existing records are validated, how a release is checked, and what happens if the new version does not behave as expected.",
        ],
      },
      {
        title: "Let evidence justify the next layer",
        paragraphs: [
          "Before adding infrastructure, identify the specific limit you are reaching. Is it a slow query, an expensive job, a deployment bottleneck, or a lack of operational visibility?",
          "Measure the issue, consider the smallest useful intervention, and record the trade-off. Architecture is easier to maintain when future contributors can understand why a decision was made.",
        ],
      },
    ],
    takeaway:
      "Start with product constraints, clear ownership, and recoverable changes. Add complexity for a specific reason.",
  },
  {
    slug: "automate-the-handoff-not-just-the-task",
    title: "Automate the handoff, not just the task.",
    category: "AI & automation",
    date: "2026-10-24",
    visual: "workflow",
    excerpt:
      "The gaps between tools are often where the repeated work—and the missed information—live.",
    sections: [
      {
        title: "Map the full journey",
        paragraphs: [
          "Consider an enquiry that starts in a form, moves to a spreadsheet, becomes a CRM record, and eventually reaches the person who can respond. Automating just the first step can leave most of the friction untouched.",
          "Draw the path from the trigger to the useful outcome. Mark each system, each owner, and each place someone retypes information. The handoffs are often the best place to start a practical improvement.",
        ],
      },
      {
        title: "Decide which system owns the record",
        paragraphs: [
          "When two tools store the same information, decide which one is authoritative and how updates travel. Otherwise an automation can make inconsistent data spread more quickly.",
          "Use explicit field mappings and stable identifiers. Think about repeated submissions, changes to an email address, and records that already exist. These ordinary cases deserve attention before the flow is switched on.",
        ],
      },
      {
        title: "Make failures visible",
        paragraphs: [
          "A workflow needs a route for missing fields, unavailable services, and rejected updates. Decide whether to retry, ask a person to review, or stop and notify an owner.",
          "Give operators enough context to understand what happened without exposing unnecessary personal information. A clear failure queue is more useful than a reassuring dashboard that only counts successful runs.",
        ],
      },
      {
        title: "Keep a human owner",
        paragraphs: [
          "Automation does not remove the need for ownership. Someone should know how to pause the workflow, handle an exception, and update it when a connected tool changes.",
          "Start with a limited scope, review representative records, and document the triggers and side effects. A useful automation should reduce repeated work while leaving the process understandable.",
        ],
      },
    ],
    takeaway:
      "Map the trigger, ownership, exceptions, and final outcome before connecting the tools.",
  },
  {
    slug: "security-belongs-in-the-product-conversation",
    title: "Security belongs in the product conversation.",
    category: "Engineering",
    date: "2026-10-24",
    visual: "security",
    excerpt:
      "Access, information, and recovery are design decisions that should be discussed before launch.",
    sections: [
      {
        title: "Start with the information you hold",
        paragraphs: [
          "List the information the product needs, why it needs it, and who should be able to use it. Question fields collected merely because they might be useful later.",
          "This inventory makes the product conversation concrete. A customer phone number, an internal note, and a billing record may require different handling and different visibility within the interface.",
        ],
      },
      {
        title: "Describe access as real scenarios",
        paragraphs: [
          "“Admin” and “user” are often too broad to describe a working business. Ask whether a support agent should edit billing details, whether one organization can see another organization’s records, and what happens after someone leaves a team.",
          "Document these scenarios as requirements. Review the same boundaries in screens, exports, integrations, and background tasks so access is not treated as a navigation preference.",
        ],
      },
      {
        title: "Include recovery in delivery planning",
        paragraphs: [
          "Decide how important changes are recorded, how operators notice a problem, and how data can be recovered. A backup plan should include ownership and a way to check restoration.",
          "Discuss dependency updates and the process for addressing an issue after release. These are operating responsibilities that need agreement, rather than assumptions hidden inside a launch checklist.",
        ],
      },
      {
        title: "Agree the scope of assurance",
        paragraphs: [
          "Different products require different kinds of review. Be explicit about which checks are included, which systems are authorized for assessment, and which specialist reviews may be needed.",
          "Avoid treating a single tool result as a guarantee. A more useful outcome is a documented set of findings, clear priorities, responsible owners, and a plan to verify the fixes.",
        ],
      },
    ],
    takeaway:
      "Bring data ownership, access scenarios, recovery, and ongoing responsibilities into the requirements discussion.",
  },
];

export function readingTime(article: Article) {
  const words = article.sections
    .flatMap((s) => s.paragraphs)
    .join(" ")
    .split(/\s+/).length;
  return Math.max(2, Math.ceil(words / 200));
}
