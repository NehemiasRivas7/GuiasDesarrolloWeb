// Lyendo elementos del DOM

const btnAddEstudiante = document.querySelector("#idBtnAgregarEstudiante");
const viewEstudiantes = document.querySelector("#idViewEstudiantes");   
const inputCarnet = document.querySelector("#inputCarnet");
const inputNombre = document.querySelector("#inputNombre");
const inputApellidos = document.querySelector("#inputApellido");

btnAddEstudiante.addEventListener("click", guardarEstudiante);

function guardarEstudiante() {
    const nombre = inputNombre.value.trim();
    const carnet = inputCarnet.value.trim();
    const apellidos = inputApellidos.value.trim();
    const errores = validarDatos(nombre, carnet, apellidos);

    if (errores.length > 0) {
        
        alert(`Errores: \n ${errores.join("\n")}`);
        return;
    } else {
        alert("Estudiante agregado correctamente");
    }

    const alumnos = [];
    alumnos.push({carnet, nombre, apellidos});
    guardarEstudianteLocalStorage(alumnos);
}

function mostrarEstudiantes() {
    localStorage.setItem("estudiantes", JSON.stringify(alumnos));
}

function recuperarEstudiantes() {
    const estudiantesLS = localStorage.getItem("estudiantes");
    return estudiantesLS ? JSON.parse(estudiantesLS) : [];
}

function validarDatos(nombre, carnet, apellidos) {
    const errores = [];

    if (carnet.trim().length == 0) {
        errores.push("El carnet es requerido");
    }
    if (nombre.trim().length == 0) {
        errores.push("El nombre es requerido");
    }
    if (apellidos.trim().length == 0) {
        errores.push("Los apellidos son requeridos");
    } 
    return errores;

    CONST
}