/*
Challenge 3
En la serie de Fibonacci:
1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...
Cada elemento se obtiene sumando los dos valores anteriores.
Completar la función fibonacciSequence la cuál recibe limit, 
un entero positivo que representa la cantidad de elementos de la serie que queremos.
*/

/*
const fibonacci = (limit) => {
    counter = 0;
    for(let i=1; i<=limit; i++){console.log(counter=counter+i)}
    return counter
};
console.log(`Counter: ${fibonacci(20)}`);
*/
var count=0;
function fibonacci(num) {
    if (num <= 1) return 1;
    count=count+1;
    console.log(`Fibonacci - ${count}) fibonacci(num - 1): ${fibonacci(num - 1)}`);
    console.log(`Fibonacci - ${count}) fibonacci(num - 2): ${fibonacci(num - 2)}`);
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
  
  function fibonacciSequence(limit) {
    if(limit < 1) return console.log('Limit must be greater than 0');
  
    for(let i = 0; i < limit; i++ ) {
      console.log(`index: ${i} | Fibonacci: ${fibonacci(i)} `);
    }
  }

console.log(fibonacciSequence(5));

/* No entendido - Funciones recursivas */