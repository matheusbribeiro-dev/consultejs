//ES8: Object.values/Object.entries
const obj = {
  a: 1,
  b: 2,
  c:3
}
console.log(Object.values(obj))//Pega os valores no objeto e transforma em um array
console.log(Object.entries(obj))//Pega os valores no objeto e transforma em um array de arrays, com chave e valor

//Melhorias na notação literal

const nome = 'Carla'
const pessoa = {//Um objeto a partir alguma variével ou constante já existente;
  nome,//O mesmo que nome: nome;
  ola () {//Função, não precisa mais colocar 'function' na frente(dentro de um objeto);
    console.log(`Olá ${nome}`)
  }
}
pessoa.ola()//Olá Carla

//Class
class Animal {}
class cachorro extends Animal {
  falar() {
    return 'Au au kk'
  }
}

const cachorro2 = new cachorro().falar()//instanciando um objeto a patir da classe
console.log(cachorro2)