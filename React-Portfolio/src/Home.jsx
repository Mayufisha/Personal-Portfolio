export default function Home() {
  return (
    <section id="home" className="hero section-wrap">
      <div className="hero-meta">
        <span className="availability">
          <i /> Open to opportunities & collaborations
        </span>
        <span className="hero-edition">
          PERSONAL PORTFOLIO / {new Date().getFullYear()}
        </span>
      </div>
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="hello">HEY THERE. I'M SAMUEL.</p>
          <h1>
            Thoughtful
            <br />
            interfaces.
            <br />
            <span>Solid foundations.</span>
          </h1>
          <p className="hero-description">
            A full-stack developer bringing clean design and reliable code
            together. I build web apps that feel simple to use—and work just as
            well underneath.
          </p>
          <div className="hero-actions">
            <a className="button-primary" href="#projects">
              Explore my work <span>↗</span>
            </a>
            <a href="#contact" className="button-text">
              Let’s talk <span>↗</span>
            </a>
          </div>
          <div className="hero-socials">
            <a
              href="https://github.com/Mayufisha"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/samuel-molla"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
            <span>React · Node · Thoughtful details</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-topline">
            <span className="tiny-spark">✳</span>
            <span>
              ONE DEVELOPER.
              <br />A FEW DIFFERENT WORLDS.
            </span>
            <span>↙</span>
          </div>
          <a
            className="desktop-preview preview-ubuntu"
            href="https://ubuntu.samuelmolla.dev"
            target="_blank"
            rel="noreferrer"
          >
            <div className="preview-caption">
              <span>
                <i /> THE UBUNTU EDITION
              </span>
              <span>↗</span>
            </div>
            <img
              src="/Images/portfolio-ubuntu.png"
              alt="My Ubuntu inspired portfolio with a GNOME dock and desktop windows"
            />
            <div className="preview-bottom">
              <strong>
                A familiar desktop.
                <br />A different kind of portfolio.
              </strong>
              <span>Open desktop ↗</span>
            </div>
          </a>
          <a
            className="kali-preview-chip"
            href="https://kali.samuelmolla.dev"
            target="_blank"
            rel="noreferrer"
          >
            <span className="terminal-glyph">&gt;_</span>
            <div>
              Prefer the command line?
              <strong>Explore the Kali edition ↗</strong>
            </div>
            <span className="chip-dot" />
          </a>
          <div className="visual-note">
            <span className="hand-line">↳</span> Serious about the code.
            <br />
            Playful about the experience.
          </div>
        </div>
      </div>
      <div className="hero-bottom">
        <span>FULL-STACK DEVELOPMENT</span>
        <span>WEB · MOBILE · EXPERIMENTS</span>
        <a href="#projects">
          SCROLL TO EXPLORE <span>↓</span>
        </a>
      </div>
    </section>
  );
}
