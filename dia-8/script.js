///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ESCREVA SEU CÓDIGO AQUI!!
function calculadora(numero1, numero2, operador){
  let resultado 
  let num1 = perseInt(numero1)
  let num2 = perseInt(numero2)
  switch (operador) {
    case "+":
    resultado = num1 + num2
      break;
    case "-":
    resultado = num1 - num2
      break;
    case "*":
    resultado = num1 * num2
      break;
    case "/":
    resultado = num1 / num2
      break;
    case "e":
    let contador = 1
    resultado = num1 * num2
    while(contador < num2 - 1){
      resultado = resultado * num1
      contador++
    }
    break;
  }
  
  if (resultado == undefined || resultado > 1000000)
  resultado = "ERRO"

  return resultado
  
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let visor = document.getElementById("visor");

function adicionar(tecla) {
  visor.value = visor.value + tecla;
}

function limpezatotal() {
  visor.value = "";
}

function calcular() {
  let numeros = visor.value.split(/[^0-9]/)
  let operadores = visor.value.split(/[0-9]/)
  let operador
  operadores.forEach(x => {
    if (x != "")
      operador = x
  });

  visor.value = Calculadora(numeros[0], numeros[1], operador)
}