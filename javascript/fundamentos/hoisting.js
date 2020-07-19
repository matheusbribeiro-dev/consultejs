//Em outras linguagens isso daria erro, porém em js o conceito de hoisting é exatamente esse. Ele joga a variável para 'cima'
console.log('a= ', a);//Dará 'undefined', ou seja, a variável existe, porém ainda não definida.
var a = 2;
console.log('a= ', a);

//Com let:
console.log('a= ', a);//Dará erro, pois o efeito hoisting só se aplica ao var
let a = 2;
console.log('a= ', a);