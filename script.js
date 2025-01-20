const menu = document.querySelector('#menu-icon');
const navList = document.querySelector('.navlist');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navList.classList.toggle('open');
};

// Initialize ScrollReveal with correct variable name 'sr' instead of 'sc'
const sr = ScrollReveal({
    distance: '65px',
    duration: 2000,
    delay: 450,
    reset: true
});

// Add scroll reveal animations
sr.reveal('.hero-text', {delay: 200, origin: 'top'});
sr.reveal('.hero-img', {delay: 450, origin: 'top'});
sr.reveal('.icons', {delay: 500, origin: 'left'});
sr.reveal('.scroll-down', {delay: 450, origin: 'right'});