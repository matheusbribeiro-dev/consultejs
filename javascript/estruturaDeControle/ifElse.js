const imprimirResultado = function (nota) {

  if(typeof nota === 'number') {
    if(nota >= 7) {
      console.log('Aprovado')
    } else {
      console.log('Reprovado')
    }
  } else {
    console.log(`'${nota}' Não é um number`)
  }
}

//imprimirResultado(5)
//imprimirResultado(8)
imprimirResultado('Teste')
