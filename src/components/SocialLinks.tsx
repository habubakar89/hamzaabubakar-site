"use client";

import { Social } from "@/data/site";
import {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
  InstagramIcon,
  EmailIcon,
  ResumeIcon,
} from "./Icons";

const iconMap = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  x: XIcon,
  instagram: InstagramIcon,
  email: EmailIcon,
  resume: ResumeIcon,
};

type SocialLinksProps = {
  links: Social[];
};

export function SocialLinks({ links }: SocialLinksProps) {
  return (
    <ul className="ml-1 mt-8 flex items-center gap-5" aria-label="Social media">
      {links.map((link) => {
        const IconComponent = iconMap[link.icon];
        return (
          <li key={link.label}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label={`${link.label} (opens in a new tab)`}
            >
              <IconComponent className="h-6 w-6" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
