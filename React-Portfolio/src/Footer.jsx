function Footer() {
  
    return (
        <footer className="bg-gray-800 text-white py-10 ">
  <div className="max-w-6xl mx-auto px-6 flex flex-row justify-around items-center md:items-start gap-10">
   
   
    <div className=" text-center md:text-left">
      <ul className="flex flex-row space-x-4 text-sm">
        <li><a href="#home" className="hover:text-emerald-400 transition">Home</a></li>
        <li><a href="#about" className="hover:text-emerald-400 transition">About</a></li>
        <li><a href="#skills" className="hover:text-emerald-400 transition">Skills</a></li>
        <li><a href="#projects" className="hover:text-emerald-400 transition">Projects</a></li>
        <li><a href="#contact" className="hover:text-emerald-400 transition">Contact</a></li>
      </ul>
    </div>

    <div className="text-center">
      <h2 className="text-lg font-semibold mb-3">Let's Connect</h2>
      <div className="flex justify-center gap-6 text-2xl">
        <a href="mailto:sambenmayu@gmail.com" target="_blank" className="hover:text-emerald-400 transition">
          <i className="fa-solid fa-envelope"></i>
        </a>
        <a href="https://www.linkedin.com/in/samuel-molla" target="_blank" className="hover:text-emerald-400 transition">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/Mayufisha" target="_blank" className="hover:text-emerald-400 transition">
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </div>
  </div> 

  <div className="text-center text-sm text-gray-400 ">
    &copy; 2025 Samuel Molla. All Rights Reserved.
  </div>
</footer>
    );
}
export default Footer;