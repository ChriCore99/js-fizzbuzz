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

    // creo variabile "se multiplo di 3 e di 5"
    let multiplo15 = (multiplo3 === 0) && (multiplo5 === 0);   // (multiplo di 3) + (multiplo di 5)

    // stampa dei numeri
    if (multiplo15) {
        console.log('FizzBuzz');
    }

    else if (multiplo3 === 0) {
        console.log('Fizz');
    }

    else if (multiplo5 === 0) {
        console.log('Buzz');
    }

    else {
        console.log(numero);
    }

        // dico a ogni list item di scrivere in html un numero
        liDOMElement.innerHTML = multiplo15 || multiplo3 || multiplo5 || numero;

        // assegno ai list items la classe di prova
        liDOMElement.classList.add('prova');
    
        // dico alla unordered list di scrivere ogni list item creato, uno sotto l'altro, senza cambiarne i valori
        ulDOMElement.append(liDOMElement);

}