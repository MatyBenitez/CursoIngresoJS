/*Benitez Matias
DIV X
IF 7*/
/*function mostrar()
{
	//tomo la edad  
	let edad;
	let esCivil;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	esCivil = document.getElementById("estadoCivil").value;

	if(edad < 18)
	{
		if(esCivil != "Soltero")
		{
			alert("Es muy pequeño para NO ser soltero");
		}
	}
}//FIN DE LA FUNCIÓN*/

/*
Benitez Matias 
DIV X
Sabados ejer3
Si es menor de 13 , mostrar el mensaje “feliz día”.
Si es adolescente el mensaje es “usted es adolescente”
Si tiene 17 años además mostrar el mensaje “último año!!!”
Si es mayor de edad mostrar el mensaje “tenes edad de laburar”.
Si tiene 33 años , además mostrar el mensaje “como cristo”
Si tiene más de 60 años, además mostrar el mensaje “A jubilarse”.
Si tiene 88, además mostrar el mensaje “lindo número''
Si la edad es par , además mostrar , “sos par!!”.*/

function mostrar()
{
	let edad;
	let mensaje;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

// console.log(resto); es para mostrar en consola

	if(edad < 14)
	{
		mensaje = "feliz día";
	}
	else
	{
		if(edad < 18)
		{
			mensaje = "usted es adolescente ";
		}
		if(edad == 17)
		{
			mensaje = mensaje + "ultimo año!!!";
		}
		else
		{
			if(edad > 17)
			{
				mensaje = "tenes edad de laburar ";
			}
			if(edad == 33)
			{
				mensaje = mensaje + "como cristo ";
			}
			else
			{
				if(edad > 59)
				{
					mensaje = "a jubilarse ";
				}
				if(edad == 88)
				{
					mensaje = mensaje + "lindo numero ";
				}
			}
		}
	}
	if((edad % 2) == 0)
	{
		mensaje = (mensaje + "sos par");
	}
	alert(mensaje);
}