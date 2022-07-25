/*
Benitez Matias
E/S 10
DIV X
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let suma;
	importe = parseInt(document.getElementById("txtIdImporte").value);
	suma = importe - (importe * 0.25)
	document.getElementById("txtIdResultado").value = suma;
}