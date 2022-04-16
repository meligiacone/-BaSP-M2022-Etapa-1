console.log('--EXERCISE 3: ARRAYS');

// a .  Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).

console.log('-Exercise 3. a:');

var months = ['January', 'February', 'March', 'April', 'May' , 'June', 'July' , 'Agost' , 'September', 'October' , 'November' , 'December'];

console.log(months[4] , months[10] );

// b . Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

console.log('-Exercise 3. b:');

console.log(months.sort());

// c . Agregar un elemento al principio y al final del array (utilizar unshift y push).

console.log('-Exercise 3. c:');

var months = ['January', 'February', 'March', 'April', 'May' , 'June', 'July' , 'Agost' , 'September', 'October' , 'November' , 'December'];

months.unshift('beggins');
months.push('final');

console.log(months);

// d . Quitar un elemento del principio y del final del array (utilizar shift y pop).

console.log('-Exercise 3. d:');

months.pop();
months.shift();

console.log(months);

// e . Invertir el orden del array (utilizar reverse).

console.log('-Exercise 3. e:');

months.reverse();

console.log(months);

// f . Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).

console.log('-Exercise 3. f:');

var months = ['January', 'February', 'March', 'April', 'May' , 'June', 'July' , 'Agost' , 'September', 'October' , 'November' , 'December'];

console.log(months.join('-'));

// g . Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

console.log('-Exercise 3. g:');

console.log(months.slice(4,11));








