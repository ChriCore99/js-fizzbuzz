// recupero la lista
const ulDOMElement = document.getElementById('numeri');

// dichiaro una variabile di 100
let n = 100; 

// apro un cliclo pe rstampare i numeri da 0 a 99
for (let i = 0; i < n; i++) {
    let numero = i + 1; 

    // creo elemento "list item" valido per ogni numero della lista
    const liDOMElement = document.createElement('li');

    // creo variabile "se un numero è multiplo di 3"
    let multiplo3 = numero % 3;

    // creo variabile "se un numero è multiplo di 5"
    let multiplo5 = numero % 5;  

    // stampa dei numeri
    if ((multiplo3 === 0) && (multiplo5 === 0)) {
        console.log('FizzBuzz');
        liDOMElement.innerHTML += `<div> FizzBuzz </div>`
    }

    else if (multiplo3 === 0) {
        console.log('Fizz');
        liDOMElement.innerHTML += `<div> Fizz </div>`
    }

    else if (multiplo5 === 0) {
        console.log('Buzz');
        liDOMElement.innerHTML += `<div> Buzz </div>`
    }

    else {
        console.log(numero);
        liDOMElement.innerHTML += `<div> ${numero} </div>`
    }
    
        // dico alla unordered list di scrivere ogni list item creato, uno sotto l'altro, senza cambiarne i valori
        ulDOMElement.append(liDOMElement);

}