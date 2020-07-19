let j = 0
const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

/*Sem callback
for(let i in notas) {
  if(notas[i] < 7) {
    console.log(notas[i]);
  }else {
    j++
  }
}

console.log(`Quantidade de valores maiores: ${j}`)

//COM CallBack
notas.forEach(notasMSete => {
  if(notasMSete < 7) {
    console.log(notasMSete)
  } else {
    j++
  }
})
console.log(`Quantidade de valores maiores: ${j}`)

Outro modo de fazer com callback
*/
const notasBaixas = notas.filter(nota => nota < 7)//Filtra os elementos do array retornando um valor booleano dependendo de um critério

console.log(notasBaixas)