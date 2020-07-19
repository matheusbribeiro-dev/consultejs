function jurosSimplesEComposto(c, i, t) {
  let j = c * (i/100) * t
  
  console.log(`Juros simples: ${j}`)
  let m = j + c
  
  const composto = (m, i, t) => {
    console.log(`Composto: ${m * (i/100) * t}`)
  }
  composto(m, i, t)
}

jurosSimplesEComposto(200, 10, 3)