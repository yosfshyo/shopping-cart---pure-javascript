let products = JSON.parse(localStorage.getItem('products'))
let productID = localStorage.getItem('productID')
let itemDom = document.querySelector('.item-details')

let productDetails = products.find ((item) => item.id == productID);

itemDom.innerHTML= `
<img src="${productDetails.imageUrl}"/>
<h2>${productDetails.title}</h2>
<span>Size : ${productDetails.size}</span><br>
<p>${productDetails.desc}</p>
<span>Quantity : ${productDetails.qty}</span><br>
<button class="edit-product" onclick='editProduct(${productID})'>Edit Product</button>
`
// Edit Function
function editProduct(id) {
    localStorage.setItem('editProduct', id)
    window.location = 'editproduct.html';
}