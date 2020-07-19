const escola = 'Cod3r';

console.log("----------------");
console.log(escola);
console.log("----------------");

console.log(escola.charAt(4));//retornará a letra presente no índice 4

console.log(escola.charCodeAt(3));//retornará o valor na tabela ASCII da letra presente no índice 3

console.log(escola.indexOf('3'));//retorna em qual índice o valor passado está dentro da string.

console.log(escola.substring(1));//irá imprimir a partir do índice 1

console.log(escola.substring(0, 3));//irá imprimir do índice 0 até o 3(sem incluí-lo).

//Concatenação:
console.log('Escola: '.concat(escola).concat("!"));//OU:
console.log('Escola: ' + escola + "!");

/*Replace:
  O repalce substitui caracteres :
  O primeiro valor passado é qual caractere vai ser substituído 
  e o segundo é o valor que vai tomar o lugar
*/
console.log(escola.replace(3,'e'));
console.log(escola.replace(/\w/g, 'e'))// /\w/g -> faz com que substitua todas as letras pelo valor passado.

/*
  Transformar uma string separada por vírgulas em um array:
*/
console.log('Ana,Pedro,Maria'.split(','));//usando a vígula como ponto de separação na construção do array.