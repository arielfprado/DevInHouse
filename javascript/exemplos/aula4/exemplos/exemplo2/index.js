const helloWorld = () => {
    const body = document.querySelector("body");
    let titulo = document.createElement("h1");
    titulo.textContent = "Ola, mundo!";
    body.appendChild(titulo);
 }
 
 helloWorld();
 
 const h1 = document.querySelector("h1");
 const body = document.querySelector("body");

 function adjacentText() {
  let button = document.createElement('button');
  button.innerHTML = 'Texto adjacente';
  body.appendChild(button);
  
  button.addEventListener('click', function () {
    h1.insertAdjacentText('beforeend', 'Texto Inserido');
  })
 }
  
 adjacentText();

 function alteraTagh3() {
    let h3 = document.createElement('h3');
    h3.innerHTML = 'Texto em h3';

    body.appendChild(h3);

    h3.addEventListener('click', function() {
      h3.innerHTML = '<h1>Mudando para h1</h1>'
    })
   }

    
alteraTagh3();

function alteraTexto() {
    h1.addEventListener('click', function() {
    h1.outerHTML = '<h2> Mudando para h2 </h2>'
  })
  
}

alteraTexto();
 