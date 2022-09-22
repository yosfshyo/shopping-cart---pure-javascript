

let products = productsDb
//define products
let productDom = document.querySelector('.products')

// display products
let drawProductsUI
drawProductsUI = function drawProductsUI (products =[]) {
    let productsUl = products.map ( (item) => {
        return ` 
                    <div class="product-item" 
                    style='border : ${item.IsMe === 'y' ? '2px solid green' : ''}'>
                        <img
                         src="${item.imageUrl}" 
                         class="product-item-img"
                          alt="headphone"/>
                        <div class="product-item-desc">
                            <a onclick='saveItemData(${item.id})'>${item.title}</a>
                            <p>${item.desc}</p>
                            <span>size ${item.size}</span> <br>
                            
                            ${
                                item.IsMe === 'y' ?
                              `  <button class="edit-product" onclick="editProduct(${item.id})">Edit Product</button> 
                              `
                              :''
                            }
                        
                        </div><!--product-item-desc-->
                        <div class="product-item-action">
                            <button class="add-to-cart" onclick='addedToCart(${item.id})'>Add To Cart</button>
                            <i class=" favorite far fa-heart"
                            style ='color : ${item.liked === true ? 'red' :''} '
                              onclick='addToFavorite(${item.id})'></i>
                        </div> <!--product-item-action--></div> <!--product-item-->
                `
    }) 
    productDom.innerHTML = productsUl.join('');
    //join لازالة ال` الناتججة عن map
}
drawProductsUI(JSON.parse(localStorage.getItem('products'))|| products);

//add to cart
function addedToCart(id){
    if (!localStorage.getItem('products') ) {
        localStorage.setItem('products', JSON.stringify(productsDb))
    }

    let products = JSON.parse(localStorage.getItem('products')) || products;
    if (localStorage.getItem('username')){
    let product = products.find((item) => item.id === id);
    let IsproductInCart = addedItem.some((i) => i.id === product.id)
//some بترجع true or flase
if (IsproductInCart) {
    addedItem = addedItem.map((p)=> {
        if (p.id === product.id) p.qty += 1;
        return p;
    })
} else {
    addedItem.push(product)
}
//ui
cartProductDivDom.innerHTML ='';

 addedItem.forEach((item) => {
        cartProductDivDom.innerHTML += `<p>${item.title} <span class='item-qty'>${item.qty}</span> </p>`; 
    });
//save data
    localStorage.setItem('productsIncart' , JSON.stringify(addedItem))
    //add counter of items
 let cartIProductItems = document.querySelectorAll('.carts-products div p')
    badgeDom.style.display='block';
    badgeDom.innerHTML= cartIProductItems.length }
    else (
        window.location = 'login.html'
    )
}


// filter type is 'id'
function getuniqueArr(arr , filterType) {
    let unique = arr
    .map((item) => item[filterType])
    .map((item , i , final) =>final.indexOf(item) === i && i) 
    .filter((item) =>arr[item])
    .map(item => arr[item])
    return unique;
}


//open cart menu


function saveItemData(id) {
    localStorage.setItem('productID',id)
    window.location= 'cartDetails.html';
}

let input = document.getElementById('search')
input.addEventListener('keyup' , function (e) {
        search(e.target.value , JSON.parse(localStorage.getItem('products')))        
    if (e.target.value.trim() ==='') {
        drawProductsUI(JSON.parse(localStorage.getItem('products')))
    }
})
function search(title , myArray) {

    let arr = myArray.filter((item) => item.title.toLowerCase().indexOf(title.toLowerCase()) !== -1);
    drawProductsUI(arr)
}
//add to fav
let favoritesItems =localStorage.getItem('productsInFavorite')?
JSON.parse(localStorage.getItem('productsInFavorite')):[];

function addToFavorite(id){
    if (localStorage.getItem('username')){
    let choosenItem = products.find((item) => item.id === id);
    choosenItem.liked=true;
    favoritesItems= [...favoritesItems , choosenItem];
    let uniqueProducts = getuniqueArr(favoritesItems, 'id')
    localStorage.setItem('productsInFavorite' , JSON.stringify(uniqueProducts))
        products.map((item) => {
            if (item.id === choosenItem.id){
                item.liked =true ;
            }
        })
        localStorage.setItem('products', JSON.stringify(products))
        drawProductsUI(products)
}
    else (
        window.location = 'login.html'
    )
}


//filter products by size
let sizeFilter = document.getElementById('size-filter')

sizeFilter.addEventListener('change', getProductsFilterBySize)

function getProductsFilterBySize(e) {
    let val = e.target.value;
    let products = JSON.parse (localStorage.getItem('products')) || productsDb;
    if (val === 'all') {
    drawProductsUI(products);      
    }
    else {
        products = products.filter((i) => i.size === val);
    drawProductsUI(products);

    }
}
// Edit Function
function editProduct(id) {
    localStorage.setItem('editProduct', id)
    window.location = 'editproduct.html';
}
//my views