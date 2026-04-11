import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

export default function App() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const element = document.getElementById(active);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [active]);

  return (
    <>
      <div className="bg-slate-950 font-['Manrope'] text-[15px] md:text-base">
        <Header active={active} setActive={setActive} />
        <main>
          <Home setActive={setActive} />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer active={active} setActive={setActive} />
      </div>
    </>
  );
}
