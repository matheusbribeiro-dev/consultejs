const alunos = [
  { nome: 'João', nota: 7.3, bolsista: false },
  { nome: 'Maria', nota: 9.2, bolsista: true },
  { nome: 'Pedro', nota: 9.8, bolsista: false },
  { nome: 'Ana', nota: 8.7, bolsista: true }
]

//Desafio 1 
const todosBolsista = (resultado, bolsista) => resultado && bolsista
console.log(`Todos bolsistas: ${alunos.map(al => al.bolsista).reduce(todosBolsista)}`)

//Desafio 2
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(`Algum bolsista: ${alunos.map(al => al.bolsista).reduce(algumBolsista)}`)
