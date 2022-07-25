/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
Benitez Matias
TP 1
DIV X
*/
function Sumar () 
{
	let p1;
    let p2;
    let p3;
    let suma;

    p1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    p2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    p3 = parseInt(document.getElementById("txtIdPrecioTres").value);
    suma = p1 + p2 + p3;
    alert("la suma de los 3 precios es: " + suma);
}
function Promedio () 
{
    let p1;
    let p2;
    let p3;
    let Promedio;

    p1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    p2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    p3 = parseInt(document.getElementById("txtIdPrecioTres").value);
    Promedio = (p1 + p2 + p3) / 3;
    alert("su promedio es: " + Promedio.toFixed(2));
    // tofixed es para que se muestre sierto numero despues de la coma 

}
function PrecioFinal () 
{
    let p1;
    let p2;
    let p3;
    let pP;
    let PFinal;

    p1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    p2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    p3 = parseInt(document.getElementById("txtIdPrecioTres").value);
    pP =  p1 + p2 + p3;
    PFinal = pP + (pP * 0.21);
    alert("el precio final + iva es: " + PFinal.toFixed(2));
}