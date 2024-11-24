const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 80);

});

const menuBTN = document.getElementById('menu-btn');
const navLIST = document.querySelector('.navlist');

menuBTN=addEventListener('click', () => {
    navLIST.classList.toggle('open');
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navLIST.classList.remove('open');
    }
});