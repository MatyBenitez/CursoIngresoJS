/*
Benitez Matias
while 5
DIV X
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;
	
	sexoIngresado = prompt("ingrese f para femenino ó m para masculino");

	while(!(sexoIngresado == "f" || sexoIngresado == "m"))
	{
		sexoIngresado = prompt("error, vuelva a ingresar f o m");
	}

	document.getElementById("txtIdSexo").value = "Su sexo es: " + sexoIngresado;

}//FIN DE LA FUNCIÓN