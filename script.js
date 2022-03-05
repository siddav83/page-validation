const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//event listeners

form.addEventListener('submit', (e)=> {
    e.preventDefault()
    console.log(username.value)
})