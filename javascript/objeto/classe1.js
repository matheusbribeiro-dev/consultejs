class Lancamento {
  constructor(nome = 'Generico', valor = 0) {
    this.nome = nome
    this.valor = valor
  }//function
}

class CicloFinanceiro {
  constructor(mes, ano) {
    this.mes = mes
    this.ano = ano
    this.lancamentos = []
  }

  addLancametos(...lancamentos) {//Fazendo assim ele armazena todos os parâmetros recebidos em um array
    lancamentos.forEach(l => this.lancamentos.push(l))
  }

  sumario() {
    let valorConsolidado = 0
    this.lancamentos.forEach(l => {
      valorConsolidado += l.valor
    })
  }
}

const salario = new Lancamento('Salário', 45000)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(5, 2020)
contas.addLancametos(salario, contaDeLuz)

console.log(contas.sumario())