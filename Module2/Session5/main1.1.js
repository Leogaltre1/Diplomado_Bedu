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

const Vec = function (x, y){
    this.x = x;
    this.y = y;
}
console.dir(Vec);

Vec.prototype.sum = function (other){
    return [this.x + other.x, this.y + other.y]
}
console.dir(Vec);
console.log(Vec.prototype);

Vec.prototype.minus = function (other){
    return [this.x - other.x, this.y - other.y]
}
console.dir(Vec);
console.log(Vec.prototype);

const Vec1 = new Vec(0,0);
const Vec2 = new Vec(2,-8);

console.log(Vec1);
console.log(Vec2);

console.log(Vec1.minus(Vec2));

// ******************* Uso de prototype
/*
Hereda las variables de instancia de la funcion constructora
Y puede crear metodos sin que estos esten definidos en la funcion constructora
Ademas cuando se crean estos los demas objetos creados tienen acceso a estos metodos
*/