//Armazenando uma função em uma variável:
//Função sem nome:
const ImprimirSoma = function (a, b) {
  console.log(`Variável armazenando função: ${a + b}`);
}

ImprimirSoma(2, 3);

//Armazenando uma função arrow em uma variável
const soma = (a, b) => {/*Forma reduzida de usar função. O '=>' subtitiu a palavra 'function'*/
  return a + b;
}

console.log(`Variável armazenando função arrow: ${soma(2, 3)}`);

//Retorno implícito: (recurso do arrow funtion versão ES5)
const subtracao = (a, b) => a - b;
console.log(`Retorno implícito(função arrow menor ainda): ${subtracao(5, 2)}`);