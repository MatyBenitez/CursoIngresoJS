/*Benitez Matias
DIV X
Switch 9
una agencia de viajes debe sacar las tarifas de los viajes ,
 se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y
 localidad para vacacionar para poder calcular el precio final
en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata 
tiene un descuento del 20%
en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata 
tiene un aumento del 20%
en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata 
tiene un aumento del 10% y Cordoba tiene el precio sin descuento */
function mostrar()
{
	let estacion;
	let destino;
	let porcentaje;
	let precioBase;
	let precioFinal;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	precioBase = 15000;
	porcentaje = 0

	switch(estacion)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					porcentaje = 0.2;
				break;
				case "Cataratas":
				case "Cordoba":
					porcentaje = -0.1;
				break;
				case "Mar del plata":
					porcentaje = -0.2;
				break;
			}
		break;
		case "Verano":
			switch(destino)
			{
				case "Bariloche":
					porcentaje = -0.2;
				break;
				case "Cataratas":
				case "Cordoba":
					porcentaje = 0.1;
				break;
				case "Mar del plata":
					porcentaje = 0.2;
				break;
			}
		break;
		case "Otoño":
		case "Primavera":
			switch(destino)
			{
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					porcentaje = 0.1;
				break;
				case "Cordoba":
					precioFinal = precioBase;
				break;
			}
		break;
	}

	precioFinal = precioBase + (precioBase * porcentaje);

	alert("Usted eligio con destino: " + destino + " en: " + estacion + " su precio final es de: " + precioFinal);



}//FIN DE LA FUNCIÓN

/*
if(estacion == "Invierno")
{
	if(destino == "Bariloche")
	{
		aumento = 0.20;
	}
	if(destino == "Cataratas" || destino == "Cordoba")
	{
		descuento = 0.1;
	}
	if(destino == "Mar del plata")
	{
		descuento == 0.2;
	}
else
	{
		if(estacion == "Verano")
		{
			if(destino == "Bariloche")
			{
				descuento = 0.2;
			}
			if(destino == "Cataratas" || destino == "Cordoba")
			{
				aumento = 0.1;
			}
			if(destino == "Mar del plata")
			{
				aumento == 0.2;
			}
		}
	}
	else
	{
		if(estacion == "Otoño" || estacion == "Primavera")
		{
			if(destino == "Bariloche" || destino == "Cataratas" || destino == "Mar Del Plata")
			{
				aumento = 0.1;
			}
			if(destino == "Cordoba")
			{
				precioFinal == precioBase;
			}
		}
	}	

	}
	*/