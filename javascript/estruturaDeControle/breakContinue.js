const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let i in nums) {
  if(i == 5) {
    break
  }
  console.log(`Nums(${i}): ${nums[i]}`)
}

for(let j in nums) {
  if (j == 5) {
    continue//interrompe a repetição e pula pra próxima
  }
  console.log(`Nums(${j}): ${nums[j]}`)
}

//Rótulo
externo: for(let a in nums) {
  for(let b in nums) {
    if(a == 2 && b == 3) {
      break externo//é necessário usar um rótulo nesse caso para que o break encontre o laço pai.
    }
    console.log(`Par = ${a},${b}`)
  }
}