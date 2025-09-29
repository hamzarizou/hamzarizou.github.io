// main.js

// Wait DOM load
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for all internal links
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if(target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Close mobile menu on nav link click
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.querySelectorAll('#navMenu a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if(menuToggle.checked) menuToggle.checked = false;
    });
  });

  // Fade-in on scroll for sections with class 'fade-in'
  const faders = document.querySelectorAll('.fade-in');
  const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
  };
  const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});
