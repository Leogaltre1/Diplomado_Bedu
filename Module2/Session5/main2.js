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

const Group = function (array){
    this.array = array;
}

// Receive an object that has an array
Group.prototype.add = function(newElementArray){
    for(let i = 0; i < newElementArray.array.length; i++){
        let controlVar = false;
        for(let j = 0; j < this.array.length; j++){
            if(newElementArray.array[i] === this.array[j]){
                controlVar = true;
                break;
            }
        }
        if(controlVar == false){
            this.array.push(newElementArray.array[i]);
        }
    }
    return this.array;
}

// Receive an object that has an array
Group.prototype.has = function(newElementArray){
    for(let i = 0; i < newElementArray.array.length; i++){
        let controlVar = false;
        for(let j = 0; j < this.array.length; j++){
            if(newElementArray.array[i] === this.array[j]){
                controlVar = true;
                return controlVar;
            }
        }
        if(controlVar == false){
            return controlVar;
        }
    }
}

// No working -------------------------------------------------------
Group.prototype.from = function(){
    for(let i = 0; i < newElementArray.array.length; i++){
        let controlVar = false;
        for(let j = 0; j < this.array.length; j++){
            if(newElementArray.array[i] === this.array[j]){
                controlVar = true;
                break;
            }
        }
        if(controlVar == false){
            this.array.push(newElementArray.array[i]);
        }
    }
    return new Group(this.array);
}

arrayConstructor = [7,5,2,3];
arrayForAdd = [8,9,2,3];
const Group1 = new Group(arrayConstructor);
const Group2 = new Group(arrayForAdd);
console.log(Group1.add(Group2));
console.log(Group1.has(Group2));
console.log(Group1.from(Group2));