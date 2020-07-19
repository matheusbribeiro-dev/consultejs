
//'for' em um uso comum 
for(let i = 1; i <= 10; i++) {
  console.log(`i: ${i}`)
}

//'for' percorrendo um array
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for(let j = 0; j < notas.length; j++) {// .length é o tamanho do array.
  console.log(`Nota(${j}): ${notas[j]}`)
}