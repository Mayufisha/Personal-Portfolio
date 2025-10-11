import { useState } from "react";

export default function Header({ active, setActive }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="py-4 bg-slate-800 px-6 rounded-lg shadow-lg  sticky top-2 z-50 flex justify-between items-center">
      <button                                       
        onClick={() => setActive("home")}
        className="text-xl font-bold hover:text-emerald-400 transition duration-300"
      >
        Samuel Molla
      </button>

      {/* Hamburger for mobile */}
      <button
        className="md:hidden text-gray-200 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Open navigation menu"
      >
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Desktop nav */}
      <nav
        className="nav-links hidden md:flex gap-6 text-sm font-medium"
        aria-label="Main navigation"
      >
        {nav.map((item) => {
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={
                "hover:text-emerald-400 transition " +
                (isActive ? "text-emerald-400" : "text-gray-200")
              }
            >
              {item.label}
            </button>
          );
        })}
      </nav>

      {/* Side nav for mobile */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex">
          <nav className="bg-slate-800 w-2/3 max-w-xs h-full p-6 flex flex-col gap-6">
            <button
              className="self-end mb-8 text-gray-400"
              onClick={() => setMenuOpen(false)}
              aria-label="Close navigation menu"
            >
              ✕
            </button>
            {nav.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActive(item.id);
                  setMenuOpen(false);
                }}
                className={
                  "text-left py-2 px-2 rounded hover:bg-slate-700 transition " +
                  (active === item.id ? "text-emerald-400" : "text-gray-200")
                }
              >
                {item.label}
              </button>
            ))}
          </nav>
          {/* Click outside to close */}
          <div className="flex-1" onClick={() => setMenuOpen(false)} />
        </div>
      )}
    </header>
  );
}
