export const platforms = [
  "Website",
  "Web Application",
  "SaaS Platform",
  "Mobile Application",
  "Desktop Software",
  "AI & Automation",
  "E-Commerce",
  "Cloud & Data",
  "UI/UX Design",
  "Other / Not Sure",
];
export const stages = [
  "I have a new idea",
  "Startup / MVP",
  "Growing business",
  "Established company",
  "Improving existing software",
  "Exploring possibilities",
];
export const timelines = [
  "As soon as possible",
  "Within 1 month",
  "1–3 months",
  "3–6 months",
  "Flexible / Not Sure",
];
export const budgets = [
  "Under USD 1,000",
  "USD 1,000–5,000",
  "USD 5,000–15,000",
  "USD 15,000–30,000",
  "USD 30,000+",
  "Not Sure Yet",
  "Prefer to Discuss",
];
export type Enquiry = {
  platforms: string[];
  stage: string;
  timeline: string;
  budget: string;
  name: string;
  email: string;
  organization: string;
  phone: string;
  description: string;
  preferred: string;
  privacy: boolean;
};
export const initialEnquiry: Enquiry = {
  platforms: [],
  stage: "",
  timeline: "",
  budget: "",
  name: "",
  email: "",
  organization: "",
  phone: "",
  description: "",
  preferred: "Email",
  privacy: false,
};
export function validateStep(
  step: number,
  data: Enquiry,
): Record<string, string> {
  const errors: Record<string, string> = {};
  if (
    step === 0 &&
    (!data.platforms.length ||
      data.platforms.some((p) => !platforms.includes(p)))
  )
    errors.platforms =
      "Choose at least one option. “Other / Not Sure” is welcome too.";
  if (step === 1 && !stages.includes(data.stage))
    errors.stage = "Choose the stage that feels closest to where you are.";
  if (step === 2) {
    if (!timelines.includes(data.timeline))
      errors.timeline =
        "Choose a timeline, including the flexible option if you prefer.";
    if (!budgets.includes(data.budget))
      errors.budget =
        "Choose a budget band, “Not Sure Yet”, or “Prefer to Discuss”.";
  }
  if (step === 3) {
    if (data.name.trim().length < 2 || data.name.length > 120)
      errors.name = "Enter your full name (2–120 characters).";
    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim()) ||
      data.email.length > 254
    )
      errors.email = "Enter a valid email address.";
    if (data.description.trim().length < 30 || data.description.length > 6000)
      errors.description =
        "Tell us a little more about your project (30–6,000 characters).";
    if (data.organization.length > 200)
      errors.organization = "Keep the organization name under 200 characters.";
    if (data.phone.length > 50)
      errors.phone = "Keep the phone number under 50 characters.";
    if (!["Email", "WhatsApp", "Either"].includes(data.preferred))
      errors.preferred = "Choose your preferred contact method.";
    if (!data.privacy)
      errors.privacy = "Please acknowledge how your enquiry will be shared.";
  }
  return errors;
}
export function buildBrief(data: Enquiry) {
  return [
    "ACENARA — PROJECT ENQUIRY",
    "",
    `Name: ${data.name.trim()}`,
    `Email: ${data.email.trim()}`,
    ...(data.organization.trim()
      ? [`Organization: ${data.organization.trim()}`]
      : []),
    ...(data.phone.trim() ? [`Phone / WhatsApp: ${data.phone.trim()}`] : []),
    `Preferred contact: ${data.preferred}`,
    "",
    `Platform needs: ${data.platforms.join(", ")}`,
    `Business stage: ${data.stage}`,
    `Timeline: ${data.timeline}`,
    `Budget: ${data.budget}`,
    "",
    "PROJECT OVERVIEW",
    data.description.trim(),
    "",
    "I acknowledge that Acenara may use these details to respond to my project enquiry.",
  ].join("\n");
}
export function handoffLinks(data: Enquiry) {
  const brief = buildBrief(data);
  return {
    whatsapp: `https://wa.me/923211514226?text=${encodeURIComponent(brief)}`,
    email: `mailto:zakhter843@gmail.com?subject=${encodeURIComponent(`Project enquiry — ${data.name.trim()}`)}&body=${encodeURIComponent(brief)}`,
  };
}
