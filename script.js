document.getElementById('year').textContent = new Date().getFullYear();

// Make the hero spreadsheet interactive — click a row to "select" it, like Excel
const sheetRows = document.querySelectorAll('.sheet-row:not(.sheet-head)');
sheetRows.forEach(row => {
  row.addEventListener('click', () => {
    sheetRows.forEach(r => r.classList.remove('sheet-active'));
    row.classList.add('sheet-active');
  });
});

// Highlight the current section in the nav while scrolling
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(section => sectionObserver.observe(section));

// Give the header a subtle shadow once the page has scrolled
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 8);
}, { passive: true });