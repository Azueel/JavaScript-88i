//Comentario de una sola linea

/*
Comentario
de
Multiples Lineas
*/


const marca = "Nike" //forma de trabajar con string llevan comillas simples o dobles

//.length conoce la cantidad de caracteres que tiene la cadena de texto (prioridad para aprender)
const password = "abc123456"
console.log(password.length);


//includes nos va a retornar si el dato que esta en includes es igual a al variable, si es igual me retorna true en el caso contrario me retorna false
const celular = "Samsung"
console.log(celular.includes("Samsung"));


//concatenacion
const nombre = "Pepe"
let edad = 50
const provincia = "  Tucuman"

//primera forma
console.log("Bienvenido " + nombre + " De la provincia de " + provincia);

//Segunda forma (Hoy en dia la mas recomendada y usada)
console.log(`Bienvenido ${nombre} de la provincia de ${provincia}`);



//Trim borra los espacios del inicio y el final de nuestra cadena (prioridad a aprender)
let passwordUsuario = "    abc123    "
passwordUsuario = passwordUsuario.trim()
console.log(passwordUsuario.length);


//cortar una letra o numero en espesifico
console.log(nombre.charAt(0));

//pasar a mayuscula
const pais = "Argentina"
console.log( pais.toUpperCase()  );


//pasar a miniscula (prioridad para aprender)
console.log(pais.toLowerCase());