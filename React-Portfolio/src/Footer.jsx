export default function Footer() {
  return (
    <footer className="site-footer section-wrap">
      <div className="footer-top">
        <a href="#home" className="footer-brand">
          Samuel Molla<span>Making useful things, with care.</span>
        </a>
        <div>
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
          <a href="mailto:sambenmayu@gmail.com">Email ↗</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Samuel Molla</span>
        <span>BUILT WITH REACT. FINISHED WITH CARE.</span>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}
