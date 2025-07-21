document.addEventListener("DOMContentLoaded", function () {
  const check = document.getElementById('check');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');

  // Scroll to section and close menu
  document.querySelectorAll("[data-scroll]").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const sectionId = this.getAttribute("data-scroll");
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }

      // Close mobile menu
      check.checked = false;
      mobileMenu.classList.add('hidden');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    });
  });

  // Show/hide menu & icons on toggle
  check.addEventListener('change', () => {
    if (check.checked) {
      mobileMenu.classList.remove('hidden');
      menuIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
    } else {
      mobileMenu.classList.add('hidden');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    }
  });
});
