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
/*function mostrar()
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
}*/

/*Práctica de Parcial:


Realizar el algoritmo que permita ingresar los datos de una compra de ingredientes para preparar comida al por mayor ,
hasta que el cliente quiera:
peso (entre 10 y 1000)en kilo,
precio por kilo (más de cero ),
tipo validar("v";"a";"m")(vegetal,animal o mezcla )
Si compro más de 100 kilos en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 300 kilos en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento
b) el importe total a pagar con descuento(solo si corresponde)
c) Informar el tipo de alimento más caro.
d) El promedio de precio por kilo en total.*/
function mostrar()
{
    let pesoKilo;
    let precioKilo;
    let respuesta;
    let flag1; //para descuento
    let descuento;
    let totalBruto;
    let totalDescuento;
    let tipo;
    let pesoTotal;
    let precioTotal;
    let flag2; //alimento mas caro
    let tipoCaro;
    let precioCaro;
    let promedioKilo;

    respuesta = 's';
    flag1 = 0;
    descuento = 0;
    flag2 = 0;
    pesoKilo = 0;
    precioKilo = 0;
    pesoTotal = 0;
    precioTotal = 0;
    promedioKilo = 0;

    while(respuesta == 's')
    {
        pesoKilo = prompt("ingrese el peso en Kg");
        pesoKilo = parseFloat(pesoKilo);

        while((isNaN(pesoKilo)) || pesoKilo < 10 || pesoKilo > 1000)
        {
            pesoKilo = prompt("vuelva a ingresar el peso en Kg entre 10 y 1000 Kg");
            pesoKilo = parseFloat(pesoKilo);
            pesoTotal = pesoTotal + pesoKilo;
        }

        precioKilo = prompt("ingrese el precio por Kg");
        precioKilo = parseFloat(precioKilo);

        while((isNaN(precioKilo)) || precioKilo < 0)
        {
            precioKilo = prompt("ingrese un precio valido");
            precioKilo = parseFloat(precioKilo);
            precioTotal = precioTotal + precioKilo;
        }

        totalBruto = pesoTotal * precioKilo;

        tipo = prompt("ingrese un ingrediente: 'v' 'a' 'm' vegetal,animal o mezcla )");
        //tipo = tipo.toLowerCase;

        while(tipo == 'v' && tipo == 'a' && tipo == 'm')
        {
            tipo = prompt("Error, ingrese bien un ingrediente: 'v' 'a' 'm' vegetal,animal o mezcla )");
            tipo = tipo.toLowerCase;
        }
        
        if(flag1 == 0)
        {
            if(pesoKilo > 100)
            {
              descuento = 0.15;
              flag1 = 1;
            }
            else
            {
                if(pesoKilo > 300)
                {
                    descuento = 0.25;
                    flag1 = 1;
                }
            }
        }

        if(flag2 == 0)
        {
            tipoCaro = tipo;
            precioCaro = precioKilo;
            flag2 = 1;
        }
        else
        {
            if(precioKilo > precioCaro)
            {
                tipoCaro = tipo;
                precioCaro = precioKilo;
            }
        }

        respuesta = prompt("¿Quiere seguir ingresando datos? s/n");
        respuesta = respuesta.toLowerCase();
    }
    console.log(tipoCaro);
    promedioKilo = precioTotal / pesoTotal;

    document.write("el imposte total bruto a pagar es de: " + totalBruto);
    document.write("<br>El alimento mas caro es: " + tipoCaro + "con un precio de: " + precioCaro + " por Kg");
    document.write("<br>El promedio total por Kg es de: " + promedioKilo);

    if(flag1 = 1)
    {
        totalDescuento = totalBruto * descuento;
        document.write("<br>Su importe total con descuento es de: " + totalDescuento);
    }
}