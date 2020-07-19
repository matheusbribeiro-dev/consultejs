const carro = {
  velAtual: 0,
  velMax: 200,
  acelerarMais(delta) {
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta
    } else {
      this.velAtual = this.velMax
    }
  },
  status() {
    return `${this.velAtual}Km/h de ${this.velMax}Km/h`
  }
}

const ferrari = {
  modelo: 'F40',
  velMax: 324 //shadowing -> pois o objeto 'pai' também possui este atributo
}

const volvo = {
  modelo: 'V40',
  status() {
    return `${this.modelo}: ${super.status()}`//Super serve para referenciar um atributo do objeto 'pai' referenciado por herança
  }
}

Object.setPrototypeOf(ferrari, carro)//Forma diferente de 'ligar' objetos(prototipar objetos)
Object.setPrototypeOf(volvo, carro)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())
