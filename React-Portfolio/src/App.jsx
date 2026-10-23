import { useEffect, useState } from "react";
import Header from "./Header";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("samuel-theme") || "light";
    } catch {
      return "light";
    }
  });
  const [active, setActive] = useState("home");
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("samuel-theme", theme);
    } catch {
      /* Theme works without storage. */
    }
  }, [theme]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const candidate = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (candidate) setActive(candidate.target.id);
      },
      { rootMargin: "-15% 0px -55% 0px", threshold: [0, 0.15, 0.4] },
    );
    document
      .querySelectorAll("main>section[id]")
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <a className="skip-link" href="#home">
        Skip to content
      </a>
      <Header active={active} theme={theme} setTheme={setTheme} />
      <main>
        <Home />
        <Projects />
        <section id="about" className="about-section section-wrap">
          <div className="section-kicker">
            <span>03 / THE HUMAN PART</span>
            <span>A LITTLE ABOUT ME</span>
          </div>
          <div className="about-grid">
            <div className="about-photo">
              <img
                src="/Images/Samuel_Molla.jpg"
                alt="Samuel Molla"
                loading="lazy"
              />
              <div className="photo-note">
                Behind every interface,
                <br />
                there’s a curious human.
              </div>
            </div>
            <div className="about-copy">
              <h2>
                It started on a phone.
                <br />
                <em>It grew into a craft.</em>
              </h2>
              <p>
                I’m Samuel, a full-stack developer focused on building clean,
                responsive web apps that feel simple to use and solid under the
                hood.
              </p>
              <p>
                My path started with HTML, CSS, and JavaScript on a mobile
                screen. Formal computer science study sharpened my programming
                fundamentals. Real projects taught me to connect thoughtful
                interfaces with reliable backend logic.
              </p>
              <div className="journey">
                <div>
                  <span>2019—2022</span>
                  <strong>Self-taught foundations</strong>
                  <p>
                    HTML, CSS, JavaScript. One mobile screen and a lot of
                    curiosity.
                  </p>
                </div>
                <div>
                  <span>2022—2023</span>
                  <strong>Computer science & problem-solving</strong>
                  <p>
                    Programming logic, data structures, C++, and small web
                    projects.
                  </p>
                </div>
                <div>
                  <span>2023—PRESENT</span>
                  <strong>Full-stack projects & UI/UX</strong>
                  <p>
                    React, Tailwind, Python, databases, and design in Figma.
                  </p>
                </div>
              </div>
              <a
                className="inline-link"
                href="/Samuel_Molla_Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                More of my story, on paper <span>↗</span>
              </a>
            </div>
          </div>
        </section>
        <section id="skills" className="skills-section section-wrap">
          <div className="section-kicker">
            <span>04 / THE TOOLKIT</span>
            <span>IDEA → INTERFACE → APPLICATION</span>
          </div>
          <div className="skills-intro">
            <h2>
              Different tools.
              <br />
              <em>One considered experience.</em>
            </h2>
            <p>
              From the first layout to the data behind it, these are the
              technologies I use across my projects.
            </p>
          </div>
          <div className="toolkit-grid">
            {[
              {
                number: "01",
                title: "Interfaces",
                description: "Clean, responsive, and easy to navigate.",
                items: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
              },
              {
                number: "02",
                title: "Applications & data",
                description: "The logic that makes an interface useful.",
                items: [
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "C#",
                  ".NET",
                  "PostgreSQL",
                ],
              },
              {
                number: "03",
                title: "Beyond the browser",
                description: "Exploring ideas across platforms.",
                items: [
                  "Kotlin",
                  "Jetpack Compose",
                  ".NET MAUI",
                  "Python",
                  "C++",
                  "Java",
                  "Figma",
                ],
              },
            ].map((group) => (
              <article key={group.title}>
                <span className="tool-number">{group.number}</span>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <div className="tool-chips">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="contact" className="contact-section section-wrap">
          <div className="section-kicker">
            <span>05 / WHAT'S NEXT?</span>
            <span>LET’S BUILD SOMETHING GOOD</span>
          </div>
          <div className="contact-heading">
            <h2>
              A good project starts
              <br />
              with <em>a conversation.</em>
            </h2>
            <a href="mailto:sambenmayu@gmail.com" className="contact-email">
              sambenmayu@gmail.com <span>↗</span>
            </a>
          </div>
          <div className="contact-legacy">
            <Contact />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
