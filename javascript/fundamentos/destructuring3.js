function rand({min = 0, max = 1000}) {
  const valor = Math.random() * (min - max) + min
  return Math.floor(valor)
}

const obj = {max: 50, min: 40}
console.log(rand(obj))