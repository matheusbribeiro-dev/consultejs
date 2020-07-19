//Object.preventExtensions -> impede que se adicione atributos ao objeto
//Ex:
const produto = Object.preventExtensions({
  nome: 'Qualquer',
  preco: 1.99,
  tag: 'promoção'
})
console.log(`Extensível: ${Object.isExtensible(produto)}`)//Objeto.éExtensível(objeto)

//Testes - Ao declarar um obj com o Object.preventExtensions
produto.nome = 'Borracha'//Pode-se alterar atributos
produto.descricao = 'Escolar'//NÃO SE PODE ADICIONAR
delete produto.tag//Pode-se deletar

console.log(produto)

//Object.seal -> impede que se adicione atributos ao objeto e que se delete
const pessoa = Object.seal({
  nome: 'Matheus',
  idade: 19
})
console.log(`Selado: ${Object.isSealed(pessoa)}`)

//Testes - Ao declarar um obj com o Object.preventExtensions
pessoa.nome = 'Rafa'//Pode-se alterar atributos
pessoa.nascimento = 2//NÃO SE PODE ADICIONAR
delete pessoa.idade//NÃO SE PODE DELETAR

console.log(pessoa)

//Object.freeze = selado + valores constantes
const obj = Object.freeze({
  attr: 'valor',
  attr2: 'valor2'
})

//Testes - Ao declarar um obj com o Object.preventExtensions
obj.attr = 'Rafa'//NÃO SE PODE ALTERAR
obj.nascimento = 2//NÃO SE PODE ADICIONAR
delete pessoa.idade//NÃO SE PODE DELETAR
