//Coleção dinâmica de pares chave/valor
//Formas de utilizar
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'//Se atribuir assim, só poderá ser utilizado assim
produto.preco = 220

console.log(produto)
//Excluindo atributo:
delete produto.preco
delete produto['marca do produto']
console.log(produto)

//Demonstrações
const carro = {
  modelo: 'A4',
  valor: 89000,
  proprietario: {
    nome: 'Raul',
    idade: 56,
    endereco: {
      logradouro: 'Rua abc',
      numero: 123
    }
  },
  condutores: [{//Array de objetos
    nome: 'Junior',
    idade: 19
  }, {
    nome: 'Ana',
    idade: 42
  }],
  calcularValorSeguro: function () {//Funções em objetos
    //...
  }
}
//Modos de atribuição e acesso
carro.proprietario.endereco.numero = 200
carro['proprietario']['endereco']['logradouro'] = 'Av. Gigante' /*Podemos acessar assim mesmo que não
atribuimos assim*/
console.log(carro)

//Deletando
delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)

