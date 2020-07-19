const numeros = [1, 2, 3, 4, 5, 6]
let par = 0
let impar = 0

numeros.forEach( (nome, i) => {
  if (nome %  2 === 0) {
    par++
  }else {
    impar++
  }
})

console.log(`Pares: ${par}`)
console.log(`Ímpares: ${impar}`)