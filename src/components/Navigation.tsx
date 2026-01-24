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
                className={`group flex items-center py-3 ${
                  isActive ? "text-slate-lightest" : ""
                }`}
              >
                <span
                  className={`nav-indicator ${
                    isActive ? "nav-indicator-active" : ""
                  }`}
                />
                <span
                  className={`text-xs font-bold uppercase tracking-widest transition-colors ${
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
