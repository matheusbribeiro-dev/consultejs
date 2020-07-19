//let e const 
{
  var a = 1
  let b = 2
  console.log(b)
}
console.log(a)

//Template string
const produto = 'IPad'
console.log(`${produto} é caro`)

//Destructuring
const [l, e, ...tras] = 'teste'
console.log(l, e, tras)

const [x, y] = [1, 2]
console.log(x, y)

const {idade, nome} = {
  nome: 'Eu',
  idade: 19
}

console.log(nome, idade)