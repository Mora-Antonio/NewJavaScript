const emailMenu = document.querySelector('.navbar-email');
const menuDesktopNav = document.querySelector('.desktop-menu');
emailMenu.addEventListener('mouseover', addClassMenuDesktop);
function addClassMenuDesktop(){
    menuDesktopNav.classList.add('visible');
    productDetail.classList.add('hidden');
    mobileMenu.classList.add('hidden');
}
document.addEventListener('reonload', removeClassMenuDesktop);
function removeClassMenuDesktop(){
    menuDesktopNav.classList.remove('visible');
}

// Mobile Menu
const iconMenuMobile = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
iconMenuMobile.addEventListener('click', toggleMobileMenu);

//Menu Carrito
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');
const arrowClosed = document.querySelector('.arrow-closed');
menuCarritoIcon.addEventListener('click', toggleMenuCarrito);
arrowClosed.addEventListener('click', toggleMenuCarrito);

//Funciones
function toggleMobileMenu(){
    mobileMenu.classList.toggle('hidden');
    productDetail.classList.add('hidden');
}

function toggleMenuCarrito(){
    mobileMenu.classList.add('hidden');
    productDetail.classList.toggle('hidden');
    return
    if(!productDetail.classList.contains('hidden'))
    {
        productDetail.classList.add('hidden');
    }
}
