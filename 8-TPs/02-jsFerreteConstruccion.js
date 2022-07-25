/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
Benitez Matias
TP 2 
DIV X
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let perimetro;

    largo = document.getElementById("txtIdLargo").value;
    largo = parseFloat(largo);
    ancho = document.getElementById("txtIdAncho").value;
    ancho = parseFloat(ancho);
    perimetro = (largo + ancho) * 2;

    alert("la cantidad de alambre que debe comprar es: " + (perimetro * 3).toFixed(2) + " Metros");
}
function Circulo () 
{
	let radio;
    let alambre;

    radio = document.getElementById("txtIdRadio").value;
    radio = parseFloat(radio);
    alambre = ((radio * 2) * Math.PI) * 3;

    alert("la cantidad de alambre que debe comprar es: " + alambre.toFixed(2) + Metros);
}
function Materiales () 
{
    let largo;
    let ancho;
    let superficie;
    let bolsaCemento;
    let bolsaCal;

    largo = document.getElementById("txtIdLargo").value;
    largo = parseFloat(largo);
    ancho = document.getElementById("txtIdAncho").value;
    ancho = parseFloat(ancho);

    superficie = largo * ancho;
    bolsaCemento = superficie * 2;
    bolsaCal = superficie * 3;

    alert("se necesitan " + bolsaCemento + " bolsas de cemento y " + bolsaCal + " bolsas de cal para cubrir la totalidad del terreno el cual es: " + superficie + " Mt2")
}