//Se o usa para agrupar como em parâmetros é rest, se o usa para espalhamento é spreed
//Rest, parametros em uma função
function total(...numeros) {//Recebe uma quantidade ilimitada de parâmetros e transforma em um array
  let total  = numeros.reduce((cont, atual) => cont + atual)
  return total
}
console.log(`Soma: ${total(2, 3, 4, 5)}`)

//Spreed com objeto por exemplo
const funcionario = {
  nome: 'Maria',
  salario: 12348.99
}
const clone = {
  ativo: true,
  ...funcionario//Pegando os atributos em funcionario, copiando e os espalhando em clone
}

console.log(clone)

//Spreed com array por exemplo
const grupoA = ['João', 'Pedro', 'Glória']
const grupoFinal = ['Maria', 'Rafaela', ...grupoA]//Pegando os elementos no array 'grupoA', copiando e os espalhando em grupoFinal
console.log(grupoFinal)