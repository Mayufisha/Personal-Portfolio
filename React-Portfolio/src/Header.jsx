function Header() {
    return (
        <Header>
            <nav class="nav-links hidden md:flex gap-6 text-sm font-medium" aria-label="Main navigation">
              <a href="#home" class="hover:text-emerald-400 transition" data-scroll="home">Home</a>
              <a href="#about" class="hover:text-emerald-400 transition" data-scroll="about">About</a>
              <a href="#skills" class="hover:text-emerald-400 transition" data-scroll="skills">Skills</a>
              <a href="#projects" class="hover:text-emerald-400 transition" data-scroll="projects">Projects</a>
              <a href="#contact" class="hover:text-emerald-400 transition" data-scroll="contact">Contact</a>
            </nav>
        </Header>
    );
}

export default Header