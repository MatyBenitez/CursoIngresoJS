/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
Benitez Matias
TP 3
DIV X
*/
function FahrenheitCentigrados () 
{
	let temp;
    let tempConvert;

    temp = document.getElementById("txtIdTemperatura").value;
    temp = parseFloat(temp);
    tempConvert = (temp - 32) * 5/9

    alert("la temperatura es de: " + tempConvert.toFixed(3) + "°C");
}

function CentigradosFahrenheit () 
{
    let temp;
    let tempConvert;

    temp = document.getElementById("txtIdTemperatura").value;
    temp = parseFloat(temp);
    tempConvert = (temp * 9/5) + 32

    alert("la temperatura es de: " + tempConvert.toFixed(3) + "°F");
}
