const burger = document.querySelector('.menu_burger');
const menuContainer = document.querySelector('.menu_container');

burger.addEventListener('click', () => {
    if (menuContainer.style.display === 'flex') {
        menuContainer.style.display = 'none' ;
    } else {
        menuContainer.style.display = 'flex';
    }
});
