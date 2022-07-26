/*
Benitez Matias
DIV X
Parcial 7
Enunciado:
Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
*/
function mostrar()
{
    let nota;
    let sexo;
    let i;
    let promedio;
    let notaTotal;
    let notaBaja;
    let flag1; //nota mas baja
    let sexoNotaBaja;
    let cantVarones; // contador para saber cuantos varones tienen esa nota

    flag1 = 0;
    cantVarones = 0;
    notaTotal = 0;

    for(i = 0; i < 5; i++)
    {
        do
        {
            nota = prompt("ingrese su nota");
            nota = parseFloat(nota);
        }while(isNaN(nota) || nota < 0 || nota > 10);

        do
        {
            sexo = prompt("ingrese su sexo. f/m");
            sexo = sexo.toLowerCase();
        }while(sexo != 'f' && sexo != 'm');

        notaTotal = notaTotal + nota;

        if(flag1 == 0)
        {
            notaBaja = nota;
            sexoNotaBaja = sexo;
            flagNotaBaja = 1;
        }
        else
        { 
            if(nota < notaBaja)
            {
                notaBaja = nota;
                sexoNotaBaja = sexo;
            }
        }
        if(sexo == 'm' && nota >= 6)
        {
            cantVarones++;
        }
    }

    promedio = notaTotal / 5;

    alert("el promedio total es las notas es de: " + promedio);
    alert("la nota mas baja es: " + notaBaja + " y es: " + sexoNotaBaja);
    alert("la cantidad de varones con la nota mayor a 6 son: " + cantVarones);
}