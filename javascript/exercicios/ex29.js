function contadorIntervalo(vetor) {
  let j = 0
  let k = 0
  let dentro = []
  let fora = []

  for (let i in vetor) {
    if (vetor[i] >= 10 && vetor[i] <= 20) {
      dentro[j] = vetor[i]
      j++
    } else {
      fora[k] = vetor[i]
      k++
    }
  }

  return console.log(`Dentro do intervalo: ${dentro} Fora: ${fora}`)
}

const numeros = [40, 20, 15, 10, 5, 3]
contadorIntervalo(numeros)