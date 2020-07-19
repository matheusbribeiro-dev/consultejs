const nome = 'Matheus';
const concatenacao = 'Olá ' + nome + '!';

//criando template: Usa-se ' ` '(crase) no começo e no fim.
//template string considera e exibe todos os espaços
const template = `Olá ${nome}!`;

console.log(concatenacao);
console.log(template);

//Template com expressões:
console.log(`1 + 1 = ${1 + 1}`); // ${} -> interpolador.

//Exemplo de ultilização:
const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')}`);