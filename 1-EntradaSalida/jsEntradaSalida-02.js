/*
Benitez Matias
E/S 2 
DIV X
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'
el = es un operador de asignacion
var es una varieble global (estan prohibidas)
el + es un operador aritmetico o de concatenacion*/
function mostrar()
{
	//variable local vamos a utilizar esta
	let nombre;
nombre = prompt("ingrese su nombre");
	alert("su nombre es: " + nombre);
}