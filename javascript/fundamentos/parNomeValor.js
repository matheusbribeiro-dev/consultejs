//par nome/valor
const saudacao = 'opa'; //Contexto Léxico 1

function exec() {
  const saudacao = 'Falaaa'; //contexto léxico 2
  return saudacao;
}

//Objetos são grupos aninhados de identificadores/valor
const cliente = {
  nome: 'Pedro',
  idade: 32,
  peso: 90,
  endereco: {
    logradouro: 'Rua Cabo Ramiro',
    numero: 32
  }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);