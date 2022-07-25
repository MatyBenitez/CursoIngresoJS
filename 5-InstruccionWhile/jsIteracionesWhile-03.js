/*
Benitez Matias
DIV X
while 3
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;

	claveIngresada = prompt("ingrese la clave.");
	
	while(claveIngresada != "utn750")
	{
		claveIngresada = prompt("Vuelva a ingresar la clave.");
	}
}//FIN DE LA FUNCIÓN
