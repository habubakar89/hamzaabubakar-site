import { siteData } from "@/data/site";
import {
  Header,
  AboutSection,
  ExperienceSection,
  ProjectsSection,
  ResearchSection,
  EducationSection,
  Footer,
  SpotlightEffect,
} from "@/components";

export default function Home() {
  return (
    <div className="group/spotlight relative">
      <SpotlightEffect />

      {/* Skip to content link */}
      <a href="#content" className="skip-to-content">
        Skip to Content
      </a>

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* Left column - sticky header */}
          <Header
            name={siteData.hero.name}
            role={siteData.hero.role}
            tagline={siteData.hero.tagline}
            navItems={siteData.nav.items}
            socialLinks={siteData.social}
          />

          {/* Right column - main content */}
          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <AboutSection paragraphs={siteData.about.paragraphs} />

            <ExperienceSection
              items={siteData.experience.items}
              resumeHref={siteData.experience.resumeHref}
            />

            <ProjectsSection items={siteData.projects.items} />

            <ResearchSection items={siteData.research.items} />

            <EducationSection items={siteData.education.items} />

            <Footer lines={siteData.footer.lines} />
          </main>
        </div>
      </div>
    </div>
  );
}
