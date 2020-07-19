function baskara(ax2, bx, c) {

  let bxd = (-Math.pow(bx, 2))
  let d = bxd - 4 *(ax2 * c) * (-1)

  if(d === 0 || d <= 0){
    let dn = 'Delta negativo'
    return dn
  
  } else {
    let b = [Math.floor((-bx) + Math.sqrt(d)/(2*ax2)), Math.floor((-bx) - Math.sqrt(d)/(2*ax2))]

    return b
  }

}

console.log(baskara(3, 5, 12))
console.log(baskara(5, 3, 2))
