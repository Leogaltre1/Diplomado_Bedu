alert('Page is working')
// Challenge 01


let time = 0;
let greeting = 'Hola';

// console.log('Range of dayt will be in 24 hrs');
alert('Range of dayt will be in 24 hrs');
time = Number(prompt ('Kindly enter a value'));
if (Number.isInteger(time)) {
    //alert('Your value is a number');
    //alert(`Your value ${time}`);
    //alert(`Your value ${typeof time}`)
    if (time < 0){
        //console.log('Sorry we cannot use a value menor than 0')
        alert('Sorry we cannot use a value menor than 0');
    } else {
        if (time < 12) {
            greeting = "Good morning";
          } else if (time < 20) {
            greeting = "Good afternoon";
          } else if (time >= 20 && time <= 24) {
            greeting = "Good evening";
          } else {
            greeting = "Sorry this value it does not exist";
          }
    }
} else { 
    //console.log('Wrong data, attempt again');
    alert('Wrong data, attempt again');
}

// Do not forget to study 
// Bucles, for while dowhile