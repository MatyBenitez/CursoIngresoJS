/*
Benitez Matias
DIV X
TP 13
El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.
13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
*/

// a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
function NumerosPares () 
{
 	let numero;
    let contPares;
    let i; //variable de control para controlar el for;
    
    contPares = 0;
    numero = document.getElementById("txtIdNumero").value;
    numero = parseFloat(numero);

    for(i = 1; i <= numero; i++)
    {
        if(i % 2 == 0)
        {
            contPares++;
            console.log("<br> los numeros pares son: " + i);
        }
    }
    document.write("la cantidad de numeros pares es: " + contPares);
}

// b.	Se pedirán un número positivo y se mostrará la cantidad de números impares desde el número ingresado hasta el cero.
function NumerosImpares ()
{
    
}

// c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
function NumerosDivisibles ()
{
    let numero;
    let divCant;
    let i;

}

// d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
function VerificarPrimo()
{

}

// e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
function NumerosPrimos()
{

}