//Evitar criar variáveis com var, pq ela vai para o escopo global.
{
  {
    {
      {
        var sera = 'sera?'
        console.log(sera);
      }
    }
  }
}

console.log(sera);//sim tb imprimirá, pois usando o var a variável se torna de escopo global(com excessão das funções)

function teste() {
  var local = 123;
  console.log(local); //sim, vai imprimir
}

teste();
console.log(local);//Não, dará erro, pois(tratando de função) qualquer variável só é global dentro da função.
