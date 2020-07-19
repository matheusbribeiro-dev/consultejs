/*Testes antes do exemplo da aula:
  const a = {
    name: 'teste'
  }

  console.log(a); ->exibirá: {name: 'teste'}

  fazendo testes:

  const b = a; ->Atribuição por referência:
    'b' está recebendo na vdd
    o mesmo endereço para o qual o 'a' aponta,
    ou seja a constante 'a' e a constante 'b'
    estão apontando para o mesmo endereço na memória.

  Se fizermos isso:

  b.name = 'opa'; -> No 'a' tb ocorrerá alteração ?
  console.log(`Sim, muda: ${a.name}`);

  Código da aula:
*/
let valor;// não inicializada.

console.log(valor);//retornará: undefined

valor = null;/*Quando uma variável recebe ou tem valor 'null' quer dizer que na verdade
ela não está armazenando valor algum e nem apontando para um endereço na memória.
*/
console.log(valor);//retornará 'null' que diferente de undefined.