import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { LegalDocument, type LegalSection } from "@/components/LegalDocument";

const TITLE = "Terms and Conditions | Red Carpet Plumbing";
const DESCRIPTION =
  "Website terms for redcarpetplumbing.com, including service requests, estimates, appointments, and use of site content. Read before submitting a request.";
const CANONICAL = "https://redcarpetplumbing.com/terms-and-conditions/";

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
const PRIVACY_LINK = { href: "/privacy-policy/", label: "Privacy Policy" };

const INTRO = [
  "These Website Terms and Conditions (\"Terms\") govern your use of redcarpetplumbing.com, operated by Red Carpet Plumbing (\"we,\" \"us,\" or \"our\").",
  "Please read these Terms before using the website or submitting a service request. If you do not agree to these Terms, please do not use the website.",
];

const SECTIONS: LegalSection[] = [
  {
    id: "website-purpose",
    heading: "1. Website Purpose",
    blocks: [
      {
        type: "p",
        text: "Our website provides information about Red Carpet Plumbing, our plumbing services, and ways to contact us or request service.",
      },
      {
        type: "p",
        text: "These Terms govern website use. They do not replace any separately agreed estimate, work authorization, service agreement, warranty, or other contract covering plumbing work.",
      },
      {
        type: "p",
        text: "If a separate service agreement conflicts with these Terms regarding plumbing services, the service agreement controls for that work.",
      },
    ],
  },
  {
    id: "permitted-use",
    heading: "2. Permitted Use",
    blocks: [
      {
        type: "p",
        text: "You may use the website for lawful purposes, including learning about our services and submitting genuine inquiries.",
      },
      { type: "p", text: "You agree not to:" },
      {
        type: "ul",
        items: [
          "Submit false, misleading, fraudulent, or unlawful information.",
          "Impersonate another person or misrepresent your authority.",
          "Interfere with website operation or security.",
          "Attempt to gain unauthorized access to systems or information.",
          "Upload malicious code, spam, or harmful content.",
          "Copy or exploit website content in violation of applicable intellectual property rights.",
        ],
      },
      {
        type: "p",
        text: "We may restrict access when reasonably necessary to protect the website, our business, or others.",
      },
    ],
  },
  {
    id: "service-requests-scheduling",
    heading: "3. Service Requests and Appointment Scheduling",
    blocks: [
      {
        type: "p",
        text: "Submitting a contact form, estimate request, or appointment inquiry does not guarantee acceptance, availability, or a confirmed appointment.",
      },
      {
        type: "p",
        text: "A service appointment is confirmed only when Red Carpet Plumbing confirms it directly or through an authorized booking system.",
      },
      {
        type: "p",
        text: "Service availability and timing may depend on your location, technician availability, parts availability, weather, site conditions, and other operational factors.",
      },
      {
        type: "p",
        text: [
          "Do not rely on a website form for an immediate emergency response. For urgent plumbing service, call ",
          PHONE_LINK,
          ". If there is an immediate threat to life or safety, contact the appropriate emergency authority.",
        ],
      },
    ],
  },
  {
    id: "estimates-pricing",
    heading: "4. Estimates and Pricing",
    blocks: [
      {
        type: "p",
        text: "Website pricing, promotional offers, and general cost information, if displayed, are subject to the conditions stated with the offer.",
      },
      {
        type: "p",
        text: "Unless expressly identified as a binding written quote, information provided before inspecting a plumbing issue is preliminary. Final pricing may depend on the condition of the plumbing system, required labor and materials, access, permits, and the agreed scope of work.",
      },
      {
        type: "p",
        text: "Any diagnostic fees, service-call charges, deposits, payment terms, or other charges will be addressed in the applicable estimate or service agreement.",
      },
      {
        type: "p",
        text: "Changes to the scope of work or price will be handled under the applicable service agreement and any authorization required by law.",
      },
    ],
  },
  {
    id: "cancellations-rescheduling",
    heading: "5. Cancellations and Rescheduling",
    blocks: [
      {
        type: "p",
        text: [
          "To cancel or reschedule an appointment, contact us at ",
          PHONE_LINK,
          " as soon as possible.",
        ],
      },
      {
        type: "p",
        text: "Any cancellation fee, missed-appointment fee, or deposit condition must be disclosed in the applicable booking terms or service agreement. These website Terms do not independently establish a cancellation charge.",
      },
    ],
  },
  {
    id: "not-a-professional-inspection",
    heading: "6. Website Information Is Not a Professional Inspection",
    blocks: [
      {
        type: "p",
        text: "Articles, service descriptions, and other website content provide general information. They are not a substitute for an on-site inspection or advice specific to your property.",
      },
      {
        type: "p",
        text: "Plumbing conditions vary. Do not rely solely on website content to diagnose a problem, determine code compliance, or perform work that may cause injury or property damage.",
      },
    ],
  },
  {
    id: "intellectual-property",
    heading: "7. Intellectual Property",
    blocks: [
      {
        type: "p",
        text: "Unless otherwise indicated, website text, designs, graphics, logos, photographs, and other content belong to Red Carpet Plumbing or its licensors.",
      },
      {
        type: "p",
        text: "You may view and print reasonable portions for personal, noncommercial use. You may not reproduce, distribute, modify, or commercially exploit protected content without permission, except as permitted by law.",
      },
    ],
  },
  {
    id: "information-you-submit",
    heading: "8. Information You Submit",
    blocks: [
      {
        type: "p",
        text: "You are responsible for ensuring that information you submit is accurate and that you have permission to provide any photographs, documents, or other materials.",
      },
      {
        type: "p",
        text: "You grant Red Carpet Plumbing a limited, nonexclusive permission to use submitted materials as reasonably necessary to respond to your inquiry, evaluate your request, and provide services.",
      },
      {
        type: "p",
        text: "Submitting a photograph or other material does not, by itself, authorize us to use it in advertising. Promotional use will be subject to separate permission where appropriate.",
      },
      {
        type: "p",
        text: [
          "Personal information is handled as described in our ",
          PRIVACY_LINK,
          ".",
        ],
      },
    ],
  },
  {
    id: "communications-text-messages",
    heading: "9. Communications and Text Messages",
    blocks: [
      {
        type: "p",
        text: "When you request service or contact us, we may respond using the contact details you provide, consistent with your request and applicable law.",
      },
      {
        type: "p",
        text: "Submitting a service inquiry does not, by itself, constitute consent to receive unrelated marketing communications.",
      },
      // FLAG: VERIFY owner confirmed 2026-10-07 (text replies, no promotional program)
      {
        type: "p",
        text: [
          "If you choose Text as your preferred contact method, or you text us, we may reply by text message about your service request. Message frequency varies. Message and data rates may apply. Reply STOP to stop receiving text messages from us, or call ",
          PHONE_LINK,
          " for assistance. Carriers are not liable for delayed or undelivered messages. Information associated with text messaging is handled under our ",
          PRIVACY_LINK,
          ".",
        ],
      },
    ],
  },
  {
    id: "third-party-links-tools",
    heading: "10. Third-Party Links and Tools",
    blocks: [
      // FLAG: VERIFY owner confirmed 2026-10-07 (chat widget live at launch)
      // FLAG: VERIFY chat provider practices not confirmed
      {
        type: "p",
        text: "The website may include third-party links, maps, booking tools, chat tools, payment services, or other integrations.",
      },
      {
        type: "p",
        text: "Third-party services may have their own terms and privacy policies. We do not control their content, availability, or practices. A link does not necessarily constitute an endorsement.",
      },
    ],
  },
  {
    id: "availability-disclaimer",
    heading: "11. Website Availability and Disclaimer",
    blocks: [
      {
        type: "p",
        text: "We aim to provide accurate information and reliable website access, but we do not guarantee that the website will always be available, error-free, or current.",
      },
      {
        type: "p",
        text: "To the extent permitted by applicable law, the website and its general informational content are provided \"as is\" and \"as available,\" without warranties concerning website availability, completeness, or suitability for a particular purpose.",
      },
      {
        type: "p",
        text: "This section concerns the website only. It does not disclaim warranties or obligations applicable to plumbing services under a separate agreement or applicable law.",
      },
    ],
  },
  {
    id: "limitation-of-liability",
    heading: "12. Limitation of Liability",
    blocks: [
      {
        type: "p",
        text: "To the extent permitted by applicable law, Red Carpet Plumbing will not be liable for indirect, incidental, special, or consequential damages arising solely from your use of, or inability to use, this website.",
      },
      {
        type: "p",
        text: "Nothing in these Terms excludes liability that cannot lawfully be excluded, including liability for fraud, willful misconduct, or other nonwaivable obligations.",
      },
      {
        type: "p",
        text: "These Terms do not limit rights or remedies concerning plumbing services that are provided under a separate service agreement or applicable law.",
      },
    ],
  },
  {
    id: "privacy",
    heading: "13. Privacy",
    blocks: [
      {
        type: "p",
        text: [
          "Please review our ",
          PRIVACY_LINK,
          " for information about how we collect, use, and disclose personal information.",
        ],
      },
      {
        type: "p",
        text: "These Terms do not replace any separate consent required for marketing, text messages, or other data practices.",
      },
    ],
  },
  {
    id: "governing-law",
    heading: "14. Governing Law",
    blocks: [
      {
        type: "p",
        text: "These Terms are governed by the laws of the State of Nevada, without regard to conflict-of-law principles, except where applicable law requires otherwise.",
      },
      {
        type: "p",
        text: "Nothing in these Terms limits any nonwaivable consumer rights or remedies.",
      },
    ],
  },
  {
    id: "changes-to-terms",
    heading: "15. Changes to These Terms",
    blocks: [
      {
        type: "p",
        text: "We may update these Terms from time to time. Updated Terms will be posted on this page with a revised \"Last Updated\" date.",
      },
      {
        type: "p",
        text: "Changes apply prospectively and do not modify an existing service agreement unless separately agreed.",
      },
    ],
  },
  {
    id: "severability",
    heading: "16. Severability",
    blocks: [
      {
        type: "p",
        text: "If a provision of these Terms is held invalid or unenforceable, the remaining provisions will remain in effect to the extent permitted by law.",
      },
    ],
  },
  {
    id: "contact-us",
    heading: "17. Contact Us",
    blocks: [
      { type: "p", text: "For questions about these Terms, contact:" },
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
        name: "Terms and Conditions",
        item: CANONICAL,
      },
    ],
  },
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <JsonLd data={webPageSchema} />
      <LegalDocument
        title="Terms and Conditions"
        effectiveDate={EFFECTIVE_DATE}
        lastUpdated={LAST_UPDATED}
        intro={INTRO}
        breadcrumbTrail={[
          { label: "Home", href: "/" },
          { label: "Terms and Conditions" },
        ]}
        sections={SECTIONS}
      />
    </>
  );
}
