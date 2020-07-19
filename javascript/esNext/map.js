const tecnologias = new Map()
tecnologias.set('react', { fraemwork: false })
tecnologias.set('angular', { fraemwork: true })

/* console.log(tecnologias.react) undefined -> com estrutura map não se pode usar notação ponto
Para acessar basta: */
console.log(tecnologias.get('react').fraemwork)//Notação ponto só desta forma

//Map já atribuindo
const chavesVariadas = new Map([
  [function() { }, 'Função'],
  [{}, 'Objeto'],
  [123, 'Número'],
])//um array, com outros arrays(chave, valor)

chavesVariadas.forEach((ch, vl) => {
  console.log(ch, vl)
})

console.log(chavesVariadas.has(123))//has verifica seu um certo elemento está no map

//Deletando elementos 
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))

//saber quantos elementos tem
console.log(chavesVariadas.size)