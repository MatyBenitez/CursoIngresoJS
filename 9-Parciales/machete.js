//ctrl + f2 para cambiar todas la variables de una
// += acumulador
// ++ suma de 1
// -- resta 1

//ingreso de datos por cantidad
for(i = 0; i < 5; i++)
{

}

//validacion de numero
do  
{
    pedido = prompt("Ingrese numero");
    pedido = parseFloat(pedido);
    pedido = parseInt(pedido);
}while(isNaN(pedido) == true || pedido > 10 || pedido < 20);

//validacion de producto con do
do  
{
    sexo = prompt("Ingrese sexo");
    sexo = sexo.toUpperCase();
    sexo = sexo.toLowerCase();
}while(isNaN(pedido) == false || sexo != 'm' && sexo != 'f');

//validacion de letra con while
producto = prompt("Ingrese el tipo de producto:");
producto = producto.toUpperCase();
producto = producto.toLowerCase();

while(producto != '' && producto != '' && producto != '')
{
    producto = prompt("Error. Ingrese el tipo de producto correctamente:");
    producto = tipoProducto.toUpperCase();
    producto = producto.toLowerCase();
}

//si queres seguir ingresando datos con while

respuesta = 's';

while(respuesta == 's')
{


    respuesta = prompt("¿Quiere seguir ingresando datos? s/n");
    respuesta = respuesta.toLowerCase();
}

//acumulador
acumulador = acumulador + cantidadIngresada

//contador
contador++

//flag
flag = 0;
if(flag == 0)
{
flag = 1;
}

switch(variable)
{
    case "ingrso":

    break;
}