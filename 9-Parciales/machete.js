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
}while(isNaN(pedido) || pedido < 10 || pedido > 20);

do
{
    cantidadMaterias = prompt("Ingrese cantidad de materias");
    cantidadMaterias = parseInt(cantidadMaterias);
}while((isNaN(cantidadMaterias)) || cantidadMaterias < 0 || cantidadMaterias > 8);

//validacion de producto con do
do  
{
    sexo = prompt("Ingrese sexo");
    sexo = sexo.toUpperCase();
    sexo = sexo.toLowerCase();
}while(sexo != 'm' && sexo != 'f');

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
acumulador = acumulador + cantidadIngresada;
acumulador += cantidadIngresada;

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


//NUMERO MAXIMO Y MINIMO (JUNTOS)
if(bandera == 0){
    numeroMin = numero;
    numeroMax = numero;
    bandera = 1;
}else if(numero > numeroMax){
    numeroMax = numero;
}else if(numero < numeroMin){
    numeroMin = numero;
}
//NUMERO MAXIMO
if(bandera == 0) {
    numeroMax = numero;
    bandera = 1;
}else if(numero > numeroMax){
    numeroMax = numero;
}

//NUMERO MINIMO
if(bandera == 0){
    numeroMin = numero;
    bandera = 1;
}else if(numero < numeroMin){
    numeroMin = numero;
}

//COMPARAR MAXIMO
if(a > b && a > c){
    mayor = "a";
}else if(b > a && b > c){
    mayor = "b";
} else{
    mayor = "c";
}
// COMPARAR MINIMO
if(a < b && a < c){
    menor = "a";
}else if(b < a && b < c){
    menor = "b";
} else{
    menor = "c";
}


// ECUACIONES.
suma = precio * cantidad;
precioTotal = precioTotal + suma;
promedio = suma / contador;