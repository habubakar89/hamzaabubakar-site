"use client";

import { useScrollspy } from "@/hooks/useScrollspy";

type NavItem = {
  label: string;
  href: string;
};

type NavigationProps = {
  items: NavItem[];
};

export function Navigation({ items }: NavigationProps) {
  const sectionIds = items.map((item) => item.href.replace("#", ""));
  const activeSection = useScrollspy(sectionIds, 100);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // Update URL without triggering scroll
      window.history.pushState(null, "", href);
    }
  };

  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {items.map((item) => {
          const sectionId = item.href.replace("#", "");
          const isActive = activeSection === sectionId;

          return (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`group flex items-center py-3 transition-all duration-300 ${
                  isActive ? "text-slate-lightest" : "text-slate hover:text-slate-lightest"
                }`}
              >
                <span
                  className={`nav-indicator mr-4 h-px transition-all duration-300 ${
                    isActive
                      ? "w-16 bg-slate-lightest"
                      : "w-8 bg-slate group-hover:w-16 group-hover:bg-slate-lightest group-focus-visible:w-16 group-focus-visible:bg-slate-lightest"
                  }`}
                />
                <span
                  className={`nav-text text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                    isActive
                      ? "text-slate-lightest"
                      : "text-slate group-hover:text-slate-lightest group-focus-visible:text-slate-lightest"
                  }`}
                >
                  {item.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
