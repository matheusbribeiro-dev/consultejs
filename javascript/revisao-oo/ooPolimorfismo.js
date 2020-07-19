/*Reescrever métodos definidos em um obj pai em objt's filhos de acordo com a necssidade dos próprios */
class Animal {
  constructor(color, sizeAnimal) {
    this.cor = color
    this.tamanho = sizeAnimal
  }

  dormir() {
    console.log('Dormindo')
  }
}

class Passaro extends Animal {
  constructor(typeB, color, sizePassaro) {
    super(color, sizePassaro)
    this.bico = typeB
  }

  voar() {
    console.log('Voando')
  }
}

class Papagaio extends Passaro {

  constructor(talk, color, sizePapagaio) {
    super('Médio', color, sizePapagaio)//pode se passar parametros aqui para serem recebidos no constructor da classe pai
    this.saberFalar = talk
  }

  falar() {
    console.log('Falando')
  }
}

class Avestruz extends Passaro {
  constructor(color, sizePapagaio) {
    super('Médio', color, sizePapagaio)
  }

  enterrarCabeca() {
    console.log('Enterrada')
  }

  voar() {
    console.log('Não voa')/*Reescrevendo método, ou seja, polimorfismo em prática*/
  }
}

const papagaio = new Papagaio(true, 'Verde', 25)
const avestruz = new Avestruz('Cinza', 40)

avestruz.voar()
