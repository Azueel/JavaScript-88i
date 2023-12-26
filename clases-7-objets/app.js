const alumno = {
    nombre: "Pepito",
    edad: 20,
    materias:["Matematica", "Calculo","Algebra","Fisica"],
    suspendido:false,
    medida:{
        peso:80,
        altura:"180cm"
    },


    estudiar(){
        console.log("estudiando");
    }
}

//acceder a un metodo
alumno.estudiar()
//acceder a una propiedad
alumno.medida.peso = 81

//agregar una propiedad al objeto
alumno.dni = 24519180

//eliminar
delete alumno.dni
console.log(alumno);

//////////////////////////////////////


const alumnos = [
    { nombre: "Pepito",
        edad: 20,
        materias:["Matematica", "Calculo","Algebra","Fisica"],
        suspendido:false,
        medida:{
            peso:80,
            altura:"180cm"
        }
    }
        
    ,{
        nombre: "juanita",
        edad: 20,
        materias:["Geografia", "Historia","Historia Moderna","Fisica"],
        suspendido:false,
        medida:{
            peso:60,
            altura:"150cm"
        }
    },
    {
        nombre: "Camila",
        edad: 20,
        materias:["semiotica", "Teoria literaria","PsicoLinguistica","Gramatica"],
        suspendido:false,
        medida:{
            peso:70,
            altura:"173cm"
        }
    },
    {
        nombre: "jorgito",
        edad: 44,
        materias:["Matematica", "Calculo II","Algebra Linea","Fisica II"],
        suspendido:false,
        medida:{
            peso:80,
            altura:"180cm"
        }
    }
]



alumnos.map(function(alumno){
    console.log(`Nombre: ${alumno.nombre}, Edad: ${alumno.edad}, Altura: ${alumno.medida.altura}`);
})

