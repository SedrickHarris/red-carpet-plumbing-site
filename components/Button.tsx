import Link from "next/link";
import type { ReactNode } from "react";

// The three `inverse*` variants exist for CTAs that sit ON a filled section
// (brand-primary or brand-charcoal). They invert the surface, not the palette:
// no color outside the existing brand tokens is introduced, per
// docs/site-os/design/design-intelligence-config.md rule 4 (red is the only
// CTA color).
export type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "danger"
  | "inverse" // white surface, brand-primary label — for brand-primary sections
  | "inverse-charcoal" // white surface, brand-charcoal label — for charcoal sections
  | "inverse-outline"; // white outline + label — secondary action on any filled section

export type ButtonSize = "default" | "lg" | "xl" | "2xl";

type ButtonBaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  title?: string;
  "aria-label"?: string;
};

type ButtonAsLinkProps = ButtonBaseProps & {
  href: string;
  type?: never;
  onClick?: never;
};

type ButtonAsButtonProps = ButtonBaseProps & {
  href?: undefined;
  type?: "button" | "submit" | "reset";
  // onClick is only callable when this Button is rendered from a Client
  // Component parent. RSC will throw if a Server Component passes one.
  onClick?: () => void;
};

type ButtonProps = ButtonAsLinkProps | ButtonAsButtonProps;

const baseStyles =
  "inline-flex items-center justify-center rounded-lg font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed motion-safe:transition-transform motion-safe:active:scale-[0.97]";

// Heights are the enforced floor, not the rendered height: min-h- lets a
// wrapped label grow the button instead of clipping it. Values track
// design-intelligence-config.md rule 13 (44px minimum touch target,
// 48px for primary actions).
const sizeStyles: Record<ButtonSize, string> = {
  default: "min-h-11 px-5 py-2.5 text-sm", // 44px floor
  lg: "min-h-12 px-6 py-3 text-base", // 48px floor — primary actions
  xl: "min-h-14 px-6 py-3 text-base", // 56px floor — page-level hero and final CTAs
  "2xl": "min-h-14 px-8 py-3 text-lg", // 56px floor, wider gutters and larger label
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-primary text-white shadow-sm hover:bg-brand-primary-hover focus-visible:outline-brand-primary",
  secondary:
    "border border-brand-dark/20 bg-white text-brand-dark hover:border-brand-dark/40 hover:bg-brand-surface-alt focus-visible:outline-brand-dark",
  ghost:
    "bg-transparent text-brand-dark hover:bg-brand-surface-alt focus-visible:outline-brand-dark",
  danger:
    "bg-brand-primary-hover text-white shadow-sm hover:bg-brand-primary focus-visible:outline-brand-primary",
  inverse:
    "bg-white text-brand-primary shadow-sm hover:bg-brand-surface-alt focus-visible:outline-white",
  "inverse-charcoal":
    "bg-white text-brand-charcoal shadow-sm hover:bg-brand-surface-alt focus-visible:outline-white",
  "inverse-outline":
    "border border-white/60 text-white hover:bg-white/10 focus-visible:outline-white",
};

// Disabled has to follow the surface the button sits on. The light treatment
// is unreadable on brand-primary and brand-charcoal sections, so the inverse
// variants get a white-on-dark equivalent.
const disabledOnLight =
  "border border-brand-dark/25 bg-transparent text-brand-dark/55 cursor-not-allowed shadow-none hover:bg-transparent";
const disabledOnFilled =
  "border border-white/40 bg-transparent text-white/75 cursor-not-allowed shadow-none hover:bg-transparent";

const disabledStyles: Record<ButtonVariant, string> = {
  primary: disabledOnLight,
  secondary: disabledOnLight,
  ghost: disabledOnLight,
  danger: disabledOnLight,
  inverse: disabledOnFilled,
  "inverse-charcoal": disabledOnFilled,
  "inverse-outline": disabledOnFilled,
};

function composeClass(
  variant: ButtonVariant,
  size: ButtonSize,
  isDisabled: boolean,
  fullWidth: boolean,
  extra?: string,
) {
  const widthCls = fullWidth ? "w-full" : "";
  const stateCls = isDisabled ? disabledStyles[variant] : variantStyles[variant];
  return [baseStyles, sizeStyles[size], stateCls, widthCls, extra ?? ""]
    .filter(Boolean)
    .join(" ");
}

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "default",
    children,
    className,
    fullWidth = false,
    disabled = false,
    title,
    "aria-label": ariaLabel,
  } = props;

  const classes = composeClass(variant, size, disabled, fullWidth, className);

  if ("href" in props && props.href !== undefined) {
    if (disabled) {
      return (
        <span
          role="button"
          aria-disabled="true"
          aria-label={ariaLabel}
          title={title}
          className={classes}
        >
          {children}
        </span>
      );
    }

    const isExternalProtocol = /^(https?:|tel:|mailto:)/i.test(props.href);
    if (isExternalProtocol) {
      const isHttp = /^https?:/i.test(props.href);
      return (
        <a
          href={props.href}
          className={classes}
          title={title}
          aria-label={ariaLabel}
          rel={isHttp ? "noopener noreferrer" : undefined}
          target={isHttp ? "_blank" : undefined}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        href={props.href}
        className={classes}
        title={title}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      disabled={disabled}
      className={classes}
      title={title}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
