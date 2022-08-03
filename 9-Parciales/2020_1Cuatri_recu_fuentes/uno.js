/*Benitez Matias Agustin
DIV X
3/8/2022
Parcial Ingreso ejer 1
1)De una Red Social se debe ingresar una cantidad indeterminada de interacciones diaria de usuarios, validando los siguientes datos:

nombre de usuario, *

edad, *

cantidad de likes, *

tipo(“INVITADO” o “VIP”) *

Informar:

a)El nombre del usuario de tipo “VIP” más joven.*

b)La cantidad total de likes del día.*

c)Promedio total de likes de los usuarios del tipo “INVITADO”.

Pedir datos por prompt y mostrar por document.write


*/
/*function mostrar()
{
	let nombreUsuario;
	let edad;
	let CantidadLikes;
	let tipo;
	let flagNombreTipoVIP;
	let nombreVIP;
	let edadVIP;;
	let cantidadTotalLikes;
	let promedioTotalLikes;
	let respuesta;
	let contInvitado;

	respuesta = 's';
	flagNombreTipoVIP = 0;
	contInvitado = 0;
	cantidadTotalLikes = 0;
	promedioTotalLikes = 0;

	while(respuesta == 's')
	{
		do  
		{
    		nombreUsuario = prompt("Ingrese nombreUsuario de usuario");
    		nombreUsuario = nombreUsuario.toLowerCase();
		}while(!(isNaN(nombreUsuario)));

		edad = prompt("Ingrese su edad:");
		edad = parseInt(edad);

		while((isNaN(edad)) || edad < 0 )
		{
    		edad = prompt("Error. Ingrese su edad correctamente:");
    		edad = parseInt(edad);
		}

		CantidadLikes = prompt("Ingrese su CantidadLikes:");
		CantidadLikes = parseInt(CantidadLikes);

		while((isNaN(CantidadLikes)) || CantidadLikes < 0 )
		{
    		CantidadLikes = prompt("Error. Ingrese su CantidadLikes correctamente:");
    		CantidadLikes = parseInt(CantidadLikes);
		}

		cantidadTotalLikes += CantidadLikes;

		tipo = prompt("Ingrese el tipo de tipo invitado o VIP");
		tipo = tipo.toLowerCase();
	
		while(tipo != "invitado" && tipo != "vip")
		{
		  tipo = prompt("Error. Ingrese el tipo de tipo de material correctamente:");
		  tipo = tipo.toLowerCase();
		}

		if(tipo == "vip" && flagNombreTipoVIP == 0)
		{
			nombreVIP = nombreUsuario;
			edadVIP = edad;
			bandera = 1;
		}
		else
		{ 
			if(edad > edadVIP)
			{
				nombreVIP = nombreUsuario;
				edadVIP = edad;
			}
		}

		if(tipo == "invitado")
		{
			contInvitado++;
		}

    	respuesta = prompt("¿Quiere seguir ingresando datos? s/n");
    	respuesta = respuesta.toLowerCase();
	}

	
	document.write("Elnombre del VIP mas joven es: " + nombreVIP);
	document.write("<br>la cantidad total de likes del dia fueron: " + cantidadTotalLikes);

	if(contInvitado > 0)
	{
		promedioTotalLikes = cantidadTotalLikes / contInvitado;
		document.write("<br>El promedio total de likes de los invitados es: " + promedioTotalLikes);
	}
}*/







/*Benitez Matias Agustin
DIV X
3/8/2022
Parcial Ingreso ejer 2

*/

function mostrar()
{
	



























}