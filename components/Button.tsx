import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
type ButtonSize = "default" | "lg";

type ButtonBaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  title?: string;
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

const sizeStyles: Record<ButtonSize, string> = {
  default: "min-h-11 px-5 py-2.5 text-sm",
  lg: "min-h-12 px-6 py-3 text-base",
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
};

const disabledStyles =
  "border border-brand-dark/25 bg-transparent text-brand-dark/55 cursor-not-allowed shadow-none hover:bg-transparent";

function composeClass(
  variant: ButtonVariant,
  size: ButtonSize,
  isDisabled: boolean,
  fullWidth: boolean,
  extra?: string,
) {
  const widthCls = fullWidth ? "w-full" : "";
  const stateCls = isDisabled ? disabledStyles : variantStyles[variant];
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
  } = props;

  const classes = composeClass(variant, size, disabled, fullWidth, className);

  if ("href" in props && props.href !== undefined) {
    if (disabled) {
      return (
        <span
          role="button"
          aria-disabled="true"
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
          rel={isHttp ? "noopener noreferrer" : undefined}
          target={isHttp ? "_blank" : undefined}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={props.href} className={classes} title={title}>
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
    >
      {children}
    </button>
  );
}
