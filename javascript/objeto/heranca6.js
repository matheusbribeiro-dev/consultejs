function Aula(nome, videoID) {
  this.nome = nome
  this.videoID = videoID
}

const aula1 = new Aula('Bem vindo', 122)
const aula2 = new Aula('Até breve', 455)

//Simulando o new
function novo(f, ...params) {
  const obj = {}
  obj.__proto__ = f.prototype
  f.apply(obj, params)//apply(this, parametros)
  return obj
}

const aula3 = novo(Aula, 'Bem vindo', 456)
const aula4 = novo(Aula, 'Bem vindo', 457)

console.log(aula3, aula4)