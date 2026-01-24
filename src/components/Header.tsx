import { Navigation } from "./Navigation";
import { SocialLinks } from "./SocialLinks";
import { Social } from "@/data/site";

type NavItem = {
  label: string;
  href: string;
};

type HeaderProps = {
  name: string;
  role: string;
  tagline: string;
  navItems: NavItem[];
  socialLinks: Social[];
};

export function Header({
  name,
  role,
  tagline,
  navItems,
  socialLinks,
}: HeaderProps) {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-lightest sm:text-5xl">
          <a href="/">{name}</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-lightest sm:text-xl">
          {role}
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-slate">{tagline}</p>
        <Navigation items={navItems} />
      </div>
      <SocialLinks links={socialLinks} />
    </header>
  );
}
