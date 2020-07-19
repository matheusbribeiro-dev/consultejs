const numeros = [1, 2, 3, 4, 10]
let maior
let menor
let ma = 0
let me = 1

for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > numeros[ma]) {
    maior = numeros[i]
    ma++
  }else if (numeros[me] < numeros[me - 1]) {
    menor = numeros[me]
    me++
  }
}

console.log(`Maior: ${maior} Menor: ${menor}`)
