/* Challenge 3 - Node js
Crear un ciclo desde 0 hasta 100.
Mostrar todos los números primos en este ciclo con console.log()
*/

for (var counter = 2; counter <= 100; counter++) {
    var isPrime = true;
    //console.log(`First For (Counter): ${counter}`);
    for (var i = 2; i <= counter; i++) {
        //console.log(`Second For: (Counter) ${counter} and (index) ${i}`); 
        if (counter % i === 0 && i !== counter) {
            isPrime = false;
        }
    }
    if(isPrime) {
    console.log(`Prime Numbers: ${counter}`);
    }
}