const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2);

//Para verificar se é um número inteiro
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

//verificando um tipo
console.log(typeof peso2);

const avaliacao1 = 9.871;
const avaliacao2 = 2.763;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total /(peso1 + peso2);

console.log(media.toFixed(2));//.toFixed(valor) -> serve para determinar a quantidade de casas decimais dps da vírgula.

console.log(media.toString(2));//Converte o valor da variável passada para string. colocando o valor '2' ele converte para binário
