import Image from "next/image";
import { ProjectItem } from "@/data/site";
import { TagPill } from "./TagPill";
import { ArrowUpRightIcon, ArrowRightIcon, LinkIcon } from "./Icons";

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
            <div>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="arrow-link group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-lightest hover:text-green focus-visible:text-green"
                aria-label={`${item.name} (opens in a new tab)`}
              >
                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                <span>
                  {item.name}
                  <ArrowUpRightIcon className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1" />
                </span>
              </a>
            </div>
          </h3>
          <p className="mt-2 text-sm leading-normal text-slate">
            {item.description}
          </p>
          {item.links && item.links.length > 0 && (
            <ul className="mt-2 flex flex-wrap gap-x-4" aria-label="Project links">
              {item.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 inline-flex items-center text-sm font-medium text-slate-lightest hover:text-green focus-visible:text-green"
                  >
                    <LinkIcon className="mr-1 h-3 w-3" />
                    <span>{link.label}</span>
                  </a>
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
