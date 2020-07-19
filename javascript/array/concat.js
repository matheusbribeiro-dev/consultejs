const filhas = ['Julia', 'Rafaela']
const filhos = ['Matheus', 'Joabe']
const todos = filhas.concat(filhos, 'Fulano')//Posso add mais elementos por aqui msmo
console.log(todos, filhas, filhos)

//testes
console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]))