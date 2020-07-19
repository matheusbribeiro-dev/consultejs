const valorPagoPlano = idade => {
  let pagar = 100
  if (idade < 10) {
    pagar += 80
  } else if (idade >= 10 && idade <= 30) {
    pagar += 50
  } else if(idade > 30 && idade <= 60) {
    pagar += 95
  } else if (idade > 60){
    pagar += 130
  }

  return console.log(`Valor a ser pago(${idade} anos): R$ ${pagar.toFixed(2)}`)
}

valorPagoPlano(7)
valorPagoPlano(10)
valorPagoPlano(25)
valorPagoPlano(50)
valorPagoPlano(65)