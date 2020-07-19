//Uma função factory é uma função que retorna um objeto.
//Factory simples:

function criarPessoa() {
  return {
    nome: 'Ana',
    sobrenome: 'Souza',
    idade: 17
  }
}

console.log(criarPessoa())
