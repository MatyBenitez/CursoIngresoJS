/*Benitez Matias
DIV X
IF 8*/
function mostrar()
{
	//tomo la edad  
	let edad;
	let esCivil;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	esCivil = document.getElementById("estadoCivil").value;

	if(edad > 17)
	{
		if (esCivil == "Soltero")
		{
			alert("Es soltero y no es menor");
		}
	}

}//FIN DE LA FUNCIÓN