window.onload = function(){
    var inputEmail = document.getElementById('email');
    var inputPassword = document.getElementById('password');
    var messageAlert = document.getElementsByClassName('message');
    var regExp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    var inputSubmit = document.getElementById('submit');
    var contentBoxSubmit = document.getElementById('submit-box');
    var contentBoxSubmit1 = document.getElementById('submit-box1');
    
    function validateEmail() {
        if (inputEmail.value.match(regExp)) {
            messageAlert[0].classList.add('correct');
            messageAlert[0].innerHTML = 'Email is valid';
        } else if (!inputEmail.value.match(regExp)) {
            messageAlert[0].classList.add('invalid');
            messageAlert[0].innerHTML = 'Must enter a valid email format';
        }
    }

    inputEmail.onblur = function() {
        validateEmail();
    }

    inputEmail.onfocus = function() {
        messageAlert[0].classList.remove('correct');
        messageAlert[0].classList.remove('invalid');
        messageAlert[0].innerHTML = '';
    }

    function validatePassword() {
        var spaces = false;
        var cont = 0;
        var p = inputPassword.value;
        var numbers = '0123456789';
        var letters = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
        var allowed = '0123456789abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
        var justNumbers = true;
        var justLetters = true;
        var isAlphanumeric = true;


        p.split('').forEach(function(letter) {
            if (allowed.indexOf(letter) == -1) isAlphanumeric = false;
            if (numbers.indexOf(letter) == -1) justNumbers = false;
            if (letters.indexOf(letter) == -1) justLetters = false;
        });


        while (!spaces && (cont < p.length)) {
        if (p.charAt(cont) == ' ')
        spaces = true;
        cont ++;
        };
        
        if (isAlphanumeric && !justNumbers && !justLetters && p.length >= 8) {
            messageAlert[1].classList.add('correct');
            messageAlert[1].innerHTML = 'Password is valid';
        } else if (spaces) {
                messageAlert[1].classList.add('invalid');
                messageAlert[1].innerHTML = 'Password cannot have blank spaces'; 
            } else {
                messageAlert[1].classList.add('invalid');
                messageAlert[1].innerHTML = 'Must enter a valid password format';
            }
    }

    inputPassword.onblur = function() {
        validatePassword();
    };

    inputPassword.onfocus = function() {
        messageAlert[1].classList.remove('correct');
        messageAlert[1].classList.remove('invalid');
        messageAlert[1].innerHTML = '';
    }

    function actionSubmit() {

        if (messageAlert[0].classList.contains('correct')) {
            contentBoxSubmit.innerHTML = '<span>Mail: </span>' +inputEmail.value;
        } else if (messageAlert[0].classList.contains('invalid')) {
            contentBoxSubmit.innerHTML = '<span>Invalid format for email</span>'
        };

        if (messageAlert[1].classList.contains('correct')) {
            contentBoxSubmit1.innerHTML = '<span>Password: </span>' +inputPassword.value;
        } else if (messageAlert[1].classList.contains('invalid')) {
            contentBoxSubmit1.innerHTML = '<span>Invalid format for password</span>'
        };
    }

    inputSubmit.onclick = function (e) {
        actionSubmit();
        e.preventDefault();
    };
}


