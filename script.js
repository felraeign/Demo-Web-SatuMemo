// --- Smooth scroll untuk nav links ---
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


// --- Efek reveal saat scroll menggunakan IntersectionObserver ---
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


// --- Toggle menu hamburger ---
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navLinks.classList.toggle('show');
});

// Tutup menu otomatis saat salah satu link diklik
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    navLinks.classList.remove('show');
  });
});


document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function() {
    document.querySelectorAll('.nav-links a').forEach(el => el.classList.remove('active'));
    this.classList.add('active');
  });
});
