"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// Turnstile bot check for the lead forms. The script is loaded only on the first
// interaction inside a form, never on page load. The site key is public by design
// and is inlined at build time. If it is missing, the hook reports "unavailable"
// and the forms fall back to their existing error state.
const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";
const SCRIPT_SRC =
  "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

// focusin, pointerdown, touchstart and keydown cover focus, mouse, touch and
// keyboard. input and change cover browser autofill.
const INTERACTION_EVENTS = [
  "focusin",
  "pointerdown",
  "touchstart",
  "keydown",
  "input",
  "change",
] as const;

type TurnstileRenderOptions = {
  sitekey: string;
  appearance: "interaction-only";
  callback: (token: string) => void;
  "expired-callback": () => void;
  "error-callback": () => void;
  "timeout-callback": () => void;
};

type TurnstileApi = {
  render: (container: HTMLElement, options: TurnstileRenderOptions) => string;
  reset: (widgetId: string) => void;
  remove: (widgetId: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

export type TurnstileStatus = "idle" | "loading" | "ready" | "unavailable";

let scriptPromise: Promise<void> | null = null;

function loadScript(): Promise<void> {
  if (scriptPromise) return scriptPromise;
  scriptPromise = new Promise<void>((resolve, reject) => {
    if (typeof window === "undefined") {
      reject(new Error("no window"));
      return;
    }
    if (window.turnstile) {
      resolve();
      return;
    }
    const el = document.createElement("script");
    el.src = SCRIPT_SRC;
    el.async = true;
    el.defer = true;
    el.onload = () =>
      window.turnstile ? resolve() : reject(new Error("api missing"));
    el.onerror = () => reject(new Error("script failed"));
    document.head.appendChild(el);
  });
  return scriptPromise;
}

type Options = { onToken?: () => void };

export function useTurnstile(options?: Options) {
  // The form and the widget container are tracked as state so the component can
  // pass the setters straight to ref={...}. Refs mirror them for use in handlers.
  const [formEl, setForm] = useState<HTMLFormElement | null>(null);
  const [containerEl, setContainer] = useState<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const initialStatus: TurnstileStatus = SITE_KEY ? "idle" : "unavailable";
  const statusRef = useRef<TurnstileStatus>(initialStatus);
  const tokenRef = useRef("");
  const widgetIdRef = useRef<string | null>(null);
  const runRef = useRef(0);
  const onTokenRef = useRef(options?.onToken);

  useEffect(() => {
    onTokenRef.current = options?.onToken;
  });

  useEffect(() => {
    containerRef.current = containerEl;
  }, [containerEl]);

  const resetWidget = useCallback(() => {
    tokenRef.current = "";
    if (widgetIdRef.current && window.turnstile) {
      window.turnstile.reset(widgetIdRef.current);
    }
  }, []);

  const start = useCallback(() => {
    if (statusRef.current !== "idle") return;
    statusRef.current = "loading";
    const run = ++runRef.current;
    loadScript()
      .then(() => {
        const container = containerRef.current;
        const api = window.turnstile;
        if (run !== runRef.current || !container || !api) return;
        widgetIdRef.current = api.render(container, {
          sitekey: SITE_KEY,
          appearance: "interaction-only",
          callback: (token) => {
            tokenRef.current = token;
            onTokenRef.current?.();
          },
          "expired-callback": resetWidget,
          "timeout-callback": resetWidget,
          "error-callback": () => {
            tokenRef.current = "";
            statusRef.current = "unavailable";
          },
        });
        statusRef.current = "ready";
      })
      .catch(() => {
        if (run === runRef.current) statusRef.current = "unavailable";
      });
  }, [resetWidget]);

  useEffect(() => {
    const form = formEl;
    const onInteract = () => {
      for (const name of INTERACTION_EVENTS) {
        form?.removeEventListener(name, onInteract, true);
      }
      start();
    };
    if (form && statusRef.current === "idle") {
      for (const name of INTERACTION_EVENTS) {
        form.addEventListener(name, onInteract, { capture: true, passive: true });
      }
    }
    return () => {
      for (const name of INTERACTION_EVENTS) {
        form?.removeEventListener(name, onInteract, true);
      }
      runRef.current += 1;
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
      }
      widgetIdRef.current = null;
      tokenRef.current = "";
      statusRef.current = SITE_KEY ? "idle" : "unavailable";
    };
  }, [formEl, start]);

  const read = useCallback(
    () => ({ status: statusRef.current, token: tokenRef.current }),
    [],
  );

  return { setForm, setContainer, read, start, reset: resetWidget };
}
