console.log("El archivo scriptMenu.js se ha cargado correctamente");

document.addEventListener('DOMContentLoaded', function() {
    let menuList = document.getElementById("menuList");
    menuList.style.maxHeight = "0px";

    function toggleMenu() {
        if (window.innerWidth <= 700) {
            if (menuList.style.maxHeight === "0px") {
                menuList.style.maxHeight = "300px"; // Ajusta según el tamaño deseado
            } else {
                menuList.style.maxHeight = "0px";
            }
        }
    }

    function toggleSubMenu(event) {
        event.preventDefault();
        let dropdown = event.currentTarget.parentElement;
        let submenu = dropdown.querySelector('.submenu');
        let arrowIcon = event.currentTarget.querySelector('i'); // Ajusta para buscar dentro del enlace clickeado

        submenu.classList.toggle('open');
        dropdown.classList.toggle('open');

        if (submenu.classList.contains('open')) {
            arrowIcon.style.transform = "rotate(180deg)";
        } else {
            arrowIcon.style.transform = "rotate(0deg)";
        }
    }

    // Añadir los eventos de clic a los enlaces de categorías
    document.querySelectorAll('.dropdown_toggle').forEach(anchor => {
        anchor.addEventListener('click', toggleSubMenu);
    });

    // Evento para el icono del menú (solo en pantallas pequeñas)
    let menuIcon = document.querySelector('.menu-icon i');
    if (menuIcon) {
        menuIcon.addEventListener('click', toggleMenu);
    }
});
