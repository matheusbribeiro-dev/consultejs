function valorAserPago(mes, anuidade) {
  let cincoPcento = anuidade * 0.05
  let pagar = anuidade + cincoPcento
  let valorPagar

  if (mes > 1){
    for (let i = 0; i < mes; i++) {
      valorPagar = pagar + cincoPcento
    }
  }else {
    valorPagar = anuidade
  }

  return console.log(`Valor a ser pago(mês ${mes}): R$ ${valorPagar.toFixed(2)}`)
}

valorAserPago(1, 2000)
valorAserPago(4, 2000)