var numero = 1;
{
  let numero = 2;//Com o let a variável tem escopo também de bloco
  console.log('Dentro: ', numero);
}

console.log('Fora: ', numero);