alert('Connected');

/*
Challenge 2
Completar la función getLargerInt la cual recibe dos números enteros. 
La función debe retornar el número mayor.
<script src="main2.js"></script>
*/

const Largest = (number1, number2) => {
    return (number1 > number2) ? `Number 1: ${number1} is major` :
    (number1 < number2 ? `Number 2: ${number2} is major` : 'Both are equal' );
};

const number1 = Number(prompt('Enter Number 1'));
console.log(`Number 1: ${number1}`);
const number2 = Number(prompt('Enter Number 2'));
console.log(`Number 2: ${number2}`);
console.log(`Your number major is: ${Largest(number1,number2)}`);