console.log('--EXERCISE 2: STRINGS');

// a . Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).

console.log('-Exercise 2. a:');

var a = 'extraordinary';

console.log(a.toUpperCase());

// b . Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log('-Exercise 2. b:');

var b = 'intelligent';

var c = b.substring(0,5);

console.log(c);

// c . Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log('-Exercise 2. c:');

var d = 'sustainable'

var e= d.substring(8,11);

console.log(e);

// d . Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).

console.log('-Exercise 2. d:');

var f = 'certification'

var g = f.substring(0,1).toUpperCase() + f.substring(1,13).toLowerCase();

console.log(g);

// e . Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

console.log('-Exercise 2. e:');

var h = 'go downstairs'

var i = h.indexOf(' ');

console.log (i);     


// f . Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).

console.log('-Exercise 2. f:');

var j = 'information systems';

var k = (j.substring(0,1).toUpperCase() + j.substring(1,11).toLowerCase()) + ' ' + (j.substring(12,13).toUpperCase() + j.substring(13,20).toLowerCase()); 

console.log(k);