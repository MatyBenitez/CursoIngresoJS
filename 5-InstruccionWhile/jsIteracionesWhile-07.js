/*
Benitez Matias
while 7
DIV X
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let respuesta;
	let cont;
	let acumulador;
	let num;
	let promedio;

	cont = 0;
	acumulador = 0;
	respuesta = "s";

	while(respuesta == "s")
	{
		num = prompt("Ingrese un numero");
		num = parseFloat(num);
		cont = cont + 1;
		acumulador = acumulador + num;
		respuesta = prompt("¿Quiere ingresar otro numero? s/n");
	}

	promedio = acumulador / cont;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;

}//FIN DE LA FUNCIÓN