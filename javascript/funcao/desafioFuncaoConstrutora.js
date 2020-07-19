
function PessoaC(nome) {
  this.nome = nome

  this.falar = function() {
    console.log(`Meu nome é: ${this.nome}`)
  }
}

const p2 = new PessoaC('Deu certo')
p2.falar()