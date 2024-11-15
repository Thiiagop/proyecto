let images = document.querySelectorAll('.slider img');
let currentImage = 0;

// Cambia la imagen cada 5 segundos (5000 milisegundos)
setInterval(function() {
  // Asegúrate de que la clase 'active' se elimina de la imagen actual
  images[currentImage].classList.remove('active');
  images[currentImage].classList.add('inactive');
  
  // Calcula la siguiente imagen
  currentImage = (currentImage + 1) % images.length;
  
  // Asegúrate de que la clase 'inactive' se elimina de la nueva imagen y se añade 'active'
  images[currentImage].classList.remove('inactive');
  images[currentImage].classList.add('active');
}, 5000); // Intervalo de 5 segundos

function scrollToFooter() {
  const footer = document.getElementById('footer'); // Asegúrate de que el footer tenga el id "footer"
  if (footer) {
      footer.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }
}

function toggleContact() {
  const contactInfo = document.querySelector('.contact-info');  // Asegúrate de que el contenedor tenga esta clase
  contactInfo.classList.toggle('open');  // Cambia la clase para abrir o cerrar el contenido
}
