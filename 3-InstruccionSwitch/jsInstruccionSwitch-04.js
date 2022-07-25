/*Benitez Matias
DIV X
Switch 4*/
function mostrar()
{
	//tomo el mes
	let mesDelAnio = document.getElementById("txtIdMes").value;
	let msj;

	switch(mesDelAnio)
	{
		case "Febrero":
			msj = "Tiene 28 dias";
		break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Nobiembre":
			msj = " Tiene 30 dias";
		break;
		default:
			msj = "Tiene 31 dias";
	}
	alert(msj);
	
	



}//FIN DE LA FUNCIÓN