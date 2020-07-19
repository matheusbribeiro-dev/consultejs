console.log('---Teste---')
console.log(typeof String)//Function
console.log(typeof Array)//Function
console.log(typeof Object)//Function
console.log('----------\n')

String.prototype.reverse = function () {//Reverte uma função, podendo adicionar mais 'funções'
  return this.split('').reverse().join('')//Quebra a string e armazena num array.reverte a ordem.junta
}

console.log('Matheus'.reverse())

Array.prototype.first = function () {
  return this[0]
}

console.log([1, 2, 3, 4, 5].first())