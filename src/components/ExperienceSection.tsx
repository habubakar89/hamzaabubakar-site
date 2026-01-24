import { ExperienceItem } from "@/data/site";
import { TagPill } from "./TagPill";
import { ArrowUpRightIcon, ArrowRightIcon, LinkIcon } from "./Icons";

type ExperienceCardProps = {
  item: ExperienceItem;
};

function ExperienceCard({ item }: ExperienceCardProps) {
  return (
    <li className="mb-12">
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="card-hover" />
        <header
          className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate sm:col-span-2"
          aria-label={item.dateRange}
        >
          {item.dateRange}
        </header>
        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-snug text-slate-lightest">
            <div>
              <a
                href={item.companyHref}
                target="_blank"
                rel="noopener noreferrer"
                className="arrow-link group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-lightest hover:text-green focus-visible:text-green"
                aria-label={`${item.title} at ${item.company} (opens in a new tab)`}
              >
                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                <span>
                  {item.title} ·{" "}
                  <span className="inline-block">
                    {item.company}
                    <ArrowUpRightIcon className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1" />
                  </span>
                </span>
              </a>
            </div>
          </h3>
          <p className="mt-2 text-sm leading-normal text-slate">
            {item.summary}
          </p>
          {item.bullets && item.bullets.length > 0 && (
            <ul className="mt-2 space-y-1">
              {item.bullets.map((bullet, index) => (
                <li
                  key={index}
                  className="flex text-sm leading-normal text-slate"
                >
                  <span className="mr-2 text-green">▹</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}
          {item.links && item.links.length > 0 && (
            <ul className="mt-2 flex flex-wrap gap-2" aria-label="Related links">
              {item.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex items-center text-sm font-medium text-slate-lightest hover:text-green focus-visible:text-green"
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

type ExperienceSectionProps = {
  items: ExperienceItem[];
  resumeHref: string;
};

export function ExperienceSection({ items, resumeHref }: ExperienceSectionProps) {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <div className="section-heading">
        <h2 className="section-heading-text">Experience</h2>
      </div>
      <div>
        <ol className="group/list">
          {items.map((item) => (
            <ExperienceCard key={item.id} item={item} />
          ))}
        </ol>
        <div className="mt-12">
          <a
            href={resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center font-medium leading-tight text-slate-lightest hover:text-green focus-visible:text-green"
            aria-label="View Full Resume (opens in a new tab)"
          >
            <span className="border-b border-transparent pb-px transition group-hover:border-green">
              View Full Résumé
            </span>
            <ArrowRightIcon className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
