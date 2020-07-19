/*Exemplo de abstracao OO de uma conta bancária 
class -> modelo do objeto
ContaBancaria -> objeto em si
Atributos:
  Agência
  numeroConta
  saldo
  limite
  OBS: this -> conecta o atributo ao contexto do objeto
*/

class ContaBancaria {//A class quando instanciada se torna um objeto
  constructor() {//método construtor dos atributos
    this.agencia = 1075
    this.numeroConta = 8351125
    this.saldo = 50
    this.limite = 450
  }

  //Métodos:
  depositar(valorDeposito) {
    this.saldo += valorDeposito
  }

  sacar(valorSaque) {
    this.saldo -= valorSaque
  }

  consultarSaldo() {
    return this.saldo
  }
}

//Instânciando
//identidade -> a partir de uma identidade(neste caso: contaBancaria) acessar atributos e métodos
let contaBancaria = new ContaBancaria()
console.log(contaBancaria.agencia)

