const menu = document.querySelector('.menu-btn');
const mainMenu = document.querySelector('.main-nav ul.main-menu');

menu.addEventListener('click', () => mainMenu.classList.toggle('show'));