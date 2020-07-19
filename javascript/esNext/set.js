//Não aceita repetição e não é uma estrutura indexada
const times = new Set()
times.add('Vasco')//Para add -> .add()
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco')//Demonstrando que ele não aceita repetição. -> será ignorado

console.log(times)
console.log(`Quantos elementos: ${times.size}\n`)//Para verificar o tamanho
console.log(`Tem mengão: ${times.has('Flamengo')}\n`)//Para verificar se existe este elemento na estrutura

//Excluir
times.delete('Vasco')
console.log(`Tem vasco dps do delete: ${times.has('Vasco')}\n`)

//Exemplo com array
const nome = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomeSet = new Set(nome)

console.log('Teste com array: ', nomeSet)