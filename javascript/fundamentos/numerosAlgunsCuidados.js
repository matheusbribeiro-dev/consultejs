console.log(7 / 0);//O javascript tem um tipo chamado 'infinity' para situações como esta.


console.log("10" / 2);/*Em outras linguagens isso daria erro,
  porém com JS ele verifica a possibilidade de converter o
  Valor interno da string para number:
*/
console.log('3' + 2);//neste caso ele só concatena, pois com string o '+' tem sentido de concatenação.

console.log("show" *2);//Em algumas linguagens a saída seria 'show' duas vezes, em js retorna somente NaN(not a number).

console.log(0.1 + 0.7);/*O javascript usa uma determinada especificação para trabalhar com cálculos de ponto flutuante
que pode gerar pequenas imprecisões, isso acontece pq ele presa por uma resposta rápida.*/

console.log((10.325).toFixed(2));//É possível usar uma função diretamente em um valor desde que este valor esteja dentro de parênteses.