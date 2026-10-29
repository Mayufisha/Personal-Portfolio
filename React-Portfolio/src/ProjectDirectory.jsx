import { useEffect, useState } from "react";
import Projects from "./Projects";
export default function ProjectDirectory() {
  const [theme, setTheme] = useState(() => localStorage.getItem("samuel-theme") || "light");
  useEffect(() => { document.documentElement.dataset.theme = theme; document.title = "All Projects — Samuel Molla"; localStorage.setItem("samuel-theme", theme); }, [theme]);
  return <><header className="catalog-header section-wrap"><a href="https://samuelmolla.dev" className="catalog-brand">Samuel Molla<span> / Projects</span></a><nav><a href="https://samuelmolla.dev">Back to portfolio ↗</a><button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="Toggle color theme">{theme === "dark" ? "Light" : "Dark"} theme</button></nav></header><main className="catalog-main"><Projects allProjects /></main><footer className="catalog-footer section-wrap"><p>Built by Samuel Molla.</p><a href="https://samuelmolla.dev/#contact">Let’s build something ↗</a></footer></>;
}
