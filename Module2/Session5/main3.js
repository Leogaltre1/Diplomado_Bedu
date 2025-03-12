// alert('Connected');
//<script src='main3.js'></script>

/*
Objetivos
Crear un constructor, agregar métodos al prototype e instanciar múltiples objetos 
a partir de dicho constructor.
Desarrollo
Crear un function constructor Triangle con tres parámetros a, b y c. 
Cada uno representa una lado del triángulo.
Agregar el método getPerimeter al prototype de Triangle, el cual retorna el perímetro del tríangulo.
*/

const Triangle = function(a, b, c){
    this.a = a;
    this.b = b;
    this.c = c;
}

Triangle.prototype.perimeter = function(){
    return this.a + this.b + this.c;
}

const Triangle1 = new Triangle(4, 2, 5);
const Triangle2 = new Triangle(4, 8, 5);
const Triangle3 = new Triangle(4, 6, 5);

console.log(Triangle1.perimeter());
console.log(Triangle2.perimeter());
console.log(Triangle3.perimeter());