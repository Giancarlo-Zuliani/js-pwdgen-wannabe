//ask name

var userName = prompt('inserisci il tuo nome');

//ask surname

var userSurname = prompt('inserisci il tuo cognome');

//ask age

var userColor = prompt('inserisci il tuo colore preferito');

//add '19'

var lastNum = '19'

//merge user datas

var psw = userName + userSurname + userColor + lastNum ;

//console log

console.log(psw);
var node = document.createElement('h3');

var text = document.createTextNode(psw);

node.appendChild(text);

document.querySelector('.container').appendChild(node);

function newPassword(){
  var userName = prompt('inserisci il tuo nome');
  var userSurname = prompt('inserisci il tuo cognome');
  var userColor = prompt('inserisci il tuo colore preferito');
  var psw = userName + userSurname + userColor + lastNum ;
  var node = document.createElement('h3')
  var text = document.createTextNode(psw);
  node.appendChild(text);
  document.querySelector('.container').appendChild(node);
}
