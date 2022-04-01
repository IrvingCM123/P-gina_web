
const $btnOcultar = document.querySelector("#btnOcultar"),
	$btnMostrar = document.querySelector("#btnMostrar"),
	$titulo = document.querySelector("#titulo"),
	$parrafo = document.querySelector("#parrafo"),
   $imagen = document.querySelector("#imagen");

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

const $btnOcultar1 = document.querySelector("#btnOcultar1"),
	$btnMostrar1 = document.querySelector("#btnMostrar1"),
	$titulo1 = document.querySelector("#titulo1"),
	$parrafo1 = document.querySelector("#parrafo1"),
   $imagen1 = document.querySelector("#imagen1");

$btnMostrar1.addEventListener("click", () => {
	$titulo1.style.display = "block",
	$parrafo1.style.display = "block",
   $imagen1.style.display = "block";
});

$btnOcultar1.addEventListener("click", () => {
	$titulo1.style.display = "none",
	$parrafo1.style.display = "none",
   $imagen1.style.display = "none";
});
