//Apenas para fins didáticos visto que Class seria melhor

let Carro = function() {
  this.cor = 'Amarelo'
  this.modelo = 'Chevete'
  this.velocidadeAtual = 0
  this.velocidadeMaxima = 180

  this.acelerar = function() {
    let velocidade = this.getVelocidadeAtual() + 10
    this.setVelocidadeAtual(velocidade)
  }

  this.getVelocidadeAtual = function() {
    return this.velocidadeAtual
  }

  this.setVelocidadeAtual = function(velocidadeAtual) {
    this.velocidadeAtual = velocidadeAtual
  }
}

const carro = new Carro()