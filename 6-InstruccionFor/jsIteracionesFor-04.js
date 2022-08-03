/*Benitez Matias
DIV X
For 4
al presionar el botón repetir hasta que utilizamos 'BREAK'.
*/
function mostrar()
{
	let repeticiones;
	let i;

	repeticiones = prompt("Ingrese la cantidad de veces que quiere que se repita");
	repeticiones = parseInt(repeticiones);

	for(i = 1; i < repeticiones; i++)
	{
		alert("Hola mundo.");

		if(i == 5)
		{
			break;
		}
	}
	
}//FIN DE LA FUNCIÓN