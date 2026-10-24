import Link from "next/link";
import { PageIntro } from "@/components/ui";
import { metadata } from "@/lib/seo";
export const generateMetadata = () =>
  metadata(
    "Privacy policy",
    "How Acenara handles project enquiries, external contact handoffs, website hosting, and requests about your information.",
    "/privacy/",
  );
export default function Privacy() {
  return (
    <>
      <PageIntro
        label="PRIVACY POLICY"
        title={
          <>
            A clear approach
            <br />
            to <em>your information.</em>
          </>
        }
        text="This policy explains what happens when you visit this website or prepare and send a project enquiry. Last updated 24 October 2026."
      />
      <div className="container policy-layout">
        <aside>
          <p className="eyebrow">QUESTIONS?</p>
          <a href="mailto:zakhter843@gmail.com">zakhter843@gmail.com</a>
        </aside>
        <div className="article-prose">
          <section>
            <h2>Who we are</h2>
            <p>
              Acenara is a software development and digital technology studio
              founded by Zohaib Akhtar, based in Lahore, Pakistan. You can
              contact us at zakhter843@gmail.com about this policy or the
              information you share.
            </p>
          </section>
          <section>
            <h2>Preparing an enquiry</h2>
            <p>
              The four-step form holds your answers in the current browser
              session’s page memory. It does not submit them to an Acenara
              server, store them in a database, or save them to browser storage.
              Refreshing or closing the page clears the entries.
            </p>
            <p>
              The form asks for your name, email, project needs, business stage,
              timeline, budget preference, project description, preferred
              contact method, and optional organization and phone details.
              Please avoid including passwords, payment details, or sensitive
              personal information.
            </p>
          </section>
          <section>
            <h2>Sending through an external app</h2>
            <p>
              If you choose WhatsApp, the prepared message is included in the
              link opened with WhatsApp. If you choose email, the brief is
              passed to your configured email application. You must complete the
              send action in that app. Opening a handoff may expose the prepared
              content to that app even if you do not send it.
            </p>
            <p>
              Those services operate under their own privacy policies. The copy
              option places the brief on your device’s clipboard at your
              request. You can instead contact us directly and choose the
              information you share.
            </p>
          </section>
          <section>
            <h2>When we receive your message</h2>
            <p>
              We use information you send to understand and respond to your
              enquiry, discuss a possible project, and manage the related
              conversation. Access is limited to what is needed for that work.
              If an engagement begins, any additional handling requirements
              should be agreed as part of the project.
            </p>
            <p>
              We keep enquiry correspondence for as long as it remains useful
              for the conversation or related business records. You can ask us
              to correct or delete information you have shared; we will explain
              if there is a reason a record needs to be retained.
            </p>
          </section>
          <section>
            <h2>Hosting and website data</h2>
            <p>
              The website is prepared for static hosting on Cloudflare Pages.
              The hosting provider may process technical request information,
              such as IP addresses and browser details, to deliver and protect
              the website. This site does not add advertising trackers,
              analytics scripts, or nonessential cookies.
            </p>
            <p>
              If the hosting arrangement or data collection changes, this policy
              should be updated to reflect the actual setup. External apps and
              services may process information outside your country.
            </p>
          </section>
          <section>
            <h2>Your choices</h2>
            <p>
              You can browse without completing the enquiry form, leave optional
              fields blank, copy a brief without opening a handoff, or email us
              directly. To ask about access, correction, or deletion of
              information you have sent, write to{" "}
              <a href="mailto:zakhter843@gmail.com">zakhter843@gmail.com</a>.
            </p>
            <p>
              <Link href="/contact/">Return to the project enquiry.</Link>
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
