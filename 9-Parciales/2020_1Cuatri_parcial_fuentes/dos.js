/*
Realizar el algoritmo que permita ingresar los datos de una compra tipos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/
function mostrar()
{
  let respuesta;
  let tipo;
  let cantidaBolsas;
  let precioBolsa;
  let bolsasTotal;
  let totalBruto;
  let descuento;
  let tipoMasCantidad;
  let flagTipoMasCantidadBolsas;
  let masCantidadBolsas;
  let tipoMasCaro;
  let flagTipoMasCaro;
  let PrecioTipoCaro;


  respuesta = 's';
  bolsasTotal = 0;
  totalBruto = 0;
  descuento = 0;
  flagTipoMasCantidadBolsas = 0;
  flagTipoMasCaro = 0;

  while(respuesta == 's')
  {
    tipo = prompt("Ingrese el tipo de tipo de material: arena, cal, cemento");
    tipo = tipo.toLowerCase();

    while(tipo != "arena" && tipo != "cal" && tipo != "cemento")
    {
      tipo = prompt("Error. Ingrese el tipo de tipo de material correctamente:");
      tipo = tipo.toLowerCase();
    }

    cantidaBolsas = prompt("Ingrese la cantidad de bolsas que necesita");
    cantidaBolsas = parseInt(cantidaBolsas);

    while((isNaN(cantidaBolsas)) || cantidaBolsas < 0)
    {
      cantidaBolsas = prompt("Error. Ingrese la cantidad de bolsas correctamente");
      cantidaBolsas = parseInt(cantidaBolsas);
    }

    bolsasTotal += cantidaBolsas;

    precioBolsa = prompt("Ingrese el precio por bolsa");
    precioBolsa = parseFloat(precioBolsa);

    while((isNaN(precioBolsa)) || precioBolsa < 0)
    {
      precioBolsa = prompt("Error. Ingrese el precio por bolsa correctamente");
      precioBolsa = parseInt(precioBolsa);
    }

    totalBruto = bolsasTotal * precioBolsa;

    if(cantidaBolsas > 9)
    {
        descuento = 0.15;
    }
    else
    {
        if(cantidaBolsas > 29)
        {
            descuento = 0.25;
        }
    }

    if(flagTipoMasCantidadBolsas == 0)
    {
        tipoMasCantidad = tipo;
        masCantidadBolsas = cantidaBolsas;
        flagTipoMasCantidadBolsas = 1;
    }
    else
    {
      if(cantidaBolsas > masCantidadBolsas)
      {
        tipoMasCantidad = tipo;
        masCantidadBolsas = cantidaBolsas;
      }
    }

    if(flagTipoMasCaro == 0)
    {
        tipoMasCaro = tipo;
        PrecioTipoCaro = precioBolsa;
        flagTipoMasCaro = 1;
    }
    else
    {
      if(precioBolsa > PrecioTipoCaro)
      {
        tipoMasCaro = tipo;
        PrecioTipoCaro = precioBolsa;
      }
    }

    respuesta = prompt("¿Quiere seguir ingresando datos? s/n");
    respuesta = respuesta.toLowerCase();
  }

  document.write("El importe total a pagar , bruto sin descuento es: " + totalBruto);

  if(descuento > 0)
  {
    descuento = totalBruto - (totalBruto * descuento);
    document.write("<br>Su importe total con descuento es de: " + descuento);
  }

  document.write("<br>El tipo con mas cantidad de bolsas es es: " + tipoMasCantidad);
  document.write("<br>El tipo mas caro es: " + tipoMasCaro);
}
