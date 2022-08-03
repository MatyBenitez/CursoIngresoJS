/*Benitez Matias Agustin
DIV X
3/8/2022
Parcial Ingreso ejer 1
1)De una Red Social se debe ingresar una cantidad indeterminada de interacciones diaria de usuarios, validando los siguientes datos:

nombre de usuario, *

monto, *

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
	let nombre;
	let monto;
	let tiempo;
	let tipo;
	let flagNombreTipoVIP;
	let nombreVIP;
	let montoVIP;;
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
    		nombre = prompt("Ingrese nombre de usuario");
    		nombre = nombre.toLowerCase();
		}while(!(isNaN(nombre)));

		monto = prompt("Ingrese su monto:");
		monto = parseInt(monto);

		while((isNaN(monto)) || monto < 0 )
		{
    		monto = prompt("Error. Ingrese su monto correctamente:");
    		monto = parseInt(monto);
		}

		tiempo = prompt("Ingrese su tiempo:");
		tiempo = parseInt(tiempo);

		while((isNaN(tiempo)) || tiempo < 0 )
		{
    		tiempo = prompt("Error. Ingrese su tiempo correctamente:");
    		tiempo = parseInt(tiempo);
		}

		cantidadTotalLikes += tiempo;

		tipo = prompt("Ingrese el tipo de tipo invitado o VIP");
		tipo = tipo.toLowerCase();
	
		while(tipo != "invitado" && tipo != "vip")
		{
		  tipo = prompt("Error. Ingrese el tipo de tipo de material correctamente:");
		  tipo = tipo.toLowerCase();
		}

		if(tipo == "vip" && flagNombreTipoVIP == 0)
		{
			nombreVIP = nombre;
			montoVIP = monto;
			flagNombreTipoVIP = 1;
		}
		else
		{ 
			if(monto > montoVIP)
			{
				nombreVIP = nombre;
				montoVIP = monto;
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
Ejercicio 2 Examen de Ingreso:

2)De 10 corredores de moto se deben tomar y validar los siguientes datos del Enduro del Vera

nombre, *

monto, *

tiempo(dato entero expresado en segundos),*

sexo.*

Informar:

a)El nombre del hombre con mas tiempo(si lo hay).*

b)El promedio de la monto de todos los participantes.

c)La cantidad de corredores de sexo femenino.

Pedir datos por prompt y mostrar por document.write


*/

/*function mostrar()
{
	let nombre;
	let monto;
	let tiempo;
	let sexo;
	let i;
	let flagHombreMasTiempo;
	let nombreHombreMasTiempo;
	let hombreMasTiempo;
	let acumuladormonto;
	let contadormonto;
	let promediomonto;
	let contadorFemenino;

	flagHombreMasTiempo = 0;
	hombreMasTiempo = 0;
	acumuladormonto = 0;
	contadormonto = 0;
	contadorFemenino = 0;

	for(i = 0; i < 10; i++)
	{
		do  
		{
    		nombre = prompt("Ingrese nombre del corredor");
    		nombre = nombre.toLowerCase();
		}while(!(isNaN(nombre)));

		monto = prompt("Ingrese su monto:");
		monto = parseInt(monto);

		while((isNaN(monto)) || monto < 0 )
		{
    		monto = prompt("Error. Ingrese su monto correctamente:");
    		monto = parseInt(monto);
		}

		acumuladormonto += monto;
		contadormonto++;

		tiempo = prompt("Ingrese su tiempo en segundos:");
		tiempo = parseInt(tiempo);

		while((isNaN(tiempo)) || tiempo < 0 )
		{
    		tiempo = prompt("Error. Ingrese su tiempo correctamente:");
    		tiempo = parseInt(tiempo);
		}
		
		do  
		{
    		sexo = prompt("Ingrese sexo m/f");
    		sexo = sexo.toLowerCase();
		}while(sexo != 'm' && sexo != 'f');

		if(sexo == 'm')
		{
			if(flagHombreMasTiempo == 0)
			{
				nombreHombreMasTiempo = nombre;
				hombreMasTiempo = tiempo;
				flagHombreMasTiempo = 1;
			}
			else
			{ 
				if(tiempo > hombreMasTiempo)
				{
					nombreHombreMasTiempo = nombre;
					hombreMasTiempo = tiempo;
				}
			}
		}
		

		if(sexo == 'f')
		{
			contadorFemenino++;
		}
	}

	promediomonto = acumuladormonto / contadormonto;

	document.write("El nombre del hombre con mas tiempo es: " + nombreHombreMasTiempo);
	document.write("<br>El promedio de monto de todos los participantes es de: " + promediomonto);
	document.write("<br>La cantidad de corredores de sexo femenino son: " + contadorFemenino);
}*/



/*Benitez Matias Agustin
DIV X
3/8/2022
Parcial Ingreso ejer 3
Ejercicio 3 Examen Ingreso:

3)Nos ingresan una cantidad indeterminada de ventas realizadas por las distintas sucursales de una Mega Tienda Polirubro, validando los datos ingresados:

nombre del cliente, *

sucursal( “CABA”, “BS.AS.” o “INTERIOR”), *

tipo(“GRANDE”,”MEDIANA”,“PEQUEÑA”),*

monto de venta en Pesos.*

Informar:

a)El nombre del cliente al que se le vendió menos.*

b)El promedio del monto de venta de las sucursales del tipo “PEQUEÑA”.*

c)La sucursal con mas cantidad de ventas.

Pedir datos por prompt y mostrar por document.write
*/
function mostrar()
{
	let nombre;
	let sucursal;
	let tipo;
	let monto;
	let respuesta;
	let flagClienteMenos;
	let nombreClienteMenos;
	let ventaMenos;
	let promedioPequeña;
	let acumPequeña;
	let contPequeña;

	respuesta = 's';
	flagClienteMenos = 0;
	ventaMenos = 0;
	promedioPequeña = 0;
	acumPequeña = 0;
	contPequeña = 0;

	while(respuesta == 's')
	{
		do  
		{
    		nombre = prompt("Ingrese nombre del cliente");
    		nombre = nombre.toLowerCase();
		}while(!(isNaN(nombre)));

		sucursal = prompt("Ingrese la sucursal: caba, bs.as. o interior");
		sucursal = sucursal.toLowerCase();

		while(sucursal != "caba" && sucursal != "bs.as." && sucursal != "interior")
		{
    		sucursal = prompt("Error. Ingrese la sucursal correctamente:");
    		sucursal = sucursal.toLowerCase();
		}

		tipo = prompt("Ingrese el tipo: grande, mediana o pequeña");
		tipo = tipo.toLowerCase();

		while(tipo != "grande" && tipo != "mediana" && tipo != "pequeña")
		{
    		tipo = prompt("Error. Ingrese el tipo correctamente:");
    		tipo = tipo.toLowerCase();
		}

		monto = prompt("Ingrese su monto de venta en pesos:");
		monto = parseInt(monto);

		while((isNaN(monto)) || monto < 0 )
		{
    		monto = prompt("Error. Ingrese su monto correctamente:");
    		monto = parseInt(monto);
		}

		if(flagClienteMenos == 0)
		{
			nombreClienteMenos = nombre;
			ventaMenos = monto;
			flagClienteMenos = 1;
		}
		else
		{ 
			if(monto < ventaMenos)
			{
				nombreClienteMenos = nombre;
				ventaMenos = monto;
			}
		}

		if(sucursal == "pequeña")
		{
			acumPequeña+= monto;
			contPequeña++
		}
		
		respuesta = prompt("¿Quiere seguir ingresando datos? s/n");
    	respuesta = respuesta.toLowerCase();
	}
	
	promedioPequeña = acumPequeña / contPequeña;

	document.write("El nombre del cliente al que se le vendio menos es: " + nombreClienteMenos);
	document.write("<br>El promedio de las sucursales pequeñas es: " + promedioPequeña);
}