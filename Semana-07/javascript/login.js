window.onload = function(){
    var inputEmail = document.getElementById('email');
    var inputPassword = document.getElementById('password');
    var messageAlert = document.getElementsByClassName('message');
    var regExp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    var inputSubmit = document.getElementById('submit');
    var p = inputPassword.value;
    var em = inputEmail.value;
    
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
        var numbers = '0123456789';
        var letters = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
        var allowed = ' 0123456789abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
        var justNumbers = true;
        var justLetters = true;
        var isAlphanumeric = true;
        var p =inputPassword.value;

        
        p.split('').forEach(function(letter) {
            if (allowed.indexOf(letter) == -1) isAlphanumeric = false;
            if (numbers.indexOf(letter) == -1) justNumbers = false;
            if (letters.indexOf(letter) == -1) justLetters = false;
        });

        if (isAlphanumeric && !justNumbers && !justLetters && p.length >= 8){
            messageAlert[1].classList.add('correct');
        } else if (p.length == 0) {
            messageAlert[1].classList.add('invalid');
            messageAlert[1].innerHTML = 'Field is required';
        } else {
            messageAlert[1].classList.add('invalid');
            messageAlert[1].innerHTML = 'Must enter a valid password format';
        }
    };

    inputPassword.onblur = function() {
        validatePassword();
    };

    inputPassword.onfocus = function() {
        messageAlert[1].classList.remove('correct');
        messageAlert[1].classList.remove('invalid');
        messageAlert[1].innerHTML = '';
    }
    
    //Submit Validation

    function validateSubmit() {

        var p = inputPassword.value;
        var em =inputEmail.value;


        if ((em.length != 0) && (p.length != 0)) {
            alert ('Login successfull');
            alert('Email: '+em+' Password: '+p+'');
        } else {
            alert('Validation was not success');
        }
    }

    function myRequest (em, p) {

        var p = inputPassword.value;
        var em = inputEmail.value;
    
        var url = 'https://basp-m2022-api-rest-server.herokuapp.com/login';
        fetch (url + '?em=' + em + '&p=' + p)
        .then (function(response){
            return response.json();
        })
        .then (function(jsonResponse){
            alert (jsonResponse.msg);
            if (jsonResponse.success){
                messageAlert[0].innerHTML = em;
                messageAlert[1].innerHTML = p;
            } else {
                inputEmail.classList.remove('correct');
                messageAlert[0].add('invalid');
                inputPassword.classList.remove('correct');
                messageAlert[1].classList.add('invalid');
            }
        })
        .catch(function(error){
            console.log('error', error);
        })
    }

    inputSubmit.onclick = function(e) {
        validateSubmit();
        myRequest(em, p);
        e.preventDefault();
    }


}


