// dichiaro una variabile di 100

let n = 100; 

// apro un cliclo pe rstampare i numeri da 0 a 99

for (let i = 0; i < n; i++) {
    let numero = i + 1;

    // creo variabile "se un numero è multiplo di 3"

    let multiplo3 = numero % 3;

    // creo variabile "se un numero è multiplo di 5"

    let multiplo5 = numero % 5;

    // creao variabile mista "se multiplo di 3 3 di 5"

    let multiploComune = multiplo3 + multiplo5;

    // stampa dei numeri
    
    if (multiplo3 === 0) {
        console.log('Fizz');
    }

    else if (multiplo5 === 0) {
        console.log('Buzz');
    }

    else if (multiploComune === 0) {
        console.log('FizzBuzz');
    }

    else {
        console.log(numero);
    }
    
    // creo variante "se un numero è multiplo di 3 e di 5"

}