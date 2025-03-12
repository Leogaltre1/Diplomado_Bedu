//<scripts src="main2.js"></scripts>
//alert('Connected');

/*
Challenge 2
En el Ejemplo 2 se creó una función para transformar un objeto en un arreglo 
con los pares [key, value] por cada propiedad.

const arrayWithObjects = (_Object) => {
    var keys = Object.keys(_Object);
    const array = [];
    for(let i = 0; i < keys.length; i++){
        array.push( [keys[i], _Object[keys[i]]] );
    }
    return array;
};

console.log(arrayWithObjects(
    {
        a: 'some string',
        b: 42,
        c: false
      }
));

Desarrollo
Para este reto vamos a crear una función que haga lo opuesto. 
Es decir, la función recibe un arreglo con pares [key, value] 
y debe retornar un objeto con sus respectivas propiedades y valores.
*/

const objWithArrays = (_Array) => {
    let obj = {};
    for(let i = 0; i < _Array.length; i++){
            obj[_Array[i][0]] = _Array[i][1];
    }
    //console.log(`=== Obj: ${typeof obj} ===`);
    return obj;
};

/*
wrong print due to
El error que está sucediendo aquí es que estás intentando concatenar un objeto (objWithArrays(...)) 
directamente dentro de un string, lo que convierte el objeto a una cadena mediante el método toString().
Sin embargo, el método toString() de los objetos en JavaScript retorna [object Object],
lo que causa que el resultado se vea de forma no deseada.
*/
console.log(`Object with Arrays: ${objWithArrays([ [ 'a', 'some string' ], [ 'b', 42 ], [ 'c', false ] ])}`);

/* 
Alternative 1 
Para mostrar el objeto de manera adecuada, puedes usar JSON.stringify() 
para convertirlo en una cadena con formato legible.
 */
console.log(`Object with Arrays: ${
    JSON.stringify(
    objWithArrays([ [ 'a', 'some string' ], [ 'b', 42 ], [ 'c', false ] ])
    )
}`);
// Alternative 2
console.log('Object with Arrays:', objWithArrays([ [ 'a', 'some string' ], [ 'b', 42 ], [ 'c', false ] ]));

console.log({
    a: 'some string',
    b: 42,
    c: false
  });