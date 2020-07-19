/*O super() ele fornece acesso ao constructor() dá classe 'pai' e ele pode receber parametros */
class Animal {
  constructor(sizeAnimal) {
    this.cor = ''
    this.tamanho = sizeAnimal
  }

  dormir() {
    console.log('Dormindo')
  }
}

class Passaro extends Animal {
  constructor(typeB, sizePassaro) {
    super(sizePassaro)
    this.bico = typeB
  }

  voar() {
    console.log('Voando')
  }
}

class Papagaio extends Passaro {
  constructor(talk, sizePapagaio) {
    super('Médio', sizePapagaio)//pode se passar parametros aqui para serem recebidos no constructor da classe pai
    this.saberFalar = talk
  }

  falar() {
    console.log('Falando')
  }
}

const papagaio = new Papagaio(true, 'Grande')
console.log(papagaio)