const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c }//Não é mais necessário esta duplicidade(ECS15)
const obj2 = { a, b, c }//Assim ele já assume a chave e o valor com mesmo nome
console.log(obj1, obj2)

const nomeAttr = 'Nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

//OU

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

//Funções
const obj5 = {
  funcao1: function () {
    //..
  },
  //ou(ECS15)
  funcao2(){
    //...
  }
}