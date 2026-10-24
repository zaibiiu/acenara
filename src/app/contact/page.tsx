import { Mail, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import { PageIntro, Eyebrow } from "@/components/ui";
import { EnquiryForm } from "@/components/enquiry-form";
import { CollaborationPhoto } from "@/components/collaboration-photo";
import { WhatsAppIcon } from "@/components/icons";
import { company } from "@/content/company";
import { metadata } from "@/lib/seo";
export const generateMetadata = () =>
  metadata(
    "Start a project",
    "Start a thoughtful conversation with Acenara. Prepare a project brief in four steps and send it through WhatsApp or email.",
    "/contact/",
  );
export default function Contact() {
  return (
    <>
      <PageIntro
        label="START A CONVERSATION"
        title={
          <>
            Your next big move.
            <br />
            <em>Let’s talk it through.</em>
          </>
        }
        text="An early idea, a product ready to evolve, or a business challenge that needs a clearer answer. Tell us where you are and what you have in mind."
      />
      <section className="container contact-human-strip">
        <CollaborationPhoto kind="strategy" />
        <div>
          <Eyebrow>GOOD WORK STARTS WITH UNDERSTANDING</Eyebrow>
          <h2>
            A useful first conversation.
            <br />A clearer next step.
          </h2>
          <p>
            You don’t need a complete specification to get in touch. A little
            context about your business, your users, and the change you want to
            make is enough to begin.
          </p>
          <p className="contact-human-note">
            <CheckCircle2 size={15} />
            Prepare a brief below, then send it in your preferred app.
          </p>
        </div>
      </section>
      <section className="container contact-form-section">
        <EnquiryForm />
      </section>
      <section className="container contact-direct">
        <div>
          <Mail size={24} />
          <h2>Email the studio</h2>
          <a href={`mailto:${company.email}`}>
            {company.email}
            <ArrowRight size={16} />
          </a>
        </div>
        <div>
          <WhatsAppIcon width="25" height="25" />
          <h2>Let’s talk on WhatsApp</h2>
          <a
            href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent("Hello Acenara, I’d like to discuss a project.")}`}
            target="_blank"
            rel="noreferrer"
          >
            {company.phone}
            <ArrowRight size={16} />
          </a>
        </div>
        <div>
          <MapPin size={24} />
          <h2>Based in Lahore</h2>
          <address>{company.address}</address>
        </div>
      </section>
    </>
  );
}
