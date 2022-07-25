/*
Benitez Matias
DIV X
while 4
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let num;

	num = prompt("ingrese un número entre 0 y 10.");
	num = parseInt(num);

	while(!(num >= 0 && num < 10))
	{
		num = prompt("ingrese un numero valido");
		num = parseInt(num);
	}
	document.getElementById("txtIdNumero").value = num;
	
}//FIN DE LA FUNCIÓN