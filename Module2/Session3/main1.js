alert('Connected')

/* Challenge 1
Crear una función power que recibe dos argumentos base y exponent. 
La función debe retornar el resultado de elevar base a la potencia exponent.
<script src="main1.js"></script>
*/

const power = (a, b) => {result = 1; for(i=1;i<=b;i++){result *= a;} return result;};  // Retorna a + b
let a = Number(prompt('Base'));
let b = Number(prompt('Exponent'));
console.log(typeof a);
console.log(typeof b);
console.log(`${a}^${b}=${power (a,b)}`);

const varsd = (parameters) => {content; return bla;};