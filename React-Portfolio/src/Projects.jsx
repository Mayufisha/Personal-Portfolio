function Projects() {
    return (
           <section id="projects" class="py-16 bg-gray-900 text-white">
  <div class="max-w-6xl mx-auto px-4">
    <h2 class="text-3xl font-bold text-center mb-12">My Projects</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
     
    <div class="bg-slate-800 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transform transition duration-300 ease-in-out overflow-hidden">
  <img src="./assets/Images/Job-tracker-logo.png" alt="Job Application Tracker Screenshot" class="w-full h-48 object-cover"/>
  <div class="p-6">
    <h3 class="text-xl font-semibold mb-2">Job Application Tracker</h3>
    <p class="text-gray-300 mb-4">A full-stack CRUD web app to manage job applications with filters, secure login, and responsive design.</p>
    <div class="flex flex-wrap gap-4">
      <a href="https://job-application-tracker-vubk.onrender.com" target="_blank" class="bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-1 px-4 rounded transition">Live Demo</a>
      <a href="https://github.com/Mayufisha/Job-Application-Tracker" target="_blank" class="border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white font-medium py-1 px-4 rounded transition">GitHub</a>
    </div>
  </div>
</div>

      <div class="bg-slate-800 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transform transition duration-300 ease-in-out overflow-hidden">
        <img src="Images/little-lemon-preview.png" alt="Little Lemon Restaurant" class="w-full h-48 object-cover"/>
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2">Little Lemon Restaurant</h3>
          <p class="text-gray-300 mb-4">A responsive website designed for a fictional restaurant, featuring a clean UI and smooth navigation.</p>
          <div class="flex flex-wrap gap-4">
            <a href="https://mayufisha.github.io/Little-Lemon-Restaurant/index.html" target="_blank" class="bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-1 px-4 rounded transition">Live Demo</a>
            <a href="https://github.com/Mayufisha/Little-Lemon-Restaurant" target="_blank" class="border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white font-medium py-1 px-4 rounded transition">GitHub</a>
          </div>
        </div>
      </div>

      <div class="bg-slate-800 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transform transition duration-300 ease-in-out overflow-hidden">
        <img src="https://picsum.photos/200/300" alt="Weather App" class="w-full h-48 object-cover"/>
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2">Weather App</h3>
          <p class="text-gray-300 mb-4">A weather forecasting app using a public API to display real-time weather conditions.</p>
          <div class="flex flex-wrap gap-4">
            <a href="#" target="_blank" class="bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-1 px-4 rounded transition">Live Demo</a>
            <a href="#" target="_blank" class="border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white font-medium py-1 px-4 rounded transition">GitHub</a>
          </div>
        </div>
      </div>

      <div class="bg-slate-800 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transform transition duration-300 ease-in-out overflow-hidden">
        <img src="https://picsum.photos/200/300" alt="Memory Game" class="w-full h-48 object-cover"/>
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2">Memory Game</h3>
          <p class="text-gray-300 mb-4">A fun, interactive memory game built with vanilla JavaScript.</p>
          <div class="flex flex-wrap gap-4">
            <a href="#" target="_blank" class="bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-1 px-4 rounded transition">Live Demo</a>
            <a href="#" target="_blank" class="border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white font-medium py-1 px-4 rounded transition">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
);
}
export default Projects;