let productDom = document.querySelector('.products')
let noProductsDom = document.querySelector('.noProducts')

// display products
let drawProductsUI;
(drawProductsUI = function drawProductsUI (products =[]) {
    let myproducts = products.filter(item =>item.IsMe==='y')

    if (myproducts.length ==0) {
        noProductsDom.innerHTML = 'There is no items !!'
    }

        let productsUl = myproducts.map ( (item) => {
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
                                  <button class="edit-product" onclick="editProduct(${
                                    item.id
                                })">Edit Product</button> 
                            
                            </div><!--product-item-desc-->
                            <div class="product-item-action">
                                <button class="add-to-cart" onclick='deleteproduct(${
                                    item.id
                                })'>Remove</button>
    
                            </div> <!--product-item-action--></div> <!--product-item-->
                    `
        }) 
        productDom.innerHTML = productsUl.join('');

        //join لازالة ال` الناتججة عن map
    }
)(JSON.parse(localStorage.getItem('products'))|| products);


// Edit Function
function editProduct(id) {
    localStorage.setItem('editProduct', id)
    window.location = 'editproduct.html';
}

//delet product
function deleteproduct(id) {
    let products = JSON.parse(localStorage.getItem('products')) || productsDb;
    let myproducts = products.filter((item) =>item.IsMe==='y');
    let filtered = myproducts.filter((i) => i.id !== id);
    let clickedItem = myproducts.find((i)=> i.id === id)
    products= products.filter((i) => i.id !== clickedItem.id)
    localStorage.setItem('products',JSON.stringify(products))
    drawProductsUI(filtered)
}