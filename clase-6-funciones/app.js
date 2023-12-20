//Funcion declarativa

// function edad(){
//     console.log("sos mayor de edad");
// }

// const edadUsuario = 20;

// if(edadUsuario > 18){
//     edad()
// }else{
//     console.log("sos menor de edad");
// }


// //ejemplo 2
// function sumar(num1, num2, numero = 0){
//     console.log(num1 + num2 * numero);
// }

// sumar(3,5)


//ejemplo 3

// function registro(nombreCompleto,email,edad,domicilio = "Sin espesificar"){
//     console.log(`Nombre: ${nombreCompleto}, Email: ${email}, edad:${edad}, Domicilio: ${domicilio}`);
// }

// registro("Pepito","pepito@gmail.com","44","Fournier ")


//Funcion de expresion

// const restar = function(){
//     console.log(2-2);
// }

// restar()



//ejemplo 4
// const nombre = "juanito"

// function login(email, contraseña){
//     const nombre = "pepito"
//     console.log(`email: ${email} , contraseña:${contraseña}, Nombre = ${nombre} `);   
// }

// const email = prompt("ingresa tu email")

// const password = prompt("ingresa tu password")



// login(email,password)


//ejemplo 5
function multiplicar(num1, num2){
    const resultado = num1*num2
    mostrarMensaje(resultado)
}

function mostrarMensaje(resultado){
    console.log(resultado);
}

multiplicar(2,2)


//ejemplo 6
//Deben ingresar por Prompt su nombre, su edad, su Dni y su Color favorito, el color favorito es opcional, entonces tener un valor por defecto si no ingresan nada mostrar en consola los datos que cargaron.


//EJERCICIO FINAL

//PEDIRLE AL USUARIO QUE INGRESE SU NOMBRE, SU CONTRASEÑA Y SU CONFIRMAR CONTRASEÑA, TRABAJAR CON FUNCIONES Y VALIDAR LOS DATOS, VALIDAR QUE TODOS LOS CAMPOS ESTEN COMPLETOS, QUE LA CONTRASEÑA SEA MAYOR A 6 CARACTERES Y QUE LAS CONTRASEÑAS DEBAN SER IGUALES, SI CUMPLE TODO ESO REGISTRARLO Y GUARDAR EL NOMBRE EN UNA LISTA DE USUARIOS REGISTRADOS

const registrados = ["pepito", "juanito","mengito"]

const nombre = prompt("ingrese su nombre")
const password = prompt("ingrese su contraseña")
const confirmPassword = prompt("ingrese nueva su contraseña")

function autenticar(nombre, contraseña, confirmarContraseña){
    if(nombre === "" || contraseña === "" || confirmarContraseña === ""){
        console.log("Todos los campos son obligatorios");
    }else if(contraseña.length < 6){
        console.log("La contraseña debe ser mayor a 6 caracteres");
    }else if(contraseña !== confirmarContraseña){
        console.log("Las contraseñas deben ser iguales");
    }else{
        registrados.push(nombre)
        console.log(registrados);
    }
}

autenticar(nombre,password,confirmPassword)