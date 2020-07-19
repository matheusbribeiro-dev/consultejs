function NotaAluno(nota) {
  let mult5 = nota

  if(nota >= 40) {
    while(mult5%5 !== 0){
      mult5++
    }

    let diferenca = mult5 - nota

    if(diferenca < 3){
      let notafinal = mult5
      return notafinal

    }else {
      console.log('Não menor que 3')
    }

  } else {
    return 'Reprovado'
  }
  
}

console.log(NotaAluno(84))

console.log(NotaAluno(29))