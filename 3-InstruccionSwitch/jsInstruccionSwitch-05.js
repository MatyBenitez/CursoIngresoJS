/*Benitez Matias
DIV X
Switch 5*/
function mostrar()
{

	//tomo la hora
	let hora;
	let msj;
	
	hora = document.getElementById("txtIdHora").value;
	hora = parseInt(hora);

	switch(hora)
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			msj = "Es de mañana";
		break;

	}
	alert(msj);
	/* if(hora > 6 && hora < 12)
	{
		msj = es de mañana;
	} 
	es la opcion mas viable en este caso pero no es la consigna*/
}//FIN DE LA FUNCIÓN