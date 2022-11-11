let body = document.getElementsByTagName("body");

const parent = document.createElement('div');
body[0].append(parent);

const child = document.createElement('p');
const childTwo = document.createElement('p');

parent.append(child, childTwo, 'Hello world');
//parent.appendChild(child, childTwo,'Hello world');

parent.removeChild(childTwo);

let email = document.createElement('input');
 email.setAttribute('placeholder', 'E-mail');

body[0].append(email)