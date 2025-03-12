// alert('All good')
//https://dev.to/gastondanielsen/25-metodos-de-arrays-en-javascript-que-todo-desarrollador-debe-conocer-4a2d
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array

const numbers = [1, 2, 3, 4, 5];
const dobles = [];

for (let i = 0; i < numbers.length; i++){
    dobles.push(number[i] * 2);
}
console.log(dobles)

// Uso de programacion funcional con la funcion 'map'
/*
map es como un for con superpoderes
Necesita una funcion adrentro, es decir necesita una callback
Usamos una funciona anonima y la usamos como callback

>> Convenciones
element = el
index = i
_tambien a index le llegan a llamar 'key' por react
cuando la variable usada es numbers el que la recorre le llaman en singular number

Un map siempre retorna algo, siempre usa return, a menos que se use una funcion flecha de un parametro
*/

// Me imprime los valores que posee numbers
const doble1 = numbers.map(function (element){
    console.log(elemet);
})

const doble2 = numbers.map(function (number, index, arreglo){
    console.log(number);   // Me muestra los valores del arreglo numbers
    console.log(index);     // Me da el indice del elemento, inicia en 1 
                            // o usarlo en parametros asi (numbers, (_, index)), inicia en 0
    console.log(arrelo);    // Me retorna el arreglo original y lo repite la cantidad de veces de su len
})

const doble3 = numbers.map (function (number){
    return number * 2
})

// Se usa esta funcion flecha para mas de un parametro
const doble4 = numbers.map ((number) => {return number * 2})

// Se usa esta funcion flecha para un solo parametro
const doble5 = numbers.map (number => number * 2);

/*
Inmutabilidad

General algo nuevo a partir del oriinal para no alterar el original
*/

// Object.assign para inmutabilidad de objetos 