/*
Benitez Matias
while 10
DIV X
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let respuesta;
	let numeroIngresado;
	let sumaNegativos;
	let sumaPositivos;
	let contNegativos;
	let contPositivos;
	let promedioNegativos;
	let promedioPositivos;
	let flag1;
	let Diferencia;

	contNegativos = 0;
	contPositivos = 0;
	respuesta = 's';
	flag1 = 0

	while(respuesta == 's')
	{
		numeroIngresado = prompt("Ingrese un numero");
		parseFloat(numeroIngresado);
		if(flag1 == 0)
		{
			sumaNegativos = numeroIngresado;
			sumaPositivos = numeroIngresado;
			flag1 = 1;
		}
		else
		{
			if(sumaNegativos < 0)
			{
				sumaNegativos = sumaNegativos + numeroIngresado;
				contNegativos++;
			}
			if(sumaPositivos > 0)
			{
				sumaPositivos = sumaPositivos + numeroIngresado;
				contPositivos++;
			}
		}


		respuesta = prompt("¿Desea ingresar otro numero? s/n");
	}//fin del while

	// if((edad % 2) == 0)
	// {

	// }
	promedioNegativos = sumaNegativos / contNegativos;
	promedioPositivos = sumaPositivos / contPositivos;
	Diferencia = sumaPositivos - sumaNegativos;
	
	document.write("La suma de los numeros numeros negativos da: " + sumaNegativos  +
	" La suma de los numeros numeros positivos da: " + sumaPositivos +
	" El promedio de los numeros negativos es de: " + promedioNegativos +
	" El promedio de los numeros positivos es de: " + promedioPositivos);


}//FIN DE LA FUNCIÓN