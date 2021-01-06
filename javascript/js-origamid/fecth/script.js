/*Fetch - Promise para requisições HTTP

const doc = fetch('doc.txt');

doc.then(resolved => {
  resolved.text()/*.then(resolved => {
    console.log(resolved);
  }); OU
  return resolved.text();

}).then(body => {
  const contentDiv = document.querySelector('.content');

  contentDiv.innerText = body;
});

--------------------------------------------------------------------------------
Praticando:

const inputCep = document.querySelector('.inputCep');//Selecionando o input no html

function getCep(event) {//CallBack sendo chamada no addEventListener
  const elementEvent = event.currentTarget;//Selecionando o elemento "dono" do evento(no caso o próprio input)
  let valueInput = elementEvent.value;//Resgatando o valor presente no input a cada execução

  if(elementEvent.value.length === 8) {//Testando tamanho da string vindo do input (Cep possui 8 caracteres)
    const cep = fetch(`https://viacep.com.br/ws/${valueInput}/json/`);//Requisição ao WebService informando o valor de 'valueInput' (Cep digitado)

    cep.then(resolve => resolve.json())//Recebendo resposta. Caso a Promise for resolvida transformaremos a resposta em JSON
      .then(body => {//Caso a promise que transforma em JSON for resolvida
        const p = document.querySelector('.cep');//Selecionaremos o elemento p do HTML

        p.innerText = `Bairro: ${body.bairro}
        Logradouro: ${body.logradouro}`;//E faremos a inserção dos dados da resposta
      });
  }
}

inputCep.addEventListener('input', getCep);//Adiciona o escutador de eventos no elemento input.

--------------------------------------------------------------------------------
inserindo img com geração de url


const imgFetch = fetch('img/eu2.jpg');

imgFetch.then(response => response.blob())
  .then(body => {
    const blobUrl = URL.createObjectURL(body);
    const imgDom = document.querySelector('img');

    imgDom.src = blobUrl;
  });

--------------------------------------------------------------------------------
Requisições HTTP  


const url = 'https://jsonplaceholder.typicode.com/posts';

//Options para a requisição
const options = {
  method: 'POST',
  body: '{"title": "JavaScript"}',
  headers: {
    "Content-Type": "application/json; charset=utf8"
  }
}

fetch(url, options)
  .then(response => response.json())
  .then(json => console.log(json)) ;
  
--------------------------------------------------------------------------------
Async e await*/

async function pullData() {
  try {
    const responseData = await fetch('dados.json');
    const jsonData = await responseData.json();

    console.log(jsonData);

  } catch(erro) { 
    console.log(erro);
  }


}

pullData();