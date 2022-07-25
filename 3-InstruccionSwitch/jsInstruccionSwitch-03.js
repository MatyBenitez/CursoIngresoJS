/*Benitez Matias
DIV X
Switch 3*/
function mostrar()
{
	//tomo el mes

	let mes;
	let msj;
	mes = document.getElementById("txtIdMes").value; 
	
	switch(mes)
	{
		case "Febrero":
			msj = "Este mes no tiene más de 29 días.";
		break;
		default: 
			msj = "Este mes tiene 30 o más días";
		break;	
	}
	alert(msj);

}//FIN DE LA FUNCIÓN