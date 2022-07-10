/* Escriba un script que a partir de un array de ints devuelva un array de strings aplicando las
siguientes reglas:
● Devuelve Fizz si el número es divisible por 3 o si incluye un 3 en el número.
● Devuelve Buzz si el número es divisible por 5 o si incluye un 5 en el número.
● Devuelve FizzBuzz si el número es divisible por 3 y por 5. */


// Genero diez numeros random con un bucle
const randomNumbers = [];
const arrayStrings = [];

for (let index = 0; index < 10; index++) {
    
    let num = Math.floor(Math.random()*101);

    randomNumbers.push( num );
    
}
// Luego recorro para construir mi array de strings

for (let index = 0; index < randomNumbers.length; index++) {
    let currentNumber = randomNumbers[index];

    // Valido que no sea 0
    if( currentNumber === 0 ) { continue; }

    // Lo hago de esta manera porque asumo que si el numero cumple con mas de una regla entonces debo pushear el valor respectivo

    if( currentNumber % 3  === 0 && currentNumber % 5  === 0 ) {
        console.log(`${currentNumber} es divisible entre 3 y 5`)

        arrayStrings.push( 'FizzBuzz' );
    }
    if( currentNumber % 3  === 0 || `${currentNumber}`.includes('3') ) {
        console.log(`${currentNumber} es divisible entre 3`)
        arrayStrings.push( 'Fizz' );
    }
    if( currentNumber % 5  === 0 || `${currentNumber}`.includes('5') ) {
        console.log(`${currentNumber} es divisible entre 5`)
        arrayStrings.push( 'Buzz' );
    }

    
    
}
