import { test } from "node:test";
import assert from "node:assert/strict";
import {
  initialEnquiry,
  validateStep,
  buildBrief,
  handoffLinks,
} from "../src/lib/enquiry.ts";
const valid = {
  ...initialEnquiry,
  platforms: ["Web Application", "AI & Automation"],
  stage: "Growing business",
  timeline: "1–3 months",
  budget: "Prefer to Discuss",
  name: "Example Person",
  email: "hello@example.com",
  organization: "Example & Co",
  phone: "+44 123 456",
  description:
    "We need a booking workspace with an operations dashboard and a document review workflow.",
  preferred: "Email",
  privacy: true,
};
test("each step rejects incomplete answers with specific field errors", () => {
  for (let i = 0; i < 4; i++)
    assert.ok(Object.keys(validateStep(i, initialEnquiry)).length > 0);
  assert.deepEqual(Object.keys(validateStep(2, initialEnquiry)), [
    "timeline",
    "budget",
  ]);
});
test("a full enquiry passes all four steps including flexible budget", () => {
  for (let i = 0; i < 4; i++) assert.deepEqual(validateStep(i, valid), {});
});
test("unknown choices and malformed details are rejected", () => {
  assert.ok(validateStep(0, { ...valid, platforms: ["Unknown"] }).platforms);
  assert.ok(validateStep(1, { ...valid, stage: "Unknown" }).stage);
  assert.ok(validateStep(3, { ...valid, email: "not-an-email" }).email);
  assert.ok(
    validateStep(3, { ...valid, description: "Too short" }).description,
  );
  assert.ok(validateStep(3, { ...valid, privacy: false }).privacy);
});
test("brief includes all selected options and optional details without losing punctuation", () => {
  const brief = buildBrief({
    ...valid,
    description:
      valid.description + " Keep A&B, + signs, # tags and Unicode: café.",
  });
  for (const text of [
    valid.email,
    valid.phone,
    valid.organization,
    "Web Application, AI & Automation",
    "Prefer to Discuss",
    "A&B, + signs, # tags",
    "café",
  ])
    assert.ok(brief.includes(text));
});
test("WhatsApp and email handoffs encode the exact brief and correct recipients", () => {
  const links = handoffLinks(valid);
  const wa = new URL(links.whatsapp);
  assert.equal(wa.pathname, "/923211514226");
  assert.equal(wa.searchParams.get("text"), buildBrief(valid));
  const mail = new URL(links.email);
  assert.equal(mail.pathname, "zakhter843@gmail.com");
  assert.equal(mail.searchParams.get("body"), buildBrief(valid));
  assert.equal(
    mail.searchParams.get("subject"),
    "Project enquiry — Example Person",
  );
});
test("omitting optional organization and phone still produces a complete enquiry", () => {
  const minimal = { ...valid, organization: "", phone: "" };
  assert.deepEqual(validateStep(3, minimal), {});
  assert.ok(!buildBrief(minimal).includes("Organization:"));
  assert.ok(!buildBrief(minimal).includes("Phone / WhatsApp:"));
});
