//Activamos para leer el documento y realizar nuestras funciones despues de que este cargado

//Añadimos las funciones por las que vamos a leer
document.addEventListener('DOMContentLoaded', function() {
    eventListeners();
})

//Creamos funcion del evento que queremos en este caso el click
function eventListeners() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.addEventListener('click', navegacionResponsive);
}
//Creamos 
function navegacionResponsive() {
    const navegacion = document.querySelector('.navegacion');

    if (navegacion.classList.contains('mostrar')) {
        navegacion.classList.remove('mostrar');
    } else {
        navegacion.classList.add('mostrar');
    }
}