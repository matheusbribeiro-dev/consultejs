// pessoa -> endereçoDeMemoria -> {...}
const pessoa = {
  nome: 'João'
}
pessoa.nome = "Pedro"
console.log(pessoa)

//pessoa -> OutroEndereçoDeMemoria -> {...}
//pessoa = {nome: 'Ana'} -> Erro, pois é uma constante e não uma variável

Object.freeze(pessoa)//Congela o objeto e não se consegue alterá-lo

pessoa.nome = "Maria"
console.log(pessoa.nome)