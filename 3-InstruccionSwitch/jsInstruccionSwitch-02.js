/*Benitez Matias
DIV X
Switch 2
*/
function mostrar()
{
	//tomo el mes
	let mesDelAño = document.getElementById("txtIdMes").value;
	let msj;

	switch(mesDelAño)
	{
		case "Julio":
		case "Agosto":
			msj = "Abrigate que hace frio";
		break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			msj = "Ya pasamos el frio, ahora calor!!!";
		break;
		default:
			msj = "Falta para el invierno";
	}
	alert(msj);
}//FIN DE LA FUNCIÓN