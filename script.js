var user= {
    username: 'new_user',
    password: '1'
}



let form = document.querySelector('form');


form.addEventListener('submit', function (e){

    e.preventDefault();
    let username = document.getElementById('username');
    let password = document.getElementById('password');
    let message1 = document.getElementById ('message1');
    let message = document.getElementById ('message');

    
    if(username.value == user.username){
        username.style.borderColor = 'green'; 
        
    }else{
        username.style.borderColor = 'red'; 
        message1.classList.remove('none');   
    }
    if(password.value == user.password){
        password.style.borderColor = 'green';
    }else{
        password.style.borderColor = 'red';
        message.classList.remove('none'); 

    }


})















// function login () {

// var message = document.getElementById('message');
// var username = document.getElementsByClassName('username').value;
// var password = document.getElementsByClassName('password').value;

//  if (username === user.username && password === user.password) {
    
//      message.classList.remove('none');
//      document.getElementsByClassName('username').classList.add('green-border');
//      document.getElementsByClassName('password').classList.add('green-border');
//  }
// else {
    
//     message.classList.remove('none')
//     document.getElementsByClassName('username').classList.add('red-border');
//     document.getElementsByClassName('password').classList.add('red-border');
   
// }
// }
