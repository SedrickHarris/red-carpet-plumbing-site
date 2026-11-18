"use client";

import { createContext, useContext, type ReactNode } from "react";

export type FormHeadingLevel = "h2" | "h3";

// Heading level for a form's title. Defaults to h3 so a form placed after an
// existing h2 keeps its current level. HeroSection provides h2 around its form
// slot so the outline reads h1, h2 instead of skipping from h1 to h3.
export const FormHeadingLevelContext = createContext<FormHeadingLevel>("h3");

type FormHeadingProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

// Renders its children as h2 or h3 depending on the surrounding context.
export function FormHeading({ id, className, children }: FormHeadingProps) {
  const level = useContext(FormHeadingLevelContext);
  return level === "h2" ? (
    // globals.css gives bare h1/h2 the display font, line-height 1.1 and a
    // tighter letter-spacing, and gives h3 weight 600. Those rules are
    // unlayered, so they beat normal Tailwind utilities. The important
    // utilities below restore exactly what these titles computed as h3
    // (body font, weight 600, 2rem line-height from text-2xl, tracking-tight)
    // so the tag change is invisible.
    <h2
      id={id}
      className={`${className ?? ""} font-sans! font-semibold! leading-8! tracking-tight!`}
    >
      {children}
    </h2>
  ) : (
    <h3 id={id} className={className}>
      {children}
    </h3>
  );
}
