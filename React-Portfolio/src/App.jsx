import { useState, useMemo } from "react";
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

  return (
    <>
      <div className="bg-gray-900">
      <Header active={active} setActive={setActive} />
      <main className="min-h-[70vh]">
        <Section />
      </main>
      <Footer />
      </div>
    </>
  );
}
