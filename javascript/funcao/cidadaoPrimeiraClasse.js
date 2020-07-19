// Função em JS é First-Class Object (Citizens)
//Higher-order  function

//Criando função de forma literal:
function fun1(/*Parâmetros*/) {

}

//Armazenando em uma variável
const fun2 = function(/*Parâmetros*/) {

}

//Armazenando em um array
const array = [function(a, b) {return a + b}, fun1, fun2]
console.log(array[0](2, 3))

//Armazenando em um atributo de um objeto (mesmo que este não exista, podemos atribuir dinâmicamente)
const obj = {}
obj.falar = function() {return 'Funfou'}

console.log(obj.falar())

//Passando função como parametro
function run(fun) {
  fun()
}

run(function() {console.log('Executando...')})

//Uma função pode retornar ou conter outra função
function soma(a, b) {
  return function(c) {
    console.log(a + b + c)
  }
}

soma(2, 3)(2)