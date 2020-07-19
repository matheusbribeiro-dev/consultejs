//Ao contrário do for in que trabalha em cima dos indices, o for of trabalha em cima dos valores

for(let letra of "Cod3r") {
  console.log(`Teste com uma string: ${letra}`)
}
console.log('\n')

//Testes:
const assuntosEcma = ['Map', 'Set', 'Promise']

for(let i of assuntosEcma) {
  console.log(`Teste com array: ${i}`)
}

console.log('\n')
//com map
const assuntosMap = new Map([
  ['Map', { abordado: true }],
  ['Set', { abordado: true }],
  ['Promise', { abordado: false }]
])

for(let assunto of assuntosMap) {
  console.log(assunto)
}

console.log('\nPercorrendo só as chaves do map:')
for(let chave of assuntosMap.keys()) {
  console.log(chave)
}

console.log('\nPercorrendo só os valores do map:')
for(let valor of assuntosMap.values()) {
  console.log(valor)
}

console.log('\nPercorrendo os valores do map:')
for(let [ch, vl] of assuntosMap.entries()) {
  console.log(ch, vl)
}
