/*O map serve para percorrer o array e retornar outro 'transformado' de acordo com critérios pré-estabelecidos*/
const nums = [1, 2, 3, 4, 5]

let resultado = nums.map(function(elemento) {//retornando um array dobro do recebido
  return elemento * 2
})//Parametros recebidos: elemento, seu índice e o array em si 

console.log(resultado)

const soma10 = elemento => elemento + 10
const triplo = elemento => elemento * 3
const paraDinheiro = elemento => `R$ ${parseFloat(elemento).toFixed(2).replace('.', ',')}`//replace serve pra substituir o primeiro parametro passado pelo segundo

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)//chamando uma cadeia de maps

console.log(resultado)