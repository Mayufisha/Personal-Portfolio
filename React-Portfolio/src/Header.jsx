export default function Header({ active, setActive }) {
  const nav = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="py-4 bg-slate-800 px-6 rounded-lg shadow-lg mt-4 sticky top-2 z-50 flex justify-between items-center">
      <button
        onClick={() => setActive("home")}
        className="text-xl font-bold hover:text-emerald-400 transition duration-300"
      >
        Samuel Molla
      </button>

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
    </header>
  );
}
