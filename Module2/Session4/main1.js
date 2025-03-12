// <script src="main1.js"></script>
// alert('Connected')


/*
Challenge 1
Completar la función calculateAverage la cual recibe numbers, un arreglo de n cantidad de enteros.
La función debe retornar el promedio de todos los enteros que tenga numbers.
*/

/**
 * JSDoc: En JS no existen los Docstrings.
 * Pero se usan comentarios multilinea.
 * Estos se llaman JSDoc.
 */

/**
 * calculateAverage = (receive -> Array) {return -> average of arrayNumbers}
 */
const calculateAverage = (arrayNumbers) => {
    let count = 0;
    for(let i = 0; i < arrayNumbers.length; i++){
        count = count + arrayNumbers[i];
        console.log(count);
    }
    return count / arrayNumbers.length;
};

console.log(`Average in array: ${calculateAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])}`);