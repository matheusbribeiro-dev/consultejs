//Usando notação literal
const obj1 = {}
console.log(obj1)

//Object in Js
console.log(typeof Object, typeof new Object)// Object = function, new Object = Objeto
const obj2 = new Object
console.log(obj2)

//Funções construtoras
function produto(nome, preco, desc) {
  this.nome = nome
  this.getPrecoComDesconto = () => {
    return preco * (1 - desc)
  }
}
const p1 = new produto('Caneta', 7.99, 0.15)
const p2 = new produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto().toFixed(2))
console.log(p2.getPrecoComDesconto().toFixed(2))

//Função Factory(função para fabricar 'coisas')
function criarFuncionario(nome, salarioBase, faltas) {
  return {
    nome,
    salarioBase,
    faltas,
    getSalario() {
      return (salarioBase / 30) * (30 - faltas)
    }
  }
}
const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

//Object.create
const filha = Object.create(null)
filha.nome = 'Julia'
console.log(filha)

//Exemplo de uma função famosa que retorna um objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)