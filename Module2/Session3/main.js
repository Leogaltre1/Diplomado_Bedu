//alert("I'm here");
// <script src="main1.js"></script>

function suma(val1, val2){
    //alert('Inside of the function');
    //alert(`Sum: ${val1+val2}`);

    console.log('Inside of the function');
    console.log(`Sum: ${val1+val2}`);
}

suma(10,5);

function yearsRetirement(name, year){
    let retirment = 65 - year;
    console.log(`Name: ${name} | Age: ${retirment}`);
    //return retirment, name
}

// alert(`Show details ${yearsRetirement('Pepe',String(47))}`);
console.log(`Show details ${yearsRetirement('Pepe',String(47))}`);