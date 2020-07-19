function classificadorTriangulo(lado1, lado2, lado3) {
  if(lado1 === lado2 && lado1 === lado3) {
    return 'Equilatero'
  } else if(lado1 === lado2 && lado1 != lado3 || lado2 === lado3 && lado2 != lado1 || lado3 === lado1 && lado3 != lado2) {
    return 'Isósceles'
  } else if(lado1 != lado2 && lado2 != lado3) {
    return 'Escaleno'
  }
}

console.log(classificadorTriangulo(2, 2, 2))//Equilatero
console.log(classificadorTriangulo(5, 2, 5))//isosceles
console.log(classificadorTriangulo(2, 5, 5))//isosceles
console.log(classificadorTriangulo(5, 5, 2))//isosceles
console.log(classificadorTriangulo(7, 3, 2))//Escaleno
