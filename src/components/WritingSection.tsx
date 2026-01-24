import { WritingItem } from "@/data/site";
import { ArrowUpRightIcon } from "./Icons";

// Group writing items by year
function groupByYear(items: WritingItem[]): Map<number, WritingItem[]> {
  const groups = new Map<number, WritingItem[]>();

  // Sort by year descending first
  const sorted = [...items].sort((a, b) => b.year - a.year);

  sorted.forEach((item) => {
    const existing = groups.get(item.year) || [];
    groups.set(item.year, [...existing, item]);
  });

  return groups;
}

type WritingRowProps = {
  item: WritingItem;
  showYear?: boolean;
};

function WritingRow({ item, showYear = false }: WritingRowProps) {
  return (
    <li className="mb-4">
      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-[80px_1fr] sm:gap-6 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        {/* Hover background - absolutely positioned */}
        <div
          className="pointer-events-none absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition-all lg:-inset-x-6 lg:block lg:group-hover:bg-navy-light/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]"
          aria-hidden="true"
        />
        <div
          className="z-10 text-xs font-semibold uppercase tracking-wide text-slate"
          aria-hidden={!showYear}
        >
          {showYear ? item.year : ""}
        </div>
        <div className="z-10">
          <h3 className="font-medium leading-snug text-slate-lightest">
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="arrow-link group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-lightest hover:text-green focus-visible:text-green"
              aria-label={`${item.title} (opens in a new tab)`}
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
              <span>
                {item.title}
                <ArrowUpRightIcon className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1" />
              </span>
            </a>
          </h3>
          {item.blurb && (
            <p className="mt-1 text-sm leading-normal text-slate">
              {item.blurb}
            </p>
          )}
          {item.outlet && (
            <p className="mt-1 text-xs text-slate">
              {item.outlet}
              {item.dateLabel && ` · ${item.dateLabel}`}
            </p>
          )}
        </div>
      </div>
    </li>
  );
}

type WritingSectionProps = {
  items: WritingItem[];
};

export function WritingSection({ items }: WritingSectionProps) {
  const groupedItems = groupByYear(items);
  const years = Array.from(groupedItems.keys()).sort((a, b) => b - a);

  return (
    <section
      id="writing"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Writing and articles"
    >
      <div className="section-heading">
        <h2 className="section-heading-text">Writing</h2>
      </div>
      <div>
        <ol className="group/list">
          {years.map((year) => {
            const yearItems = groupedItems.get(year) || [];
            return yearItems.map((item, index) => (
              <WritingRow
                key={item.id}
                item={item}
                showYear={index === 0}
              />
            ));
          })}
        </ol>
      </div>
    </section>
  );
}
