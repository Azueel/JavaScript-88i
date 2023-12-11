//CONDICIONALES

const num = 9

if(num == 10){
    console.log("El numero es un 10");
}


const edad = 20;

if(edad >= 18){
    console.log("sos mayor de edad");
}else{
    console.log("sos menor de edad");
}

parseInt("aca ponen el valor")
const nota = 10;

if(nota == 10){
    console.log("SOBRESALIENTE");
}else if(nota >= 8 && nota < 10 ){
    console.log("Muy Bien");
}else if(nota >= 6 && nota < 8){
    console.log("Bien");
}else if(nota > 0 && nota < 6){
    console.log("Insuficiente");
}else{
    console.log("Valor ingresado no valido, los parametros deben ser entre 1 a 10");
}

const num2 = "10"

if(num2 != 10){
    console.log("condicion cumplida");
}


//validar contraseña
const password = "abc13"

if(password.length < 6){
    console.log("La contraseña debe ser mayor a 5 caracteres");
}else{
    console.log("Usuario creado");
}


//Tarea
// Tarea 3 - Números con condicionales
// ● Ingresan dos números
// ● Si el primero es mayor que el segundo mostrar en consola
// ● la suma de ambos
// ● Si el primero es menor que el segundo mostrar en consola
// ● la resta del segundo menos el primero.
// ● Si son iguales mostrar en consola la multiplicación de ambos.
// ● ejemplo del mensaje: 2 es menor que 5, la resta de 5 - 2 es
// igual a 3

// const numero = parseInt(prompt("Ingrese un numero"))
// console.log(numero);

// const nombreUsuario = prompt("Ingrese su nombre")
// const email = prompt("Ingrese su email")
// const passwordCuenta = prompt("ingrese su Contraseña")
// const confirmPassword = prompt("Ingrese nuevamente su contraseña")


// if(nombreUsuario == "" || email == "" || passwordCuenta == "" || confirmPassword ==""){
//     console.log("Todos los campos son obligatorio");
// }else if(passwordCuenta.length < 6){
//     console.log("La contraseña debe ser mayor a 5 caracteres");
// }else if(passwordCuenta !== confirmPassword){
//     console.log("Las contraseñas deben ser iguales");
// }else{
//     console.log("Registrado Correctamente");
// }




// const  numeroRandom = Math.ceil(Math.random() * 20) 
// console.log(numeroRandom);

const estacion = "primavera"

switch(estacion){

    case "verano":
        console.log("Te gusta el calor");
        break;

    case "invierno":
        console.log("Que frio!");
        break;

    case "otoño":
        console.log("La mejor estacion");
        break;

    case "primavera":
        console.log("Te gusta estornudar todo el dia");
        break;

    
    default:
        console.log("La estacion ingresada no es valida");
        break;
}




//ruleta

// const ruleta = Math.ceil(Math.random() * 4) 
// let dinero = parseInt(prompt("ingrese tu dinero")) 

// switch(ruleta){
//     case 1:
//         dinero = dinero - dinero
//         console.log(`La casa siempre gana tu dinero actual es ${dinero}`);
//         break;

//     case 2:
//         dinero = dinero + 200
//         console.log(`Toma un vueltito tu dinero actual es de ${dinero}`);
//         break;

//     case 3:
//         dinero = dinero / 4
//         console.log("Tu dinero fue divido en 4");
//         break;

//     case 4:
//         dinero = dinero * 100
//         console.log("MAX WIN");
//         break;

//     default:
//         console.log("fallo en el sistema por favor contactarse con soporte");
//         break;

// }


//  Escribe un programa que, dada la edad de una persona, determine a qué categoría pertenece: niño (0-12 años), adolescente (13-17 años), adulto (18-64 años) o anciano (65 años en adelante).

// const edadUsuario = parseInt(prompt("Ingrese tu edad"));

// if(edadUsuario >= 0 && edadUsuario <= 12){
//     console.log("Sos un Niño");

// }else if(edadUsuario >= 13 && edadUsuario <= 17){
//     console.log("Sos adolescente");
// }else if(edadUsuario >= 18 && edadUsuario <= 64){
//     console.log("sos adulto");
// }else if(edadUsuario >= 65 && edadUsuario <= 100){
//     console.log("Anciano");
// }else{
//     console.log("la edad no es valida");
// }

// Detector de Números Pares e Impares: Escribe un código que reciba un número y determine si es par o impar.

let numero = prompt("ingrese un numero")

if(numero % 2 === 0){
    console.log("es par");
}else{
    console.log("es Impar");
}