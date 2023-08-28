let menuClose = document.getElementById('close');
let nav = document.getElementById('menu-nav');
let menu = document.getElementById('menu');

menuClose.addEventListener('click', () => {
    nav.classList.toggle('hidden');
})

menu.addEventListener('click', () => {
    nav.classList.toggle('hidden');
})