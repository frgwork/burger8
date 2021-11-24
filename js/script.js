const menuBurger = document.querySelector('.menu__burger');
const circles = document.querySelector('.circles');


menuBurger.addEventListener('click', () => {
  menuBurger.classList.toggle('active');
  circles.classList.toggle('active');
})
