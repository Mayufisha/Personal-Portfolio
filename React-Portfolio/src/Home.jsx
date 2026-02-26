function Home() {
    return (
        <section id="home" className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 gap-10 md:gap-20 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900 text-slate-100">
          <div className="flex md:flex-col justify-center gap-6 text-2xl">
            <a href="https://github.com/Mayufisha" target="_blank" className="hover:text-amber-400 transition">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="mailto:sambenmayu@gmail.com" target="_blank" className="hover:text-amber-400 transition">
              <i className="fa-solid fa-envelope"></i>
            </a>
            <a href="https://www.linkedin.com/in/samuel-molla" target="_blank" className="hover:text-amber-400 transition">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
         <div className="text-center md:text-left max-w-lg">
           <h1 className="font-['Space_Grotesk'] text-5xl md:text-6xl font-semibold leading-tight tracking-tight mb-4">
             Hi, I'm Samuel Molla
           </h1>
           <h3 className="font-['Space_Grotesk'] text-2xl md:text-3xl text-amber-400 mb-4">
             A Full-Stack Developer
           </h3>
           <p className="mb-6 text-slate-300 leading-relaxed">
             I create elegant and efficient solutions using modern web technologies.
           </p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-6">
             <a href="./Samuel_Molla_Resume.pdf" className="bg-amber-500 hover:bg-amber-600 text-slate-100 font-semibold py-2 px-6 rounded transition" target="_blank">Resume</a>
           </div>
         </div>

         <div className="w-40 h-40 md:w-64 md:h-64 rounded-xl overflow-hidden border-4 border-slate-800 shadow-lg">
           <img src="Images/SamuelMolla.jpg" alt="Samuel Molla" className="w-full h-full object-cover"/>
         </div>
      </section>
    );
};
export default Home;
