"use strict";

console.log(">> Ready :)");

// Menú hamburguesa
const menuHamburguer = document.querySelector(".menu");
const menuDisplay = document.querySelector(".menu_overview");
const iconClose = document.querySelector(".close_window");

menuHamburguer.addEventListener("click", () => {
  menuDisplay.classList.remove("hidden");
});

iconClose.addEventListener("click", () => {
  menuDisplay.classList.add("hidden");
});

// Elementos del formulario
const mensaje = document.querySelector(".js-mensaje");
const nombre = document.querySelector(".js-nombre");
const edad = document.querySelector(".js-edad");
const fecha = document.querySelector(".js-fecha");
const direccion = document.querySelector(".js-direccion");
const hora = document.querySelector(".js-hora");
const email = document.querySelector(".js-email");
const telefono = document.querySelector(".js-telefono");
const boton = document.querySelector(".js-boton");
const homer = document.querySelector(".homer");

// Elementos del preview
const pMensaje = document.querySelector(".pmessage");
const pNombre = document.querySelector(".pname");
const pEdad = document.querySelector(".p-age");
const pFecha = document.querySelector(".pdate");
const pDireccion = document.querySelector(".paddress");
const pHora = document.querySelector(".ptime");
const pEmail = document.querySelector(".pemail");
const pTelefono = document.querySelector(".pphone");

// Función para actualizar la tarjeta
function updatePreview() {
  pMensaje.textContent = mensaje.value;
  pNombre.textContent = nombre.value;
  pEdad.textContent = edad.value;
  pFecha.textContent = fecha.value;
  pDireccion.textContent = direccion.value;
  pHora.textContent = hora.value;
  pEmail.textContent = email.value;
  pTelefono.textContent = telefono.value;
}

// Agregar eventos a todos los campos del formulario
const campos = [mensaje, nombre, edad, fecha, direccion, hora, email, telefono];
campos.forEach((campo) => {
  campo.addEventListener("input", updatePreview);
});

// Ocultar a Homer al enviar
boton.addEventListener("click", (event) => {
  event.preventDefault();
  homer.style.display = "none";
});

// Resetear formulario y tarjeta
const botonReset = document.querySelector(".reset");
const formulario = document.querySelector("#formulario");

botonReset.addEventListener("click", () => {
  formulario.reset();
  // Limpiar tarjeta
  pMensaje.textContent = "";
  pNombre.textContent = "";
  pEdad.textContent = "";
  pFecha.textContent = "";
  pDireccion.textContent = "";
  pHora.textContent = "";
  pEmail.textContent = "";
  pTelefono.textContent = "";

  // Mostrar a Homer de nuevo
  homer.style.display = "block";
});

// Ejecutar al iniciar para precargar
updatePreview();

// llamamos a los estilos
const unicornioSelect = document.querySelector('.js_unicornio');

const superheroeSelect = document.querySelector('.js_superheroe');

const festivoSelect = document.querySelector('.js_festivo');

const tarjetDiv = document.querySelector('.tarjet');
const tematicaSelect = document.querySelector('.js-tematica');

tematicaSelect.addEventListener("change", (ev) => {
  ev.preventDefault();
  const classToPut = tematicaSelect.value;
  console.log(classToPut);
  
  tarjetDiv.classList.remove('tarjet', 'superheroe', 'festivo', 'unicornio');
  tarjetDiv.classList.add(classToPut);
});

