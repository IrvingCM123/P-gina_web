
const $btnOcultar = document.querySelector("#btnOcultarSignificado1"),
	$btnMostrar = document.querySelector("#btnMostrarSignificado1"),
	$titulo = document.querySelector("#tituloSignificado1"),
	$parrafo = document.querySelector("#parrafoSignificado1"),
   $imagen = document.querySelector("#imagenSignificado1");

$btnMostrar.addEventListener("click", () => {
	$titulo.style.display = "block",
	$parrafo.style.display = "block",
   $imagen.style.display = "block";
});

$btnOcultar.addEventListener("click", () => {
	$titulo.style.display = "none",
	$parrafo.style.display = "none",
   $imagen.style.display = "none";
});

const $btnOcultar2 = document.querySelector("#btnOcultarSignificado2"),
	$btnMostrar2 = document.querySelector("#btnMostrarSignificado2"),
	$titulo2 = document.querySelector("#tituloSignificado2"),
	$parrafo2 = document.querySelector("#parrafoSignificado2"),
   $imagen2 = document.querySelector("#imagenSignificado2");

$btnMostrar2.addEventListener("click", () => {
	$titulo2.style.display = "block",
	$parrafo2.style.display = "block",
   $imagen2.style.display = "block";
});

$btnOcultar2.addEventListener("click", () => {
	$titulo2.style.display = "none",
	$parrafo2.style.display = "none",
   $imagen2.style.display = "none";
});
