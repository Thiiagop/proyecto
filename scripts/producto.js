// Función para actualizar la cantidad en el campo de texto
function updateCount(change) {
    var quantityInput = document.getElementById('quantity');
    var currentValue = parseInt(quantityInput.value, 10);
    
    // Verifica que el valor no sea menor que 0
    if (currentValue + change >= 0) {
        quantityInput.value = currentValue + change;
    }
}
