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

const cardsContainer = document.querySelector('.cards-container');

const productList = [];
class newProduct{
    constructor(name, price, image){
        this.name = name;
        this.price = price;
        this.image = image;
    }
}
productList.push(new newProduct('Apple MacBook Pro Apple M1 Pro', 2469.01, 'https://thumb.pccomponentes.com/w-530-530/articles/66/663963/124-apple-macbook-pro-apple-m1-pro-16gb-1tb-ssd-142-plata.jpg'),
new newProduct('MSI Katana GF66 12UD-081XES', 1149, 'https://thumb.pccomponentes.com/w-530-530/articles/1001/10011007/1694-msi-katana-gf66-12ud-081xes-intel-core-i7-12700h-16gb-512gb-ssd-rtx3050ti-156.jpg'), 
new newProduct('ASUS TUF Gaming F15 FX506LHB-HN324', 999.99, 'https://thumb.pccomponentes.com/w-530-530/articles/1039/10393538/2728-asus-tuf-gaming-f15-fx506lhb-hn324-intel-core-i5-10300h-16gb-512gb-ssd-gtx-1650-156-comprar.jpg'), 
new newProduct('ASUS ROG Zephyrus Duo 16 GX650RX-LO162W', 4989, 'https://thumb.pccomponentes.com/w-530-530/articles/1042/10428545/2508-asus-rog-zephyrus-duo-16-gx650rx-lo162w-amd-ryzen-9-6900hx-64gb-4tb-ssd-rtx-3080-ti-16-comprar.jpg'), 
new newProduct('MSI Stealth GS77 12UHS-016ES', 4449, 'https://thumb.pccomponentes.com/w-530-530/articles/1033/10332879/2246-msi-stealth-gs77-12uhs-016es-intel-core-i9-12900h-64gb-2tb-ssd-rtx-3080ti-173-comprar.jpg'));


function renderProducts(array){
    for(product of array){

        //Contenedor General
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        //1
        const imageProduct = document.createElement('img');
        imageProduct.src = product.image;
        //2
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        //2.1
        const productInfoDiv = document.createElement('div');
        //2.1.1
        const productPrice = document.createElement('p');
        productPrice.innerText = '$ ' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
        //2.2
        const productInfoFigure = document.createElement('figure');
        //2.2.1
        const productCardImage = document.createElement('img');
        productCardImage.src = './icons/bt_add_to_cart.svg';
    
        productCard.appendChild(imageProduct);
        productCard.appendChild(productInfo);
        productInfo.appendChild(productInfoDiv);
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        productInfo.appendChild(productInfoFigure );
        productInfoFigure.appendChild(productCardImage);
    
        cardsContainer.append(productCard);
    }
    for(product of array)
    {
        const producto = `<div class="product-card">
        <img src=${product.image}>
        <div class="product-info">
            <div>
            <p>$${product.price}</p>
            <p>${product.name}</p>
            </div>
            <figure>
                <img src="./icons/bt_add_to_cart.svg" alt="">
            </figure>
        </div>
    </div> `;
        cardsContainer.innerHTML += producto;
    }    
}
document.addEventListener('onload', renderProducts(productList));
