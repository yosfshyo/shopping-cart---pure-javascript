
let username = document.querySelector('#username');
let password = document.querySelector('#password');
let loginBtn = document.querySelector('#sign_in');

let getuser = localStorage.getItem('username')
let getpassword= localStorage.getItem('password');

loginBtn.addEventListener('click',login);

function login(e){
    e.preventDefault();
    if (username.value ===''|| password.value==='') {
        alert ('please fill data');
    }else {
        if (
            getuser &&
            getuser.trim() ===username.value.trim()&&
            getpassword &&
            getpassword ===password.value.trim()
        ) {
            setTimeout(() => {
                window.location = 'index.html'
            }, 1500);
        }else {
            alert('username or password is wrong');
        }
    }
}