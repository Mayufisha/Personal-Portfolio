function Projects() {
  return (
    <section id="projects" className="min-h-screen py-16 bg-slate-900 text-slate-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-semibold text-center tracking-tight mb-12">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Expense Tracker */}
          <div className="bg-slate-900/80 rounded-xl border border-slate-800 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-amber-500 overflow-hidden">
            <img
              src="/Images/expense-tracker.png"
              alt="Expense Tracker Screenshot"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-['Space_Grotesk'] text-xl md:text-2xl font-medium mb-2">Expense Tracker</h3>
              <p className="text-slate-300 mb-4">
                A cross-platform .NET MAUI app for managing expenses, goals, charts, schedules, and
                monthly budgeting.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/Mayufisha/ExpenseTracker"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-amber-500 hover:bg-amber-600 text-slate-100 font-medium py-1 px-4 rounded transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* SkillSwap 2.0 */}
          <div className="bg-slate-900/80 rounded-xl border border-slate-800 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-amber-500 overflow-hidden">
            <img
              src="/Images/skillSwap.png"
              alt="SkillSwap 2.0 Screenshot"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-['Space_Grotesk'] text-xl md:text-2xl font-medium mb-2">SkillSwap 2.0</h3>
              <p className="text-slate-300 mb-4">
                A peer-learning platform with profiles, skill feeds, categories, favorites, and a
                fully responsive Tailwind UI.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://skillswap-2-0.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-amber-500 hover:bg-amber-600 text-slate-100 font-medium py-1 px-4 rounded transition"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/Mayufisha/SkillSwap-2.0"
                  target="_blank"
                  rel="noreferrer"
                  className="border border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-slate-100 font-medium py-1 px-4 rounded transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Job Application Tracker */}
          <div className="bg-slate-900/80 rounded-xl border border-slate-800 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-amber-500 overflow-hidden">
            <img
              src="/Images/Job-tracker-logo.png"
              alt="Job Application Tracker Screenshot"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-['Space_Grotesk'] text-xl md:text-2xl font-medium mb-2">Job Application Tracker</h3>
              <p className="text-slate-300 mb-4">
                A full-stack CRUD web app to manage job applications with filters, secure login, and
                responsive design.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://my-job-application-tracker.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-amber-500 hover:bg-amber-600 text-slate-100 font-medium py-1 px-4 rounded transition"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/Mayufisha/Job-Application-Tracker"
                  target="_blank"
                  rel="noreferrer"
                  className="border border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-slate-100 font-medium py-1 px-4 rounded transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Personal Portfolio */}
          <div className="bg-slate-900/80 rounded-xl border border-slate-800 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-amber-500 overflow-hidden">
            <img
              src="/Images/plain-portfolio.png"
              alt="Personal Portfolio"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-['Space_Grotesk'] text-xl md:text-2xl font-medium mb-2">A Personal Portfolio</h3>
              <p className="text-slate-300 mb-4">
                A responsive personal portfolio showcasing projects, skills, and contact info with
                smooth navigation — built with HTML, Tailwind CSS, and JavaScript.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://mayufisha.github.io/Portfolio-2.0"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-amber-500 hover:bg-amber-600 text-slate-100 font-medium py-1 px-4 rounded transition"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/Mayufisha/Portfolio-2.0"
                  target="_blank"
                  rel="noreferrer"
                  className="border border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-slate-100 font-medium py-1 px-4 rounded transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Little Lemon Restaurant */}
          <div className="bg-slate-900/80 rounded-xl border border-slate-800 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-amber-500 overflow-hidden">
            <img
              src="/Images/little-lemon-preview.png"
              alt="Little Lemon Restaurant"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-['Space_Grotesk'] text-xl md:text-2xl font-medium mb-2">Little Lemon Restaurant</h3>
              <p className="text-slate-300 mb-4">
                A responsive website designed for a fictional restaurant, featuring a clean UI and
                smooth navigation.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://mayufisha.github.io/Little-Lemon-Restaurant/index.html"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-amber-500 hover:bg-amber-600 text-slate-100 font-medium py-1 px-4 rounded transition"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/Mayufisha/Little-Lemon-Restaurant"
                  target="_blank"
                  rel="noreferrer"
                  className="border border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-slate-100 font-medium py-1 px-4 rounded transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
