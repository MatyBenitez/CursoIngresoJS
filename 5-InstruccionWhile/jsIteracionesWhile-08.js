/*
Benitez Matias
while 8
DIV X
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let num;
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;
	let cont;

	cont = 0;
	sumaPositivos = 0;
	multiplicacionNegativos = 1;
	respuesta = 's';

	while(respuesta == 's')
	{
		num = prompt("Ingrese un numero");
		num = parseFloat(num);
		if(num > 0)
		{
			sumaPositivos = sumaPositivos + num;
		}
		else
		{
			cont = cont + 1;
			multiplicacionNegativos = multiplicacionNegativos * num;
		}
		respuesta = prompt("¿Quiere ingresar otro numero? s/n");
	}
	if(cont == 0)
	{
		multiplicacionNegativos = 0;
	}
	

	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;


}//FIN DE LA FUNCIÓN