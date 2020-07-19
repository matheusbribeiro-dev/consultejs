//Formas de se chamar uma função
function getPreco(imposto = 0, moeda = 'R$') {
  return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
  nome: 'Notebook',
  preco: 4589,
  desc: 0.15,
  getPreco
}

console.log(getPreco())//NaN
console.log(produto.getPreco())

//Call:
const carro = {
  preco: 49990,
  desc: 0.20
}

console.log(`Carro(call): ${getPreco.call(carro)}`)
//Apply:
console.log(`Carro(apply): ${getPreco.apply(carro)}`)

//Deu mesmo resultado, então vamos entender as diferenças
//Call:
console.log(`Carro(call): ${getPreco.call(carro, 0.17, '$')}`) //Com call vc passará os parâmetros da função(Não obrigatoriamente)

//Apply:
console.log(`Carro(apply): ${getPreco.apply(carro, [0.17, '$'])}`)//Mesmo que o call, porém os parâmetros serão passados por array