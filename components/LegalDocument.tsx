import Link from "next/link";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/Breadcrumbs";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export type LegalLink = { href: string; label: string };
export type LegalText = string | Array<string | LegalLink>;

export type LegalBlock =
  | { type: "p"; text: LegalText }
  | { type: "h3"; text: string }
  | { type: "ul"; items: LegalText[] }
  | { type: "contact"; lines: LegalText[] };

export type LegalSection = {
  id: string;
  heading: string;
  blocks: LegalBlock[];
};

type LegalDocumentProps = {
  title: string;
  effectiveDate: string;
  lastUpdated: string;
  intro: string | string[];
  breadcrumbTrail: BreadcrumbItem[];
  sections: LegalSection[];
  seeAlso?: { label: string; href: string; lead: string };
};

const PROSE_LINK =
  "font-medium text-brand-dark underline hover:text-brand-dark/70";

function InlineLink({ href, label }: LegalLink) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={PROSE_LINK}>
        {label}
      </Link>
    );
  }
  return (
    <a href={href} className={PROSE_LINK}>
      {label}
    </a>
  );
}

function renderText(text: LegalText) {
  if (typeof text === "string") return text;
  return text.map((segment, index) =>
    typeof segment === "string" ? (
      <span key={index}>{segment}</span>
    ) : (
      <InlineLink key={index} {...segment} />
    ),
  );
}

function renderBlock(block: LegalBlock, index: number) {
  switch (block.type) {
    case "p":
      return (
        <p key={index} className="mt-4 text-base leading-7 text-brand-dark">
          {renderText(block.text)}
        </p>
      );
    case "h3":
      return (
        <h3
          key={index}
          className="mt-6 text-lg font-semibold text-brand-dark"
        >
          {block.text}
        </h3>
      );
    case "ul":
      return (
        <ul
          key={index}
          className="mt-4 list-disc space-y-2 pl-6 text-base leading-7 text-brand-dark marker:text-brand-muted"
        >
          {block.items.map((item, itemIndex) => (
            <li key={itemIndex}>{renderText(item)}</li>
          ))}
        </ul>
      );
    case "contact":
      return (
        <address
          key={index}
          className="mt-4 space-y-1 text-base not-italic leading-7 text-brand-dark"
        >
          {block.lines.map((line, lineIndex) => (
            <p key={lineIndex}>{renderText(line)}</p>
          ))}
        </address>
      );
  }
}

function TocList({ sections }: { sections: LegalSection[] }) {
  return (
    <ul className="space-y-1">
      {sections.map((section) => (
        <li key={section.id}>
          <a
            href={`#${section.id}`}
            className="flex min-h-11 items-center py-1 text-sm leading-5 text-brand-dark hover:text-brand-dark/70 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary lg:min-h-0"
          >
            {section.heading}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function LegalDocument({
  title,
  effectiveDate,
  lastUpdated,
  intro,
  breadcrumbTrail,
  sections,
  seeAlso,
}: LegalDocumentProps) {
  const introParagraphs = Array.isArray(intro) ? intro : [intro];

  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1 bg-white">
        <div className="bg-brand-surface-warm">
          <Breadcrumbs trail={breadcrumbTrail} />
          <div className="mx-auto max-w-7xl px-4 pb-12 pt-4 sm:px-6 lg:px-10 xl:px-12">
            <div className="max-w-3xl">
              <h1 className="text-4xl tracking-tight text-brand-dark sm:text-5xl">
                {title}
              </h1>
              <p className="mt-4 text-sm text-brand-muted">
                Effective Date: {effectiveDate} | Last Updated: {lastUpdated}
              </p>
              {introParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="mt-4 text-base leading-7 text-brand-dark"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-10 lg:py-16 xl:px-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16">
            <aside className="lg:col-start-2 lg:row-start-1">
              {/* Small screens: collapsed disclosure so 17 links do not push the
                  document down the page. The document itself is never hidden. */}
              <details className="rounded-lg border border-brand-surface-alt bg-brand-surface-warm lg:hidden">
                <summary className="flex min-h-11 cursor-pointer items-center px-5 text-sm font-semibold uppercase tracking-wider text-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary">
                  On this page
                </summary>
                <nav aria-label="On this page" className="px-5 pb-3">
                  <TocList sections={sections} />
                </nav>
              </details>

              {/* Large screens: always-open card. Sticky only when the viewport
                  is tall enough to show the whole card, so it never needs to
                  scroll or clip. */}
              <nav
                aria-label="On this page"
                className="hidden self-start rounded-lg border border-brand-surface-alt bg-brand-surface-warm p-5 lg:block lg:[@media(min-height:860px)]:sticky lg:[@media(min-height:860px)]:top-28"
              >
                <p className="text-sm font-semibold uppercase tracking-wider text-brand-dark">
                  On this page
                </p>
                <div className="mt-3">
                  <TocList sections={sections} />
                </div>
              </nav>
            </aside>

            <div className="max-w-3xl lg:col-start-1 lg:row-start-1">
              {sections.map((section, sectionIndex) => (
                <section
                  key={section.id}
                  className={sectionIndex === 0 ? "" : "mt-12"}
                >
                  <h2
                    id={section.id}
                    className="scroll-mt-28 text-2xl tracking-tight text-brand-dark sm:text-3xl"
                  >
                    {section.heading}
                  </h2>
                  {section.blocks.map(renderBlock)}
                </section>
              ))}

              {seeAlso ? (
                <p className="mt-12 border-t border-brand-surface-alt pt-6 text-base leading-7 text-brand-dark">
                  {seeAlso.lead}{" "}
                  <Link href={seeAlso.href} className={PROSE_LINK}>
                    {seeAlso.label}
                  </Link>
                  .
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
