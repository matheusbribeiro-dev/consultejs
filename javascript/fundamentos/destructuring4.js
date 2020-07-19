function rand([min = 0, max = 1000]) {
  if (min > max) [min, max] = [max, min]
  const valor = Math.random() * (min - max) + min
  return Math.floor(valor)
}

console.log(rand([50, 40]))