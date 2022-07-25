/* Benitez Matias
while 6
DIV X
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.*/
function mostrar()
{
	let cont;
	let acumulador;
	let num;
	let promedio;

	cont=0;
	acumulador=0;
	
	do
	{
		num = prompt("Ingrese un numero");
		num = parseFloat(num);
		cont = cont + 1;
		acumulador = acumulador + num;
	} while(cont < 5);

	promedio = acumulador / cont;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador/5;

}//FIN DE LA FUNCIÓN