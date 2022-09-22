let badgeDom = document.querySelector ('.badge')
let cartProductDivDom = document.querySelector('.carts-products div')
let cartProductsMeun = document.querySelector('.carts-products')
let shoppingCartIcon = document.querySelector('.ShoppingCart')


let addedItem =localStorage.getItem('productsIncart')?
JSON.parse(localStorage.getItem('productsIncart')):[];
if (addedItem) {
    addedItem.map((item) =>{
        cartProductDivDom.innerHTML += `<p>${item.title} <span class='item-qty'>${item.qty}</span> </p>`
    });
    badgeDom.style.display='block';
    badgeDom.innerHTML += addedItem.length;
}

function openCartMenu() {
    if (cartProductDivDom.innerHTML !='') {
        if (cartProductsMeun.style.display =='block') {
            cartProductsMeun.style.display ='none';
           }   else {
            cartProductsMeun.style.display ='block';
            }
    }
    }
    //open cart menu
shoppingCartIcon.addEventListener('click', openCartMenu)