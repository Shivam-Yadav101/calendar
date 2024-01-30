 

function validateLogin() {
   
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

     //ye password aur username login k time daalne hai
    var validUsername = 'calender10';
    var validPassword = '12345';

    if (username === validUsername && password === validPassword) {
      
        window.location.href = 'index.html';
        alert('Login successful!');

    } else {
        
        alert('Invalid username or password.');
    }
}