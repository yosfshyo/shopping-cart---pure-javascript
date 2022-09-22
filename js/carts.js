let productDom = document.querySelector('.products')
let noProductsDom = document.querySelector('.noProducts')

function drawCartProductsUI (allproducts = []) {
    if (JSON.parse(localStorage.getItem('productsIncart')).length ===0){
        noProductsDom.innerHTML = 'There is no items !!'
    }
    let products = JSON.parse(localStorage.getItem('productsIncart')) || allproducts;
    let productsUl = products.map ( (item) => {
        return `
                    <div class="product-item">
                        <img
                         src="${item.imageUrl}" 
                         class="product-item-img"
                          alt="headphone"/>
                        <div class="product-item-desc">
                            <h2>${item.title}</h2>
                            <p>${item.desc}</p>
                            <span>size ${item.size}</span>
                            <span>Quantatit ${item.qty}</span>
                        </div><!--product-item-desc-->
                        <div class="product-item-action">
                            <button class="add-to-cart" onclick='removeItemFromCart(${item.id})'>Remove</button>
                        </div> <!--product-item-action--></div> <!--product-item-->
                `
    }) 
    productDom.innerHTML = productsUl.join('');
}
drawCartProductsUI();
function removeItemFromCart(id) {
    let productsIncart = localStorage.getItem('productsIncart')
    if (productsIncart) {
        let items = JSON.parse(productsIncart);
        let filteredItems = items.filter((item) => item.id !== id);
        localStorage.setItem('productsIncart',JSON.stringify(filteredItems));
        drawCartProductsUI(filteredItems)
    }    
}