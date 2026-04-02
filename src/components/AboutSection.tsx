import Image from "next/image";
import { FadeIn } from "./FadeIn";

type AboutSectionProps = {
  paragraphs: string[];
};

export function AboutSection({ paragraphs }: AboutSectionProps) {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="section-heading">
        <h2 className="section-heading-text">About</h2>
      </div>

      <FadeIn>
        <div className="mb-10 flex justify-center">
          <Image
            src="/profile.png"
            alt="Hamza Abubakar Kheruwala"
            width={480}
            height={480}
            className="h-72 w-72 rounded-xl object-cover sm:h-80 sm:w-80 md:h-96 md:w-96 lg:h-[432px] lg:w-[432px]"
            priority
          />
        </div>
      </FadeIn>

      <div className="space-y-4">
        {paragraphs.map((paragraph, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <p className="text-slate text-justify hyphens-auto">{paragraph}</p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
