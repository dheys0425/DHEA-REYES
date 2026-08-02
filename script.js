// Highlights the current section in the sidebar nav as the user scrolls
const links = document.querySelectorAll('#navlist a, #mobileMenu a');
const sections = document.querySelectorAll('main section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Remove active class from all links
      links.forEach((link) => link.classList.remove('active'));

      // Add active class to links that point to the intersecting section
      document
        .querySelectorAll(`a[href="#${entry.target.id}"]`)
        .forEach((link) => link.classList.add('active'));
    }
  });
}, { rootMargin: '-40% 0px -50% 0px' });

sections.forEach((section) => observer.observe(section));

// Mobile hamburger menu toggle
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (hamburgerBtn && mobileMenu) {
  hamburgerBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    hamburgerBtn.classList.toggle('open');
  });

  // Close the menu when a link is tapped
  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburgerBtn.classList.remove('open');
    });
  });
}
