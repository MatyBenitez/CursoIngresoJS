/*Benitez Matias
DIV X
IF 10*/
function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let min = 1;
	let max = 10;
	let nota;
	nota = Math.round(Math.random() * (max - min) + min);

	if(nota ==10 && nota ==9 )
	{
		alert (nota +  " EXELENTE")
	};
	if(nota >4 && nota <9){
		alert(nota + " Aprobo")
	}
	if (nota<4){
		alert(nota + " Vamos,la proxima se puede")
	}


}//FIN DE LA FUNCIÓN