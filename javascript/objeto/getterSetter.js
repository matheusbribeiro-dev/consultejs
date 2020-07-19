//Getters e Setters são funções onde se pode acessar os valores.
//Exemplos:
const sequencia = {
  _valor: 1,//Não a torna privada em JS, mas de acordo com uma convenção declará-la assim mostra a intenção de acessá-la somente por dentro
  get valor() { return this._valor++ },
  set valor(valor) {
    if (valor > this._valor) {
      this._valor = valor
    }
  }
}
console.log(sequencia.valor, sequencia.valor)//Ao chamar esse 'atributo' ele chama automaticamente o get
sequencia.valor = 1000// o mesmo de cima
console.log(sequencia.valor, sequencia.valor)