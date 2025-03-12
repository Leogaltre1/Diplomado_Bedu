alert('With this I know if my page is working');

// Obtener fecha y hora
let now = new Date();

// Get hours
let hour = now.getHours();

// Get minuts
let minute = now.getMinutes();

// Realizado con Alert
let value = Number(prompt('Ingresa la hora a comparar: '));
if (value === hour) {
    //alert("Si son las " + value + ": Buenos dias");
    // Backsticks `` con interpolacion de variables, meter codigo de Javascript
    alert(`Si son las ${value}: Buenos dias`);
    //console.log("Si son las ${value}: Buenos dias")
} else { alert(`Nel no le sabes bro, son las ${hour}`) }

// Realizado con Console.log

// Operadores ternarios
alert(`Hi body ${greeting}`)
choose = prompt ('Do you want a sandwich');
let message = choose > "Yes" ? 'Take your sandwich' : 'Fine bro if you do not want';
alert(message)