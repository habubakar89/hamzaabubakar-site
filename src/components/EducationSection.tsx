import { EducationItem } from "@/data/site";

type EducationCardProps = {
  item: EducationItem;
};

function EducationCard({ item }: EducationCardProps) {
  return (
    <li className="mb-8">
      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-[140px_1fr] sm:gap-6 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        {/* Hover background - absolutely positioned */}
        <div
          className="pointer-events-none absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition-all lg:-inset-x-6 lg:block lg:group-hover:bg-navy-light/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]"
          aria-hidden="true"
        />

        {/* Location column */}
        <div
          className="z-10 text-xs font-semibold uppercase tracking-wide text-slate"
          aria-label={item.location}
        >
          {item.location}
        </div>

        {/* Content column */}
        <div className="z-10">
          <h3 className="font-medium leading-snug text-slate-lightest">
            <span className="text-base font-medium leading-tight">
              {item.school}
            </span>
          </h3>
          <p className="mt-1 text-sm leading-normal text-slate">
            {item.degree}, {item.field}
          </p>
        </div>
      </div>
    </li>
  );
}

type EducationSectionProps = {
  items: EducationItem[];
};

export function EducationSection({ items }: EducationSectionProps) {
  return (
    <section
      id="education"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Education"
    >
      <div className="section-heading">
        <h2 className="section-heading-text">Education</h2>
      </div>
      <div>
        <ol className="group/list">
          {items.map((item) => (
            <EducationCard key={item.id} item={item} />
          ))}
        </ol>
      </div>
    </section>
  );
}
