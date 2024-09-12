//paso 1: crear un objeto para representar a un estudiante
class Estudiante {
    constructor(nombre, calificaciones) {
        this.nombre = nombre;
        this.calificaciones = calificaciones;
    }
    //Método para calcular el promedio de las calificaciones del estudiante
    obtenerPromedio(){
        const suma = this.calificaciones.reduce((acc, calificacion) => acc + calificacion, 0);
        return suma / this.calificaciones.length;
    }
}

//Paso 2: Crear un arreglo para almacenar los estudiantes
let estudiantes = [
    new Estudiante('Ana', [8,9,7,6]),
    new Estudiante('Luis', [5,6,7,8]),
    new Estudiante('Maria', [9,10,10,8]),
    new Estudiante('Juan', [4,5,6,7]),
    new Estudiante('Pedro', [3,9,8,7]),

    new Estudiante('Sofía', [3,3,3,5]),
    new Estudiante('Angel', [5,6,6,5]),
    new Estudiante('Fernando', [10,10,10,8]),
    new Estudiante('Samantha', [4,1,3,1]),
    new Estudiante('Alex', [3,9,10,7])
];

//Paso 3: Función para calcular el promedio general de todos los estudiantes
function calcularPromedioGeneral(estudiantes) {
    const sumaPromedios = estudiantes.reduce((acc, estudiante) => acc + estudiante.obtenerPromedio(), 0);
    return sumaPromedios / estudiantes.length;
}

// Paso 4: Función para obtener los 5 estudiantes con mayores promedios
function obtenerTopEstudiantes(estudiantes, cantidad = 5) {
    return estudiantes
        .sort((a, b) => b.obtenerPromedio() - a.obtenerPromedio())
        .slice(0, cantidad);
}

// Paso 5: Función para obtener los 5 estudiantes con menores promedios
function obtenerBottomEstudiantes(estudiantes, cantidad = 5) {
    return estudiantes
        .sort((a, b) => a.obtenerPromedio() - b.obtenerPromedio())
        .slice(0, cantidad);
}

//Paso 6: Uso del código
let promedioGeneral = calcularPromedioGeneral(estudiantes);
console.log("Promedio general de todos los estudiantes: ", promedioGeneral.toFixed(2));

// Estudiantes con los 5 mayores promedios
let estudiantesMayorPromedio = obtenerTopEstudiantes(estudiantes, 5);
console.log("5 estudiantes con mayores promedios:");
estudiantesMayorPromedio.forEach(estudiante => {
    console.log(`${estudiante.nombre} - Promedio: ${estudiante.obtenerPromedio().toFixed(2)}`);
});

// Estudiantes con los 5 menores promedios
let estudiantesMenorPromedio = obtenerBottomEstudiantes(estudiantes, 5);
console.log("5 estudiantes con menores promedios:");
estudiantesMenorPromedio.forEach(estudiante => {
    console.log(`${estudiante.nombre} - Promedio: ${estudiante.obtenerPromedio().toFixed(2)}`);
});

