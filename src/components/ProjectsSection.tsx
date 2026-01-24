import Image from "next/image";
import { ProjectItem } from "@/data/site";
import { TagPill } from "./TagPill";
import { ArrowRightIcon } from "./Icons";

type ProjectCardProps = {
  item: ProjectItem;
};

function ProjectCard({ item }: ProjectCardProps) {
  return (
    <li className="mb-12">
      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="card-hover" />
        <div className="z-10 order-2 sm:order-1 sm:col-span-2">
          {item.image ? (
            <Image
              src={item.image.src}
              alt={item.image.alt}
              width={item.image.width}
              height={item.image.height}
              className="rounded border-2 border-navy-lightest/10 transition group-hover:border-navy-lightest/30"
              loading="lazy"
            />
          ) : (
            <div className="aspect-video rounded border-2 border-navy-lightest/10 bg-navy-light/50 transition group-hover:border-navy-lightest/30" />
          )}
        </div>
        <div className="z-10 order-1 sm:order-2 sm:col-span-6">
          <h3 className="font-medium leading-snug text-slate-lightest">
            <span className="text-base font-medium leading-tight">
              {item.name}
            </span>
          </h3>
          <p className="mt-2 text-sm leading-normal text-slate">
            {item.description}
          </p>
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
  );
}

type ProjectsSectionProps = {
  items: ProjectItem[];
  archiveHref: string;
};

export function ProjectsSection({ items, archiveHref }: ProjectsSectionProps) {
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
          {items.map((item) => (
            <ProjectCard key={item.id} item={item} />
          ))}
        </ol>
        <div className="mt-12">
          <a
            href={archiveHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center font-medium leading-tight text-slate-lightest hover:text-green focus-visible:text-green"
            aria-label="View Full Project Archive"
          >
            <span className="border-b border-transparent pb-px transition group-hover:border-green">
              View Full Project Archive
            </span>
            <ArrowRightIcon className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
