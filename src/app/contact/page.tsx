import { Mail, MessageCircle, MapPin, ArrowUpRight } from "lucide-react";
import { PageIntro } from "@/components/ui";
import { EnquiryForm } from "@/components/enquiry-form";
import { company } from "@/content/company";
import { metadata } from "@/lib/seo";
export const generateMetadata = () =>
  metadata(
    "Start a project",
    "Tell Acenara what you want to build. Prepare a project brief in four simple steps and send it directly through WhatsApp or your email app.",
    "/contact/",
  );
export default function Contact() {
  return (
    <>
      <PageIntro
        label="LET’S START A CONVERSATION"
        title={
          <>
            Your next chapter
            <br />
            <em>starts here.</em>
          </>
        }
        text="An early idea or a well-defined challenge. Wherever you are, we’d like to hear what you have in mind."
      />
      <section className="container contact-form-section">
        <EnquiryForm />
      </section>
      <section className="container contact-direct">
        <div>
          <Mail size={23} strokeWidth={1.3} />
          <h2>Write to us</h2>
          <a href={`mailto:${company.email}`}>
            {company.email}
            <ArrowUpRight size={15} />
          </a>
        </div>
        <div>
          <MessageCircle size={23} strokeWidth={1.3} />
          <h2>Start on WhatsApp</h2>
          <a
            href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent("Hello Acenara, I’d like to discuss a project.")}`}
            target="_blank"
            rel="noreferrer"
          >
            {company.phone}
            <ArrowUpRight size={15} />
          </a>
        </div>
        <div>
          <MapPin size={23} strokeWidth={1.3} />
          <h2>Based in Lahore</h2>
          <address>{company.address}</address>
        </div>
      </section>
    </>
  );
}
