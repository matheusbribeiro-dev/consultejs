/*Sem herança
class Cachorro {
  constructor() {
    this.cor = 'Branco e marrom'
    this.tamanho = 30
    this.orelhas = 'Grandes e caídas'
  }

  correr() {
    console.log('Correndo')
  }

  dormir() {
    console.log('Dormindo')
  }

  rosnar() {
    console.log('Rosnando')
  }
}

class Passaro {
  constructor() {
    this.cor = 'Branco e marrom'
    this.tamanho = 10
    this.bico = 'Curto'
  }

  voar() {
    console.log('Voando')
  }

  dormir() {
    console.log('Dormindo')
  }
}

const cao = new Cachorro()
const passaro = new Passaro()

console.log(cao)
console.log(passaro)

Trabalhando com herança*/

class Animal {//Class mais genérica com o objetivo de ser extendida como herança para class's mais específicas
  constructor() {
    this.cor = ''
    this.tamanho = null
  }

  dormir() {
    console.log('Dormindo')
  }
}

class Cachorro extends Animal{//extends -> diz que esta classe herdará atributos e métodos da classe 'Animal'
  constructor() {
    super()
    this.orelhas = 'Grandes e caídas'
  }

  correr() {
    console.log('Correndo')
  }

  rosnar() {
    console.log('Rosnando')
  }
}

class Passaro extends Animal {
  constructor() {
    super()
    this.bico = 'Curto'
  }

  voar() {
    console.log('Voando')
  }
}

class Papagaio extends Passaro {
  constructor() {
    super()
    this.saberFalar = true
  }

  falar() {
    console.log('Falando')
  }
}

// const cao = new Cachorro()
// const passaro = new Passaro()
// const papa = new Papagaio()

// papa.voar()
// cao.dormir()
// passaro.dormir()