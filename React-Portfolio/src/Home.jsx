function Home() {
    return (
        <section id="home" class="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 gap-10 bg-gray-900 text-white">
  
  <div class="text-center md:text-left max-w-lg">
    <h1 class="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Samuel Molla</h1>
    <h3 class="text-2xl text-emerald-400 mb-4">Frontend Developer</h3>
    <p class="mb-6 text-gray-300">I create elegant and efficient solutions using modern web technologies.</p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-6">
      <a href="#projects" class="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-6 rounded transition">View My Work</a>
      <a href="#contact" class="border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white font-semibold py-2 px-6 rounded transition">Get in Touch</a>
      <a href="#" class="border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white font-semibold py-2 px-6 rounded transition">Resume</a>

    </div>

    <div class="flex justify-center md:justify-start gap-6 text-3xl">
      <a href="https://www.linkedin.com/in/samuel-molla" target="_blank" class="hover:text-emerald-400 transition"><i class='bx bxl-linkedin'></i></a>
      <a href="https://github.com/Mayufisha" target="_blank" class="hover:text-emerald-400 transition"><i class='bx bxl-github'></i></a>
    </div>
  </div>

  <div class="w-40 h-40 md:w-64 md:h-64 rounded-xl overflow-hidden border-4 border-gray-900 shadow-lg">
    <img src="Images/SamuelMolla.jpg" alt="Samuel Molla" class="w-full h-full object-cover"/>
  </div>
</section>
    );
};
export default Home;