const pai = {
  nome: 'Pai',
  corCabelo: 'Preto'
}

const filha1 = Object.create(pai)//Criando um objeto(filha1) e já referenciando seu protótipo(pai)
filha1.nome = 'Rafaela'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
  nome: {value: 'Bia', writable: false, enumerable: true}// atributo nome, poder ser reescrito? não. Poderá ser listado ? sim.
})/*primeiro parâmetro é o objeto a ser protótipo
 E a partir do segundo é atributos adicionais ao objeto
 que está sendo criado e configs como 'enumerate'*/
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))//Exibe as 'chaves' do objeto
console.log(Object.keys(filha2))

for (let key in filha2) {
  //filha2.temEssaChaveDelaMesma?
  filha2.hasOwnProperty(key) ?
    console.log(key) : console.log(`Por herança: ${key}`)
}