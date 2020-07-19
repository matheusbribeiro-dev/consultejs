console.log(soma(2, 3))//Usando Function declaration pode-se clamá-la até antes da declaração


// Function declaration
function soma(x, y) {
  return x + y
}

//Function expression
const sub = function (x, y) {
  return x - y
}
console.log(sub(3, 2))//Com function expression não é possivel acessá-la antes da declaração

// named function expression
const mult = function mult(x, y) {
  return x * y
}
console.log(mult(3, 2))//Assim como function expression...