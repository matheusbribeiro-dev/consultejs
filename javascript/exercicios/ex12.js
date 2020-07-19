function fatorial(n) {
  let nfat = n
  let fatDeN = 1

  if(n === 1 || n === 0){
    return console.log(`${n}!: 1`)
  } else {

    while(nfat >= 1){
      fatDeN *= nfat
      nfat--
    }
  }
  return console.log(`${n}!: ${fatDeN}`)
}

fatorial(5)
fatorial(4)
fatorial(6)
fatorial(7)
