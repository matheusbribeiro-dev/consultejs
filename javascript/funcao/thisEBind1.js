const pessoa = {
  saudacao: 'Bom dia',
  falar() {
    console.log(this.saudacao)
  }
}

pessoa.falar()
//se fizermos isso:
const falar = pessoa.falar
//e chamarmos:
falar()//Resultado é 'undefined', por conta de um conflito entre paradigmas: funcional e OO 

const falarDePessoa = pessoa.falar.bind(pessoa)//Usando o bind para 'amarrar' o this ao objeto pessoa
falarDePessoa()