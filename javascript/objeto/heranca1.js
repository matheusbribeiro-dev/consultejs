const ferrari = {
  modelo: 'F40',
  velMax: 324
}

const volvo = {
  modelo: 'V40',
  velMax: 200
}

console.log(ferrari.__proto__)//Serve para acessar o protótipo deste objeto, ou seja o objeto pai do objeto ferrari
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)