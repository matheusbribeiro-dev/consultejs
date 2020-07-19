const obj = {
  a: 1,
  b: 2,
  c: 3,
  soma() {return a + b + c}
}
//Convertendo obj para JSON(basta usar o JSON.stringify())
console.log(JSON.stringify(obj))//mostrando resultado -> nota-se que a função fora excluída

//Convertendo JSON pra obj(basta usar o JSON.parse(string))
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3}'))//Respeite as regras do JSON -> ' "" '
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'))//Exemplos do que o JSON consegue suportar