/*O forEach percorre o array passando o elemento, seu índice e o próprio array(Usa-se com call-back).
Ao encontrar um novo elemento ele chama a call-back*/

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

//Com function
console.log('Function')
aprovados.forEach(function (nome, indice) {
  console.log(`${indice + 1}. ${nome}`)
})

//Com ArrowFunction
console.log('\nArrowFunction')
aprovados.forEach((nome, indice) => console.log(`${indice + 1}. ${nome}`))