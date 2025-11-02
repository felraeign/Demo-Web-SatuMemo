
// Smooth scroll for nav links
document.querySelectorAll('.nav-links a, .logo a, .btn-primary').forEach(el => {
  el.addEventListener('click', function(e){
    e.preventDefault();
    const href = this.getAttribute('href');
    const target = document.querySelector(href);
    if(target){
      window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
    }
  });
});

// IntersectionObserver for reveal animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// simple mobile nav toggle could be added later
