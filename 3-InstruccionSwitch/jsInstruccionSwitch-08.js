/*Benitez Matias
DIV X
Switch 8
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino*/
function mostrar()
{
	let destinoIngresado;
	let mensaje;

	destinoIngresado = document.getElementById("txtIdDestino").value;
	
	switch(destinoIngresado)
	{
		case "Bariloche":
			mensaje = "FRIO";
		break;
		case "Cataratas":
			mensaje = "CALOR";
		break;
		case "Mar del plata":
			mensaje = "CALOR";
		break;
		case "Ushuaia":
			mensaje = "FRIO";
		break;
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN