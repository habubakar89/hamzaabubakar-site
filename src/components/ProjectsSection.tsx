import Image from "next/image";
import { ProjectItem } from "@/data/site";
import { TagPill } from "./TagPill";
import { FadeIn } from "./FadeIn";

type ProjectCardProps = {
  item: ProjectItem;
  index: number;
};

function ProjectCard({ item, index }: ProjectCardProps) {
  const hasImage = !!item.image;

  return (
    <FadeIn delay={index * 0.07}>
      <li className="mb-12">
        <div
          className={`group relative grid gap-4 pb-1 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50 ${
            hasImage ? "sm:grid-cols-[200px_1fr] sm:gap-8 md:gap-4" : ""
          }`}
        >
          <div
            className="pointer-events-none absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition-all lg:-inset-x-6 lg:block lg:group-hover:bg-navy-light/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]"
            aria-hidden="true"
          />

          {hasImage && (
            <div className="z-10 order-2 sm:order-1">
              <Image
                src={item.image!.src}
                alt={item.image!.alt}
                width={item.image!.width}
                height={item.image!.height}
                className="rounded border-2 border-navy-lightest/10 transition group-hover:border-navy-lightest/30"
                loading="lazy"
              />
            </div>
          )}

          <div className={`z-10 ${hasImage ? "order-1 sm:order-2" : ""}`}>
            <h3 className="font-medium leading-snug text-slate-lightest">
              <span className="text-base font-medium leading-tight">{item.name}</span>
            </h3>
            <p className="mt-2 text-sm leading-normal text-slate text-justify hyphens-auto">
              {item.description}
            </p>
            {item.bullets && item.bullets.length > 0 && (
              <ul className="mt-2 space-y-1">
                {item.bullets.map((bullet, i) => (
                  <li key={i} className="flex text-sm leading-normal text-slate">
                    <span className="mr-2 text-green">▹</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
            <ul className="mt-2 flex flex-wrap gap-2" aria-label="Technologies used">
              {item.tags.map((tag) => (
                <li key={tag}>
                  <TagPill>{tag}</TagPill>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </li>
    </FadeIn>
  );
}

type ProjectsSectionProps = {
  items: ProjectItem[];
};

export function ProjectsSection({ items }: ProjectsSectionProps) {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <div className="section-heading">
        <h2 className="section-heading-text">Projects</h2>
      </div>
      <div>
        <ol className="group/list">
          {items.map((item, index) => (
            <ProjectCard key={item.id} item={item} index={index} />
          ))}
        </ol>
      </div>
    </section>
  );
}
