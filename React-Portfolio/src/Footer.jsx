import { useState } from "react";
function Footer({ active, setActive }) {
  const footer_nav = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];
  
  return (
    <footer className="bg-slate-900 text-slate-100 py-10 ">
      <div className="flex flex-col md:flex-row justify-around items-center gap-6 md:gap-10">
        <nav
        className="nav-links flex gap-6 text-sm font-medium"
        aria-label="Footer navigation"
       >
        {footer_nav.map((item) => {
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={
                "hover:text-amber-400 transition "
              }
            >
              {item.label}
            </button>
          );
        })}
        </nav>

        <div className="text-center">
      <h2 className="font-['Space_Grotesk'] text-xl font-medium mb-3">Let's Connect</h2>
      <div className="flex justify-center gap-6 text-2xl">
        <a href="mailto:sambenmayu@gmail.com" target="_blank" className="hover:text-amber-400 transition">
          <i className="fa-solid fa-envelope"></i>
        </a>
        <a href="https://www.linkedin.com/in/samuel-molla" target="_blank" className="hover:text-amber-400 transition">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/Mayufisha" target="_blank" className="hover:text-amber-400 transition">
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
        </div>
      </div> 
      
      <div className="text-center text-sm text-slate-400 mt-2 -mb-6 ">
       &copy; 2025 Samuel Molla. All Rights Reserved.
      </div>
    </footer>
    );
}
export default Footer;
