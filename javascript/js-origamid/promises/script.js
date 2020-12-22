/* Introdução

const promise = new Promise((resolve, reject) => {
  let condition = false;

  if(condition) {
    setTimeout(() => {

      resolve('Test');
    }, 1000);

  } else {
    reject('Error'); 
  }
});

const returnPromise = promise.then(resolved => {
  return 'teste';
}).then(returnThen => {

  console.log(returnThen);
}).catch(reject => {
  console.log(reject);
}); OU

const returnPromise = promise.then(resolved => {
  console.log(resolved);

}, reject => {
  console.log(reject);

}).finally(() => console.log('The end'));

--------------------------------------------------------------------------------

Método .all() - É resolvida depois que todos as promises são resolvidas também
OU quando pelo menos uma for rejeitada.

const login = new Promise(resolve => {

  setTimeout(() => {
    resolve('Usuário logado !');
  }, 1000);

});

const data = new Promise(resolve => {

  setTimeout(() => {
    resolve('Dados carregados');
  }, 1500);

});

const ready = Promise.all([login, data]);

ready.then(resolved => {
  console.log(resolved);
});

--------------------------------------------------------------------------------

Método .race() - Quando uma primeira promise for resolvida a promise .race()
também se resolve e executa

const login = new Promise(resolve => {

  setTimeout(() => {
    resolve('Usuário logado !');
  }, 1000);

});

const data = new Promise(resolve => {

  setTimeout(() => {
    resolve('Dados carregados');
  }, 1500);

});

const ready = Promise.race([login, data]);

ready.then(resolved => {
  console.log(resolved);
});*/

