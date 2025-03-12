
/*
function welcome(){
    console.log('Welcome to this CODE');
    console.log('This CODE is going to Help you to organice your schedule Work');
}

const incidents = ['Perro', 'Foca', 'Elefante', 'Leon'];
const weekendJr = ['Perro', 'Foca', 'Leon'];
const weekendSr = ['Ligre', 'Rana', 'Elefante'];
const shiftLead = ['Ligre', 'Rana', 'Elefante', 'Perro'];

const weekday1 = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const weekday2 = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const weekday3 = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const weekday4 = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const weekday5 = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const weekend1 = ['Saturday', 'Sunday'];
const weekend2 = ['Saturday', 'Sunday'];
const weekend3 = ['Saturday', 'Sunday'];
const weekend4 = ['Saturday', 'Sunday'];
const weekend5 = ['Saturday', 'Sunday'];



/*

Genera un codigo en Javascript en la cual solo se use la consola.
En base a las siguientes especificaciones.

-Sin funciones 
-Programacion basica

Los siguientes arreglos, representan roles, es decir incidents, weekendJr, weekendSr y shiftLead
Los cuales cuentas con un rango de nombres disponibles.
Estos nombres disponibles representan los nombre de los trabajadores.
const incidents = ['Perro', 'Foca', 'Elefante', 'Leon'];
const weekendJr = ['Perro', 'Foca', 'Leon'];
const weekendSr = ['Ligre', 'Rana', 'Elefante'];
const shiftLead = ['Ligre', 'Rana', 'Elefante', 'Perro'];

Cada semana, deben repartirse estos roles, de la siguiente manera.
De Lunes a Viernes se le llama weekdays.
Sabado y Domingo se llama weekend.

En Weekdays se reparten los roles de incidents y shiftLead, dentro de los trabajadores disponibles.
Siendo 1 trabajador de incidents y un trabajador de shiftLead.
Estos trabajadores que ya participaron en estos roles durante weekdays,
no pueden participar en Weekend.

Weekend se reparten los roles de weekendJr y weekendSr, dentro de los trabajadores disponibles 
y que no hayan participado en los roles de weekdays.

Pero para la siguiente semana no deben de repetirse estos mismos trabajadores, ni para weekdays, ni para weekends.
Despues de usar 2 trabajadores de weekends la siguiente semana estas personas no participaran en 2 dias 
uno de ellos no tendra rol lunes y martes, el otro no tendra rol en jueves y viernes

Los trabajadores que se escojan para weekdays y weekend son por semana. 
Es decir si se escoje para weekedays Ligre para shiftLead y Leon para incidents, estos seran para toda esa semana.
Lo mismo para weekend si se escoje Perror para weekendSr y Foca para weekendJr, estos seran para ambos dias sabado y doming.

Este codigo se mostrata en una tabla.
En la que primera fila los espacios del 1 al 7
se encontraran los dias de la semana de Lunes a Domingo.
y las finalas de abajo seran espacios en donde se encutren 35 dias repartidos en 7 columnas

En estos dias se mostrara el como se repartieron los roles durante 5 semanas

Te dare un ejemplo de referencia
| Semana | Lunes | Martes | Miércoles | Jueves | Viernes | Sábado | Domingo |
| 1 | ShiftLead: Rana, Incidents: Foca | ShiftLead: Rana, Incidents: Foca | ShiftLead: Ligre, Incidents: Leon | ShiftLead: Ligre, Incidents: Leon | ShiftLead: Ligre, Incidents: Leon | ShiftLead: Ligre, Incidents: Leon | WeekendSr: Rana, Incidents: Perro | ShiftLead: Rana, Incidents: Perro |
*/


const incidents = ['Perro', 'Foca', 'Elefante', 'Leon'];
const weekendJr = ['Perro', 'Foca', 'Leon'];
const weekendSr = ['Ligre', 'Rana', 'Elefante'];
const shiftLead = ['Ligre', 'Rana', 'Elefante', 'Perro'];

// Arreglo para almacenar qué trabajadores ya se han asignado
let workersUsed = [];

// Función para obtener un trabajador que no haya sido asignado aún
function getAvailableWorker(roleArray) {
    // Filtramos trabajadores no asignados
    let availableWorkers = roleArray.filter(worker => !workersUsed.includes(worker));
    // Elegimos un trabajador aleatorio de los disponibles
    let worker = availableWorkers[Math.floor(Math.random() * availableWorkers.length)];
    // Lo agregamos a la lista de trabajadores ya usados
    workersUsed.push(worker);
    return worker;
}

// Inicializamos la tabla para 5 semanas
let weeks = [];

// Creamos la tabla de distribución para 5 semanas
for (let week = 1; week <= 5; week++) {
    let weekDays = [];
    let weekend = [];

    // Asignamos roles para los días de la semana (Lunes a Viernes)
    let incidentWorker = getAvailableWorker(incidents);  // Asignamos Incident
    let shiftLeadWorker = getAvailableWorker(shiftLead);  // Asignamos Shift Lead
    weekDays.push({ incident: incidentWorker, shiftLead: shiftLeadWorker });

    // Asignamos roles para el fin de semana (Sábado y Domingo)
    let weekendJrWorker = getAvailableWorker(weekendJr);  // Asignamos Weekend Jr
    let weekendSrWorker = getAvailableWorker(weekendSr);  // Asignamos Weekend Sr
    weekend.push({ weekendJr: weekendJrWorker, weekendSr: weekendSrWorker });

    weeks.push({ week: week, weekdays: weekDays, weekend: weekend });
}

// Imprimir tabla con la asignación para 5 semanas
console.log("Semana | Lunes | Martes | Miércoles | Jueves | Viernes | Sábado | Domingo");
console.log("--------------------------------------------------------------------");

// Imprimimos la distribución de los trabajadores por semana
for (let i = 0; i < weeks.length; i++) {
    let week = weeks[i];
    let weekdays = week.weekdays[0];
    let weekend = week.weekend[0];

    console.log(
        `${week.week}     | ` +
        `${weekdays.incident} | ${weekdays.shiftLead} | ` +
        `${weekdays.incident} | ${weekdays.shiftLead} | ${weekdays.incident} | ` +
        `${weekend.weekendJr} | ${weekend.weekendSr}`
    );
}
