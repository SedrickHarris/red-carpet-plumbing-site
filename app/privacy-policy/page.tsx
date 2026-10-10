import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { LegalDocument, type LegalSection } from "@/components/LegalDocument";

const TITLE = "Privacy Policy | Red Carpet Plumbing";
const DESCRIPTION =
  "How Red Carpet Plumbing collects, uses, and protects personal information when you visit our website or request plumbing service in the Las Vegas Valley.";
const CANONICAL = "https://redcarpetplumbing.com/privacy-policy/";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    siteName: "Red Carpet Plumbing",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

// FLAG: VERIFY owner confirmed 2026-10-07 (Effective Date). Last Updated is
// 2026-10-09 per owner direction; update it here at launch if go-live differs.
const EFFECTIVE_DATE = "January 1, 2026";
const LAST_UPDATED = "October 9, 2026";

// FLAG: VERIFY owner confirmed 2026-10-07 (info@ is monitored)
const EMAIL = "info@redcarpetplumbing.com";
const EMAIL_LINK = { href: `mailto:${EMAIL}`, label: EMAIL };
const PHONE_LINK = { href: "tel:+17025679172", label: "(702) 567-9172" };

const INTRO =
  "Red Carpet Plumbing (\"we,\" \"us,\" or \"our\") respects your privacy. This Privacy Policy explains how we collect, use, disclose, and protect personal information when you visit redcarpetplumbing.com, contact us, request an estimate, or communicate with us about plumbing services.";

const SECTIONS: LegalSection[] = [
  {
    id: "information-we-collect",
    heading: "1. Information We Collect",
    blocks: [
      { type: "p", text: "We may collect the following categories of information:" },
      { type: "h3", text: "Information you provide directly" },
      {
        type: "ul",
        items: [
          "Your first and last name.",
          "Email address and telephone number.",
          "Service address or mailing address, and ZIP code.",
          "Details about your plumbing needs, your preferred contact method, and any appointment preferences you share.",
          "Messages and other information you choose to share with us by form, website chat, phone, email, or text message.",
        ],
      },
      { type: "h3", text: "Information collected automatically" },
      {
        type: "ul",
        items: [
          "Internet Protocol (IP) address.",
          "Browser type, device type, and operating system.",
          "Pages visited, referring websites, and approximate visit dates and times.",
          "Information collected through cookies and similar technologies, as described below.",
        ],
      },
      {
        type: "p",
        text: "Please do not submit Social Security numbers, payment-card details, passwords, or other sensitive information through general website contact forms.",
      },
    ],
  },
  {
    id: "how-we-use-information",
    heading: "2. How We Use Information",
    blocks: [
      { type: "p", text: "We use information for purposes such as:" },
      {
        type: "ul",
        items: [
          "Responding to questions and service inquiries.",
          "Preparing estimates and coordinating appointments.",
          "Providing plumbing services and customer support.",
          "Sending service-related communications, including appointment confirmations and updates.",
          "Maintaining business and service records.",
          "Operating, securing, and improving our website.",
          "Understanding website usage and evaluating our marketing efforts.",
          "Sending promotional communications when permitted by law and consistent with your preferences.",
          "Meeting legal obligations and protecting against fraud or misuse.",
        ],
      },
    ],
  },
  {
    id: "how-we-share-information",
    heading: "3. How We Share Information",
    blocks: [
      {
        type: "p",
        text: "We may disclose information to the following categories of recipients when reasonably necessary:",
      },
      {
        type: "ul",
        items: [
          "Service providers that support website hosting, data storage, customer relationship management, scheduling, email delivery, website chat, and customer support.",
          "Personnel and service partners involved in responding to your request or providing your plumbing services.",
          "Analytics or advertising providers, if those tools are enabled on our website.",
          "Professional advisers, including legal, accounting, and insurance professionals.",
          "Government authorities or other parties when disclosure is required by law or reasonably necessary to protect rights, safety, or property.",
          "Parties involved in a merger, acquisition, or transfer of all or part of our business.",
        ],
      },
      // FLAG: VERIFY owner confirmed (forms post to the CRM service; field list
      // must match the live contact and quote forms at launch)
      {
        type: "p",
        text: "Information you submit through the contact and quote forms on our website (your name, phone number, preferred contact method, service needed, address where provided, and message) is received and stored by a third-party customer relationship management (CRM) service that we use to manage service requests and respond to customers. The chat feature and the forms are handled by third-party service providers acting on behalf of Red Carpet Plumbing.",
      },
      // FLAG: VERIFY owner confirmed 2026-10-07 (do not sell)
      { type: "p", text: "We do not sell personal information." },
    ],
  },
  {
    id: "cookies-analytics",
    heading: "4. Cookies, Analytics, and Similar Technologies",
    blocks: [
      {
        type: "p",
        text: "Our website may use cookies and similar technologies to support website functionality, remember preferences, understand visitor activity, and measure marketing performance.",
      },
      {
        type: "p",
        text: "You can manage or disable cookies through your browser settings. Disabling some cookies may affect website features.",
      },
      // FLAG: VERIFY owner confirmed 2026-10-07 (chat widget live at launch)
      // FLAG: VERIFY chat provider practices not confirmed
      {
        type: "p",
        text: "Our website includes a chat feature provided by a third-party chat and messaging service. The chat feature may use cookies and similar technologies to operate the chat, keep a conversation going, and recognize returning visitors. The provider may receive information such as your IP address, device and browser information, and the messages you send. Messages and any contact details you type into the chat are processed by that third-party service on behalf of Red Carpet Plumbing.",
      },
      // FLAG: VERIFY owner confirmed 2026-10-07
      // FLAG: VERIFY chat provider practices not confirmed
      {
        type: "p",
        text: "Third-party service providers that operate features on our website, such as our chat feature, may collect information about your online activities over time and across different websites when you use our website.",
      },
      // FLAG: VERIFY owner confirmed 2026-10-07 (Do Not Track)
      {
        type: "p",
        text: "Our website does not currently change its behavior in response to browser Do Not Track signals.",
      },
    ],
  },
  {
    id: "calls-emails-texts",
    heading: "5. Calls, Emails, and Text Messages",
    blocks: [
      {
        type: "p",
        text: "If you provide contact information when requesting services, we may use that information to respond to your inquiry and communicate about your request.",
      },
      {
        type: "p",
        text: "Marketing communications, if offered, are handled separately from service-related communications and are subject to any consent required by applicable law.",
      },
      {
        type: "p",
        text: "You may unsubscribe from promotional emails using the unsubscribe instructions included in those emails. You may still receive communications necessary to fulfill an active service request.",
      },
      // FLAG: VERIFY owner confirmed 2026-10-07 (text replies, no promotional program)
      {
        type: "p",
        text: "If you choose Text as your preferred contact method, or you text us, we may reply by text message about your service request. Message frequency varies. Message and data rates may apply. Reply STOP to stop receiving text messages from us, or call (702) 567-9172 for assistance.",
      },
      // FLAG: VERIFY owner confirmed 2026-10-07 (mobile numbers not shared for marketing)
      {
        type: "p",
        text: "We do not sell or share mobile phone numbers or text-message information with third parties for their own marketing or promotional purposes. We may disclose this information to service providers that help us deliver messages on our behalf.",
      },
    ],
  },
  {
    id: "information-retention",
    heading: "6. Information Retention",
    blocks: [
      {
        type: "p",
        text: "We retain personal information for as long as reasonably necessary for the purposes described in this Privacy Policy, including providing services, maintaining business records, resolving disputes, and meeting legal obligations.",
      },
      {
        type: "p",
        text: "Retention periods depend on the type of information, the nature of our relationship with you, and applicable legal requirements.",
      },
    ],
  },
  {
    id: "information-security",
    heading: "7. Information Security",
    blocks: [
      {
        type: "p",
        text: "We use reasonable administrative, technical, and organizational safeguards designed to protect personal information.",
      },
      {
        type: "p",
        text: "However, no internet transmission or storage system is completely secure. We cannot guarantee absolute security.",
      },
    ],
  },
  {
    id: "review-correct-information",
    heading: "8. Reviewing or Correcting Your Information",
    blocks: [
      {
        type: "p",
        text: [
          "You may contact us at ",
          EMAIL_LINK,
          " to request review or correction of personal information you previously provided.",
        ],
      },
      {
        type: "p",
        text: "You may also request deletion. We will evaluate deletion requests under applicable law and may retain information needed for legal obligations, business records, security, or resolving disputes.",
      },
      {
        type: "p",
        text: "We may ask for information reasonably necessary to verify your identity before responding.",
      },
    ],
  },
  {
    id: "nevada-privacy-requests",
    heading: "9. Nevada Privacy Requests",
    blocks: [
      {
        type: "p",
        text: "Nevada residents may submit a request directing us not to sell covered information about them, as provided by applicable Nevada law.",
      },
      { type: "p", text: "Our designated request address is:" },
      { type: "p", text: [EMAIL_LINK] },
      {
        type: "p",
        text: "Please include \"Nevada Privacy Request\" in the subject line and provide sufficient information for us to identify your records and verify your request.",
      },
      {
        type: "p",
        text: "Where applicable, we will respond to a verified request within 60 days of receipt. If a reasonably necessary extension is permitted, we may extend that period by up to 30 days and notify you of the extension.",
      },
    ],
  },
  {
    id: "childrens-privacy",
    heading: "10. Children's Privacy",
    blocks: [
      {
        type: "p",
        text: "Our website is intended for adults seeking plumbing services. It is not directed to children under 13, and we do not knowingly collect personal information from children under 13.",
      },
      {
        type: "p",
        text: [
          "If you believe a child has provided personal information to us, please contact ",
          EMAIL_LINK,
          " so we can review and address the matter.",
        ],
      },
    ],
  },
  {
    id: "third-party-websites",
    heading: "11. Third-Party Websites",
    blocks: [
      {
        type: "p",
        text: "Our website may link to third-party websites or services. This Privacy Policy does not govern those third parties. Please review their privacy policies before providing information.",
      },
    ],
  },
  {
    id: "policy-changes",
    heading: "12. Changes to This Privacy Policy",
    blocks: [
      {
        type: "p",
        text: "We may update this Privacy Policy to reflect changes in our practices or legal requirements.",
      },
      {
        type: "p",
        text: "We will post the updated policy on this page and revise the \"Last Updated\" date. For material changes, we will also provide a prominent website notice or another appropriate notification. Where required, we will obtain consent before applying changes to previously collected information.",
      },
    ],
  },
  {
    id: "contact-us",
    heading: "13. Contact Us",
    blocks: [
      { type: "p", text: "For privacy questions or requests, contact:" },
      {
        type: "contact",
        lines: [
          "Red Carpet Plumbing",
          "3330 W. Hacienda Ave Ste. 405",
          "Las Vegas, NV 89118",
          ["Email: ", EMAIL_LINK],
          ["Phone: ", PHONE_LINK],
          [
            "Website: ",
            { href: "https://redcarpetplumbing.com/", label: "redcarpetplumbing.com" },
          ],
        ],
      },
    ],
  },
];

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: TITLE,
  url: CANONICAL,
  description: DESCRIPTION,
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://redcarpetplumbing.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Privacy Policy",
        item: CANONICAL,
      },
    ],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd data={webPageSchema} />
      <LegalDocument
        title="Privacy Policy"
        effectiveDate={EFFECTIVE_DATE}
        lastUpdated={LAST_UPDATED}
        intro={INTRO}
        breadcrumbTrail={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
        sections={SECTIONS}
        seeAlso={{
          lead: "See also our",
          label: "Terms and Conditions",
          href: "/terms-and-conditions/",
        }}
      />
    </>
  );
}
