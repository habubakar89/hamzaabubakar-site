import { StackGroup } from "@/data/site";
import { TagPill } from "./TagPill";
import { FadeIn } from "./FadeIn";

type StackSectionProps = {
  groups: StackGroup[];
};

export function StackSection({ groups }: StackSectionProps) {
  return (
    <section
      id="stack"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Stack and tools"
    >
      <div className="section-heading">
        <h2 className="section-heading-text">Stack &amp; Tools</h2>
      </div>
      <div className="space-y-8">
        {groups.map((group, index) => (
          <FadeIn key={group.id} delay={index * 0.1}>
            <div>
              <p className="mb-3 text-sm font-semibold text-slate-lightest">{group.label}</p>
              <ul className="flex flex-wrap gap-2" aria-label={group.label}>
                {group.tags.map((tag) => (
                  <li key={tag}>
                    <TagPill>{tag}</TagPill>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
