let qualquer = 'Legal';

console.log(qualquer);
console.log(typeof qualquer); //typeof serve para exibir o tipo de dado armazenado na variável.

/*
  Em JS as variáveis tem tipos, porém a tipagem é dinâmica:
  Não se tipa a variável na declarção;
  Uma variável pode ter multiplos tipos.
*/
qualquer = 1.23;
console.log(qualquer);
console.log(typeof qualquer);

//Evite nomes genéricos e siglas: 
let valor = '';//Valor de quê ?
let numero = 1;//Qual número ? De onde ?
let pqp = false;//O que é 'pqp' ?

