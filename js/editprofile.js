let email = localStorage.getItem('email');
let products = JSON.parse(localStorage.getItem('products')) || productsDb
let userPic = JSON.parse(localStorage.getItem('userpic'))
//variabels
let userInput = document.getElementById('changeName');
let userEmailInput = document.getElementById('changeEmail')
let editForm = document.getElementById('edit-profile-form')



//setting value
userInput.value = username;
userEmailInput.value = email;


//events
editForm.addEventListener('submit',editProfileData)


//funs
function editProfileData(e) {
    e.preventDefault();
    localStorage.setItem('username',userInput.value)
    localStorage.setItem('email',userEmailInput.value)

    setTimeout(() => {
        window.location = 'profile.html'
    }, 500);
}
