//software de marcenaria - cadeira e sofá

class Cadeira {
  constructor(qtdPernas, gira, cor) {
    this.qtdPernas = qtdPernas
    this.gira = gira
    this.cor = cor
  }

  girarCadeira() {
    return this.gira ? "Sim, gira" : "Não, não gira"
  }
}

const cadeira = new Cadeira(4, false, 'branca')
const cadeiraPc = new Cadeira(1, true, 'preta')

// console.log()

class Sofa {
  constructor(qtdLugares, reclina, cor) {
    this.qtdLugares = qtdLugares
    this.reclina = reclina
    this.cor = cor
  }

  reclinavel() {
    return this.reclina ? "Sim, é reclinável" : "Não, não é reclinável"
  }
}

const sofa1 = new Sofa(2, false, 'vermelho')
const sofa2 = new Sofa(7, true, 'amarelo')

console.log(sofa1.reclinavel())
console.log(`O sofá ${sofa2.cor} é reclinável: ${sofa2.reclinavel()}`)