function Contact(){
    return(
        <section id="contact" class="py-16 bg-gray-900 text-white">
  <div class="max-w-xl mx-auto px-4">
    <h2 class="text-3xl font-bold text-center mb-8">Contact Me</h2>
    <form action="#" class="bg-slate-800 p-8 rounded-lg shadow-lg space-y-6">
      
      <input 
        type="text" 
        placeholder="Name" 
        class="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
        required
      />

      <input 
        type="email" 
        placeholder="Email" 
        class="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
        required
      />

      <textarea 
        placeholder="Message" 
        rows="5"
        class="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500"
        required
      ></textarea>

      <input 
        type="submit" 
        value="Send Message" 
        class="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-4 rounded cursor-pointer transition"
      />
    </form>
  </div>
</section>
    );
};
export default Contact;