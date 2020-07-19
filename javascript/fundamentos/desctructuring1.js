//Novo recurso do ES2015

const pessoa = {
  nome: 'Ana',
  idade: 5,
  endereco: {
    logradouro: 'Rua ABC',
    numero: 123
  }
}

//Retirando atributos de um objeto.
const {nome, idade} = pessoa
console.log(nome, idade)

const {endereco:{logradouro, numero}} = pessoa
console.log(logradouro, numero)

//OU(denominando uma variável pra receber o endereço de nome(n) e idade(i))
const {nome: n, idade: i} = pessoa
console.log(n, i)