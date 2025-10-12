function About(){
    return(
         <section id="about" className="py-16 bg-gray-900 text-white">
        <h1 className="text-3xl font-bold text-center mb-12">My Learning Path</h1>
        <div className="relative max-w-4xl mx-auto px-4 space-y-16">

    <div className="md:flex md:items-center md:gap-10">
      <img src="/Images/codding on a mobile.png" alt="Learning to code on mobile"
           className="w-32 h-32 object-cover rounded-full border-4 border-emerald-500 mx-auto md:mx-0" />
      <div className="mt-4 md:mt-0 text-center md:text-left">
        <h2 className="text-2xl font-semibold">Learning to Code on Mobile</h2>
        <small className="text-gray-400 block mb-2">2019–2022</small>
        <p className="text-gray-300">I began my coding journey on mobile devices, exploring the fundamentals of website development using HTML, CSS, and JavaScript.</p>
      </div>
    </div>

    <div className="md:flex md:flex-row-reverse md:items-center md:gap-10">
      <img src="Images/CS in uni.png" alt="Studying Computer Science at university"
           className="w-32 h-32 object-cover rounded-full border-4 border-emerald-500 mx-auto md:mx-0" />
      <div className="mt-4 md:mt-0 text-center md:text-right">
        <h2 className="text-2xl font-semibold">Studying Computer Science at University</h2>
        <small className="text-gray-400 block mb-2">2022–2023</small>
        <p className="text-gray-300">During my university studies, I focused on website development, C++ console applications, and strengthening my problem-solving skills in programming.</p>
      </div>
    </div>

    <div className="md:flex md:items-center md:gap-10">
      <img src="Images/online studying.png" alt="Online learning journey"
           className="w-32 h-32 object-cover rounded-full border-4 border-emerald-500 mx-auto md:mx-0" />
      <div className="mt-4 md:mt-0 text-center md:text-left">
        <h2 className="text-2xl font-semibold">Online Learning Journey</h2>
        <small className="text-gray-400 block mb-2">2023–2024</small>
        <p className="text-gray-300">I advanced my skills by learning React for dynamic web applications and explored UI/UX design using Figma, alongside improving my JavaScript expertise.</p>
      </div>
    </div>

    
    <div className="md:flex md:flex-row-reverse md:items-center md:gap-10">
      <img src="Images/studying at a college.png" alt="Studying at a college"
           className="w-32 h-32 object-cover rounded-full border-4 border-emerald-500 mx-auto md:mx-0" />
      <div className="mt-4 md:mt-0 text-center md:text-right">
        <h2 className="text-2xl font-semibold">College Studies</h2>
        <small className="text-gray-400 block mb-2">2024–Present</small>
        <p className="text-gray-300">Currently, I am focusing on website development, C++ console applications, and experimenting with Python graphics to build interactive applications.</p>
      </div>
    </div>

  </div>
</section>
    );
};
export default About;