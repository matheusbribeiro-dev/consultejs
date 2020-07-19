function mostraDinheiro(valor) {
  return console.log(`R$ ${valor.toFixed(2)}`)//toFixed reduz casas decimais
}

mostraDinheiro(0.30000000000000004)