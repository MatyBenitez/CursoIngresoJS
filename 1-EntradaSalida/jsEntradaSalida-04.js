/* 
Benitez Matias
DIV X
E/S 4
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let nombre
	nombre = prompt("ingrese un nombre");
	document.getElementById("txtIdNombre").value = nombre;
}

