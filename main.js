const emailMenu = document.querySelector('.navbar-email');
const menuDesktopNav = document.querySelector('.desktop-menu');

emailMenu.addEventListener('mouseover', addClassMenuDesktop);

function addClassMenuDesktop(){
    menuDesktopNav.classList.add('visible');
}

document.addEventListener('reonload', removeClassMenuDesktop);
function removeClassMenuDesktop(){
    menuDesktopNav.classList.remove('visible');
}