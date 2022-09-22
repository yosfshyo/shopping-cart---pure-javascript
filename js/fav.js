let productDom = document.querySelector('.products')
let noProductsDom = document.querySelector('.noProducts')

function drawfavsProductsUI (allproducts = []) {
    if (JSON.parse(localStorage.getItem('productsInFavorite')).length ===0){
        noProductsDom.innerHTML = 'There is no items !!'
    }
    let products = JSON.parse(localStorage.getItem('productsInFavorite')) || allproducts;
    let productsUl = products.map ( (item) => {
        return `
                    <div class="product-item">
                        <img
                         src="${item.imageUrl}" 
                         class="product-item-img"
                          alt="headphone"/>
                        <div class="product-item-desc">
                            <h2>${item.title}</h2>
                            <p>${item.desc}o</p>
                            <span>size ${item.size}</span>
                            <span>Quantatit ${item.qty}</span>
                        </div><!--product-item-desc-->
                        <div class="product-item-action">
                            <button class="add-to-cart" onclick='removeItemFromFav(${item.id})'>Remove From Favorite</button>
                        </div> <!--product-item-action--></div> <!--product-item-->
                `
    }) 
    productDom.innerHTML = productsUl.join('');
}
drawfavsProductsUI();
function removeItemFromFav(id) {
    let productsInFavorite = localStorage.getItem('productsInFavorite')
    if (productsInFavorite) {
        let items = JSON.parse(productsInFavorite);
        let filteredItems = items.filter((item) => item.id !== id);
        localStorage.setItem('productsInFavorite',JSON.stringify(filteredItems));
        drawfavsProductsUI(filteredItems)    
    }    
    let products = productsDb
    let choosenItem = products.find((item) => item.id === id);
    choosenItem.liked=false;
    products =[...products , choosenItem];
    localStorage.setItem('products' , JSON.stringify(products))



}