import { ExperienceItem } from "@/data/site";
import { TagPill } from "./TagPill";
import { ArrowRightIcon } from "./Icons";

type ExperienceCardProps = {
  item: ExperienceItem;
};

function ExperienceCard({ item }: ExperienceCardProps) {
  return (
    <li className="mb-12">
      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-[140px_1fr] sm:gap-6 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        {/* Hover background - absolutely positioned, covers entire card */}
        <div
          className="pointer-events-none absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition-all lg:-inset-x-6 lg:block lg:group-hover:bg-navy-light/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]"
          aria-hidden="true"
        />

        {/* Date column */}
        <header
          className="z-10 text-xs font-semibold uppercase tracking-wide text-slate"
          aria-label={item.dateRange}
        >
          {item.dateRange}
        </header>

        {/* Content column */}
        <div className="z-10">
          <h3 className="font-medium leading-snug text-slate-lightest">
            <span className="text-base font-medium leading-tight">
              {item.title} · {item.company}
            </span>
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
