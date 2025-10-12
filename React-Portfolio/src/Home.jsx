function Home() {
    return (
        <section id="home" className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 gap-20 bg-gray-900 text-white">
          <div className="flex flex-col justify-center gap-6 text-2xl">
            <a href="https://github.com/Mayufisha" target="_blank" className="hover:text-emerald-400 transition">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="mailto:sambenmayu@gmail.com" target="_blank" className="hover:text-emerald-400 transition">
              <i className="fa-solid fa-envelope"></i>
            </a>
            <a href="https://www.linkedin.com/in/samuel-molla" target="_blank" className="hover:text-emerald-400 transition">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
         <div className="text-center md:text-left max-w-lg">
           <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Samuel Molla</h1>
           <h3 className="text-2xl text-emerald-400 mb-4">Frontend Developer</h3>
           <p className="mb-6 text-gray-300">I create elegant and efficient solutions using modern web technologies.</p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-6">
             <a href="#projects" className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-6 rounded transition">View My Work</a>
             <a href="#contact" className="border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white font-semibold py-2 px-6 rounded transition">Get in Touch</a>
             <a href="#" className="border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white font-semibold py-2 px-6 rounded transition">Resume</a>

           </div>

           <div className="flex justify-center md:justify-start gap-6 text-3xl">
             <a href="https://www.linkedin.com/in/samuel-molla" target="_blank" className="hover:text-emerald-400 transition"><i className='bx bxl-linkedin'></i></a>
             <a href="https://github.com/Mayufisha" target="_blank" className="hover:text-emerald-400 transition"><i className='bx bxl-github'></i></a>
           </div>
         </div>

         <div className="w-40 h-40 md:w-64 md:h-64 rounded-xl overflow-hidden border-4 border-gray-900 shadow-lg">
           <img src="Images/SamuelMolla.jpg" alt="Samuel Molla" className="w-full h-full object-cover"/>
         </div>
      </section>
    );
};
export default Home;