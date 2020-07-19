const soma = function (x, y) {
  return x + y
}/*Perceba que a função está sendo atribuída a uma constante que portanto não é o nome da função*/

const imprimirResultado = function (a, b, operacao = soma) {
  console.log(operacao(a, b))
}//Novamente uma function atribuída a uma constante.

imprimirResultado(3, 4)
//Ou até mesmo:
imprimirResultado(3, 4, function (x, y) {
  return y - x
})

//with Arrow function
imprimirResultado(3, 4, (x, y) =>  x * y)

const pessoa = {
  falar: function () {
    console.log('Opá')
  }
}

pessoa.falar()