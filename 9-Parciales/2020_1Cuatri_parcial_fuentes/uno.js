/*
Benitez Matias
DIV X
Practica Parcial 28/7
Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
-el nombre del producto 
-el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
-el precio (validar entre 100 y 300),
-la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
-el tipo de inflamable("ignífugo", "combustible", "explosivo" ) 
-y la Marca.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) El tipo de inflamable con más cantidad de unidades en total de la compra
c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
d) la marca y tipo del más caro de los productos
*/
function mostrar()
{   let nombre;
	let tipoProducto;
	let precioProducto;
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
		nombre = prompt("Ingrese el nombre del Producto");
		tipoProducto = prompt("Ingrese el tipo de producto: A para: ALCOHOL, I para: IAC o Q para: QUAT");
		tipoProducto = tipoProducto.toUpperCase();

		while(tipoProducto != 'A' && tipoProducto != 'I' && tipoProducto != 'Q')
		{
			tipoProducto = prompt("Error. Ingrese el tipo de producto correctamente: A para: ALCOHOL, I para: IAC o Q para: QUAT");
			tipoProducto = tipoProducto.toUpperCase();
		}

		precioProducto = prompt("Ingrese el precio del producto entre 100 y 300");
		precioProducto = parseFloat(precioProducto);

		while(!(precioProducto > 99 && precioProducto < 301))
		{
			precioProducto = prompt("Error. Ingrese el precio del producto correctamente, entre 100 y 300");
			precioProducto = parseFloat(precioProducto);
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

		switch(tipoProducto)
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
	
	
}