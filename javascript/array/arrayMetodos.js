const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
console.log('Original: ',pilotos)

pilotos.pop()//Remove o último elemento do array
console.log('Pop(): ',pilotos)

pilotos.push('Verstappen')//Adiciona item a última posição do array
console.log('Push(): ',pilotos)

pilotos.shift()//Remove o primeiro elemento do array
console.log('Shift(): ',pilotos)

pilotos.unshift('Hamilton')//Adiciona o elemento em questão ao primeiro índice do array.
console.log('Unshift(): ',pilotos)

pilotos.splice(2, 0, 'Bottas', 'Massa')//Adicionar e remover itens - Observe o arq array.js
console.log('Splice(): ',pilotos)

const algunsPilotos1 = pilotos.slice(2) //Novo array - A partir do indice passado por parâmetro se armazena um novo array
console.log('Novo array: ',algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)//pegue do 1 até o 3
console.log('Novo array2: ',algunsPilotos2)
