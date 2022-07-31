/*
Benitez Matias
DIV X
Practica Parcial 28/7
Debemos realizar la carga de una compra de 5(cinco) tipoCursadas de desinfección
de cada una debo obtener los siguientes datos:
-el nombre del tipoCursada 
-el tipo de tipoCursada (validar "ALCOHOL", "IAC" o "QUAT"),
-el precio (validar entre 100 y 300),
-la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
-el tipo de inflamable("ignífugo", "combustible", "explosivo" ) 
-y la Marca.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de tipoCursada
b) El tipo de inflamable con más cantidad de unidades en total de la compra
c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
d) la marca y tipo del más caro de los tipoCursadas
*/
/*function mostrar()
{   let nombre;
	let tipotipoCursada;
	let preciotipoCursada;
	let cantidadUnidades;
	let tipoInflamable;
	let marca;
	let i;
	let CantidadAlcohol;
	let contadorAlcohol;
	let CantidadIAC;
	let contadorIAC;
	let CantidadQuat;
	let contadorQuat;
	let promedioCantidad;

	i = 0;
	cantidadUnidades = 0;

	for(i = 1; i < 6; i++)
	{
		nombre = prompt("Ingrese el nombre del tipoCursada");
		tipotipoCursada = prompt("Ingrese el tipo de tipoCursada: A para: ALCOHOL, I para: IAC o Q para: QUAT");
		tipotipoCursada = tipotipoCursada.toUpperCase();

		while(tipotipoCursada != 'A' && tipotipoCursada != 'I' && tipotipoCursada != 'Q')
		{
			tipotipoCursada = prompt("Error. Ingrese el tipo de tipoCursada correctamente: A para: ALCOHOL, I para: IAC o Q para: QUAT");
			tipotipoCursada = tipotipoCursada.toUpperCase();
		}

		preciotipoCursada = prompt("Ingrese el precio del tipoCursada entre 100 y 300");
		preciotipoCursada = parseFloat(preciotipoCursada);

		while(!(preciotipoCursada > 99 && preciotipoCursada < 301))
		{
			preciotipoCursada = prompt("Error. Ingrese el precio del tipoCursada correctamente, entre 100 y 300");
			preciotipoCursada = parseFloat(preciotipoCursada);
		}

		cantidadUnidades = prompt("Ingrese la cantidad de unidades");
		cantidadUnidades = parseFloat(cantidadUnidades);

		while(!(cantidadUnidades > 0 && cantidadUnidades < 1001))
		{
			cantidadUnidades = prompt("Erorr. Ingrese la cantidad de unidades correctamente, entre 1 y 1000");
			cantidadUnidades = parseFloat(cantidadUnidades);
		}

		tipoInflamable = prompt("Ingrese el tipo de inflamable: I para: ignífugo, C para: combustible o E para: explosivo")
		tipoInflamable = tipoInflamable.toUpperCase();

		while(tipoInflamable != 'I' && tipoInflamable != 'C' && tipoInflamable != 'e')
		{
			tipoInflamable = prompt("Eror. Ingrese el tipo de inflamable correctamente: I para: ignífugo, C para: combustible o E para: explosivo")
			tipoInflamable = tipoInflamable.toUpperCase();
		}

		marca = prompt("Ingrese la marca");

		switch(tipotipoCursada)
		{
    	case 'A':
			CantidadAlcohol++
    	break;
		case 'I':
			CantidadIAC++
    	break;
		case 'C':
			CantidadQuat++
    	break;
		}

	}
	
	
}*/




/*
Benitez Matias
DIV X
Practica Parcial 28/7 parte2
Realizar el algoritmo que permita ingresar los datos de los alumnos de una 
division de la UTN FRA, los datos solicitados son:
-nombre
-Tipo curasada("libre";"presencial";"remota")
-cantidad de materias( mas de cero y menos de 8)
-Sexo ( femenino , masculino , no binario)
-Nota promedio (entre 0 y 10)
-edad (validar)
-se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que no sea masculino
b) El nombre del mas joven de los alumnos entre los que la dan libre
c) El promedio de nota por sexo
d) La edad y nombre del que cursa mas materias que no sean en forma remota
*/
function mostrar()
{
    let nombre;
	let tipoCursada;
	let cantidadMaterias;
	let sexo;
	let notaPromedio;
	let edad;
	let flagMejorPromedio;
	let mejorPromedioNM;
	let nombreMejorePromedio;
	let flagJoven;
	let nombreJoven;
	let edadJoven;
	let respuesta;
	let acumuladorM;
	let acumuladorF;
	let acumuladorNB;
	let promedioM;
	let promedioF;
	let promedioNB;
	let contM;
	let contF;
	let contNB;
	let edadMasMaterias;
	let nombreMasMaterias;
	let flagMasMaterias;
	let cantidadMasMaterias;

	respuesta = 's';
	flagMejorPromedio = 0;
	flagJoven = 0;
	edadJoven = 81;
	promedioM = 0;
	promedioF = 0;
	promedioNB = 0;
	contM = 0;
	contF = 0;
	contNB = 0;
	acumuladorM = 0;
	acumuladorF = 0;
	acumuladorNB = 0;
	edadMasMaterias = 0;
	flagMasMaterias = 0;
	cantidadMasMaterias = 0;

	while(respuesta == 's')
	{
		nombre = prompt("Ingrese su nombre");

		tipoCursada = prompt("Ingrese el tipo de tipoCursada: libre, presencial o remota");
		tipoCursada = tipoCursada.toLowerCase();
		
		while(tipoCursada != "libre" && tipoCursada != "presencial" && tipoCursada != "remota")
		{
			tipoCursada = prompt("Error. Ingrese el tipo de tipoCursada correctamente: libre, presencial o remota");
			tipoCursada = tipoCursada.toLowerCase();
		}

		do
		{
			cantidadMaterias = prompt("Ingrese cantidad de materias");
			cantidadMaterias = parseInt(cantidadMaterias);
		}while((isNaN(cantidadMaterias)) || cantidadMaterias < 0 || cantidadMaterias > 8);


		do  
		{
			sexo = prompt("Ingrese sexo: f/m/noBinario(nb)");
			sexo = sexo.toLowerCase();
		}while(sexo != 'm' && sexo != 'f' && sexo != "nb");

		do
		{
			notaPromedio = prompt("Ingrese su nota promedio");
			notaPromedio = parseInt(notaPromedio);
		}while((isNaN(notaPromedio)) || notaPromedio < 0 || notaPromedio > 10);

		do
		{
			edad = prompt("Ingrese su edad");
			edad = parseInt(edad);
		}while((isNaN(edad)) || edad < 17 || edad > 81);
		
		if(sexo != 'm')
		{
			if(flagMejorPromedio == 0)
			{
				mejorPromedioNM = notaPromedio;
				nombreMejorePromedio = nombre;
				flagMejorPromedio = 1;
			}
			else
			{
				if(notaPromedio > mejorPromedioNM)
				{
					mejorPromedioNM = notaPromedio;
					nombreMejorePromedio = nombre;
				}
			}
		}

		if(tipoCursada == "libre")
		{
			if(flagJoven == 0)
			{
			nombreJoven = nombre;
			edadJoven = edad;
			flagJoven = 1;
			}
			else
			{
				if(edad < edadJoven)
				{
					edadJoven = edad;
					nombreJoven = nombre;
				}
			}
		}

		switch(sexo)
		{
			case "m":
				acumuladorM	+= notaPromedio;
				contM++;
			break;
			case "f":
				acumuladorF += notaPromedio;
				contF++;
			break;
			case "nb":
				acumuladorNB += notaPromedio;
				contNB++;
			break;
		}

		if(tipoCursada != "remota")
		{
			if(flagMasMaterias == 0)
			{
				nombreMasMaterias = nombre;
				edadMasMaterias = edad;
				cantidadMasMaterias = cantidadMaterias;
			}
			else
			{
				if(cantidadMasMaterias < cantidadMaterias)
				{
					nombreMasMaterias = nombre;
					edadMasMaterias = edad;
				}
			}
		}

	    respuesta = prompt("¿Quiere seguir ingresando datos? s/n");
    	respuesta = respuesta.toLowerCase();
	}

	if(flagMejorPromedio == 1)
	{
		document.write("nombre del mejor promedio no masculino es: " + nombreMejorePromedio);
	}
	else
	{
		document.write("<br>mejor promedio no masculino no existe");
	}

	if(flagJoven == 1)
	{
	document.write("<br>nombre del mas joven de los alumnos entre los que la dan libre es: " + nombreJoven);
	}
	else
	{
		document.write("<br>el mas joven de los alumnos entre los que la dan libre no existe");
	}

	if(contM != 0)
	{
		promedioM = acumuladorM / contM;
	document.write("<br>El promedio de nota masculina es: " + promedioM);
	}
	else
	{
		document.write("<br>El promedio de nota masculina no existe");
	}

	if(contF != 0)
	{
		promedioF = acumuladorF / contF;
	document.write("<br>El promeio de nota femenina es: " + promedioF);
	}
	else
	{
		document.write("<br>El promeio de nota femenina no existe");
	}

	if(contNB != 0)
	{
		promedioNB = acumuladorNB / contNB;
	document.write("<br>El promedio de nota no binaria es: " + promedioNB);
	}
	else
	{
		document.write("<br>El promedio de nota no binaria no existe");
	}

	if(flagMasMaterias == 1)
	{
	document.write("<br>El alumno que cursa mas materias de forma que no es de forma remota es: " + nombreMasMaterias + " con: " + edadMasMaterias + " anios");
	}
	else
	{
		document.write("<br>El alumno que cursa mas materias de forma que no es de forma remota no existe");
	}







}