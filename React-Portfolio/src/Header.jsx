import { useEffect, useState } from "react";
export default function Header({ active, theme, setTheme }) {
  const [menu, setMenu] = useState(false);
  const links = [
    ["projects", "Work"],
    ["experiments", "Playground"],
    ["about", "About"],
    ["contact", "Contact"],
  ];
  useEffect(() => {
    function escape(e) {
      if (e.key === "Escape") setMenu(false);
    }
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, []);
  return (
    <header className="site-header">
      <a
        href="#home"
        className="brand"
        onClick={() => setMenu(false)}
        aria-label="Samuel Molla home"
      >
        <span className="monogram">
          sm<span>↗</span>
        </span>
        <span>
          Samuel Molla<small>Developer & curious human</small>
        </span>
      </a>
      <nav
        id="mobile-navigation"
        className={menu ? "header-nav is-open" : "header-nav"}
        aria-label="Main navigation"
      >
        {links.map(([id, label]) => (
          <a
            key={id}
            href={"#" + id}
            aria-current={active === id ? "location" : undefined}
            onClick={() => setMenu(false)}
          >
            {label}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <button
          className="theme-toggle"
          aria-label={
            theme === "light" ? "Switch to dark theme" : "Switch to light theme"
          }
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          title="Change color theme"
        >
          {theme === "light" ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <path d="M21 13a9 9 0 0 1-10-10A9 9 0 1 0 21 13Z" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 1v3m0 16v3M1 12h3m16 0h3M4 4l2 2m12 12 2 2M20 4l-2 2M6 18l-2 2" />
            </svg>
          )}
        </button>
        <a
          className="resume-link"
          href="/Samuel_Molla_Resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Résumé <span>↗</span>
        </a>
        <button
          className="menu-toggle"
          aria-label={menu ? "Close menu" : "Open menu"}
          aria-expanded={menu}
          aria-controls="mobile-navigation"
          onClick={() => setMenu(!menu)}
        >
          {menu ? "×" : "☰"}
        </button>
      </div>
    </header>
  );
}
