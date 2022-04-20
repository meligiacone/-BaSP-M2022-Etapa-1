console.log('--EXERCISE 6: FUNCTIONS');

/* a . Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función 
y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador. */

console.log('-Exercise 6. a:');

function adittion(num1,num2) {
    return num1 + num2;
  }

console.log(adittion(20,25));

/* b . A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es 
un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.*/

console.log('-Exercise 6. b:');

function add(num1,num2) {
    if (typeof num1 && typeof num2 === 'number') {
        return num1+num2;
    } else {
            alert('one of the parameters has an error')
            return NaN;
        }
    };

console.log (add(1,'two'));

// c . Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.

console.log('-Exercise 6. c:');

function validateinteger(n) {
    return Number.isInteger(n); 
};

console.log(validateinteger(2));

/* d . A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. 
En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado). */

console.log('-Exercise 6. d:');

function addition(num1,num2) {
    if (typeof num1 && typeof num2 === 'number' && Number.isInteger(num1) && Number.isInteger(num2)) {
        return num1+num2;
        } else if (isNaN(num1) || isNaN(num2)) {
            alert('one or both parameters are not a number')
            return NaN;
        }   else if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
                    alert('one or both parameters are not integer')
                    return Math.round(num1+num2)
        }
};

    console.log(addition(1.6,10));      //one parameter is decimal
    console.log(addition(15,20));       //both parameters are integer 
    console.log(addition("dos",4));     //one parameter is not a number
     

/* e . Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función
 suma probando que todo siga funcionando igual. */

console.log('-Exercise 6. e:');

function validateinteger2 (num1,num2) {
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        alert('one or both parameters are not integer');
        return Math.round(num1+num2);
    } else { 
        return num1 + num2;
    }
};

function addfunction (num1, num2){
    if (isNaN(num1) || isNaN(num2)) {
        alert('One or both of the parameters are not a number');
        return NaN;
    }else {
        return validateinteger2(num1,num2);
    }
};

console.log(addfunction(7.3,2));
console.log(addfunction("four",6));