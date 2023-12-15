const animal = ["leon","mono","jirafa"]
//                 0      1       2

//podemos en una lista almacenar cualquier tipo de dato
const mix = ["leon", true, 2, ["hola", 3]]

//Acceder a un elemento de la lista
console.log(mix[3][1]);


//insertar un elemento a la lista
animal.push("mapache")
console.log(animal);

//agregamos un valor a la sublista
mix[3].push(true)
console.log(mix);

//Si tratamos de insertar un valor a un elemento que no es una lista, va a tirar un error, porque push es un metodo que solamente permite ingresar un valor si es tipo lista el dato
// mix[2].push(true)
// console.log(mix);


//agregar un elemento al principio de la lista
animal.unshift("tigre")
console.log(animal);


//modificar un elemento de un arreglo
const frutas = ["manzana","banana", "frutilla"]
frutas[1] = "mandarina"


//modificar alfabeticamente de la A-Z
console.log(frutas.sort());

//modificar alfabeticamente de la Z-A
console.log(frutas.reverse());

console.log(frutas.includes("Manzana"));


//eliminar el ultimo elemento del arreglo

const carrera = ["pepito","juanito","monchito"]

carrera.pop()
console.log(carrera);


//bucles lista
const meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]

for(let i = 0; i < meses.length ; i++){
    console.log(meses[i]);
}

//ejercicio 1
const numerico = [1,2,3,4,5,6,7,8,9,10]
let total = 0

for(let i = 0; i < numerico.length; i++){
    total = total + numerico[i]
}

console.log(total);

//ejercicio 2
const pares = [1,2,3,4,5,6,7,8,9,10]
let contadorPares = 0

for(let i = 0; i < pares.length; i++){
    if(pares[i] % 2 === 0){
        contadorPares++
    }
}

console.log(contadorPares);