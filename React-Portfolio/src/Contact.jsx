import emailjs from 'emailjs-com';
import { useRef } from 'react';
function Contact(){
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_2n8ny4b",
        "template_btn1lqg",
        form.current,
        "m_3-wuO4CzWqVtDEF"
      )
      .then(
        () => alert("Message sent successfully!"),
        (error) => alert("Failed to send message: " + error.text)
      );
    e.target.reset();
  };
    return(
        <section id="contact" className="min-h-screen py-16 bg-gray-900 text-white">
  <div className="max-w-xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
    <form ref={form} onSubmit={sendEmail} className="bg-slate-800 p-8 rounded-lg shadow-lg space-y-6">
      
      <input 
        type="text" 
        placeholder="Name" 
        className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
        required
      />

      <input 
        type="email" 
        placeholder="Email" 
        className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
        required
      />

      <textarea 
        placeholder="Message" 
        rows="5"
        className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500"
        required
      ></textarea>

      <input 
        type="submit" 
        value="Send Message" 
        className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-4 rounded cursor-pointer transition"
      />
    </form>
  </div>
</section>
    );
};
export default Contact