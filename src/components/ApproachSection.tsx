import { ApproachBlock } from "@/data/site";
import { FadeIn } from "./FadeIn";

type ApproachSectionProps = {
  blocks: ApproachBlock[];
};

export function ApproachSection({ blocks }: ApproachSectionProps) {
  return (
    <section
      id="approach"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="How I build"
    >
      <div className="section-heading">
        <h2 className="section-heading-text">How I Build</h2>
      </div>
      <div>
        {blocks.map((block, index) => (
          <FadeIn key={block.id} delay={index * 0.1}>
            <div className="mb-8">
              <h3 className="mb-2 w-fit bg-gradient-to-r from-slate-lightest to-green bg-clip-text font-semibold text-transparent">
                {block.title}
              </h3>
              <p className="text-slate text-sm leading-normal text-justify hyphens-auto">
                {block.paragraph}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
