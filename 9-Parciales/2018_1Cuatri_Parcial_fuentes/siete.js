/*
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
        
        while(nota < 0)
        {
            nota = 
        }
    }
    promedio = nota / i;
}