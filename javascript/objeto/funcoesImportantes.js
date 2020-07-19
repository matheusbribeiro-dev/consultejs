//Funções importantes de Object
const pessoa = {
  nome: 'Rebeca',
  idade: 2,
  peso: 13
}

console.log(Object.keys(pessoa))//Pega todas as chaves do objeto
console.log(Object.values(pessoa))//Pega todas os valores do objeto
console.log(Object.entries(pessoa))//Retorna o objeto em arrays e sub Arrays

Object.entries(pessoa).forEach(([chave, valor]) => {//Percorrendo o Array gerado pelo object.entries com o forEach
  console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {//Atribuir e manipular propriedades.  primeiro o objeto cujo quero atribuir uma propriedade, nome da propriedade e por fim o objeto
//Objeto onde posso definir características dessa propriedade.
  enumerable: true,//Será listado ? sim.
  writable: false,//Poderá ser alterada ? não.
  value: '02/07/2000'//Valor da propriedade
})

console.log(pessoa.dataNascimento)

//Object.assign (ECMAScript2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }

const obj = Object.assign(dest, o1, o2)//Objeto resultante. Atribui os outros objetos ao passado no primeiro parâmetro