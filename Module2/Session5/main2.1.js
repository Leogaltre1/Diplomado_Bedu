/*
Objetivos
Crear un constructor, agregar métodos al prototype e instanciar múltiples 
objetos a partir de dicho constructor.

Requisitos
Haber terminado el Reto 1.

Desarrollo
Crear un function constructor Group el cual crea una lista (arreglo) vacía.
Agregar los siguientes métodos a Group:

add: Agrega un nuevo valor al grupo sólo si no existe.
has: Retorna un booleano indicando si el valor es un miembro del grupo.
from: Método estático que recibe un arreglo y crea un grupo con todos los elementos de dicho arreglo.
*/

const Group = function (){
    this.array = [];
    this.getArray = function () {
        return this.array;
    }
}

Group.prototype.has = function(value){
    for(let i = 0; i < this.array.length; i++){
        //console.log(value);
        //console.log(this.array[i]);
        if(value === this.array[i]){
            return true;
        }
    }
    return false;
}

Group.prototype.add = function(value){
    if(!this.has(value)){
        this.array.push(value);
    }
    return `Value: ${value}`
}

Group.from = function(newElementArray){
    var group = new Group();
    for(let i = 0; i < newElementArray.length; i++){
        group.add(newElementArray[i]);
    }
    return group;
}

const array = [1, 2, 3, 4, 5];
const Group1 = Group.from(array);
//const Group1 = new Group();
console.log(Group1.has(6));
console.log(Group1.add(6));
console.log(Group1.has(6));
console.log(Group1.getArray());