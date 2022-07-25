/*
Benitez Matias
while 9
DIV X
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let flag1;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;
	//iniciar variables
	flag1 = 0;
	respuesta='s';

	while(respuesta == 's')
	{
		numeroIngresado = prompt("Ingrese un numero");
		parseFloat(numeroIngresado);
		if(flag1 == 0)
		{
			numeroMaximo = numeroIngresado; 
			numeroMinimo = numeroIngresado;
			flag1 = 1;
		}
		else 
		{
			if(numeroIngresado > numeroMaximo)
			{
				numeroMaximo = numeroIngresado;
			}
			else if(numeroIngresado < numeroMinimo)
			{
				numeroMinimo = numeroIngresado;
			}
		}

		respuesta=prompt("¿Desea continuar? s/n");
	}
	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;
}//FIN DE LA FUNCIÓN