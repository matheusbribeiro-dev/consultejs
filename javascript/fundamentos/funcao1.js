//Função sem retorno:
function ImprimirSoma(a, b) {
  console.log(a + b);
}

ImprimirSoma(2, 3);

/*ImprimirSoma(4); ->sim, vc pode passar um só valor mesmo que tenha mais de um parâmetro,
porém, ele somará este um valor com o outro que no caso será 'undefined' e isso resultará num NaN
(not a number).
*/

//função com retorno:
function Soma(a, b = 1) {
  return a + b;
}

console.log(`Função com retorno: ${Soma(2, 3)}`);
/*
  Caso eu passe só um valor, ele somará com 0 já que foi o valor que defini
  como padrão para o 'b'
*/
console.log(`Passando só um valor(somando com valor padrão de b): ${Soma(2)}`);