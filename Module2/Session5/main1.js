//alert('Connected');
// Metodos y Propiedades

/*
Crear un function constructor Vec el cual representa un vector en dos dimensiones. Recibe dos parámetros x y y, 
ambos valores numéricos que deben ser las propiedades del objeto.
Agregar los siguientes métodos al prototype de Vec:
plus: Recibe otro vector como parámetro y retorna un nuevo vector con la suma de ambos vectores.
minus: Recibe otro vector como parámetro y retorna un nuevo vector con la diferencia de ambos vectores.
length: Retorna la longitud del vector, es decir, la distancia del punto (x, y) desde el origen (0, 0).
*/

/*
class Vec {
    constructor(){
    }
}
*/

const Vec = function (x, y){
    this.x = x;
    this.y = y;
    this.sum = (other) => {
        return [this.x + other.x, this.y + other.y];
    }
    this.rest = (other) => {
        return [this.x - other.x, this.y - other.y];
    }
    this.pitagoras = (other) => {
        return Math.sqrt((this.x - other.x) * (this.x - other.x) + (this.y - other.y) * (this.y - other.y));
    }
}

const Var1 = new Vec(1,2);
const Var2 = new Vec(2,3);
console.log('Suma de Vectores: '+ Var1.sum(Var2));
console.log('Resta de Vectores: '+ Var1.rest(Var2));
console.log('Pitagoras: '+ Var1.pitagoras(Var2));


/*
 inheritance - Herencia
const Hijo = function (name, skills, yearsOfExperience){
    Person.call(this, name)
}
*/

// ***************************************************************************************** Importante