import { useState, useMemo, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

export default function App() {
  
  const [active, setActive] = useState("home");

  const sections = useMemo(
    () => ({
      home: Home,
      about: About,
      skills: Skills,
      projects: Projects,
      contact: Contact,
    }),
    []
  );

  const Section = sections[active] ?? Home;

  useEffect(() => {
  const element = document.getElementById(active);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}, [active]);

  return (
    <>
      <div className="bg-gray-900">
      <Header active={active} setActive={setActive} />
      <main className="min-h-[70vh]">
        <Section />
      </main>
      <Footer  active={active} setActive={setActive} />
      </div>
    </>
  );
}
