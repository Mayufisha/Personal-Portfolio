function Projects() {
    return (
           <section id="projects" className="min-h-screen py-16 bg-gray-900 text-white">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
     
    <div className="bg-slate-800 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transform transition duration-300 ease-in-out overflow-hidden">
  <img src="/Images/Job-tracker-logo.png" alt="Job Application Tracker Screenshot" class="w-full h-48 object-cover"/>
  <div className="p-6">
    <h3 className="text-xl font-semibold mb-2">Job Application Tracker</h3>
    <p className="text-gray-300 mb-4">A full-stack CRUD web app to manage job applications with filters, secure login, and responsive design.</p>
    <div className="flex flex-wrap gap-4">
      <a href="https://my-job-application-tracker.netlify.app/" target="_blank" className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-1 px-4 rounded transition">Live Demo</a>
      <a href="https://github.com/Mayufisha/Job-Application-Tracker" target="_blank" className="border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white font-medium py-1 px-4 rounded transition">GitHub</a>
    </div>
  </div>
    </div>

      <div className="bg-slate-800 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transform transition duration-300 ease-in-out overflow-hidden">
        <img src="https://picsum.photos/200/300" alt="Little Lemon Restaurant" className="w-full h-48 object-cover"/>
        <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">A Personal Portfolio</h3>
        <p className="text-gray-300 mb-4">A responsive personal portfolio showcasing projects, skills, and contact info with smooth navigation — built with HTML, Tailwind CSS, and JavaScript.</p>

          <div className="flex flex-wrap gap-4">
            <a href="https://mayufisha.github.io/Portfolio-2.0" target="_blank" className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-1 px-4 rounded transition">Live Demo</a>
            <a href="https://github.com/Mayufisha/Portfolio-2.0" target="_blank" className="border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white font-medium py-1 px-4 rounded transition">GitHub</a>
          </div>
        </div>
      </div>

      <div className="bg-slate-800 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transform transition duration-300 ease-in-out overflow-hidden">
        <img src="/Images/little-lemon-preview.png" alt="Little Lemon Restaurant" className="w-full h-48 object-cover"/>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">Little Lemon Restaurant</h3>
          <p className="text-gray-300 mb-4">A responsive website designed for a fictional restaurant, featuring a clean UI and smooth navigation.</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://mayufisha.github.io/Little-Lemon-Restaurant/index.html" target="_blank" className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-1 px-4 rounded transition">Live Demo</a>
            <a href="https://github.com/Mayufisha/Little-Lemon-Restaurant" target="_blank" className="border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white font-medium py-1 px-4 rounded transition">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
);
}
export default Projects;
