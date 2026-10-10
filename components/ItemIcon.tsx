import type { ReactNode } from "react";

/**
 * Picks a small outline icon that matches the meaning of a list item, in place
 * of a generic checkmark. Rules run in order and the first match wins, so more
 * specific categories sit above broader ones. Anything that matches no rule
 * gets the wrench, which fits a plumbing site better than a check.
 *
 * The icon is decorative (aria-hidden); the item text next to it carries the
 * meaning for assistive technology.
 */

type IconName =
  | "star"
  | "shield"
  | "clock"
  | "phone"
  | "clipboard"
  | "tag"
  | "pin"
  | "building"
  | "home"
  | "search"
  | "flame"
  | "droplet"
  | "wrench";

const RULES: [RegExp, IconName][] = [
  [/star|review/, "star"],
  [/licens|contractor/, "shield"],
  [/year/, "clock"],
  [/emergenc|24\/7|24 hour/, "phone"],
  [/assess|explained|options|permit|code|estimate/, "clipboard"],
  [/pricing|price|fee|cost|transparent/, "tag"],
  [/serving|communit|village|service area|clark county/, "pin"],
  [/residential|commercial/, "building"],
  [/local|family|familiar|housing|homeowner/, "home"],
  [/inspect|camera|detect|locat|non-invasive/, "search"],
  [/\bgas\b/, "flame"],
  [
    /water|leak|pipe|drain|sewer|toilet|faucet|sink|jetting|pressure|backflow|clog|slab|repip/,
    "droplet",
  ],
];

export function pickIcon(text: string): IconName {
  const t = text.toLowerCase();
  for (const [re, name] of RULES) if (re.test(t)) return name;
  return "wrench";
}

type Glyph = { viewBox: string; strokeWidth: number; body: ReactNode };

const GLYPHS: Record<IconName, Glyph> = {
  star: {
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    body: (
      <path d="M12 3.5l2.6 5.3 5.9.9-4.25 4.15 1 5.85L12 16.9l-5.25 2.8 1-5.85L3.5 9.7l5.9-.9L12 3.5z" />
    ),
  },
  shield: {
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    body: (
      <>
        <path d="M12 3l7 3v5.5c0 4.2-2.9 7.6-7 8.5-4.1-.9-7-4.3-7-8.5V6l7-3z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
  },
  clock: {
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    body: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7v5.25l3.25 2" />
      </>
    ),
  },
  phone: {
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    body: (
      <path d="M6.2 4h3l1.5 3.7-1.9 1.4a12 12 0 005.1 5.1l1.4-1.9L19 13.8v3a1.7 1.7 0 01-1.9 1.7A13.7 13.7 0 014.5 5.9 1.7 1.7 0 016.2 4z" />
    ),
  },
  clipboard: {
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    body: (
      <>
        <path d="M7 3h7l5 5v12.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V3.5A.5.5 0 0 1 7.5 3z" />
        <path d="M14 3v5h5M9 13h6M9 17h6" />
      </>
    ),
  },
  tag: {
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    body: (
      <>
        <path d="M4 12.4V5a1 1 0 011-1h7.4a1 1 0 01.7.3l7 7a1 1 0 010 1.4l-6.7 6.7a1 1 0 01-1.4 0l-7-7a1 1 0 01-.3-.7z" />
        <circle cx="8.75" cy="8.75" r="1.15" />
      </>
    ),
  },
  pin: {
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    body: (
      <>
        <path d="M12 21s-6.5-6.2-6.5-11a6.5 6.5 0 1 1 13 0c0 4.8-6.5 11-6.5 11z" />
        <circle cx="12" cy="10" r="2.4" />
      </>
    ),
  },
  building: {
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    body: (
      <path d="M5 21V4.5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1V21M15 9h3.5a.5.5 0 0 1 .5.5V21M3 21h18M8.5 8h3M8.5 12h3M8.5 16h3" />
    ),
  },
  home: {
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    body: <path d="M3 11.5L12 4l9 7.5M5.5 10v9.5h13V10M10 19.5v-5h4v5" />,
  },
  search: {
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    body: (
      <>
        <circle cx="11" cy="11" r="6.5" />
        <path d="M16 16l5 5" />
      </>
    ),
  },
  flame: {
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    body: (
      <path d="M12 3c.6 3.2-4 5.2-4 9.5a4 4 0 0 0 8 0c0-1.7-.7-2.8-1.6-3.7-.1 1.4-.7 2.2-1.5 2.6.5-3-.2-6.1-.9-8.4z" />
    ),
  },
  droplet: {
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    body: <path d="M12 3.5s6 6.3 6 10.5a6 6 0 0 1-12 0c0-4.2 6-10.5 6-10.5z" />,
  },
  wrench: {
    viewBox: "0 0 64 64",
    strokeWidth: 4.5,
    body: (
      <path d="M44 8a12 12 0 0 0-11.3 16L10 46.7 17.3 54l22.7-22.7A12 12 0 1 0 44 8z" />
    ),
  },
};

type ItemIconProps = {
  text: string;
  className?: string;
};

export function ItemIcon({
  text,
  className = "mt-1 h-5 w-5 flex-none text-brand-dark",
}: ItemIconProps) {
  const g = GLYPHS[pickIcon(text)];
  return (
    <svg
      aria-hidden="true"
      viewBox={g.viewBox}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={g.strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {g.body}
    </svg>
  );
}
