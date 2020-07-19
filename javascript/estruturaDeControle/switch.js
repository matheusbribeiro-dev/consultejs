const imprimirResultado = function (nota) {
  switch(Math.floor(nota)) {
    case 10://Em outras palavras aqui ele está dizendo que tanto no caso 10 quanto no 9, será o mesmo resultado.
    case 9:
      console.log('Quadro de honra')
      break//sempre colocar para que ao executar os códigos acima ele saia da estrutura switch.
    case 8: case 7:
      console.log('Aprovado')
      break
    case 6: case 5: case 4:
      console.log('Recuperação')
      break
    case 3: case 2: case 1: case 0:
      console.log('Reprovado')
      break
    default:
      console.log('Nota inválida')
  }
  console.log('Fim!')
}

imprimirResultado(10)
imprimirResultado(8.5)
imprimirResultado(6.40)
imprimirResultado(-1)