//variables
let products = JSON.parse(localStorage.getItem('products')) || productsDb ;
let productId = JSON.parse(localStorage.getItem('editProduct'))
let getProduct = products.find(i => i.id === productId )
let productName = document.getElementById('product-name');
let productDesc = document.getElementById('product-desc');
let productSizeSelect = document.getElementById('product-size');
let updateForm = document.getElementById('update-form');
let ProductSizeValue;
let productImage ;
let inputFile = document.getElementById('upload-image');

productName.value = getProduct.title;
productDesc.value = getProduct.desc;
productSizeSelect.value = getProduct.size;

//events
productSizeSelect.addEventListener('change', getProductSizeValue);
updateForm.addEventListener('submit', updateProductFun);
inputFile.addEventListener('change', uploadImage);
productImage = getProduct.imageUrl;

//funs
function getProductSizeValue(e) {
    ProductSizeValue = e.target.value
}

function updateProductFun(e) {
    e.preventDefault();
    getProduct.title = productName.value ;
    getProduct.desc = productDesc.value;
    getProduct.size = productSizeSelect.value;
    getProduct.imageUrl = productImage ;


    localStorage.setItem('products' , JSON.stringify(products))

    setTimeout(() => {
    window.location = 'index.html'       
    }, 500);
}

// upload image
let preveiew;
function uploadImage() {
    let file = this.files[0]
let types = ['image/png' ,'image/jpeg' ]
if (types.indexOf(file.type) == -1) {
    alert('type not supported')
    return;
}
if (file.size > 2 * 1024 *1024){
    alert('image not exced 2MG')
    return;
}
getImageBase64(file)
}
function getImageBase64(file) {
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
        productImage = reader.result;
    }
    reader.onerror = function () {
        alert('error li')
    }
}