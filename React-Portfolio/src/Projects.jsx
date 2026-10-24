import { useState } from "react";
import { originalProjects } from "./projects-data";
export const desktopProjects = [
  {
    title: "Ubuntu Desktop Portfolio",
    image: "/Images/portfolio-ubuntu.png",
    alt: "Ubuntu portfolio desktop",
    description:
      "A portfolio you can explore like a GNOME desktop. Open apps, move windows, browse projects, and find your way through the terminal.",
    tags: ["React", "GNOME inspired", "Interactive desktop"],
    githubRepo: "Mayufisha/Portfolio-Ubuntu",
    links: [
      { label: "Explore desktop", href: "https://ubuntu.samuelmolla.dev" },
      {
        label: "Source",
        href: "https://github.com/Mayufisha/Portfolio-Ubuntu",
      },
    ],
    category: "Experiments",
  },
  {
    title: "Kali Desktop Portfolio",
    image: "/Images/portfolio-kali.png",
    alt: "Kali portfolio with terminal and project file manager",
    description:
      "A terminal-first Xfce inspired workspace with a project file manager, searchable app launcher, taskbar, and four workspaces.",
    tags: ["React", "Xfce inspired", "Terminal"],
    githubRepo: "Mayufisha/Portfolio-Kali",
    links: [
      { label: "Explore desktop", href: "https://kali.samuelmolla.dev" },
      { label: "Source", href: "https://github.com/Mayufisha/Portfolio-Kali" },
    ],
    category: "Experiments",
  },
];
export const projects = [
  ...desktopProjects,
  ...originalProjects.map((project) => ({
    ...project,
    category: project.platforms?.includes("Web") && project.platforms?.includes("Mobile")
      ? "Web & mobile"
      : project.tags.some((t) => ["Kotlin", ".NET MAUI"].includes(t))
        ? "Mobile & desktop"
        : "Web apps",
  })),
];
function Card({ project, index }) {
  return (
    <article
      className={
        "work-card " + (project.category === "Experiments" ? "is-desktop" : "")
      }
    >
      <a
        className="work-image"
        href={project.links[0].href}
        target="_blank"
        rel="noreferrer"
        aria-label={"Open " + project.title}
      >
        <img src={project.image} alt={project.alt} loading="lazy" />
        <span className="image-arrow">↗</span>
        {project.role && <span className="project-role">{project.role}</span>}
      </a>
      <div className="work-caption">
        <span className="work-number">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span>{project.category}</span>
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="work-tags">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <div className="work-links">
        {project.links.map((link) => (
          <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
            {link.label} <span>↗</span>
          </a>
        ))}
      </div>
    </article>
  );
}
export default function Projects() {
  const [filter, setFilter] = useState("All work");
  const [search, setSearch] = useState("");
  const filtered = projects.filter(
    (p) =>
      (filter === "All work" || p.category === filter ||
        (filter === "Web apps" && p.platforms?.includes("Web")) ||
        (filter === "Mobile & desktop" && p.platforms?.some(platform => ["Mobile", "Desktop"].includes(platform)))) &&
      (p.title + " " + p.tags.join(" ") + " " + p.description)
        .toLowerCase()
        .includes(search.toLowerCase()),
  );
  return (
    <>
      <section id="projects" className="projects-section section-wrap">
        <div className="section-kicker">
          <span>01 / SELECTED WORK</span>
          <span>FROM IDEA TO SOMETHING REAL</span>
        </div>
        <div className="section-heading">
          <h2>
            A few things
            <br />
            <em>I’ve put into the world.</em>
          </h2>
          <p>
            Web applications, mobile projects, and the occasional experiment.
            Each one, a chance to solve a different kind of problem.
          </p>
        </div>
        <div className="work-toolbar">
          <div className="work-filters" aria-label="Filter projects">
            {["All work", "Web apps", "Mobile & desktop", "Experiments"].map(
              (label) => (
                <button
                  key={label}
                  aria-pressed={filter === label}
                  onClick={() => setFilter(label)}
                >
                  {label}
                  {label === "All work" && <small>{projects.length}</small>}
                </button>
              ),
            )}
          </div>
          <label className="work-search">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <circle cx="10" cy="10" r="6" />
              <path d="m15 15 5 5" />
            </svg>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Find a project…"
              aria-label="Search projects"
            />
          </label>
        </div>
        <p className="search-result-count" role="status">
          {filtered.length} projects
          {filter !== "All work" ? " / " + filter : ""}
        </p>
        <div className="work-grid">
          {filtered.map((project) => (
            <Card
              key={project.title}
              project={project}
              index={projects.indexOf(project)}
            />
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="empty-projects">
            <h3>No projects found.</h3>
            <p>Try a different technology or project name.</p>
            <button
              onClick={() => {
                setSearch("");
                setFilter("All work");
              }}
            >
              Reset filters ↗
            </button>
          </div>
        )}
      </section>
      <section id="experiments" className="experiments-section">
        <div className="section-wrap">
          <div className="section-kicker">
            <span>02 / THE PLAYGROUND</span>
            <span>TAKE THE SCENIC ROUTE</span>
          </div>
          <div className="experiment-intro">
            <h2>
              Same developer.
              <br />
              <em>Different operating systems.</em>
            </h2>
            <p>
              A portfolio doesn’t have to be a page.
              <br />
              Sometimes it can be a whole desktop.
            </p>
          </div>
          <div className="edition-grid">
            {desktopProjects.map((project, index) => (
              <a
                key={project.title}
                className={"edition edition-" + (index ? "kali" : "ubuntu")}
                href={project.links[0].href}
                target="_blank"
                rel="noreferrer"
              >
                <div className="edition-meta">
                  <span>{index ? "02 / XFCE" : "01 / GNOME"}</span>
                  <span>OPEN DESKTOP ↗</span>
                </div>
                <img src={project.image} alt={project.alt} loading="lazy" />
                <div className="edition-caption">
                  <div>
                    <h3>
                      {index ? "The Kali edition." : "The Ubuntu edition."}
                    </h3>
                    <p>
                      {index
                        ? "A terminal, four workspaces, and room to explore."
                        : "A warm welcome. A familiar place to click around."}
                    </p>
                  </div>
                  <span>↗</span>
                </div>
              </a>
            ))}
          </div>
          <p className="playground-note">
            Open an app. Move a window. Type <code>help</code> in
            the terminal. Make yourself at home.
          </p>
        </div>
      </section>
    </>
  );
}
