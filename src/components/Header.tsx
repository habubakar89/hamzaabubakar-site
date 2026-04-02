"use client";

import { motion, useReducedMotion } from "framer-motion";
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
  subTagline?: string;
  navItems: NavItem[];
  socialLinks: Social[];
};

const item = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay },
});

export function Header({
  name,
  role,
  tagline,
  subTagline,
  navItems,
  socialLinks,
}: HeaderProps) {
  const shouldReduceMotion = useReducedMotion();
  const animate = shouldReduceMotion ? {} : undefined;

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <motion.h1
          className="text-4xl font-bold tracking-tight sm:text-5xl"
          {...(animate ?? item(0))}
        >
          <a
            href="/"
            className="inline-block bg-gradient-to-b from-white to-slate-light bg-clip-text text-transparent"
          >
            {name}
          </a>
        </motion.h1>

        <motion.h2
          className="mt-3 text-lg font-medium tracking-tight text-slate-lightest sm:text-xl"
          {...(animate ?? item(0.1))}
        >
          {role}
        </motion.h2>

        <motion.p
          className="mt-4 max-w-xs leading-normal text-slate"
          {...(animate ?? item(0.2))}
        >
          {tagline}
        </motion.p>

        {subTagline && (
          <motion.p
            className="mt-3 max-w-xs leading-normal text-slate"
            {...(animate ?? item(0.28))}
          >
            {subTagline}
          </motion.p>
        )}

        <motion.div {...(animate ?? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.5, delay: 0.38 } })}>
          <Navigation items={navItems} />
        </motion.div>
      </div>

      <motion.div {...(animate ?? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.5, delay: 0.5 } })}>
        <SocialLinks links={socialLinks} />
      </motion.div>
    </header>
  );
}
