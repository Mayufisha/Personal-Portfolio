function Header() {
    return (
        <header>
            <a href="#" class="text-xl font-bold hover:text-emerald-400 transition duration-300">Samuel Molla</a>
            <nav class="nav-links hidden md:flex gap-6 text-sm font-medium" aria-label="Main navigation">
              <a href="#home" class="hover:text-emerald-400 transition" >Home</a>
              <a href="#about" class="hover:text-emerald-400 transition">About</a>
              <a href="#skills" class="hover:text-emerald-400 transition" >Skills</a>
              <a href="#projects" class="hover:text-emerald-400 transition" >Projects</a>
              <a href="#contact" class="hover:text-emerald-400 transition" >Contact</a>
            </nav>
        </header>
    );
}

export default Header