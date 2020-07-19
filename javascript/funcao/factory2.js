//Function factory que retorna objetos personalizados.
function criarProduto(nome, preco) {
  return {
    nome,
    preco,
    Desconto: 5
  }
}

console.log(criarProduto('PC', 2500))
console.log(criarProduto('Xiaomi', 1200))
