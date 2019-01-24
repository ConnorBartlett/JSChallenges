let username = document.querySelector('.username');
let password = document.querySelector('.password');
let confirmPassword = document.querySelector('.confirmPassword');
let submit = document.querySelector('.submit');
let form = document.querySelector('form');

form.addEventListener('submit', checkResults);

function checkResults(e){
    e.preventDefault();


    if (username.value === ''){
        alert('Please complete username field');
    } else if (password.value === ''){
        alert('please complete password field');
    } else if (confirmPassword.value === ''){
        alert('Please complete confirm password field');
    } else if (password.value !== confirmPassword.value){
        alert('Please make sure password matches');
    } else {
        submit.style.display = 'none'
    };}


