/*Benitez Matias
DIV X
IF 6*/
function mostrar()
{
	//tomo la edad  
	let edad;
	edad = parseInt(document.getElementById("txtIdEdad").value);
	if(edad < 13)
	{
		alert("usted es un niño");
	}
	else if(edad < 18)
	{
		alert("usted es un adolescente");
	}
	else
	{
		alert("usted es un adulto");
	}

}//FIN DE LA FUNCIÓN