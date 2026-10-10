import Image from "next/image";
import type { ReactNode } from "react";

type SectionImageSplitProps = {
  children: ReactNode;
  src: string;
  alt: string;
};

/**
 * Two-column layout for a text section: existing content on the left, a photo
 * on the right. Stacks on mobile with the content first. The image is a
 * meaningful photo (non-empty alt), below the fold, so it is lazy loaded with
 * `fill` plus `sizes`. Never use this above the fold; heroes keep `priority`.
 */
export function SectionImageSplit({
  children,
  src,
  alt,
}: SectionImageSplitProps) {
  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start lg:gap-14 xl:gap-20">
      <div className="min-w-0">{children}</div>
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-brand-surface-alt shadow-sm ring-1 ring-black/5 lg:sticky lg:top-24">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1280px) 36vw, (min-width: 1024px) 40vw, 100vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}
