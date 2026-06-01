import Image from "next/image";
import Link from "next/link";
import { ServiceImagePlaceholder } from "@/components/ServiceImagePlaceholder";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  image?: string;
  imageAlt?: string;
  built?: boolean;
};

export function ServiceCard({
  title,
  description,
  href,
  image,
  imageAlt,
  built = true,
}: ServiceCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-brand-surface-alt motion-safe:transition-shadow motion-safe:hover:shadow-lg">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-surface-alt">
        {image ? (
          <Image
            src={image}
            alt={imageAlt ?? ""}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover motion-safe:transition-transform motion-safe:group-hover:scale-105"
          />
        ) : (
          <ServiceImagePlaceholder />
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold text-brand-dark">
          {built ? (
            <Link
              href={href}
              className="transition-colors hover:text-brand-primary"
            >
              {title}
            </Link>
          ) : (
            <span aria-disabled="true">{title}</span>
          )}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-brand-dark/80">
          {description}
        </p>
        {built ? (
          <Link
            href={href}
            className="mt-4 inline-flex items-center text-sm font-semibold text-brand-primary transition-colors hover:text-brand-primary-hover"
          >
            Learn More
            <span aria-hidden="true" className="ml-1">
              →
            </span>
          </Link>
        ) : null}
      </div>
    </article>
  );
}
