function Footer() {
    return (
        <footer class="bg-gray-800 text-white py-10 ">
  <div class="max-w-6xl mx-auto px-6 flex flex-row justify-around items-center md:items-start gap-10">
    <div class=" text-center md:text-left">
      <ul class="flex flex-row space-x-4 text-sm">
        <li><a href="#home" class="hover:text-emerald-400 transition">Home</a></li>
        <li><a href="#about" class="hover:text-emerald-400 transition">About</a></li>
        <li><a href="#skills" class="hover:text-emerald-400 transition">Skills</a></li>
        <li><a href="#projects" class="hover:text-emerald-400 transition">Projects</a></li>
        <li><a href="#contact" class="hover:text-emerald-400 transition">Contact</a></li>
      </ul>
    </div>

    <div class="text-center">
      <h2 class="text-lg font-semibold mb-3">Let's Connect</h2>
      <div class="flex justify-center gap-6 text-2xl">
        <a href="mailto:sambenmayu@gmail.com" target="_blank" class="hover:text-emerald-400 transition">
          <i class="fa-solid fa-envelope"></i>
        </a>
        <a href="https://www.linkedin.com/in/samuel-molla" target="_blank" class="hover:text-emerald-400 transition">
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/Mayufisha" target="_blank" class="hover:text-emerald-400 transition">
          <i class="fa-brands fa-github"></i>
        </a>
      </div>
    </div>
  </div> 

  <div class="text-center text-sm text-gray-400 ">
    &copy; 2025 Samuel Molla. All Rights Reserved.
  </div>
</footer>
    );
}
export default Footer;