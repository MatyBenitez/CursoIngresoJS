/*
Benitez Matias
DIV X
E/S 6
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
/*function sumar()
{
	let num1;
	let num2;
	let suma;

	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	suma = num1 + num2;
	alert("la suma es: " + suma);
}*/

/*1. Ingresar el valor del dólar oficial y el valor del dólar blue.
Mostrar la diferencia expresada en porcentaje entre una cotización y otra.
Benitez Matias 
DIV X 
repaso 1 */

function sumar()
{
	let dolarOf;
	let dolarBlue;
	let suma;

	dolarOf = parseInt(document.getElementById("txtIdNumeroUno").value);
	dolarBlue = parseInt(document.getElementById("txtIdNumeroDos").value);
	suma = (dolarOf / dolarBlue) * 100;

	alert("La brecha entre los dolares es de: " + suma.toFixed(2) + "%");
}