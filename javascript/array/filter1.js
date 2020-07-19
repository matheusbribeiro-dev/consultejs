const produtos = [
  { nome: 'Notebook', preco: 2499, fragil: true },
  { nome: 'IPad Pro', preco: 4199, fragil: true },
  { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
  { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]
//Demonstração
/*console.log(produtos.filter(p => { percorre o array e retorna um novo array com os elementos que atenderam o critério programado
  return p.preco > 2500 
})) true or false*/

const precoMaior = p => p.preco > 500
const fragil = p => p.fragil

const resultado = produtos.filter(precoMaior).filter(fragil)
console.log(resultado)