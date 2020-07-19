const carrinho = [
  '{"nome": "Borracha", "preco": 3.25}',
  '{"nome": "Caderno", "preco": 13.90}',
  '{"nome": "Kit de Lapis", "preco": 41.22}',
  '{"nome": "Caneta", "preco": 7.50}'
]

// Retornar um array com os preços
const paraObjeto = json => JSON.parse(json)
const preco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(preco)

console.log(resultado)