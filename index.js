function converter() {
  var valorDolar = document.getElementById('valorDolar').value
  var resultado = document.getElementById('resultado')
  var cotacaoDoDolar = 5.32;
  var valorEmReal = valorDolar * cotacaoDoDolar
  resultado.innerHTML = '<p>'+ "O Resultado é " + valorEmReal.toFixed(2) + '</p>'
}
