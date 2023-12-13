// // let valor = 1

// // while(valor < 10){
// //     console.log(valor)

// //     //Recordar siempre tener la variante que va a mutar el valor (en caso de olvidarse, despedirse de la compu)
// //     valor = valor + 1

// // }


// //dowhile

// // let i = 20

// // do{
// //     console.log(i);

// //     i = i + 1
// // }while(i < 10)


// for(let num = 1; num <= 10; num++){
//     let resultado = 8 * num
//     console.log(`8 x ${num} = ${resultado}`);
// }


// for(let x = 1; x <= 20; x++){
//     if(x %  2 === 0){
//         console.log(`El numero ${x} es par`);
//     }
// }

//vamos a evaluar 150 numeros si el numero es multiplo de 3 mostrar en consola FIZZ, si es multiplo de 5 mostrar Buzz y si es multiplo de ambos mostrar FizzBuzz

for(let z = 1; z <= 150; z++){
    
   if(z % 3 === 0 && z % 5 === 0){
        console.log(`${z} FizzBuzz`);
    }
    else if(z % 3 === 0){
        console.log(`${z} Fizz`);
    }else if( z % 5 === 0){
        console.log(`${z} Buzz`);
    }
}