function cardapio(codigo, qtd) {
  let valor
  switch (codigo) {
    case 100:
      console.log(`${qtd}x Cachorro quente`)
      valor = qtd * 3
      break;
    case 200:
      console.log(`${qtd}x Hambúrguer Simples`)
      valor = qtd * 4
      break
    case 300:
      console.log(`${qtd}x Cheeseburguer`)
      valor = qtd * 5.50
      break
    case 400:
      console.log(`${qtd}x Bauru`)
      valor = qtd * 7.50
      break
    case 500:
      console.log(`${qtd}x Refrigerante`)
      valor = qtd * 3.50
      break
    case 600:
      console.log(`${qtd}x Suco`)
      valor = qtd * 2.80
      break
    default:
      console.log('Produto não existente')
      break;
  }

  return console.log(`Valor a ser pago: R$ ${valor}`)
}

cardapio(100, 1)
cardapio(200, 2)
cardapio(300, 3)