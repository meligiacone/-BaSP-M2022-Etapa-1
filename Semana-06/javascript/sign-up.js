window.onload = function(){
    var inputName = document.getElementsByClassName('form-input');
    var inputMessage = document.getElementsByClassName('message-content');
    var inputSurname = document.getElementsByClassName('form-surname');
    var inputId = document.getElementsByClassName('form-id');
    var inputDate = document.getElementsByClassName('form-birth');
    var inputPhone = document.getElementsByClassName('form-number');
    var inputAddress = document.getElementsByClassName('form-address');
    var inputCity = document.getElementsByClassName('form-city');
    var inputPc = document.getElementsByClassName('form-pc');
    var inputMail = document.getElementsByClassName('form-email');
    var regExp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    var inputPas = document.getElementsByClassName('form-password');
    var inputRepeatpas = document.getElementsByClassName('form-repeat');
    var inputbutton = document.getElementsByClassName('button-submit');

    //VALIDATE NAME

    function validateName() {
        var numbers = '0123456789';
        var letters = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
        var nameValue = inputName[0].value;
        var justNumbers = true;
        var justLetters = true;

        nameValue.split('').forEach(function(letter) {
            if (numbers.indexOf(letter) == -1) justNumbers = false;
            if (letters.indexOf(letter) == -1) justLetters = false;
        });

        if (!justNumbers && justLetters && nameValue.length > 3){
            inputMessage[0].classList.add('validate');
        } else if (nameValue.length == 0) {
            inputMessage[0].classList.add('invalid');
            inputMessage[0].innerHTML = 'Field is required';
        } else {
            inputMessage[0].classList.add('invalid');
            inputMessage[0].innerHTML = 'Only letters and more than 3 characters';
        }
    };

        inputName[0].onblur = function() {
            validateName();
        }

        inputName[0].onfocus = function() {
            inputMessage[0].classList.remove('validate');
            inputMessage[0].classList.remove('invalid');
            inputMessage[0].innerHTML = '';
        }

    //VALIDATE SURNAME

    function validateSurname() {
        var numbers = '0123456789';
        var letters = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
        var surnameValue = inputSurname[0].value;
        var justNumbers = true;
        var justLetters = true;

        surnameValue.split('').forEach(function(letter) {
            if (numbers.indexOf(letter) == -1) justNumbers = false;
            if (letters.indexOf(letter) == -1) justLetters = false;
        });

        if (!justNumbers && justLetters && surnameValue.length > 3){
            inputMessage[1].classList.add('validate');
        } else if (surnameValue.length == 0) {
            inputMessage[1].classList.add('invalid');
            inputMessage[1].innerHTML = 'Field is required';
        } else {
            inputMessage[1].classList.add('invalid');
            inputMessage[1].innerHTML = 'Only letters and more than 3 characters';
        }
    };

        inputSurname[0].onblur = function() {
            validateSurname();
        }

        inputSurname[0].onfocus = function() {
            inputMessage[1].classList.remove('validate');
            inputMessage[1].classList.remove('invalid');
            inputMessage[1].innerHTML = '';
        }

    //VALIDATE ID

    function validateId() {
        var numbers = '0123456789';
        var letters = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
        var idValue = inputId[0].value;
        var justNumbers = true;
        var justLetters = true;

        idValue.split('').forEach(function(letter) {
            if (numbers.indexOf(letter) == -1) justNumbers = false;
            if (letters.indexOf(letter) == -1) justLetters = false;
        });

        if (justNumbers && !justLetters && idValue.length > 7){
            inputMessage[2].classList.add('validate');
        } else if (idValue.length == 0) {
            inputMessage[2].classList.add('invalid');
            inputMessage[2].innerHTML = 'Field is required';
        } else {
            inputMessage[2].classList.add('invalid');
            inputMessage[2].innerHTML = 'Only numbers and more than 7 characters';
        }
    };

        inputId[0].onblur = function() {
            validateId();
        }

        inputId[0].onfocus = function() {
            inputMessage[2].classList.remove('validate');
            inputMessage[2].classList.remove('invalid');
            inputMessage[2].innerHTML = '';
        }

        //VALIDATE DATE OF BIRTH

        function validateDate() {
            var dateValue = inputDate[0].value;
            var day = dateValue.substring(0,2);
            var month = dateValue.substring(3,5);
            var year = dateValue.substring(6,10);

            if (dateValue.length !== 10 || dateValue.substring(2,3) !== '/' || dateValue.substring(5,6) !== '/' || day <= 00
            || day > 31 || month <= 00 || month > 12 || year < 1910 || year > 2015){
                inputMessage[3].classList.add('invalid');
                inputMessage[3].innerHTML = 'Must enter a valid format (dd/mm/yyyy)';
            } else {
                inputMessage[3].classList.add('validate');
            }
        }

        inputDate[0].onblur = function() {
                validateDate();
            }
    
        inputDate[0].onfocus = function() {
                inputMessage[3].classList.remove('validate');
                inputMessage[3].classList.remove('invalid');
                inputMessage[3].innerHTML = '';
            }


        //VALIDATE PHONE NUMBER

        function validatePhone() {
            var numbers = '0123456789';
            var letters = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
            var phoneValue = inputPhone[0].value;
            var justNumbers = true;
            var justLetters = true;

        phoneValue.split('').forEach(function(letter) {
            if (numbers.indexOf(letter) == -1) justNumbers = false;
            if (letters.indexOf(letter) == -1) justLetters = false;
        });

        if (justNumbers && !justLetters && phoneValue.length > 10){
            inputMessage[4].classList.add('validate');
        } else if (phoneValue.length == 0) {
            inputMessage[4].classList.add('invalid');
            inputMessage[4].innerHTML = 'Field is required';
        } else {
            inputMessage[4].classList.add('invalid');
            inputMessage[4].innerHTML = 'Only numbers and more than 10';
        }
    };

        inputPhone[0].onblur = function() {
            validatePhone();
        }

        inputPhone[0].onfocus = function() {
            inputMessage[4].classList.remove('validate');
            inputMessage[4].classList.remove('invalid');
            inputMessage[4].innerHTML = '';
        }
        
        //VALIDATE ADDRESS

        function validateAddress() {
            var allowed = ' 0123456789abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
            var numbers = '0123456789';
            var letters = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
            var addressValue = inputAddress[0].value;
            var isAlphanumeric = true;
            var justNumbers = true;
            var justLetters = true;

            addressValue.split('').forEach(function(letter) {
                if (allowed.indexOf(letter) == -1) isAlphanumeric = false;
                if (numbers.indexOf(letter) == -1) justNumbers = false;
                if (letters.indexOf(letter) == -1) justLetters = false;
            });

            if (isAlphanumeric && !justNumbers && !justLetters && addressValue.length >= 5 && addressValue.indexOf(' ') !=-1){
                inputMessage[5].classList.add('validate');
            } else if (addressValue.length == 0) {
                inputMessage[5].classList.add('invalid');
                inputMessage[5].innerHTML = 'Field is required';
            } else {
                inputMessage[5].classList.add('invalid');
                inputMessage[5].innerHTML = 'Must enter a valid address format';
            }
        };

        inputAddress[0].onblur = function() {
            validateAddress();
        }

        inputAddress[0].onfocus = function() {
            inputMessage[5].classList.remove('validate');
            inputMessage[5].classList.remove('invalid');
            inputMessage[5].innerHTML = '';
        }

        //VALIDATE CITY

        function validateAddress() {
        var allowed = ' 0123456789abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
        var numbers = '0123456789';
        var letters = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
        var cityValue = inputCity[0].value;
        var isAlphanumeric = true;
        var justNumbers = true;
        var justLetters = true;

        cityValue.split('').forEach(function(letter) {
            if (allowed.indexOf(letter) == -1) isAlphanumeric = false;
            if (numbers.indexOf(letter) == -1) justNumbers = false;
            if (letters.indexOf(letter) == -1) justLetters = false;
        });

        if (isAlphanumeric && !justNumbers && !justLetters && cityValue.length > 3){
            inputMessage[6].classList.add('validate');
        } else if (cityValue.length == 0) {
            inputMessage[6].classList.add('invalid');
            inputMessage[6].innerHTML = 'Field is required';
        } else {
            inputMessage[6].classList.add('invalid');
            inputMessage[6].innerHTML = 'Must enter a valid address format';
        }
    };

        inputCity[0].onblur = function() {
            validateAddress();
        }

        inputCity[0].onfocus = function() {
            inputMessage[6].classList.remove('validate');
            inputMessage[6].classList.remove('invalid');
            inputMessage[6].innerHTML = '';
        }


        //VALIDATE POSTAL CODE


        function validatePc() {
            var numbers = '0123456789';
            var letters = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
            var pcValue = inputPc[0].value;
            var justNumbers = true;
            var justLetters = true;
    
            pcValue.split('').forEach(function(letter) {
                if (numbers.indexOf(letter) == -1) justNumbers = false;
                if (letters.indexOf(letter) == -1) justLetters = false;
            });
    
            if (justNumbers && !justLetters && pcValue.length >= 4 && pcValue.length <= 5){
                inputMessage[7].classList.add('validate');
            } else if (pcValue.length == 0) {
                inputMessage[7].classList.add('invalid');
                inputMessage[7].innerHTML = 'Field is required';
            } else {
                inputMessage[7].classList.add('invalid');
                inputMessage[7].innerHTML = 'Only 4 or 5 numbers';
            }
        };
    
            inputPc[0].onblur = function() {
                validatePc();
            }
    
            inputPc[0].onfocus = function() {
                inputMessage[7].classList.remove('validate');
                inputMessage[7].classList.remove('invalid');
                inputMessage[7].innerHTML = '';
            }

        
        //VALIDATE EMAIL


        function validateMail() {
            
            if (inputMail[0].value.match(regExp)) {
                inputMessage[8].classList.add('validate');
            } else if (!inputMail[0].value.match(regExp)) {
                inputMessage[8].classList.add('invalid');
                inputMessage[8].innerHTML = 'Must enter a valid format email';
            }
        }
    
        inputMail[0].onblur = function() {
            validateMail();
        }
    
        inputMail[0].onfocus = function() {
            inputMessage[8].classList.remove('validate');
            inputMessage[8].classList.remove('invalid');
            inputMessage[8].innerHTML = '';
        }

        //VALIDATE PASSWORD


        function validatePassword() {
            var allowed = ' 0123456789abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
            var numbers = '0123456789';
            var letters = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
            var passwordValue = inputPas[0].value;
            var isAlphanumeric = true;
            var justNumbers = true;
            var justLetters = true;

            passwordValue.split('').forEach(function(letter) {
                if (allowed.indexOf(letter) == -1) isAlphanumeric = false;
                if (numbers.indexOf(letter) == -1) justNumbers = false;
                if (letters.indexOf(letter) == -1) justLetters = false;
            });

            if (isAlphanumeric && !justNumbers && !justLetters && passwordValue.length >= 8){
                inputMessage[9].classList.add('validate');
            } else if (passwordValue.length == 0) {
                inputMessage[9].classList.add('invalid');
                inputMessage[9].innerHTML = 'Field is required';
            } else {
                inputMessage[9].classList.add('invalid');
                inputMessage[9].innerHTML = 'Must enter a valid password format';
            }
        };

        inputPas[0].onblur = function() {
            validatePassword();
        }

        inputPas[0].onfocus = function() {
            inputMessage[9].classList.remove('validate');
            inputMessage[9].classList.remove('invalid');
            inputMessage[9].innerHTML = '';
        }

        //VALIDATE REPEAT PASSWORD
        

        function validateRepeat() {
            var allowed = ' 0123456789abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
            var numbers = '0123456789';
            var letters = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
            var repeatValue = inputRepeatpas[0].value;
            var isAlphanumeric = true;
            var justNumbers = true;
            var justLetters = true;

            repeatValue.split('').forEach(function(letter) {
                if (allowed.indexOf(letter) == -1) isAlphanumeric = false;
                if (numbers.indexOf(letter) == -1) justNumbers = false;
                if (letters.indexOf(letter) == -1) justLetters = false;
            });

            if (isAlphanumeric && !justNumbers && !justLetters && repeatValue.length >= 8){
                inputMessage[10].classList.add('validate');
            } else if (repeatValue.length == 0) {
                inputMessage[10].classList.add('invalid');
                inputMessage[10].innerHTML = 'Field is required';
            } else {
                inputMessage[10].classList.add('invalid');
                inputMessage[10].innerHTML = 'Must enter a valid password format';
            }
        };

        inputRepeatpas[0].onblur = function() {
            validateRepeat();
        }

        inputRepeatpas[0].onfocus = function() {
            inputMessage[10].classList.remove('validate');
            inputMessage[10].classList.remove('invalid');
            inputMessage[10].innerHTML = '';
        }


        //SUBMIT BUTTON

        function validateSubmit() {
            var name = inputName[0].value;
            var surname = inputSurname[0].value;
            var id = inputId[0].value;
            var date = inputDate[0].value;
            var phone = inputPhone[0].value;
            var address = inputAddress[0].value;
            var city = inputCity[0].value;
            var cp = inputPc[0].value; 
            var email = inputMail[0].value;
            var pass = inputPas[0].value;
            var repeatpass = inputRepeatpas[0].value;

            if ((name.length != 0) && (surname.length != 0) && (id.length != 0)
            && (date.length != 0) && (phone.length != 0) && (address.length != 0)
            && (city.length != 0) && (cp.length != 0) && (email.length != 0) &&
            (pass.length != 0) && (repeatpass.length != 0)) {
                alert ('Login successfull');
                alert('Full name: '+name+' Surname: '+surname+' Id: '+id+' Date of birth: '+date+' Phone number: '+phone+' Address: '+address+' City: '+city+' Postal code: '+cp+' Email: '+
                email+' Password: '+pass+'');
            } else {
                alert('Validation was not success');
            }
        }
        
            inputbutton[0].onclick = function() {
                validateSubmit();
            }        
        
}