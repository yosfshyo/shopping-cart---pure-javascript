let productName = document.getElementById('product-name');
let productDesc = document.getElementById('product-desc');
let productSizeSelect = document.getElementById('product-size');
let createForm = document.getElementById('create-form');
let ProductSizeValue;
let productImage ;
let inputFile = document.getElementById('upload-image');

//events
productSizeSelect.addEventListener('change', getProductSizeValue);
createForm.addEventListener('submit', createProductFun);
inputFile.addEventListener('change', uploadImage);



//funs
function getProductSizeValue(e) {
    ProductSizeValue = e.target.value
}

function createProductFun(e) {
    e.preventDefault();
    let allProducts = JSON.parse(localStorage.getItem('products')) ||productsDb ;
    let nameValue = productName.value;
    let descValue = productDesc.value;
    
    if (nameValue && descValue) {
        
    let obj = {
        id : allProducts ? allProducts.length + 1 : 1,
        qty: 1,
        size: ProductSizeValue,
        title: nameValue,
        desc : descValue,
        imageUrl : productImage,
        IsMe:'y',
    }
    let newProducts = allProducts? [...allProducts , obj] : [obj];
    localStorage.setItem('products' , JSON.stringify(newProducts))
    productName.value =''
    productDesc.value =''
    productSizeSelect.value =''
    setTimeout(() => {
        window.location = 'index.html'
    }, 500);
    // مشان تفضي الخانات بعد ما تضيف
    }
    else {
        alert('enter data')
    }
}

//upload image
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