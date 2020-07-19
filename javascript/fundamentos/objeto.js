/*
  O identificador não armazena os atributos do objeto
  ele apenas detém o endereço da memória no qual ele foi alocado.
  '{}' denota objeto.
*/
const prod1 = {};
//dando valores ao objeto de forma dinâmica:
prod1.nome = 'Celular Ultra';
prod1.preco = 4490.90;
prod1['Desconto-legal'] = 0.40 //Evitar espaços nos atributos

console.log(prod1);

//Outra forma de declarar/criar um objeto;
const prod2 = {
  nome: 'Camisa',
  preco: 79.90
}

console.log(prod2);

//exemplo teste:
const eu = {
  nome: 'Matheus',
  idade: 19,
  sexo: 'Masc'
}

console.log(`Nome: ${eu.nome}`);
console.log(`Idade: ${eu.idade}`);
console.log(`Sexo: ${eu.sexo}`);