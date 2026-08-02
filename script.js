// Highlights the current section in the sidebar nav as the user scrolls
const links = document.querySelectorAll('#navlist a');
const sections = document.querySelectorAll('main section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      links.forEach((link) => link.classList.remove('active'));
      const activeLink = document.querySelector(`#navlist a[href="#${entry.target.id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -50% 0px' });

sections.forEach((section) => observer.observe(section));