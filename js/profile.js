// let usernam = localStorage.getItem('username')
let email = localStorage.getItem('email');
let products = JSON.parse(localStorage.getItem('products')) || productsDb
let myProducts = products.filter((i)=> i.IsMe === 'y');
let imguser = JSON.parse(localStorage.getItem('userpic'))

//variabels
let user = document.getElementById('username');
let userEmail = document.getElementById('email');
let productsLengths = document.querySelector('#productslength span');
let image = document.getElementById('img-user')


user.innerHTML = username;
userEmail.innerHTML = email;
productsLengths.innerHTML =myProducts.length;
image.setAttribute('src',imguser.pic)