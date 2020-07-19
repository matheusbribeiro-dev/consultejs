//Arrow function
const soma = (a, b) => a + b
console.log(`Arrow function: ${soma(2, 3)}\n`)

//Arrow function (this)
const lexico1 = () =>  console.log(this === exports)
const lexico2 = lexico1.bind({})//Usando o bind pra amarrar o this a um {} o que não funciona com arrow function
lexico1()
lexico2()

//Parâmetros default 
function log(texto = 'Node') {
  console.log(`\nParâmetros default: ${texto}`)
}

log()//Sem params
log('JavaScript')

//Operedor rest
function total(...numeros) {//Recebe uma quantidade ilimitada de parâmetros e transforma em um array
  let total  = numeros.reduce((cont, atual) => cont + atual)
  return total
}
console.log(`Soma: ${total(2, 3, 4, 5)}`)