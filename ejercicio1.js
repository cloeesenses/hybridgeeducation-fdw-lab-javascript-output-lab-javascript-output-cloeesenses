// Seleccionamos el párrafo
const parrafo = document.getElementById("parrafo");

// Seleccionamos el botón
const boton = document.getElementById("btnActualizar");

// Escuchamos el clic del botón
boton.addEventListener("click", function () {
    parrafo.textContent = "¡Texto actualizado con Javascript!";
});
