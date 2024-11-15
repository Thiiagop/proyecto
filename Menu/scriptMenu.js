// Añadir un log para verificar que el script se carga correctamente
console.log("scriptMenu.js cargado y ejecutándose");

document.addEventListener('DOMContentLoaded', function() {
    let menuList = document.getElementById("menuList");
    menuList.style.maxHeight = "0px";  // Inicialmente el menú estará cerrado

    // Función para abrir/cerrar el menú en pantallas pequeñas
    function toggleMenu() {
        if (window.innerWidth <= 700) {
            if (menuList.style.maxHeight === "0px") {
                menuList.style.maxHeight = "300px"; // Ajusta según el tamaño deseado
            } else {
                menuList.style.maxHeight = "0px";
            }
        }
    }

    // Función para gestionar el submenú
    function toggleSubMenu(event) {
        event.preventDefault();  // Prevenir el comportamiento por defecto del enlace
        let dropdown = event.currentTarget.parentElement;  // Obtener el contenedor dropdown
        let submenu = dropdown.querySelector('.submenu');  // Buscar el submenú
        let arrowIcon = event.currentTarget.querySelector('i');  // Obtener el icono de flecha

        // Verificar si el submenú existe
        if (submenu) {
            console.log("Submenú encontrado:", submenu);
            submenu.classList.toggle('open');  // Alternar la clase 'open' para mostrar/ocultar el submenú
            dropdown.classList.toggle('open');  // Alternar la clase 'open' para el contenedor del dropdown

            // Rotar el icono de flecha
            if (submenu.classList.contains('open')) {
                arrowIcon.style.transform = "rotate(180deg)";
            } else {
                arrowIcon.style.transform = "rotate(0deg)";
            }
        } else {
            console.error("Submenú no encontrado para esta categoría:", dropdown);
        }
    }

    // Añadir los eventos de clic a los enlaces de categorías con submenú
    document.querySelectorAll('.dropdown_toggle').forEach(anchor => {
        anchor.addEventListener('click', toggleSubMenu);
    });

    // Evento para el icono del menú (solo en pantallas pequeñas)
    let menuIcon = document.querySelector('.menu-icon i');
    if (menuIcon) {
        menuIcon.addEventListener('click', toggleMenu);
    }
});
